import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsString, IsInt, IsEmpty, IsNotEmpty } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';

export class CreateCustomerRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @AutoMap()
  name: string;
}