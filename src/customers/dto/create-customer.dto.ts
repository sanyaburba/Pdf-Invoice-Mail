import {ApiProperty} from "@nestjs/swagger";

export class CreateCustomerDto {
    @ApiProperty({example: 'someaddress@something.com', description: 'Customer email'})
    readonly email: string;
    @ApiProperty({example: 'John Cena', description: 'Customer name'})
    readonly fullName: string;
}
