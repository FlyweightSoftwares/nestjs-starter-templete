import { ClientSession } from "mongoose";
import { MongooseQueryModel } from "./mongoose-query-model";
import { PagedResponse } from "./paged-response";
import { SortingDirection } from "./sorting-direction";

export abstract class IBaseService<T> {
    // Read
    abstract findAll(model: MongooseQueryModel): Promise<T[]>;
    abstract findById(id: string, populate: Array<any>, select?: string, isLean?:boolean): Promise<T>;
    abstract findOne(model: MongooseQueryModel): Promise<T>;
    abstract count(filter: any): Promise<number>;
    abstract pagedAsync(
        pageNumber:any,
        pageSize:any,
        orderByPropertyName:string,
        sortingDirection:SortingDirection,
        filter: any,
        populate:any, 
        select:any): Promise<PagedResponse<any>>;

    // Write
    abstract insert(doc: T | T[] | Partial<T> | Partial<T[]>, session: ClientSession): Promise<T | T[]>;
    abstract updateById(id: any, updatedDoc: any, session: ClientSession): Promise<T>;
    abstract update(condition: any, updatedDoc: any, session: ClientSession): Promise<T>;
    abstract updateMany(filter: any, updatedDoc: any, session: ClientSession);
    abstract delete(id: string, session: ClientSession): Promise<T>;


    // Trans 
    abstract startSession(): Promise<ClientSession>;
    abstract commitTransaction(session: ClientSession);
    abstract abortTransaction(session: ClientSession);
    abstract withRetrySession(txnFn: Function);
}