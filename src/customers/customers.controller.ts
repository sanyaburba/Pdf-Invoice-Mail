import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateCustomerDto} from "./dto/create-customer.dto";
import {CustomersService} from "./customers.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Customer} from "./customers.model";

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {

    constructor(private customersService: CustomersService) {
    }

    @ApiOperation({summary: 'Create Customer'})
    @ApiResponse({status: 200, type: Customer})
    @Post()
    create(@Body() customerDto: CreateCustomerDto) {
        return this.customersService.createCustomer(customerDto);
    }

    @ApiOperation({summary: 'Get all customers'})
    @ApiResponse({status: 200, type: [Customer]})
    @Get()
    getAll() {
        return this.customersService.getAllCustomers()
    }
}
