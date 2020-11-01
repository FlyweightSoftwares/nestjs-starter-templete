import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/common/base.service';
import { Customer } from './customer.schema.';
import { ICustomerService } from './i.customer.service';

@Injectable()
export class CustomerService extends BaseService<Customer & Document> implements ICustomerService {
    constructor(
        @InjectModel('Customer') protected readonly _model: Model<Customer & Document>,
    ) {
        super(_model);
    }
    isActive(): boolean {
       return false
    }
}
