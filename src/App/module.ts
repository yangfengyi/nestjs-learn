import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import { UserModule } from '../User/module';
import { CoreModule } from 'src/Core/module';
import { CoreService } from 'src/Core/service';

@Module({
  // imports 用来引入其他模块，表明UserModule是AppModule的子模块
  imports: [UserModule, CoreModule],
  // 对外暴露的项目
  controllers: [AppController],
  // 提供给controller注入的服务
  providers: [AppService, CoreService],
}) // 一个模块的主入口文件
export class AppModule {}
