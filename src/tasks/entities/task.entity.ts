/* eslint-disable prettier/prettier */
import { Project } from 'src/projects/entities/project.entity';

/* eslint-disable prettier/prettier */
export class Task {
    id: number;
    name: string;
    status: TaskStatus;
    project: Project;
}

enum TaskStatus {
    pending,
    completed
}
