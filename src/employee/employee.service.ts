import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) { }

  // ================= BASIC =================
  async findAll() {
    return this.prisma.employee.findMany({
      where: { isDeleted: false },
      include: {
        educations: true,
        experiences: true,
        location: true,
        role: true,
      },
    });
  }


  async findOne(id: number) {
    return this.prisma.employee.findUnique({
      where: { id },
      include: {
        educations: true,
        experiences: true,
        location: true,
        role: true,
      },
    });
  }

  update(id: number, data: any) {
    return this.prisma.employee.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.employee.update({
      where: { id },
      data: { isDeleted: true },
    });
  }

  // ================= EDUCATION =================

  async addEducation(employeeId: number, data: any) {
    return this.prisma.education.create({
      data: {
        employeeId,
        degree: data.degree,
        institute: data.institute,
        year: data.year,
      },
    });
  }

  async getEducation(employeeId: number) {
    return this.prisma.education.findMany({
      where: { employeeId },
    });
  }

  async deleteEducation(id: number) {
    return this.prisma.education.delete({
      where: { id },
    });
  }

  // ================= EXPERIENCE =================

  async addExperience(employeeId: number, data: any) {
    return this.prisma.experience.create({
      data: {
        employeeId,
        company: data.company,
        role: data.role,
        years: data.years,
      },
    });
  }

  async getExperience(employeeId: number) {
    return this.prisma.experience.findMany({
      where: { employeeId },
    });
  }

  async deleteExperience(id: number) {
    return this.prisma.experience.delete({
      where: { id },
    });
  }

  // ================= LOCATION =================

  async getLocations() {
    return this.prisma.location.findMany();
  }
}