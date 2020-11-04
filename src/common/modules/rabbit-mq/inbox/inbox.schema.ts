import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InboxDocument = Inbox & Document;

@Schema()
export class Inbox extends Document {

  @Prop()
  name:string;

  @Prop()
  payload:string;

  @Prop()
  addedOn:Date;

  @Prop()
  expiresAt:Date;

  @Prop()
  status:InboxStatus;
}

export enum InboxStatus {
  Success='Success',
  Failed='Failed',
  Processing='Processing'
}

export const InboxSchema = SchemaFactory.createForClass(Inbox);
