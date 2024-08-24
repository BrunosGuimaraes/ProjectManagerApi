/* eslint-disable prettier/prettier */
import { Project } from 'src/projects/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

/* eslint-disable prettier/prettier */
export enum TaskStatus {
    pending = 'pending',
    completed = 'completed'
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({name: 'name', nullable:false})
    name: string;

    @Column({name: 'status', default: TaskStatus.pending, nullable:false})
    status: TaskStatus;

    @ManyToOne(()=> Project, (project) => project.tasks, {
        nullable:false
    })
    project: Project;
}

