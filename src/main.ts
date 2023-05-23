import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import AppModule from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  await app.listen(configService.get('PUBLIC_APP_PORT'));

  Logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
