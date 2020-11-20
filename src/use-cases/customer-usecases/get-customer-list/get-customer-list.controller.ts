import { Controller, Get, Inject, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist/decorators";
import { ICustomerService } from "src/database/customer/i.customer.service";
import { GetCustomerListMapper } from "./get-customer-list-mapper";
import { GetCustomerListRequest } from "./get-customer-list-request";
import { GetCustomerListResponse } from "./get-customer-list-response";

@ApiTags('customers')
@Controller('customers')
export class GetCustomerListController {
  constructor(
    @Inject('ICustomerService') private readonly customerService: ICustomerService,
    private readonly mapper: GetCustomerListMapper
  ) {
  }

  @Get()
  async get(@Query() query: GetCustomerListRequest): Promise<GetCustomerListResponse> {
    let populate = {
      path: 'payments',
      // populate: {
      //   path: 'invoices'
      // }
    };

    const result = await this.customerService.pagedAsync(
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
}