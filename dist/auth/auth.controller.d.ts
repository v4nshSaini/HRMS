import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        message: string;
        employee: {
            role: {
                id: number;
                name: string;
            } | null;
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
        };
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        employee: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            role: string | undefined;
        };
    }>;
}
