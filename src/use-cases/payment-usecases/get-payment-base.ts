import { PaymentBase } from "./payment-base";

export interface GetPaymentBase  extends PaymentBase{
    id:string;
    customerName:string;
}