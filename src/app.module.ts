import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { PaymentModule } from './use-cases/payment-usecases/payment.module';
import { CustomerModule } from './use-cases/customer-usecases/customer.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:Computer6@157.245.103.101:31720',{
      dbName:'test',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    PaymentModule, 
    CustomerModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService],
})
export class AppModule { }
