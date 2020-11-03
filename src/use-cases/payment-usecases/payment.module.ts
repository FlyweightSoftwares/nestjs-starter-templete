import { Module } from '@nestjs/common';
import { RabbitMqModule } from 'src/common/modules/rabbit-mq/rabbit-mq.module';
import { DatabaseModule } from 'src/persistence/database.module';
import { GetPaymentListMapper } from './get-payment-list/get-payment-list-mapper';
import { GetPaymentListController } from './get-payment-list/get-payment-list.controller';
import { GetPaymentListService } from './get-payment-list/get-payment-list.service';

@Module({
    imports: [ 
        RabbitMqModule,
        DatabaseModule,
        ],
    controllers: [GetPaymentListController],
    providers: [GetPaymentListService,GetPaymentListMapper],
})
export class PaymentModule { }
