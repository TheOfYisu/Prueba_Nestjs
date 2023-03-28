import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { DriversService } from './drivers.service';

@Controller('drivers')
export class DriversController {
    constructor(
        private DriversService:DriversService
    ){

    }
    @Get()
    getMany(){
        const data = this.DriversService.getMany();
        return  { data }
    }
}