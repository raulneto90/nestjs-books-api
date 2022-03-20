import { Inject, Injectable } from '@nestjs/common';

import { BookDTO } from './dtos/BookDTO';
import { CreateBookDTO } from './dtos/CreateBookDTO';
import { Book } from './entities/Book';
import { IBooksRepository } from './repositories/IBooksRepository';
import { BooksRepository } from './repositories/implementations/BooksRepository';

@Injectable()
export class BooksService {
  constructor(
    @Inject(BooksRepository)
    private readonly booksRepository: IBooksRepository,
  ) {}

  async findAll(): Promise<BookDTO[]> {
    return this.booksRepository.findAll();
  }

  async findOne(id: number): Promise<Book> {
    return this.booksRepository.findById(id);
  }

  async create(data: CreateBookDTO): Promise<void> {
    const bookExists = await this.booksRepository.findByCode(data.code);

    if (bookExists) {
      throw new Error('Book already exists');
    }

    await this.booksRepository.create(data);
  }

  async update(id: number, book: Book): Promise<void> {
    await this.booksRepository.update(id, book);
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}
