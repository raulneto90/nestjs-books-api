import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { BooksService } from './books.service';
import { Book } from './models/Book';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async list(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Post()
  async create(book: Book): Promise<void> {
    return this.booksService.create(book);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() book: Book): Promise<Book> {
    return this.booksService.update(book);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.booksService.remove(id);
  }
}
