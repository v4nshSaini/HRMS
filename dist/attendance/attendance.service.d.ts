import { PrismaService } from '../prisma/prisma.service';
export declare class AttendanceService {
    private prisma;
    constructor(prisma: PrismaService);
    checkIn(employeeId: number): Promise<{
        id: number;
        employeeId: number;
        date: Date;
        checkIn: Date | null;
        checkOut: Date | null;
    }>;
    checkOut(attendanceId: number): Promise<{
        id: number;
        employeeId: number;
        date: Date;
        checkIn: Date | null;
        checkOut: Date | null;
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
            phone: string | null;
            dob: Date | null;
            currentAddress: string | null;
            permanentAddress: string | null;
            maritalStatus: string | null;
            bloodGroup: string | null;
            physicallyHandicapped: boolean;
            nationality: string | null;
            role: string | null;
            password: string;
            departmentId: number | null;
            locationId: number | null;
            createdAt: Date;
            updatedAt: Date | null;
            status: boolean;
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
