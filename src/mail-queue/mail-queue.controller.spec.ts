import { Test, TestingModule } from '@nestjs/testing';
import { MailQueueController } from './mail-queue.controller';

describe('MailQueueController', () => {
  let controller: MailQueueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailQueueController],
    }).compile();

    controller = module.get<MailQueueController>(MailQueueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
