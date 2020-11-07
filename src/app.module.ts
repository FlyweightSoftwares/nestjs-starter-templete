import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";

import { PaymentModule } from "./use-cases/payment-usecases/payment.module";
import { CustomerModule } from "./use-cases/customer-usecases/customer.module";
import { S3Module } from "nestjs-s3/dist/s3.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb://root:Computer6@139.59.76.143:31720?retryWrites=false",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    ),
    S3Module.forRoot({
      config: {
        accessKeyId: 'HT3MKSGGSRAP4OBU47NA',
        secretAccessKey: 'q+7llaAY0HiJ9c7TOlxt9r1pqQIxZgJMwJwptbFNiXQ',
        endpoint: 'https://flytest.fra1.digitaloceanspaces.com/',
        s3ForcePathStyle: true,
        signatureVersion: 'v4',
      },
    }),
    
    PaymentModule,
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
