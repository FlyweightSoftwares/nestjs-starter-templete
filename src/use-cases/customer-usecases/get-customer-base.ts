import { CustomerBase } from "./customer-base";

export class GetCustomerBase extends CustomerBase {
    id:string;
    payments:GetPaymentBase[]
}

export class GetPaymentBase {
    id:string;
    amount:number
}