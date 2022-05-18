import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import {InvoiceService} from "./invoice.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Invoice} from "./invoice.model";
import {Customer} from "../customers/customers.model";
import {InvoiceFullInfo} from "./invoice-customers.model";

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService],
  imports: [
    SequelizeModule.forFeature([Invoice, Customer, InvoiceFullInfo])
  ]
})
export class InvoiceModule {}
