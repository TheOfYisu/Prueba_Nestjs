import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config/database.config';
import { DriversModule } from './modules/drivers/drivers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),
    DriversModule
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {}
