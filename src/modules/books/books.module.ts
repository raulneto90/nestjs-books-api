import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BooksController } from './books.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [BooksController],
  providers: [],
  exports: [],
})
export class BooksModule {}
