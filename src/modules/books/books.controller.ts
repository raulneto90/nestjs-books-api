import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  list(): string {
    return 'List all books';
  }

  @Get(':id')
  show(): string {
    return 'Show a book';
  }

  @Post()
  create(): string {
    return 'Create a book';
  }

  @Put(':id')
  update(): string {
    return 'Update a book';
  }

  @Delete(':id')
  delete(): string {
    return 'Delete a book';
  }
}
