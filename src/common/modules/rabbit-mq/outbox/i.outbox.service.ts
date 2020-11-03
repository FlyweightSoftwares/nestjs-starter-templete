import { ClientSession } from "mongoose";
import { IBaseService } from "src/common/i.base.service";
import { Outbox } from "./outbox.schema";

export interface IOutboxService extends IBaseService<Outbox & Document> {
    addOutbox(data:any,session:ClientSession):Promise<void>;
    markedAsSuccess(id:string,session: ClientSession):Promise<void>;
    markedAsFailed(id:string,session: ClientSession):Promise<void>
}