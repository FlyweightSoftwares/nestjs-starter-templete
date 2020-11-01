
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Payment } from '../payment/payment.schema';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer extends Document {
  @Prop()
  id: string;

  @Prop()
  name:string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

CustomerSchema.virtual('payments',{
  ref:Payment.name,
  localField:'_id',
  foreignField:'customerId'
})

// CustomerSchema.pre( "deleteMany", { document: false, query: true }, async function (next) { const docs = await this.model.find(this.getFilter()); const users = docs.map((item) => item._id); await UserLink.deleteMany({ user: { $in: users } }); next(); } );