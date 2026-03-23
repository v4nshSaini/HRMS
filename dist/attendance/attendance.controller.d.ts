import { AttendanceService } from './attendance.service';
export declare class AttendanceController {
    private attendanceService;
    constructor(attendanceService: AttendanceService);
    checkIn(id: string): Promise<{
        id: number;
        employeeId: number;
        date: Date;
        checkIn: Date | null;
        checkOut: Date | null;
    }>;
    checkOut(id: string): Promise<{
        id: number;
        employeeId: number;
        date: Date;
        checkIn: Date | null;
        checkOut: Date | null;
    }>;
    getEmployeeAttendance(id: string): Promise<{
        id: number;
        employeeId: number;
        date: Date;
        checkIn: Date | null;
        checkOut: Date | null;
    }[]>;
    getAll(): Promise<({
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
