import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { BooksService } from './books.service';
import { BookDTO } from './dtos/BookDTO';
import { CreateBookDTO } from './dtos/CreateBookDTO';
import { Book } from './entities/Book';

@Controller('books')
@ApiTags('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: BookDTO, isArray: true })
  async list(): Promise<BookDTO[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: BookDTO })
  async show(@Param('id') id: number): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: HttpStatus.CREATED })
  async create(@Body() data: CreateBookDTO): Promise<void> {
    return this.booksService.create(data);
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  async update(@Param('id') id: number, @Body() book: Book): Promise<void> {
    return this.booksService.update(id, book);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  async delete(@Param('id') id: number): Promise<void> {
    return this.booksService.remove(id);
  }
}
