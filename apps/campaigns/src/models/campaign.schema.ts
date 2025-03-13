import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class CampaignDocument extends AbstractDocument {
  @Prop()
  userId: string;

  @Prop()
  name: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  timestamp: Date;
}

export const CampaignSchema = SchemaFactory.createForClass(CampaignDocument);
