import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IOutboxService } from './outbox/i.outbox.service';
import { Outbox } from './outbox/outbox.schema';


@Injectable()
export class RabbitMqService {
  constructor(
    @Inject('rabbit-mq-module') private readonly client: ClientProxy,
    @Inject('IOutboxService') private readonly outboxService: IOutboxService
  ) { }

  async publish(pattern: string, data: any) {    
    return await this.client.send(pattern, data).toPromise();
  }
} 