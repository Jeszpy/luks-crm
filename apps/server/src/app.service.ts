import { Injectable } from '@nestjs/common';
import { DatabaseService } from './modules/database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: DatabaseService) {}
  async getHello() {
    const newUser = await this.prisma.user.create({
      data: { login: 'new login', password: '123' },
    });
    console.log(newUser);
    return newUser.login;
  }
}
