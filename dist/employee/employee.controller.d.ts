import { EmployeeService } from './employee.service';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { AddEducationDto } from './dto/add-education.dto';
import { AddExperienceDto } from './dto/add-experience.dto';
export declare class EmployeeController {
    private employeeService;
    constructor(employeeService: EmployeeService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__EmployeeClient<({
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
    update(id: string, body: UpdateEmployeeDto): import(".prisma/client").Prisma.Prisma__EmployeeClient<{
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
    delete(id: string): import(".prisma/client").Prisma.Prisma__EmployeeClient<{
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
    addEducation(id: string, body: AddEducationDto): Promise<{
        id: number;
        degree: string;
        institute: string;
        year: number;
        employeeId: number;
    }>;
    getEducation(id: string): Promise<{
        id: number;
        degree: string;
        institute: string;
        year: number;
        employeeId: number;
    }[]>;
    deleteEducation(id: string): Promise<{
        id: number;
        degree: string;
        institute: string;
        year: number;
        employeeId: number;
    }>;
    addExperience(id: string, body: AddExperienceDto): Promise<{
        id: number;
        role: string;
        employeeId: number;
        company: string;
        years: number;
    }>;
    getExperience(id: string): Promise<{
        id: number;
        role: string;
        employeeId: number;
        company: string;
        years: number;
    }[]>;
    deleteExperience(id: string): Promise<{
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
