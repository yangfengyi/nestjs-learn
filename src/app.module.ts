import { Module } from '@nestjs/common';

@Module({
  // imports 用来引入其他模块，表明UserModule是AppModule的子模块
  imports: [],
  // 对外暴露的项目
  controllers: [],
  // 提供给controller注入的服务
  providers: [],
}) // 一个模块的主入口文件
export class AppModule {}
