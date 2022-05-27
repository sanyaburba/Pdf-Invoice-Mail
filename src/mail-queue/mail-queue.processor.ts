import {Process, Processor} from "@nestjs/bull";
import {Logger} from "@nestjs/common";
import {Job} from "bull";

@Processor('mail-queue')
export class MailQueueProcessor {
    private readonly logger =new Logger(MailQueueProcessor.name);

    @Process('generate')
    handleGenerate(job: Job) {
        this.logger.debug('Start transcoding...');
        this.logger.debug(job.data);
        this.logger.debug('Transcoding completed');
    }
}
