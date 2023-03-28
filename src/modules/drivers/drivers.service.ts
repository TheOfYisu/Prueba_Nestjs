import { Injectable } from '@nestjs/common';
import { DriversEntity } from 'src/database/entitys/drivers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DriversService {
    constructor(
        private Drivers:Repository<DriversEntity>
    ){

    }
    getMany(){
        return this.Drivers.find();
    }
}
