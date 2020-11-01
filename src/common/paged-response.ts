import { SortingDirection } from "./sorting-direction";

export class PagedResponse<T> {
    pageSize: number;
    pageNumber: number;
    totalCount: number;
    totalPages:number;
    orderByPropertyName: string;
    sortingDirection: SortingDirection;
    items:T[];
}