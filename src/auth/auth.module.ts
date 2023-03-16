import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

// 登录逻辑
@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
