import { Body, Controller, Post, } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { IOutboxService } from 'src/common/modules/rabbit-mq/outbox/i.outbox.service';
import { RabbitMqService } from 'src/common/modules/rabbit-mq/rabbit-mq.service';
import { ICustomerService } from 'src/database/customer/i.customer.service';
import { IPaymentService } from 'src/database/payment/i.payment.service';
import { CreateCustomerMapper } from './create-customer-mapper';
import { CreateCustomerRequest } from './create-customer-request';

@ApiTags('customers')
@Controller('customers')
export class CreateCustomerController {
  constructor(
    @Inject('ICustomerService') private readonly customerService: ICustomerService,
    @Inject('IPaymentService') private readonly paymentService: IPaymentService,
    private readonly mapper: CreateCustomerMapper,
    private readonly rabbitMqService: RabbitMqService,
    @Inject('IOutboxService') private readonly outboxService: IOutboxService
) {
}

  @Post()
  async create(@Body() body: CreateCustomerRequest): Promise<void> {
    
    const customer = this.mapper.request(body);
    await this.customerService.insert([customer], null);
    await this.outboxService.addOutbox(customer,null);
    this.rabbitMqService.publish('rabbit-mq-producer', {
        message: "welcome" + 'index',
    });

  }
}
