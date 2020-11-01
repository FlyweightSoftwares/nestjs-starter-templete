import { IBaseService } from "src/common/i.base.service";
import { Customer } from "./customer.schema.";

export abstract class ICustomerService extends IBaseService<Customer & Document> {
   abstract isActive():boolean;
}