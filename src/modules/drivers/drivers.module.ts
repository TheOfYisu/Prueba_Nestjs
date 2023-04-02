import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversEntity } from 'src/database/entitys/drivers.entity';
import {
  CreateDriverDto,
  DeleteDriverDto,
  UpdateDriverDto,
} from 'src/database/Dtos/driver.dto';

@Module({
  imports: [TypeOrmModule.forFeature([DriversEntity, CreateDriverDto])],
  providers: [
    DriversService,
    CreateDriverDto,
    DeleteDriverDto,
    UpdateDriverDto,
  ],
  controllers: [DriversController],
})
export class DriversModule {}
