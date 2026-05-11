import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { AttendanceModule } from './attendance/attendance.module';
import { DepartmentModule } from './department/department.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    PrismaModule,
    EmployeeModule,
    AuthModule,
    AttendanceModule,
    DepartmentModule,
  ],
  controllers: [AppController],   
  providers: [AppService],       
})
export class AppModule {}