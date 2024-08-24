/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectsService } from 'src/projects/projects.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository : Repository<Task>,
    private readonly projectService : ProjectsService,
){}

  async create(createProjectDto: CreateTaskDto) {
    const project = await this.projectService.findOneByOrFail(
      createProjectDto.projectId
    );
    return this.taskRepository.save({ ...createProjectDto, project});
  }

  findAll() {
    return this.taskRepository.find()
  }

  findOne(id: number) {
    return this.taskRepository.findOne({where: {id}});
  }

  update(id: number, updateProjectDto: UpdateTaskDto) {
    return this.taskRepository.update(id, updateProjectDto);
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
