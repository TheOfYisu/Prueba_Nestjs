import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('vehicles')
export class VehiclesEntity {
    @PrimaryGeneratedColumn()
    id: number;
}