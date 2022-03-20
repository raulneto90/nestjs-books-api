import { BookDTO } from '../dtos/BookDTO';
import { CreateBookDTO } from '../dtos/CreateBookDTO';
import { UpdateBookDTO } from '../dtos/UpdateBookDTO';
import { Book } from '../entities/Book';

export interface IBooksRepository {
  create(data: CreateBookDTO): Promise<void>;
  findAll(): Promise<Book[]>;
  findById(id: number): Promise<Book>;
  findByCode(code: string): Promise<BookDTO>;
  update(id: number, data: UpdateBookDTO): Promise<void>;
  delete(id: number): Promise<void>;
}
