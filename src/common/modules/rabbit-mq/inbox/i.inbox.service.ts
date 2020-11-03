import { IBaseService } from "src/common/i.base.service";
import { Inbox } from "./inbox.schema";

export interface IInboxService extends IBaseService<Inbox & Document> {
}