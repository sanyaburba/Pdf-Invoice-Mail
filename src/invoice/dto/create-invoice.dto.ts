import {ApiProperty} from "@nestjs/swagger";

export class CreateInvoiceDto {
    @ApiProperty({example: 'someaddress@something.com', description: 'Customer email'})
    readonly email: string;
    @ApiProperty({example: '{work1: 45, work2: 79, work3: 367, etc..}', description: 'List of works with prices'})
    readonly workList: object
}
