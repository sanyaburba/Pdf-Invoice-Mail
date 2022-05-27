import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Customer} from "./customers.model";
import {Invoice} from "../invoice/invoice.model";
import {InvoiceFullInfo} from "../invoice/invoice-customers.model";

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [
      SequelizeModule.forFeature([Customer, Invoice, InvoiceFullInfo])
  ],
    exports: [CustomersService]
})
export class CustomersModule {}
