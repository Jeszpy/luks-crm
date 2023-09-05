import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DatabaseService } from '../database/database.service';
import { UsersPagination } from '../../helpers/pagination/users.pagination';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: DatabaseService) {}
  async createUser(dto: CreateUserDto) {
    return this.prisma.user.create({ data: dto });
  }

  async findAllUsers(dto: UsersPagination) {
    return this.prisma.user.findMany({ skip: dto.skip(), take: dto.pageSize });
  }
}
