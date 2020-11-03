import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ClientSession, Model } from "mongoose";
import { BaseService } from "src/common/base.service";
import { IInboxService } from "./i.inbox.service";
import { Inbox, InboxStatus } from "./inbox.schema";

@Injectable()
export class InboxService extends BaseService<Inbox & Document> implements IInboxService {
    constructor(
        @InjectModel('Inbox') protected readonly _model: Model<Inbox & Document>,
    ) {
        super(_model);
    }

    async addInbox(data: any, session: ClientSession): Promise<void> {

        const outbox: Partial<Inbox> = {
            name: '1',
            payload: data,
            addedOn: new Date(),
            status: InboxStatus.Processing
        }

        await this.insert([outbox], session);
    }

    async markedAsSuccess(id:string,session: ClientSession):Promise<void> {

        const outbox: Partial<Inbox> = {
            status: InboxStatus.Success
        }

        await this.updateById(id,[outbox], session);
    }

    async markedAsFailed(id:string,session: ClientSession):Promise<void> {

        const outbox: Partial<Inbox> = {
            status: InboxStatus.Failed
        }

        await this.updateById(id,[outbox], session);
    }
}