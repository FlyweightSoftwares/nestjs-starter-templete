import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist/decorators";
import { GetCustomerListRequest } from "./get-customer-list-request";
import { GetCustomerListResponse } from "./get-customer-list-response";
import { GetCustomerListService } from "./get-customer-list.service";

@ApiTags('customers')
@Controller('customers')
export class GetCustomerListController {
  constructor(
    private readonly getCustomerListService: GetCustomerListService
  ) { }

  @Get()
  async get(@Query() query: GetCustomerListRequest): Promise<GetCustomerListResponse>
  {
    return await this.getCustomerListService.Handle(query);;
  }
}