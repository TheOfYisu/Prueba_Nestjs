import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar'
    })
    user: string

    @Column({
        type: 'varchar'
    })
    password: string

    @Column({
        type: 'varchar'
    })
    username: string
}