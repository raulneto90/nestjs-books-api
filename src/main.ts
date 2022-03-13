import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const logger: Logger = new Logger();
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;

  app.setGlobalPrefix('api/v1');

  await app.listen(port, () => {
    logger.log(`Application listening on port ${port}`);
  });
}
bootstrap();
