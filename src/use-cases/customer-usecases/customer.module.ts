import { Module } from '@nestjs/common';
import { CreateCustomerController } from './create-customer/create-customer.controller';
import { GetCustomerListController } from './get-customer-list/get-customer-list.controller';
import { CreateCustomerMapper } from "./../customer-usecases/create-customer/create-customer-mapper";
import { GetCustomerListMapper } from './get-customer-list/get-customer-list-mapper';
import { DatabaseModule } from 'src/database/database.module';
import { RabbitMqModule } from 'src/common/modules/rabbit-mq/rabbit-mq.module';
import { DeleteCustomerController } from './delete-customer/delete-customer.controller';

@Module({
    imports: [
        RabbitMqModule,
        DatabaseModule,
    ],
    controllers: [CreateCustomerController,DeleteCustomerController, GetCustomerListController],
    providers: [
          CreateCustomerMapper, GetCustomerListMapper],
})
export class CustomerModule { }
