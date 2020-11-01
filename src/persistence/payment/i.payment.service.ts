import { IBaseService } from "src/common/i.base.service";
import { Payment } from "./payment.schema";

export interface IPaymentService extends IBaseService<Payment & Document> {

}