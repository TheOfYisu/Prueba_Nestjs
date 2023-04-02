import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DriversEntity } from 'src/database/entitys/drivers.entity';
import { RoutesEntity } from 'src/database/entitys/routes.entity';
import { SchedulesEntity } from 'src/database/entitys/schedules.entity';
import { UsersEntity } from 'src/database/entitys/users.entity';
import { VehiclesEntity } from 'src/database/entitys/vehicles.entity';

export const DatabaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'prueba2',
  entities:[
    DriversEntity,
    RoutesEntity,
    SchedulesEntity,
    UsersEntity,
    VehiclesEntity
  ],
  synchronize:true
};
