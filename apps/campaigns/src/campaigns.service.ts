import { Injectable } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { CampaignsRepository } from './campaigns.repository';

@Injectable()
export class CampaignsService {
  constructor(private readonly campaignRepository: CampaignsRepository) {}

  create(createCampaignDto: CreateCampaignDto, userId: string) {
    return this.campaignRepository.create({
      ...createCampaignDto,
      timestamp: new Date(),
      userId,
    });
  }

  findAll() {
    return this.campaignRepository.find({});
  }

  findOne(_id: string) {
    return this.campaignRepository.findOne({ _id });
  }

  update(_id: string, updateCampaignDto: UpdateCampaignDto) {
    return this.campaignRepository.findOneAndUpdate(
      { _id },
      { $set: updateCampaignDto },
    );
  }

  remove(_id: string) {
    return this.campaignRepository.findOneAndDelete({ _id });
  }
}
