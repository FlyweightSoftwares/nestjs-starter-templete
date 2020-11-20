import { Body, Controller, Delete, HttpCode, Inject, Param, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist";
import { IOutboxService } from "src/common/modules/rabbit-mq/outbox/i.outbox.service";
import { RabbitMqService } from "src/common/modules/rabbit-mq/rabbit-mq.service";
import { ICustomerService } from "src/database/customer/i.customer.service";

@ApiTags('customers')
@Controller('customers')
export class DeleteCustomerController {
    constructor(
        @Inject('ICustomerService') private readonly customerService: ICustomerService,
        private readonly rabbitMqService: RabbitMqService,
        @Inject('IOutboxService') private readonly outboxService: IOutboxService
    ) {
    }

    @Delete(':id')
    @HttpCode(204)
    async create(@Param('id') id: string): Promise<void> {
        await this.customerService.delete(id, null);
        //  await this.outboxService.addOutbox(customer, null);
        // this.rabbitMqService.publish('rabbit-mq-producer', {
        //     message: "welcome" + 'index',
        // });
    }
}