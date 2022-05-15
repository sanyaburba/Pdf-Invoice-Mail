import {Column, DataType, Model, Table} from "sequelize-typescript";

interface CustomerCreationAttrs {
    email: string;
    fullName: string;
}

@Table({tableName: 'customers'})
export class Customer extends Model<Customer, CustomerCreationAttrs > {
    @Column({type: DataType.STRING, unique: true, primaryKey: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    fullName: string;

    @Column({type: DataType.STRING, allowNull: false})
    companyName: string
}
