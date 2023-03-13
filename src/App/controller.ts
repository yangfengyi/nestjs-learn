import { Controller, Get } from '@nestjs/common';
import { CoreService } from 'src/Core/service';
import { AppService } from './service';

@Controller() // 描述这个类可以接受路由的请求
export class AppController {
  // 依赖注入
  constructor(
    private readonly appService: AppService,
    private readonly coreService: CoreService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('core')
  getCore(): string {
    return this.coreService.getCore();
  }
}
