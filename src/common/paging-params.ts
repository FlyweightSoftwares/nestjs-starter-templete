import { ApiPropertyOptional, ApiQuery } from "@nestjs/swagger/dist/decorators";
import { IsNumber } from "class-validator";
import { SortingDirection } from "./sorting-direction";

export class PagingParams {
    @ApiPropertyOptional()
    @IsNumber()
    pageNumber: number;
    @ApiPropertyOptional()
    @IsNumber()
    pageSize: number;
    @ApiPropertyOptional()
    sortingDirection: SortingDirection;
    @ApiPropertyOptional()
    orderByPropertyName: string;
    @ApiPropertyOptional()
    searchKey: string;
}