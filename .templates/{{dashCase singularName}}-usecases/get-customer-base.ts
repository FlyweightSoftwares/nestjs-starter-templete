import { CustomerBase } from "./customer-base";

export interface GetCustomerBase extends CustomerBase {
    id:string;
    payments:GetPaymentBase[]
}

export interface GetPaymentBase {
    id:string;
    amount:number
}