import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsString, IsInt, IsEmpty, IsNotEmpty } from "class-validator";
export class CreateCustomerRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
