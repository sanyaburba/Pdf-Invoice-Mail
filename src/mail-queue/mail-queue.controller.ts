import {Controller, Get, Post} from '@nestjs/common';
import {InjectQueue} from "@nestjs/bull";
import {Queue} from "bull";
import {CreateInvoiceDto} from "../invoice/dto/create-invoice.dto";
import {InvoiceService} from "../invoice/invoice.service";

@Controller('mail-queue')
export class MailQueueController {
    constructor(@InjectQueue('mail-queue') private readonly mailQueue: Queue,
                private invoiceService: InvoiceService) {
    }

    @Get('sendMail')
    async generateAndSend(dto: CreateInvoiceDto, req, res) {
        await this.mailQueue.add('generate', {
            function: await this.invoiceService.generateInvoice(dto,req,res)
        })
    }
}
