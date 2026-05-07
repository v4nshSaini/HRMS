import { PrismaService } from '../prisma/prisma.service';
export declare class EmployeeService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        role: {
            id: number;
            name: string;
        } | null;
        location: {
            id: number;
            name: string;
        } | null;
        educations: {
            id: number;
            employeeId: number;
            degree: string;
            institute: string;
            year: number;
        }[];
        experiences: {
            role: string;
            id: number;
            employeeId: number;
            company: string;
            years: number;
        }[];
    } & {
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
    })[]>;
    findOne(id: number): Promise<({
        role: {
            id: number;
            name: string;
        } | null;
        location: {
            id: number;
            name: string;
        } | null;
        educations: {
            id: number;
            employeeId: number;
            degree: string;
            institute: string;
            year: number;
        }[];
        experiences: {
            role: string;
            id: number;
            employeeId: number;
            company: string;
            years: number;
        }[];
    } & {
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
    }) | null>;
    update(id: number, data: any): import(".prisma/client").Prisma.Prisma__EmployeeClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__EmployeeClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    addEducation(employeeId: number, data: any): Promise<{
        id: number;
        employeeId: number;
        degree: string;
        institute: string;
        year: number;
    }>;
    getEducation(employeeId: number): Promise<{
        id: number;
        employeeId: number;
        degree: string;
        institute: string;
        year: number;
    }[]>;
    deleteEducation(id: number): Promise<{
        id: number;
        employeeId: number;
        degree: string;
        institute: string;
        year: number;
    }>;
    addExperience(employeeId: number, data: any): Promise<{
        role: string;
        id: number;
        employeeId: number;
        company: string;
        years: number;
    }>;
    getExperience(employeeId: number): Promise<{
        role: string;
        id: number;
        employeeId: number;
        company: string;
        years: number;
    }[]>;
    deleteExperience(id: number): Promise<{
        role: string;
        id: number;
        employeeId: number;
        company: string;
        years: number;
    }>;
    getLocations(): Promise<{
        id: number;
        name: string;
    }[]>;
}
