import { AttendanceService } from './attendance.service';
export declare class AttendanceController {
    private attendanceService;
    constructor(attendanceService: AttendanceService);
    checkIn(id: string): Promise<{
        id: number;
        employeeId: number;
        date: string;
        checkIn: string;
        status: string;
        message: string;
    }>;
    checkOut(id: string): Promise<{
        id: number;
        employeeId: number;
        date: string;
        checkIn: string;
        checkOut: string;
        duration: string;
        status: string;
        message: string;
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
