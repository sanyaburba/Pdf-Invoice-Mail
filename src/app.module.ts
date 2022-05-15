import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { CustomersModule } from './customers/customers.module';
import {ConfigModule} from "@nestjs/config";
import {Customer} from "./customers/customers.model";

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
            models: [Customer],
            autoLoadModels: true
        }),
        CustomersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
