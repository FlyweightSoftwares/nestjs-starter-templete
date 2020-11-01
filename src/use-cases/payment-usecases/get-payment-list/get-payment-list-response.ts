import { PagedResponse } from "src/common/paged-response";
import { GetPaymentBase } from "../get-payment-base";

export class GetPaymentListResponse extends  PagedResponse<any> {
    items:GetPaymentBase[];
}