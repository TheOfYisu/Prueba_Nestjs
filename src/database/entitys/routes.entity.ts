import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('routes')
export class RoutesEntity {
    @PrimaryGeneratedColumn()
    id: number;
}