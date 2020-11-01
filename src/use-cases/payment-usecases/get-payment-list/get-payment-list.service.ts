import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPaymentService } from 'src/persistence/payment/i.payment.service';
import { GetPaymentListMapper } from './get-payment-list-mapper';
import { GetPaymentListRequest } from './get-payment-list-request';
import { GetPaymentListResponse } from './get-payment-list-response';

@Injectable()
export class GetPaymentListService {

    constructor(
        private readonly paymentService: IPaymentService,
        private readonly mapper: GetPaymentListMapper
    ) {
    }

    async Handle(request: GetPaymentListRequest): Promise<GetPaymentListResponse> {
        let populate = {
            path: 'customer',
            select: 'name'
            // populate:{
            //   path:'invoices'
            // }
        };

        const result = await this.paymentService.pagedAsync
            (
                request.pageNumber,
                request.pageSize,
                request.orderByPropertyName,
                request.sortingDirection,
                {},
                populate,
                null
            );
        const response = this.mapper.response(result);

        return response;
    }
}
