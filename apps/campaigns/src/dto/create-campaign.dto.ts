import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  name: string;

  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;
}
