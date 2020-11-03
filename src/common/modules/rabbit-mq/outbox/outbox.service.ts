import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ClientSession, Model } from "mongoose";
import { BaseService } from "src/common/base.service";
import { IOutboxService } from "./i.outbox.service";
import { Outbox, OutboxStatus } from "./outbox.schema";

@Injectable()
export class OutboxService extends BaseService<Outbox & Document> implements IOutboxService {
    constructor(
        @InjectModel('Outbox') protected readonly _model: Model<Outbox & Document>,
    ) {
        super(_model);
    }

    async addOutbox(data: any, session: ClientSession): Promise<void> {

        const outbox: Partial<Outbox> = {
            name: '1',
            payload: data,
            addedOn: new Date(),
            status: OutboxStatus.Processing
        }

        await this.insert([outbox], session);
    }

    async markedAsSuccess(id:string,session: ClientSession):Promise<void> {

        const outbox: Partial<Outbox> = {
            status: OutboxStatus.Success
        }

        await this.updateById(id,[outbox], session);
    }

    async markedAsFailed(id:string,session: ClientSession):Promise<void> {

        const outbox: Partial<Outbox> = {
            status: OutboxStatus.Failed
        }

        await this.updateById(id,[outbox], session);
    }
}