import { BookDTO } from '@modules/books/dtos/BookDTO';
import { CreateBookDTO } from '@modules/books/dtos/CreateBookDTO';
import { UpdateBookDTO } from '@modules/books/dtos/UpdateBookDTO';
import { Book } from '@modules/books/entities/Book';
import { InjectModel } from '@nestjs/sequelize';

import { IBooksRepository } from '../IBooksRepository';

export class BooksRepository implements IBooksRepository {
  constructor(
    @InjectModel(Book)
    private repository: typeof Book,
  ) {}

  async create(data: CreateBookDTO): Promise<void> {
    await this.repository.create(data);
  }

  async findAll(): Promise<Book[]> {
    return this.repository.findAll();
  }

  async findById(id: number): Promise<Book> {
    return this.repository.findByPk(id);
  }

  async findByCode(code: string): Promise<BookDTO> {
    return this.repository.findOne({ where: { code } });
  }

  async update(id: number, data: UpdateBookDTO): Promise<void> {
    await this.repository.update(data, { where: { id } });
  }

  async delete(id: number): Promise<void> {
    const book = await this.findById(id);
    await book.destroy();
  }
}
