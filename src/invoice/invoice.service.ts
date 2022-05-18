import {Injectable, Req, Res} from '@nestjs/common';
import {CreateInvoiceDto} from "./dto/create-invoice.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Invoice} from "./invoice.model";
import * as pdf from 'html-pdf'
import {pdfTemplate} from "./documents/invoiceTemplate";
import {mailer} from "../mailer/nodemailer";
import {CustomersService} from "../customers/customers.service";



@Injectable()
export class InvoiceService {

    constructor(@InjectModel(Invoice) private invoiceRepository: typeof Invoice,
                private customersService: CustomersService) {}

    async generateInvoice(dto: CreateInvoiceDto, req, res) {
        const candidate = await this.customersService.getCustomerByEmail(req.body.email)
        if(candidate) {
            const invoice = await this.invoiceRepository.create(dto);
            const id = invoice.id
            return pdf.create(pdfTemplate(dto, candidate.fullName, candidate.companyName, id), {}).toFile('invoice.pdf', (err) => {
                if (err) {
                    res.send(Promise.reject());
                }
                const message = {
                    to: req.body.email,
                    subject: 'Your invoice, pls pay',
                    text: `Hello, ${candidate.fullName}, that's your invoice, check out and pay pls :)`,
                    attachments: {
                        filename: 'invoice.pdf',
                        path: '/Users/aleksandrovila/Desktop/Pdf-Invoice-Mail/invoice.pdf'
                    }
                }
                mailer(message)
                res.send(Promise.resolve());
            });
        } else {
            res.send('Create customer pls')
        }
    }
}
