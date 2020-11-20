import { Body, Controller, Post, } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { CreateCustomerRequest } from './create-customer-request';
import { CreateCustomerService } from './create-customer.service';

@ApiTags('customers')
@Controller('customers')
export class CreateCustomerController {
  constructor(
    private readonly repository: CreateCustomerService,

  ) { }

  @Post()
  async create(@Body() body: CreateCustomerRequest): Promise<void> {
    this.repository.Handle(body);
  }
}
