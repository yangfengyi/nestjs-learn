import { Controller, Get } from '@nestjs/common';
import { UserService } from './service';

@Controller('user') // 描述这个类可以接受路由的请求
export class UserController {
  // 依赖注入
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }

  @Get('all')
  getAllUser(): string {
    return this.userService.getAllUser();
  }
}
