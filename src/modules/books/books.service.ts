import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Book } from './entities/Book';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private readonly booksModel: typeof Book,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.booksModel.findAll();
  }

  async findOne(id: number): Promise<Book> {
    return this.booksModel.findByPk(id);
  }

  async create(book: Book): Promise<void> {
    await this.booksModel.create(book);
  }

  async update(id: number, book: Book): Promise<Book> {
    await this.booksModel.update(book, {
      where: { id },
    });

    return this.findOne(book.id);
  }

  async remove(id: number): Promise<void> {
    const book = await this.findOne(id);
    await book.destroy();
  }
}
