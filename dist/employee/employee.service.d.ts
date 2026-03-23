import { PrismaService } from '../prisma/prisma.service';
export declare class EmployeeService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        location: {
            id: number;
            name: string;
        } | null;
        educations: {
            id: number;
            degree: string;
            institute: string;
            year: number;
            employeeId: number;
        }[];
        experiences: {
            id: number;
            role: string;
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
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__EmployeeClient<({
        location: {
            id: number;
            name: string;
        } | null;
        educations: {
            id: number;
            degree: string;
            institute: string;
            year: number;
            employeeId: number;
        }[];
        experiences: {
            id: number;
            role: string;
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
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: any): import(".prisma/client").Prisma.Prisma__EmployeeClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__EmployeeClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    addEducation(employeeId: number, data: any): Promise<{
        id: number;
        degree: string;
        institute: string;
        year: number;
        employeeId: number;
    }>;
    getEducation(employeeId: number): Promise<{
        id: number;
        degree: string;
        institute: string;
        year: number;
        employeeId: number;
    }[]>;
    deleteEducation(id: number): Promise<{
        id: number;
        degree: string;
        institute: string;
        year: number;
        employeeId: number;
    }>;
    addExperience(employeeId: number, data: any): Promise<{
        id: number;
        role: string;
        employeeId: number;
        company: string;
        years: number;
    }>;
    getExperience(employeeId: number): Promise<{
        id: number;
        role: string;
        employeeId: number;
        company: string;
        years: number;
    }[]>;
    deleteExperience(id: number): Promise<{
        id: number;
        role: string;
        employeeId: number;
        company: string;
        years: number;
    }>;
    getLocations(): Promise<{
        id: number;
        name: string;
    }[]>;
}
