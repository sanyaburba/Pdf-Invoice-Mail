import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { CustomersModule } from './customers/customers.module';
import {ConfigModule} from "@nestjs/config";
import {Customer} from "./customers/customers.model";
import { InvoiceModule } from './invoice/invoice.module';
import {Invoice} from "./invoice/invoice.model";
import {InvoiceFullInfo} from "./invoice/invoice-customers.model";
import {BullModule} from "@nestjs/bull";
import { MailQueueModule } from './mail-queue/mail-queue.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Customer, Invoice, InvoiceFullInfo],
            autoLoadModels: true
        }),
        BullModule.forRoot({
            redis: {
                host: 'localhost',
                port: 6379,
            },
        }),
        BullModule.registerQueue({
            name: 'message-queue',
        }),
        CustomersModule,
        InvoiceModule,
        MailQueueModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
