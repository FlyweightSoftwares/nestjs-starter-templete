import { SortingDirection } from "./sorting-direction";

export class PagedModel<T> {
    size: number;
    page: number;
    totalCount: number;
    totalPages: number;
    orderByPropertyName: string;
    sortDirection: SortingDirection;
    items: T[];
}