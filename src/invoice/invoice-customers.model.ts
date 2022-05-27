import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Invoice} from "./invoice.model";
import {Customer} from "../customers/customers.model";

@Table({tableName: 'invoice_full_info', createdAt: false, updatedAt: false})
export class InvoiceFullInfo extends Model<InvoiceFullInfo> {

    @Column({type: DataType.INTEGER, unique: true,  autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Invoice)
    @Column({type: DataType.INTEGER})
    invoiceId: number;

    @ForeignKey(() => Customer)
    @Column({type: DataType.INTEGER})
    customerId: number;


    @ForeignKey(() => Invoice)
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    customerEmail: string;

    @ForeignKey(() => Customer)
    @Column({type: DataType.STRING})
    customerFullName: string;

    @ForeignKey(() => Customer)
    @Column({type: DataType.STRING})
    customerCompanyName: string
}

