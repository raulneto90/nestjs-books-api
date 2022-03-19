import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './entities/Book';
import { BooksRepository } from './repositories/implementations/BooksRepository';

@Module({
  imports: [SequelizeModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BooksRepository, BooksService],
  exports: [],
})
export class BooksModule {}
