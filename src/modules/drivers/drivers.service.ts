import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDriverDto, UpdateDriverDto } from 'src/database/Dtos/driver.dto';
import { DriversEntity } from 'src/database/entitys/drivers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(DriversEntity)
    private driverdb: Repository<DriversEntity>,
  ) {}

  GetDriversAll() {
    return this.driverdb.find();
  }

  GetDriver(id: number) {
    const dataDriver = this.driverdb.findOne({ where: { id } });
    if (!dataDriver) {
      return { resonse: 'Driver not exist' };
    } else {
      return dataDriver;
    }
  }

  async CreateDriver(DataDriver: CreateDriverDto) {
    const driverexist = await this.driverdb.findOneBy({ ssd: DataDriver.ssd });
    var texreturn;
    console.log(driverexist)
    if (driverexist) {
      console.log("gunciona")
      texreturn = 'Driver Exist';
    } else {
      const newDriver = this.driverdb.create(DataDriver);
      this.driverdb.save(newDriver);
      texreturn = 'Driver saved successfully';
    }
    const datareturn = { respose: texreturn };
    return datareturn;
  }

  async UpdateDriver(IdDriver: number, DataDriver: UpdateDriverDto) {
    const driverexist = await this.driverdb.findOneBy({ id: IdDriver });
    var texreturn;
    if (!driverexist) {
      texreturn = 'Driver Not Exist';
    } else {
      this.driverdb.update(IdDriver, DataDriver);
      texreturn = 'Driver update successfully';
    }
    const datareturn = { respose: texreturn };
    return datareturn;
  }

  async DeleteDriver(IdDriver: number) {
    const iddriver = await this.driverdb.findOneBy({ id: IdDriver });
    var texreturn;
    if (!iddriver) {
      texreturn = 'Driver not xist';
    } else {
      this.driverdb.remove(iddriver);
      texreturn = 'Driver delete successfully';
    }
    const datareturn = { respose: texreturn };
    return datareturn;
  }
}
