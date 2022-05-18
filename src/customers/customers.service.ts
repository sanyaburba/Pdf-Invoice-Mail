import { Injectable } from '@nestjs/common';
import {Customer} from "./customers.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateCustomerDto} from "./dto/create-customer.dto";

@Injectable()
export class CustomersService {

    constructor(@InjectModel(Customer) private customerRepository: typeof Customer) {}

    async createCustomer(dto: CreateCustomerDto) {
         return await this.customerRepository.create(dto);
    }

    async getAllCustomers() {
        return await this.customerRepository.findAll();
    }

    async getCustomerByEmail(email:string) {
        return await this.customerRepository.findOne({where: {email}, include: {all: true}});

    }
}
