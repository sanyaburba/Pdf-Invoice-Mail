import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface CustomerCreationAttrs {
    email: string;
    fullName: string;
}

@Table({tableName: 'customers'})
export class Customer extends Model<Customer, CustomerCreationAttrs > {

    @ApiProperty({example: 'someaddress@something.com', description: 'Customer email'})
    @Column({type: DataType.STRING, unique: true, primaryKey: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'John Cena', description: 'Customer name'})
    @Column({type: DataType.STRING, allowNull: false})
    fullName: string;

    @ApiProperty({example: 'Google', description: 'Customer company name'})
    @Column({type: DataType.STRING, allowNull: false})
    companyName: string
}
