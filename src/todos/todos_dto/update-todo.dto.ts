import { IsOptional, IsNotEmpty, IsBoolean } from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsBoolean()
  done?: boolean;
}
