import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { CampaignsModule } from './campaigns.module';

async function bootstrap() {
  const app = await NestFactory.create(CampaignsModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));

  await app.listen(process.env.port ?? 3000);
}
bootstrap();
