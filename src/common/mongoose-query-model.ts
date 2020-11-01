export class MongooseQueryModel {
    filter: any;
    populate?: any;
    select?: string;
    lean?: boolean;
    sort?: string;
    sortBy?: 'asc' | 'desc' = 'asc';
    limit?: number;
}
