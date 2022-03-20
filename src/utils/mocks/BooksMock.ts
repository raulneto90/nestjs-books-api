import { BookDTO } from '@modules/books/dtos/BookDTO';
import { CreateBookDTO } from '@modules/books/dtos/CreateBookDTO';

export function createBookMock(): CreateBookDTO {
  return {
    code: 'LIV001',
    name: 'Livro 01',
    price: 10,
  };
}

export function bookEntityMock(): BookDTO {
  return {
    id: 1,
    code: 'LIV001',
    name: 'Livro 01',
    price: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
