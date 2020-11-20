import { Module } from '@nestjs/common';
import { RabbitMqModule } from 'src/common/modules/rabbit-mq/rabbit-mq.module';
import { DatabaseModule } from 'src/database/database.module';
import { GetPaymentListMapper } from './get-payment-list/get-payment-list-mapper';
import { GetPaymentListController } from './get-payment-list/get-payment-list.controller';

@Module({
    imports: [ 
        RabbitMqModule,
        DatabaseModule,
        ],
    controllers: [GetPaymentListController],
    providers: [GetPaymentListMapper],
})
export class PaymentModule { }
