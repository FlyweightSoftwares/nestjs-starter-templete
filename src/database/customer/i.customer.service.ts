import { IBaseService } from "src/common/i.base.service";
import { Customer } from "./customer.schema.";

export interface ICustomerService extends IBaseService<Customer & Document> {
    isActive():boolean;
}