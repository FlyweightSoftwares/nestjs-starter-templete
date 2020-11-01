import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Customer, CustomerSchema } from './customer/customer.schema.';
import { CustomerService } from './customer/customer.service';
import { ICustomerService } from './customer/i.customer.service';
import { IPaymentService } from './payment/i.payment.service';
import { Payment, PaymentSchema } from './payment/payment.schema';
import { PaymentService } from './payment/payment.service';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                { name: Customer.name, schema: CustomerSchema },
                { name: Payment.name, schema: PaymentSchema }
            ]
        )
    ],
    controllers: [],
    providers: [{
        provide:ICustomerService,
        useClass:CustomerService
    },
    {
        provide:IPaymentService,
        useClass:PaymentService
    }],
    exports:[
        MongooseModule.forFeature(
            [
                { name: Customer.name, schema: CustomerSchema },
                { name: Payment.name, schema: PaymentSchema },
            ]
        ),
        {
            provide:ICustomerService,
            useClass:CustomerService
        },
        {
            provide:IPaymentService,
            useClass:PaymentService
        }
    ]
})
export class DatabaseModule { }
