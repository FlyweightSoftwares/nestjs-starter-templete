import { IBaseService } from "src/common/i.base.service";
import { Payment } from "./payment.schema";

export abstract class IPaymentService extends IBaseService<Payment & Document> {

}