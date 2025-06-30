import { Controller, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './todos_dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post(':userId/todos')
  create(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() dto: CreateTodoDto,
  ) {
    return this.todosService.createForUser(userId, dto);
  }
}
