import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async register(data: RegisterDto) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);

      const { role, ...rest } = data;

      // 🔐 Only allow ADMIN creation if no admin exists
      if (role === 'ADMIN') {
        const existingAdmin = await this.prisma.role.findFirst({
          where: { name: 'ADMIN' },
          include: { employees: true },
        });

        if (existingAdmin && existingAdmin.employees.length > 0) {
          throw new ConflictException('Admin already exists');
        }
      }

      let roleData = await this.prisma.role.findUnique({
        where: { name: role || 'EMPLOYEE' },
      });

      if (!roleData) {
        roleData = await this.prisma.role.create({
          data: { name: role || 'EMPLOYEE' },
        });
      }

      const employee = await this.prisma.employee.create({
        data: {
          ...rest,
          password: hashedPassword,
          roleId: roleData.id,
        },
        include: { role: true },
      });

      return {
        message: `${employee.role?.name} created successfully`,
        employee,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }
  async login(data: LoginDto) {
    const employee = await this.prisma.employee.findUnique({
      where: { email: data.email },
      include: { role: true }, // 🔥 IMPORTANT
    });

    if (!employee) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      data.password,
      employee.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: employee.id,
      email: employee.email,
      role: employee.role?.name,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
      employee: {
        id: employee.id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        role: employee.role?.name,
      },
    };
  }
}