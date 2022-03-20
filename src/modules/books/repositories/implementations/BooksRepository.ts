import { BookDTO } from '@modules/books/dtos/BookDTO';
import { CreateBookDTO } from '@modules/books/dtos/CreateBookDTO';
import { Book } from '@modules/books/entities/Book';
import { InjectModel } from '@nestjs/sequelize';

import { IBooksRepository } from '../IBooksRepository';

export class BooksRepository implements IBooksRepository {
  constructor(
    @InjectModel(Book)
    private repository: typeof Book,
  ) {}

  async create(data: CreateBookDTO): Promise<BookDTO> {
    const book = await this.repository.create(data);
    return book;
  }

  async findAll(): Promise<BookDTO[]> {
    return this.repository.findAll();
  }

  async findById(id: number): Promise<BookDTO> {
    return this.repository.findByPk(id);
  }

  async findByCode(code: string): Promise<BookDTO> {
    return this.repository.findOne({ where: { code } });
  }

  async update(id: number, data: BookDTO): Promise<void> {
    await this.repository.update(data, { where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.repository.destroy({ where: { id } });
  }

  async truncateTable(): Promise<void> {
    await this.repository.sequelize.query('DELETE FROM books');
  }
}
