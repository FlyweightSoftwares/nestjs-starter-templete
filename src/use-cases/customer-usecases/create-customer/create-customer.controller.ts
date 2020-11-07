import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { S3 } from "nestjs-s3";
import { InjectS3 } from "nestjs-s3/dist/s3.decorators";
import { CreateCustomerRequest } from "./create-customer-request";
import { CreateCustomerService } from "./create-customer.service";

@ApiTags("customers")
@Controller("customers")
export class CreateCustomerController {
  constructor(private readonly repository: CreateCustomerService,
    @InjectS3() private readonly s3: S3,) {}

  @Post()
  async create(@Body() body: CreateCustomerRequest): Promise<void> {
    this.repository.Handle(body);
  }

  @Post('space')
  async createSpace(@Body() body: CreateCustomerRequest): Promise<any> {
    const params = {
      Bucket: 'files',
      Key: 'test.png',
      Expires: 60 * 5
    };
    const url = await new Promise((resolve, reject) => {
      this.s3.getSignedUrl('getObject', params, (err, url) => {
        err ? reject(err) : resolve(url);
      });
    });

    return await url;
  }
}
