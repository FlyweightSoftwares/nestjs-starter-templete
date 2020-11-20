import { PagedResponse } from "src/common/paged-response";
import { GetCustomerBase } from "../get-customer-base";

export interface GetCustomerListResponse extends PagedResponse<any> {
    items:GetCustomerBase[];
}