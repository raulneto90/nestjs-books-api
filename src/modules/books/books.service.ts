import { HttpException, Inject, Injectable } from '@nestjs/common';

import { BookDTO } from './dtos/BookDTO';
import { CreateBookDTO } from './dtos/CreateBookDTO';
import { CreateBookResponseDTO } from './dtos/CreateBookResponseDTO';
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

  async findOne(id: number): Promise<BookDTO> {
    return this.booksRepository.findById(id);
  }

  async create(data: CreateBookDTO): Promise<CreateBookResponseDTO> {
    const bookExists = await this.booksRepository.findByCode(data.code);

    if (bookExists) {
      throw new HttpException('Book already exists', 400);
    }

    const book = await this.booksRepository.create(data);
    return { id: book.id };
  }

  async update(id: number, book: BookDTO): Promise<void> {
    await this.booksRepository.update(id, book);
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}
