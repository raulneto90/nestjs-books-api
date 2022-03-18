import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './entities/Book';

@Module({
  imports: [SequelizeModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [],
})
export class BooksModule {}
