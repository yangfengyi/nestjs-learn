import { Injectable } from '@nestjs/common';

@Injectable() // 描述这个类可以被注入到其他类中
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
