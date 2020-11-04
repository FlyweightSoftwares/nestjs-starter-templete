import { ClientSession } from "mongoose";
import { MongooseQueryModel } from "./mongoose-query-model";
import { PagedResponse } from "./paged-response";
import { SortingDirection } from "./sorting-direction";

export interface IBaseService<T> {
  // Read
  findAll(model: MongooseQueryModel): Promise<T[]>;
  findById(
    id: string,
    populate: Array<any>,
    select?: string,
    isLean?: boolean
  ): Promise<T>;
  findOne(model: MongooseQueryModel): Promise<T>;
  count(filter: any): Promise<number>;
  pagedAsync(
    pageNumber: any,
    pageSize: any,
    orderByPropertyName: string,
    sortingDirection: SortingDirection,
    filter: any,
    populate: any,
    select: any
  ): Promise<PagedResponse<any>>;

  // Write
  insert(
    doc: T | T[] | Partial<T> | Partial<T[]>,
    session: ClientSession
  ): Promise<T | T[]>;
  updateById(id: any, updatedDoc: any, session: ClientSession): Promise<T>;
  update(condition: any, updatedDoc: any, session: ClientSession): Promise<T>;
  updateMany(filter: any, updatedDoc: any, session: ClientSession);
  delete(id: string, session: ClientSession): Promise<T>;

  // Trans
  withRetrySession(txnFn: Function): any;
}
