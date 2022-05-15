import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateCustomerDto} from "./dto/create-customer.dto";
import {CustomersService} from "./customers.service";

@Controller('customers')
export class CustomersController {

    constructor(private customersService: CustomersService) {
    }

    @Post()
    create(@Body() customerDto: CreateCustomerDto) {
        return this.customersService.createCustomer(customerDto);
    }

    @Get()
    getAll() {
        return this.customersService.getAllCustomers()
    }
}
