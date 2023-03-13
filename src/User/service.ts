import { Injectable } from '@nestjs/common';

// service 主要的作用是提供数据
@Injectable() // 描述这个类可以被注入到其他类中
export class UserService {
  getUser(): string {
    return 'Hello User!';
  }

  getAllUser(): string {
    return 'Hello All User!';
  }
}
