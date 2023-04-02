import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  last_name: string;
  @IsString()
  first_name: string;
  @IsString()
  ssd: string;
  @IsString()
  dob: string;
  @IsString()
  address: string;
  @IsString()
  city: string;
  @IsNumber()
  zip: number;
  @IsNumber()
  phone: number;
  @IsNumber()
  active: number;
}

export class UpdateDriverDto {
  @IsString()
  last_name: string;
  @IsString()
  first_name: string;
  @IsString()
  ssd: string;
  @IsString()
  dob: string;
  @IsString()
  address: string;
  @IsString()
  city: string;
  @IsNumber()
  zip: number;
  @IsNumber()
  phone: number;
  @IsNumber()
  active: number;
}

export class ContentUpdateDto{
  @IsNumber()
  IdDriver: number;
  @ValidateNested()
  @Type(() => UpdateDriverDto)
  DataDriver: UpdateDriverDto;
}

export class GetDriverDto{
  id:number;
}

export class DeleteDriverDto {
  id: number;
}
