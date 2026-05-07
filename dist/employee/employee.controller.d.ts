import { EmployeeService } from './employee.service';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { AddEducationDto } from './dto/add-education.dto';
import { AddExperienceDto } from './dto/add-experience.dto';
export declare class EmployeeController {
    private employeeService;
    constructor(employeeService: EmployeeService);
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
            degree: string;
            institute: string;
            year: number;
            employeeId: number;
        }[];
        experiences: {
            role: string;
            id: number;
            employeeId: number;
            company: string;
            years: number;
        }[];
    } & {
        firstName: string;
        middleName: string | null;
        lastName: string;
        email: string;
        phone: string | null;
        dob: Date | null;
        currentAddress: string | null;
        permanentAddress: string | null;
        departmentId: number | null;
        locationId: number | null;
        id: number;
        password: string;
        jobTitle: string | null;
        salary: number | null;
        joiningDate: Date | null;
        employmentType: string | null;
        employmentStatus: string;
        roleId: number | null;
        teamId: number | null;
        createdAt: Date;
        isDeleted: boolean;
    })[]>;
    findOne(id: string): Promise<({
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
            degree: string;
            institute: string;
            year: number;
            employeeId: number;
        }[];
        experiences: {
            role: string;
            id: number;
            employeeId: number;
            company: string;
            years: number;
        }[];
    } & {
        firstName: string;
        middleName: string | null;
        lastName: string;
        email: string;
        phone: string | null;
        dob: Date | null;
        currentAddress: string | null;
        permanentAddress: string | null;
        departmentId: number | null;
        locationId: number | null;
        id: number;
        password: string;
        jobTitle: string | null;
        salary: number | null;
        joiningDate: Date | null;
        employmentType: string | null;
        employmentStatus: string;
        roleId: number | null;
        teamId: number | null;
        createdAt: Date;
        isDeleted: boolean;
    }) | null>;
    update(id: string, body: UpdateEmployeeDto): import(".prisma/client").Prisma.Prisma__EmployeeClient<{
        firstName: string;
        middleName: string | null;
        lastName: string;
        email: string;
        phone: string | null;
        dob: Date | null;
        currentAddress: string | null;
        permanentAddress: string | null;
        departmentId: number | null;
        locationId: number | null;
        id: number;
        password: string;
        jobTitle: string | null;
        salary: number | null;
        joiningDate: Date | null;
        employmentType: string | null;
        employmentStatus: string;
        roleId: number | null;
        teamId: number | null;
        createdAt: Date;
        isDeleted: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: string): import(".prisma/client").Prisma.Prisma__EmployeeClient<{
        firstName: string;
        middleName: string | null;
        lastName: string;
        email: string;
        phone: string | null;
        dob: Date | null;
        currentAddress: string | null;
        permanentAddress: string | null;
        departmentId: number | null;
        locationId: number | null;
        id: number;
        password: string;
        jobTitle: string | null;
        salary: number | null;
        joiningDate: Date | null;
        employmentType: string | null;
        employmentStatus: string;
        roleId: number | null;
        teamId: number | null;
        createdAt: Date;
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
        role: string;
        id: number;
        employeeId: number;
        company: string;
        years: number;
    }>;
    getExperience(id: string): Promise<{
        role: string;
        id: number;
        employeeId: number;
        company: string;
        years: number;
    }[]>;
    deleteExperience(id: string): Promise<{
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
