import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { LifecycleService } from './lifecycle.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('lifecycle')
export class LifecycleController {
  constructor(private service: LifecycleService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post(':employeeId')
  create(@Param('employeeId') id: string, @Body() body: any) {
    return this.service.create(Number(id), body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':employeeId')
  getAll(@Param('employeeId') id: string) {
    return this.service.getAll(Number(id));
  }
}