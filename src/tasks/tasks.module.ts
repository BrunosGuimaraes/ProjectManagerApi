/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { ProjectModule } from '../projects/projects.module'; // Verificar nome correto
import { UsersModule } from '../users/users.module';
import { Project } from 'src/projects/entities/project.entity';

@Module({
  imports: [
      ProjectModule,
      UsersModule,
    TypeOrmModule.forFeature([Task, Project, User]), 
  ],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TaskModule {}
