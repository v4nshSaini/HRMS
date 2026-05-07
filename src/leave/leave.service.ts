import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LeaveService {
  constructor(private prisma: PrismaService) { }

  // ✅ Apply leave
  applyLeave(employeeId: number, data: any) {
    return this.prisma.leave.create({
      data: {
        employeeId,
        leaveType: data.leaveType,
        startDate: data.startDate,
        endDate: data.endDate,
        // ❌ remove reason
      },
    });
  }

  // ✅ Employee → own leaves
  getMyLeaves(employeeId: number) {
    return this.prisma.leave.findMany({
      where: { employeeId },
    });
  }

  // ✅ HR/Admin → all leaves
  getAllLeaves() {
    return this.prisma.leave.findMany({
      include: {
        employee: true,
      },
    });
  }

  // ✅ Approve
  approveLeave(id: number) {
    return this.prisma.leave.update({
      where: { id },
      data: { status: 'APPROVED' },
    });
  }

  // ✅ Reject
  rejectLeave(id: number) {
    return this.prisma.leave.update({
      where: { id },
      data: { status: 'REJECTED' },
    });
  }
}