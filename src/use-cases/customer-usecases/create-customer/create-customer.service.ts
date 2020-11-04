import { Inject, Injectable } from '@nestjs/common';
import { IOutboxService } from 'src/common/modules/rabbit-mq/outbox/i.outbox.service';
import { RabbitMqService } from 'src/common/modules/rabbit-mq/rabbit-mq.service';
import { ICustomerService } from 'src/persistence/customer/i.customer.service';
import { IPaymentService } from 'src/persistence/payment/i.payment.service';
import { CreateCustomerMapper } from './create-customer-mapper';
import { CreateCustomerRequest } from './create-customer-request';

@Injectable()
export class CreateCustomerService {

    constructor(
        @Inject('ICustomerService') private readonly customerService: ICustomerService,
        @Inject('IPaymentService') private readonly paymentService: IPaymentService,
        private readonly mapper: CreateCustomerMapper,
        private readonly rabbitMqService: RabbitMqService,
        @Inject('IOutboxService') private readonly outboxService: IOutboxService
    ) {
    }

    async Handle(body: CreateCustomerRequest) {
        const customer = this.mapper.request(body);
        await this.customerService.insert([customer], null);
        await this.outboxService.addOutbox(customer,null);
        this.rabbitMqService.publish('rabbit-mq-producer', {
            message: "welcome" + 'index',
        });
      //  await this.outboxService.markedAsSuccess(customer.id,null);
    }

}
