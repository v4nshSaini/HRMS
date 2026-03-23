import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(data: RegisterDto): Promise<{
        message: string;
        employee: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
        };
    }>;
    login(data: LoginDto): Promise<{
        message: string;
        access_token: string;
        employee: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
        };
    }>;
}
