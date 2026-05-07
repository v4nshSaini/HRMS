"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AttendanceService = class AttendanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    formatTime(date) {
        return date.toTimeString().split(' ')[0];
    }
    formatDate(date) {
        return date.toISOString().split('T')[0];
    }
    calculateDuration(checkIn, checkOut) {
        const diff = checkOut.getTime() - checkIn.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}h ${minutes}m`;
    }
    async checkIn(employeeId) {
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
            throw new common_1.BadRequestException({
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
    async checkOut(attendanceId) {
        const attendance = await this.prisma.attendance.findUnique({
            where: { id: attendanceId },
        });
        if (!attendance) {
            throw new common_1.NotFoundException({
                status: 'error',
                code: 'INVALID_RECORD',
                message: 'Attendance record not found',
            });
        }
        if (attendance.checkOut) {
            throw new common_1.BadRequestException({
                status: 'error',
                message: 'Already checked out',
            });
        }
        if (!attendance.checkIn) {
            throw new common_1.BadRequestException('Check-in time missing');
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
    async getEmployeeAttendance(employeeId) {
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
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AttendanceService);
//# sourceMappingURL=attendance.service.js.map