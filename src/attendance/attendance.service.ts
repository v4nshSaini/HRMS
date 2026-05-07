import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  formatTime(date: Date) {
    return date.toTimeString().split(' ')[0];
  }

  formatDate(date: Date) {
    return date.toISOString().split('T')[0];
  }

  calculateDuration(checkIn: Date, checkOut: Date) {
    const diff = checkOut.getTime() - checkIn.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  }

  // ✅ CHECK-IN
  async checkIn(employeeId: number) {
    const now = new Date();

    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

    const existing = await this.prisma.attendance.findFirst({
      where: {
        employeeId,
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    if (existing && !existing.checkOut) {
      throw new BadRequestException({
        status: 'error',
        code: 'ALREADY_CHECKED_IN',
        message: 'Employee already checked in today',
      });
    }

    const attendance = await this.prisma.attendance.create({
      data: {
        employeeId,
        date: now,
        checkIn: now,
      },
    });

    return {
      id: attendance.id,
      employeeId: attendance.employeeId,
      date: this.formatDate(now),
      checkIn: this.formatTime(now),
      status: 'success',
      message: 'Checked in successfully',
    };
  }

  // ✅ CHECK-OUT
  async checkOut(attendanceId: number) {
    const attendance = await this.prisma.attendance.findUnique({
      where: { id: attendanceId },
    });

    if (!attendance) {
      throw new NotFoundException({
        status: 'error',
        code: 'INVALID_RECORD',
        message: 'Attendance record not found',
      });
    }

    if (attendance.checkOut) {
      throw new BadRequestException({
        status: 'error',
        message: 'Already checked out',
      });
    }

    if (!attendance.checkIn) {
      throw new BadRequestException('Check-in time missing');
    }

    const now = new Date();

    const updated = await this.prisma.attendance.update({
      where: { id: attendanceId },
      data: {
        checkOut: now,
      },
    });

    return {
      id: updated.id,
      employeeId: updated.employeeId,
      date: this.formatDate(updated.date),
      checkIn: this.formatTime(attendance.checkIn),
      checkOut: this.formatTime(now),
      duration: this.calculateDuration(attendance.checkIn, now),
      status: 'success',
      message: 'Checked out successfully',
    };
  }

  async getEmployeeAttendance(employeeId: number) {
    return this.prisma.attendance.findMany({
      where: { employeeId },
      orderBy: { date: 'desc' },
    });
  }

  async getAllAttendance() {
    return this.prisma.attendance.findMany({
      include: { employee: true },
      orderBy: { date: 'desc' },
    });
  }
}