import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('schedules')
export class SchedulesEntity {
    @PrimaryGeneratedColumn()
    id: number;
}