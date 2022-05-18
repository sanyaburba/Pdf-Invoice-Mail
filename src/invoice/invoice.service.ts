import {Injectable, Req, Res} from '@nestjs/common';
import {CreateInvoiceDto} from "./dto/create-invoice.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Invoice} from "./invoice.model";
import * as pdf from 'html-pdf'
import {pdfTemplate} from "./documents/invoiceTemplate";

@Injectable()
export class InvoiceService {

    constructor(@InjectModel(Invoice) private invoiceRepository: typeof Invoice) {}

    async generateInvoice(dto: CreateInvoiceDto, req, res) {
        await this.invoiceRepository.create(dto);
        return pdf.create(pdfTemplate(dto), {}).toFile('invoice.pdf', (err) => {
            if (err) {
                res.send(Promise.reject());
            }
            res.send(Promise.resolve());
        });
    }
}
