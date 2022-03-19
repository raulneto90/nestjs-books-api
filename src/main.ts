import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as packageJson from '../package.json';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger: Logger = new Logger();
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Library API')
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);

  app.setGlobalPrefix('api/v1');

  await app.listen(port, () => {
    logger.log(`Application listening on port ${port}`);
  });
}
bootstrap();
