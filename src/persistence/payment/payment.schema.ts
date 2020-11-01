
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Customer } from '../customer/customer.schema.';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment extends Document {
  @Prop()
  customerId:Types.ObjectId

  @Prop({required:true})
  amount:number;

  customer:Customer
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);

PaymentSchema.virtual('customer',{
  ref:'Customer',
  localField:'customerId',
  foreignField:'_id',
  justOne:true
})