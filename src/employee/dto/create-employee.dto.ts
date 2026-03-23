import { IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class CreateEmployeeDto {

  @IsNotEmpty()
  firstName: string;

  @IsOptional()
  middleName?: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  dob?: Date;

  @IsOptional()
  currentAddress?: string;

  @IsOptional()
  permanentAddress?: string;

  @IsOptional()
  maritalStatus?: string;

  @IsOptional()
  bloodGroup?: string;

  @IsOptional()
  physicallyHandicapped?: boolean;

  @IsOptional()
  nationality?: string;

  @IsOptional()
  role?: string;

  @IsOptional()
  departmentId?: number;

  @IsOptional()
  locationId?: number;
}