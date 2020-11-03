import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Inbox, InboxSchema } from './inbox/inbox.schema';
import { InboxService } from './inbox/inbox.service';
import { Outbox, OutboxSchema } from './outbox/outbox.schema';
import { OutboxService } from './outbox/outbox.service';
import { RabbitMqService } from './rabbit-mq.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'rabbit-mq-module',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqp://user:computer@139.59.76.143:32415',
          ],
          queue: 'rabbit-mq-nest-js',
        },
      },
    ]),
    MongooseModule.forFeature(
      [
        { name: Inbox.name, schema: InboxSchema },
        { name: Outbox.name, schema: OutboxSchema }
      ]
    )
  ],
  controllers: [],
  providers: [
    RabbitMqService,
    {
      provide: 'IInboxService',
      useClass: InboxService
    },
    {
      provide: 'IOutboxService',
      useClass: OutboxService
    }
  ],
  exports: [RabbitMqService,
    {
      provide: 'IInboxService',
      useClass: InboxService
    },
    {
      provide: 'IOutboxService',
      useClass: OutboxService
    }],
})
export class RabbitMqModule { }