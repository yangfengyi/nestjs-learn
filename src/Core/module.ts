import { Module } from '@nestjs/common';
import { CoreService } from './service';

// core 只对外提供service
@Module({
  imports: [],
  controllers: [],
  // 提供给controller注入的服务
  providers: [CoreService],
  // 对外暴露的service, 一个service只能在当前module当中被使用，如果要对外暴露需要在exports当中注册
  exports: [CoreService],
}) // 一个模块的主入口文件
export class CoreModule {}
