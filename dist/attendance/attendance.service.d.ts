import { PrismaService } from '../prisma/prisma.service';
export declare class AttendanceService {
    private prisma;
    constructor(prisma: PrismaService);
    formatTime(date: Date): string;
    formatDate(date: Date): string;
    calculateDuration(checkIn: Date, checkOut: Date): string;
    checkIn(employeeId: number): Promise<{
        id: number;
        employeeId: number;
        date: string;
        checkIn: string;
        status: string;
        message: string;
    }>;
    checkOut(attendanceId: number): Promise<{
        id: number;
        employeeId: number;
        date: string;
        checkIn: string;
        checkOut: string;
        duration: string;
        status: string;
        message: string;
    }>;
    getEmployeeAttendance(employeeId: number): Promise<{
        id: number;
        employeeId: number;
        date: Date;
        checkIn: Date | null;
        checkOut: Date | null;
    }[]>;
    getAllAttendance(): Promise<({
        employee: {
            id: number;
            firstName: string;
            middleName: string | null;
            lastName: string;
            email: string;
            password: string;
            phone: string | null;
            dob: Date | null;
            currentAddress: string | null;
            permanentAddress: string | null;
            jobTitle: string | null;
            salary: number | null;
            joiningDate: Date | null;
            employmentType: string | null;
            employmentStatus: string;
            departmentId: number | null;
            locationId: number | null;
            roleId: number | null;
            teamId: number | null;
            createdAt: Date;
            isDeleted: boolean;
        };
    } & {
        id: number;
        employeeId: number;
        date: Date;
        checkIn: Date | null;
        checkOut: Date | null;
    })[]>;
}
