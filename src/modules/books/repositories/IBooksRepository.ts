import { BookDTO } from '../dtos/BookDTO';
import { CreateBookDTO } from '../dtos/CreateBookDTO';
import { UpdateBookDTO } from '../dtos/UpdateBookDTO';

export interface IBooksRepository {
  create(data: CreateBookDTO): Promise<void>;
  findAll(): Promise<BookDTO[]>;
  findById(id: number): Promise<BookDTO>;
  findByCode(code: string): Promise<BookDTO>;
  update(id: number, data: UpdateBookDTO): Promise<void>;
  delete(id: number): Promise<void>;
}
