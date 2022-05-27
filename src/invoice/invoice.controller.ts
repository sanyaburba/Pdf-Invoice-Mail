import {Body, Controller, Post, Req, Res} from '@nestjs/common';
import {InvoiceService} from "./invoice.service";
import {CreateInvoiceDto} from "./dto/create-invoice.dto";
import {Response, Request} from "express";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Invoice} from "./invoice.model";



@ApiTags('Invoices')
@Controller('invoice')
export class InvoiceController {
    constructor(private invoiceService: InvoiceService) {
    }

    @ApiOperation({summary: 'Create Invoice'})
    @ApiResponse({status: 200, type: Invoice})
    @Post()
    generate(@Body() dto: CreateInvoiceDto, @Req() req:Request, @Res() res: Response) {
        return this.invoiceService.generateInvoice(dto, req, res)
    }

}
