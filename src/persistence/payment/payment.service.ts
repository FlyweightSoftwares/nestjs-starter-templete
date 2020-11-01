import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/common/base.service';
import { IPaymentService } from './i.payment.service';
import { Payment } from './payment.schema';


@Injectable()
export class PaymentService extends BaseService<Payment & Document> implements IPaymentService {
    constructor(
        @InjectModel('Payment') protected readonly _model: Model<Payment & Document>,
    ) {
        super(_model);
    }
}