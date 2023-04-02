import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('drivers')
export class DriversEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:"varchar"    
    })
    last_name: string;

    @Column({
        type:"varchar",
        length: 50    
    })
    first_name: string;

    @Column({
        type:"varchar",
        length: 50  
    })
    ssd: string;

    @Column({
        type:"date"    
    })
    dob: string;

    @Column({
        type:"varchar"    
    })
    address: string;

    @Column({
        type:"varchar"    
    })
    city: string;

    @Column({
        type:"int"    
    })
    zip: number;

    @Column({
        type:"int"    
    })
    phone: number;

    @Column({
        type:"boolean"    
    })
    active: number;

}