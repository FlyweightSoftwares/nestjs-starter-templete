import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { GetPaymentListRequest } from './get-payment-list-request';
import { GetPaymentListResponse } from './get-payment-list-response';
import { GetPaymentListService } from './get-payment-list.service';

@ApiTags('payments')
@Controller('payments')
export class GetPaymentListController {
  constructor(
    private readonly getPaymentListService: GetPaymentListService
  ) { }

  @Get()
  async get(@Query() query: GetPaymentListRequest): Promise<GetPaymentListResponse> {

    return await this.getPaymentListService.Handle(query);
  }
}
