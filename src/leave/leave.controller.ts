import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { LeaveService } from './leave.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { ApplyLeaveDto } from './dto/apply-leave.dto';

@Controller('leave')
export class LeaveController {
  constructor(private leaveService: LeaveService) {}

  // ✅ Employee applies leave
  @UseGuards(AuthGuard('jwt'))
  @Post(':employeeId')
  applyLeave(
    @Param('employeeId') id: string,
    @Body() body: ApplyLeaveDto,
  ) {
    return this.leaveService.applyLeave(Number(id), body);
  }

  // ✅ Employee view own leaves
  @UseGuards(AuthGuard('jwt'))
  @Get('my/:employeeId')
  getMyLeaves(@Param('employeeId') id: string) {
    return this.leaveService.getMyLeaves(Number(id));
  }

  // 🔒 HR/Admin → all leaves
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get()
  getAllLeaves() {
    return this.leaveService.getAllLeaves();
  }

  // 🔒 Approve
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('approve/:id')
  approve(@Param('id') id: string) {
    return this.leaveService.approveLeave(Number(id));
  }

  // 🔒 Reject
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('reject/:id')
  reject(@Param('id') id: string) {
    return this.leaveService.rejectLeave(Number(id));
  }
}