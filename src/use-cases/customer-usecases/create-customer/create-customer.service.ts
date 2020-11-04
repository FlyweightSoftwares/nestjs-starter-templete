import { Inject, Injectable } from "@nestjs/common";
import { ClientSession, Types } from "mongoose";
import { ICustomerService } from "src/persistence/customer/i.customer.service";
import { IPaymentService } from "src/persistence/payment/i.payment.service";
import { Payment } from "src/persistence/payment/payment.schema";
import { CreateCustomerMapper } from "./create-customer-mapper";
import { CreateCustomerRequest } from "./create-customer-request";

@Injectable()
export class CreateCustomerService {
  constructor(
    @Inject("ICustomerService")
    private readonly customerService: ICustomerService,
    @Inject("IPaymentService") private readonly paymentService: IPaymentService,
    private readonly mapper: CreateCustomerMapper
  ) {}

  async Handle(body: CreateCustomerRequest) {
    // await this.customerService.withRetrySession(async (session: ClientSession) => {
    try {
      const customer = this.mapper.request(body);
      await this.customerService.insert([customer], null);

      if (await this.customerService.isActive()) {
        //do
      } else {
        //don't
      }
    } catch (error) {}

    // const payment: Partial<Payment> = {
    //     amount: 987,
    //     customerId: Types.ObjectId('5f9d19424274fa2a883e61fc')
    // }
    // await this.paymentService.insert([payment], session);

    // });
  }
}
