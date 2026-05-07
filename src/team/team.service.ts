import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const team = await this.prisma.team.create({
      data: {
        name: data.name,
        departmentId: data.departmentId,
      },
    });

    return {
      id: team.id,
      name: team.name,
      departmentId: team.departmentId,
      status: 'success',
      message: 'Team created successfully',
    };
  }

  async getAll() {
    return this.prisma.team.findMany();
  }

  async assignEmployee(teamId: number, employeeId: number) {
    const updated = await this.prisma.employee.update({
      where: { id: employeeId },
      data: { teamId },
    });

    return {
      employeeId: updated.id,
      teamId: teamId,
      status: 'success',
      message: 'Employee assigned to team',
    };
  }
}