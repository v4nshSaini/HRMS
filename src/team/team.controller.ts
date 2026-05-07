import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('teams')
export class TeamController {
  constructor(private service: TeamService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll() {
    return this.service.getAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':teamId/assign/:employeeId')
  assign(
    @Param('teamId') teamId: string,
    @Param('employeeId') employeeId: string,
  ) {
    return this.service.assignEmployee(
      Number(teamId),
      Number(employeeId),
    );
  }
}