import { IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class ApplyLeaveDto {
  @IsNotEmpty()
  leaveType: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsOptional()
  reason?: string;
}