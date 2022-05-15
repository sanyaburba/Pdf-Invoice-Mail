import { Injectable } from '@nestjs/common';
import {Customer} from "./customers.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateCustomerDto} from "./dto/create-customer.dto";

@Injectable()
export class CustomersService {

    constructor(@InjectModel(Customer) private cutomerRepository: typeof Customer) {

    }

    async createCustomer(dto: CreateCustomerDto) {
        const customer = await this.cutomerRepository.create(dto);
        return customer
    }

    async getAllCustomers() {
        const customers = await this.cutomerRepository.findAll();
        return customers
    }
}
