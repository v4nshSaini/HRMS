"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EmployeeService = class EmployeeService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
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
    async findOne(id) {
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
    update(id, data) {
        return this.prisma.employee.update({
            where: { id },
            data,
        });
    }
    delete(id) {
        return this.prisma.employee.update({
            where: { id },
            data: { isDeleted: true },
        });
    }
    async addEducation(employeeId, data) {
        return this.prisma.education.create({
            data: {
                employeeId,
                degree: data.degree,
                institute: data.institute,
                year: data.year,
            },
        });
    }
    async getEducation(employeeId) {
        return this.prisma.education.findMany({
            where: { employeeId },
        });
    }
    async deleteEducation(id) {
        return this.prisma.education.delete({
            where: { id },
        });
    }
    async addExperience(employeeId, data) {
        return this.prisma.experience.create({
            data: {
                employeeId,
                company: data.company,
                role: data.role,
                years: data.years,
            },
        });
    }
    async getExperience(employeeId) {
        return this.prisma.experience.findMany({
            where: { employeeId },
        });
    }
    async deleteExperience(id) {
        return this.prisma.experience.delete({
            where: { id },
        });
    }
    async getLocations() {
        return this.prisma.location.findMany();
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map