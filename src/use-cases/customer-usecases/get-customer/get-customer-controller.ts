import { Controller, Get, HttpCode, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ICustomerService } from "src/database/customer/i.customer.service";

@ApiTags('customers')
@Controller('customers')
export class GetCustomerController {
    constructor(
        @Inject('ICustomerService') private readonly customerService: ICustomerService,
    ) {
    }

    @Get(':id')
    @HttpCode(204)
    async create(@Param('id') id: string): Promise<void> {
        await this.customerService.findById(id, null);
    }
}