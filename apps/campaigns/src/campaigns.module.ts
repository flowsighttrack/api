import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { CampaignsRepository } from './campaigns.repository';
import { CampaignDocument, CampaignSchema } from './models/campaign.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      {
        name: CampaignDocument.name,
        schema: CampaignSchema,
      },
    ]),
    LoggerModule,
  ],
  controllers: [CampaignsController],
  providers: [CampaignsService, CampaignsRepository],
})
export class CampaignsModule {}
