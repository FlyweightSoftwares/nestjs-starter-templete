import { Customer } from "src/persistence/customer/customer.schema.";
import { CreateCustomerRequest } from "./create-customer-request";
import { CreateCustomerResponse } from "./create-customer-response";

export class CreateCustomerMapper{
    constructor() {
   }

   response(item:Customer):CreateCustomerResponse {
    return item;
   }

   request(item:CreateCustomerRequest):Partial<Customer> {
       var customer:Partial<Customer>= {
           name:item.name
       }
       return customer;
   }
}