import { PagedResponse } from "src/common/paged-response";
import { SortingDirection } from "src/common/sorting-direction";
import { Customer } from "src/persistence/customer/customer.schema.";
import { GetCustomerBase } from "../get-customer-base";
import { GetCustomerListResponse } from "./get-customer-list-response";

export class GetCustomerListMapper {
  constructor() {
  }

  public response(request: PagedResponse<Customer>): GetCustomerListResponse {

    let customers: GetCustomerBase[] = [];
    request.items.forEach((item: any) => {
      customers.push({
        id: item._id,
        name: item.name,
        payments: item.payments
      })
    });


    let response: GetCustomerListResponse = {
      orderByPropertyName: request.orderByPropertyName,
      sortingDirection: SortingDirection.Ascending,
      pageNumber: request.pageNumber,
      pageSize: request.pageSize,
      totalCount: request.totalCount,
      totalPages:request.totalPages,
      items: customers
    }
    return response;
  }
}