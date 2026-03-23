import {
  Controller,
  Get,
  Param,
  Put,
  Delete,
  Body,
  UseGuards,
  Post,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { AuthGuard } from '@nestjs/passport';

import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { AddEducationDto } from './dto/add-education.dto';
import { AddExperienceDto } from './dto/add-experience.dto';
import { RolesGuard } from '../auth/roles.guard';

@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) { }

  // ================= BASIC =================

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(Number(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(Number(id), body);
  }

  @UseGuards(AuthGuard('jwt'))
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.employeeService.delete(Number(id));
  }

  // ================= EDUCATION =================

  @UseGuards(AuthGuard('jwt'))
  @Post(':id/education')
  addEducation(
    @Param('id') id: string,
    @Body() body: AddEducationDto,
  ) {
    return this.employeeService.addEducation(Number(id), body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id/education')
  getEducation(@Param('id') id: string) {
    return this.employeeService.getEducation(Number(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('education/:eduId')
  deleteEducation(@Param('eduId') id: string) {
    return this.employeeService.deleteEducation(Number(id));
  }

  // ================= EXPERIENCE =================

  @UseGuards(AuthGuard('jwt'))
  @Post(':id/experience')
  addExperience(
    @Param('id') id: string,
    @Body() body: AddExperienceDto,
  ) {
    return this.employeeService.addExperience(Number(id), body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id/experience')
  getExperience(@Param('id') id: string) {
    return this.employeeService.getExperience(Number(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('experience/:expId')
  deleteExperience(@Param('expId') id: string) {
    return this.employeeService.deleteExperience(Number(id));
  }

  // ================= LOCATION =================

  @UseGuards(AuthGuard('jwt'))
  @Get('locations/all')
  getLocations() {
    return this.employeeService.getLocations();
  }
}