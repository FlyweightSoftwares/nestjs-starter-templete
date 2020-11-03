import { Controller, Get, Inject, Query, UseFilters } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { InboxService } from 'src/common/modules/rabbit-mq/inbox/inbox.service';
import { GetPaymentListRequest } from './get-payment-list-request';
import { GetPaymentListResponse } from './get-payment-list-response';
import { GetPaymentListService } from './get-payment-list.service';

@ApiTags('payments')
@Controller('payments')
export class GetPaymentListController {
  constructor(
    private readonly getPaymentListService: GetPaymentListService,
    @Inject('IInboxService') private readonly inboxService: InboxService
  ) { }

  @Get()
  async get(@Query() query: GetPaymentListRequest): Promise<GetPaymentListResponse> {

    return await this.getPaymentListService.Handle(query);
  }
  
//  @UseFilters(new ExceptionFilter())
  @MessagePattern('rabbit-mq-producer')
  public async execute(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();
    channel.ack(orginalMessage);
  }
}
