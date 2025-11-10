import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/hello')
  getHelloJson() {
    return { message: 'code change test2!' };
  }

  @Get('health')
  getHealth() {
    return { status: 'ok' };
  }
}
