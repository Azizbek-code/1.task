import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('callback')
  receivePart2(@Body() body: any) {
    console.log('part2', body);
    return this.appService.savePart2(body.part2);
  }

  
  @Get()
  startProcess() {
    return this.appService.start();
  }
}
