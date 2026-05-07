import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { DocumentService } from './document.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('documents')
export class DocumentController {
  constructor(private service: DocumentService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post(':employeeId')
  upload(@Param('employeeId') id: string, @Body() body: any) {
    return this.service.upload(Number(id), body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':employeeId')
  getAll(@Param('employeeId') id: string) {
    return this.service.getAll(Number(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(Number(id));
  }
}