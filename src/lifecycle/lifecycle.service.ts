import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LifecycleService {
  constructor(private prisma: PrismaService) {}

  async create(employeeId: number, data: any) {
    const record = await this.prisma.employeeLifecycle.create({
      data: {
        employeeId,
        type: data.type,
        note: data.note,
        effectiveDate: new Date(data.effectiveDate),
      },
    });

    return {
      id: record.id,
      employeeId: record.employeeId,
      type: record.type,
      effectiveDate: record.effectiveDate.toDateString(),
      status: 'success',
      message: `${record.type} recorded successfully`,
    };
  }

  async getAll(employeeId: number) {
    return this.prisma.employeeLifecycle.findMany({
      where: { employeeId },
    });
  }
}