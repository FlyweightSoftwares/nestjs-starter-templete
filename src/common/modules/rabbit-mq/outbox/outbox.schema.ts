import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OutboxDocument = Outbox & Document;

@Schema()
export class Outbox extends Document {

  @Prop()
  name:string;

  @Prop()
  payload:any;

  @Prop()
  addedOn:Date;

  @Prop()
  expiresAt:Date;

  @Prop()
  status:OutboxStatus;
}

export enum OutboxStatus {
  Success,
  Failed,
  Processing
}

export const OutboxSchema = SchemaFactory.createForClass(Outbox);