import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { AttendanceModule } from './attendance/attendance.module';
import { LeaveModule } from './leave/leave.module';
import { DocumentModule } from './document/document.module';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [PrismaModule, EmployeeModule, AuthModule, AttendanceModule, LeaveModule, DocumentModule,
     LifecycleModule, TeamModule, ],
})
export class AppModule { }