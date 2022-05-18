import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Customer} from "../customers/customers.model";
import {InvoiceFullInfo} from "./invoice-customers.model";


interface InvoiceCreationAttrs {
    workList: object;
}

@Table({tableName: 'invoices'})
export class Invoice extends Model<Invoice, InvoiceCreationAttrs> {

    @ApiProperty({example: '1', description: 'Invoice id(number)'})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    // @ApiProperty({example: 'someaddress@something.com', description: 'Customer email'})
    // @Column({type: DataType.STRING, unique: true, allowNull: false})
    // email: string;

    @ApiProperty({example: '{work1: 45, work2: 79, work3: 367, etc..}', description: 'List of works with prices'})
    @Column({type: DataType.JSON, allowNull: false})
    workList: object

    @BelongsToMany(() => Customer, () => InvoiceFullInfo)
    customers: Customer[];
}
