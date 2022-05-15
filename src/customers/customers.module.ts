import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Customer} from "./customers.model";

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [
      SequelizeModule.forFeature([Customer])
  ]
})
export class CustomersModule {}
