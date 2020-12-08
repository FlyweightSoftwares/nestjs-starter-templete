import { Injectable, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { PaymentModule } from './use-cases/payment-usecases/payment.module';
import { CustomerModule } from './use-cases/customer-usecases/customer.module';

import { LoggerModule } from 'nestjs-pino';
import * as pinoToSeq from 'pino-seq';

@Injectable()
class ConfigService {
  public readonly level = "debug";
  public readonly stream = pinoToSeq.createStream({ serverUrl: 'http://157.245.103.101:30507' });
  ;
}
@Module({
  imports: [
    LoggerModule.forRootAsync(
      {
        providers: [ConfigService],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
          return {
            pinoHttp: [{ level: config.level }, config.stream]
          };
        },
      }
    ),
    MongooseModule.forRoot('mongodb://root:Computer6@157.245.103.101:31720', {
      dbName: 'test',
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
