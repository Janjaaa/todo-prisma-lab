import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './todos_dto/create-todo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  createForUser(userId: number, dto: CreateTodoDto) {
    return this.prisma.todo.create({
      data: {
        title: dto.title,
        user: { connect: { id: userId } },
      },
    });
  }
}
