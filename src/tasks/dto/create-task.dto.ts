/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
    @IsNotEmpty({message: "O nome do projeto não pode ser vazio"})
    @IsString({message: "O nome precisa ser string"})
    name: string;

    @IsEnum(TaskStatus, {message: "O valor precisa ser PENDING ou COMPLETED"})
    status: TaskStatus;

    @IsNotEmpty({message: "O projetoId da tarefa não pode ser vazio"})
    @IsNumber()
    projectId: number;
}
