/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PageService } from 'src/modules/pagination/page/page.service';
import { DEFAULT_PAGE_SIZE, FilterDto } from 'src/modules/pagination/dto/filter.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository : Repository<Project>,
    private readonly pageService : PageService
){}

  create(createProjectDto: CreateProjectDto) {
    return this.projectRepository.save(createProjectDto);
  }

  findAll() {
    return this.projectRepository.find()
  }
  findAllPaginated(filter?: FilterDto) {
      if (!filter) {
        return this.findAll();
      }

      return this.pageService.paginate(this.projectRepository, {
        page: filter.page,
        pageSize: DEFAULT_PAGE_SIZE,
      });
    }
  
  findOne(id: number) {
    return this.projectRepository.findOne({
      where: {id}, 
      relations:{
        tasks: true
    }});
  }

  async findOneByOrFail(id: number){
    return this.projectRepository.findOneByOrFail({id})
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectRepository.update(id, updateProjectDto);
  }

  remove(id: number) {
    return this.projectRepository.delete(id);
  }
}
