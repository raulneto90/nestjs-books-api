import { BookDTO } from '../dtos/BookDTO';
import { CreateBookDTO } from '../dtos/CreateBookDTO';

export interface IBooksRepository {
  create(data: CreateBookDTO): Promise<BookDTO>;
  findAll(): Promise<BookDTO[]>;
  findById(id: number): Promise<BookDTO>;
  findByCode(code: string): Promise<BookDTO>;
  update(id: number, data: BookDTO): Promise<void>;
  delete(id: number): Promise<void>;
  truncateTable(): Promise<void>;
}
