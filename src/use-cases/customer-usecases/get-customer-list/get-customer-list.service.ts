import { Injectable } from '@nestjs/common';
import { ICustomerService } from 'src/persistence/customer/i.customer.service';
import { GetCustomerListMapper } from './get-customer-list-mapper';
import { GetCustomerListRequest } from './get-customer-list-request';
import { GetCustomerListResponse } from './get-customer-list-response';

@Injectable()
export class GetCustomerListService { 
    constructor(
        private readonly customerService: ICustomerService,
        private readonly mapper: GetCustomerListMapper
    ) {
    }

    async Handle(request:GetCustomerListRequest):Promise<GetCustomerListResponse> {
        let populate = {
            path: 'payments',
            populate: {
              path: 'invoices'
            }
          };
      
          const result = await this.customerService.pagedAsync(request.pageNumber,request.pageSize,request.orderByPropertyName,request.sortingDirection,{},populate,null);
          const response = this.mapper.response(result);
          return response;
      
    }
}
