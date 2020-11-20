import { Controller, Get, Inject, Query, UseFilters } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { IPaymentService } from 'src/database/payment/i.payment.service';
import { GetPaymentListMapper } from './get-payment-list-mapper';
import { GetPaymentListRequest } from './get-payment-list-request';
import { GetPaymentListResponse } from './get-payment-list-response';

@ApiTags('payments')
@Controller('payments')
export class GetPaymentListController {
  constructor(
    @Inject('IPaymentService') private readonly paymentService: IPaymentService,
    private readonly mapper: GetPaymentListMapper
  ) {
  }

  @Get()
  async get(@Query() query: GetPaymentListRequest): Promise<GetPaymentListResponse> {

    let populate = {
      path: 'customer',
      select: 'name'
      // populate:{
      //   path:'invoices'
      // }
    };

    const result = await this.paymentService.pagedAsync
      (
        query.pageNumber,
        query.pageSize,
        query.orderByPropertyName,
        query.sortingDirection,
        {},
        populate,
        null
      );
    const response = this.mapper.response(result);

    return response;
  }

  //  @UseFilters(new ExceptionFilter())
  @MessagePattern('rabbit-mq-producer')
  public async execute(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();
    channel.ack(orginalMessage);
  }
}
