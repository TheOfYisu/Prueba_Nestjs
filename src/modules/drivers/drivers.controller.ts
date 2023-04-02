import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put
} from '@nestjs/common';
import {
  ContentUpdateDto,
  CreateDriverDto,
  DeleteDriverDto,
  GetDriverDto,
} from 'src/database/Dtos/driver.dto';
import { DriversService } from './drivers.service';

@Controller('drivers')
export class DriversController {
  constructor(private DriversService: DriversService) {}

  @Get('all')
  GetDriversAll() {
    const data = this.DriversService.GetDriversAll();
    return data;
  }

  @Get('id')
  GetDriver(@Body() iddriver: GetDriverDto) {
    const data = this.DriversService.GetDriver(iddriver.id);
    return data;
  }

  @Post('add')
  async CreteDriver(@Body() dto: CreateDriverDto) {
    console.log(dto)
    const data = await this.DriversService.CreateDriver(dto);
    return data;
  }

  @Delete('delete')
  async DeleteDriver(@Body() dto: DeleteDriverDto) {
    const data = await this.DriversService.DeleteDriver(dto.id);
    return data;
  }

  @Put('edit')
  async UpdateDriver(@Body() dto: ContentUpdateDto) {
    const data = await this.DriversService.UpdateDriver(
      dto.IdDriver,
      dto.DataDriver,
    );
    return data;
  }
}
