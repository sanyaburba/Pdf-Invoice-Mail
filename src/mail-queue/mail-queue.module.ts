import { Module } from '@nestjs/common';
import {BullModule} from "@nestjs/bull";
import { MailQueueController } from './mail-queue.controller';
import {MailQueueProcessor} from "./mail-queue.processor";
import {InvoiceModule} from "../invoice/invoice.module";

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'mail-queue'
        }),
        InvoiceModule
    ],
    controllers: [MailQueueController],
    providers: [MailQueueProcessor]
})
export class MailQueueModule {}
