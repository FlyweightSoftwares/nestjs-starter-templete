import { Module } from '@nestjs/common';
import { CreateCustomerController } from './create-customer/create-customer.controller';
import { GetCustomerListController } from './get-customer-list/get-customer-list.controller';
import { CreateCustomerMapper } from "./create-customer/create-customer-mapper";
import { CreateCustomerService } from './create-customer/create-customer.service';
import { GetCustomerListMapper } from './get-customer-list/get-customer-list-mapper';
import { DatabaseModule } from 'src/persistence/database.module';
import { GetCustomerListService } from './get-customer-list/get-customer-list.service';
import { RabbitMqModule } from 'src/common/modules/rabbit-mq/rabbit-mq.module';

@Module({
    imports: [
        RabbitMqModule,
        DatabaseModule,
    ],
    controllers: [CreateCustomerController, GetCustomerListController],
    providers: [
          CreateCustomerService, CreateCustomerMapper, GetCustomerListMapper,GetCustomerListService],
})
export class CustomerModule { }
