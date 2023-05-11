import { loadEnvironmentVariables } from './shared/utils'; loadEnvironmentVariables();
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { SERVICE_PORT } from './shared/constants';

async function bootstrap() {
  const port = SERVICE_PORT;
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(port, () => Logger.log(`Service listening on port: ${port}`));
}

bootstrap();
