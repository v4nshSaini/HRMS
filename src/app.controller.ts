import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return {
      status: 'ok',
      message: 'HRMS backend is running 🚀',
      timestamp: new Date(),
    };
  }
}