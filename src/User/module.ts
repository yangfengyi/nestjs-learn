import { Module } from '@nestjs/common';
import { UserController } from './controller';
import { UserService } from './service';

@Module({
  imports: [],
  // 对外暴露的项目
  controllers: [UserController],
  // 提供给controller注入的服务
  providers: [UserService],
}) // 一个模块的主入口文件
export class UserModule {}
