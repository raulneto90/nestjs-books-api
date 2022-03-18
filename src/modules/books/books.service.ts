import { Injectable } from '@nestjs/common';

import { Book } from './models/Book';

@Injectable()
export class BooksService {
  private books: Book[] = [
    new Book('LIV001', 'The Lord of the Rings', 19.99),
    new Book('LIV002', 'The Hobbit', 9.99),
    new Book('LIV003', 'The Silmarillion', 29.99),
  ];

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async findOne(id: number): Promise<Book> {
    return this.books.find(book => book.id === id);
  }

  async create(book: Book): Promise<void> {
    this.books.push(book);
  }

  async update(book: Book): Promise<Book> {
    const bookIndex = this.books.findIndex(b => b.id === book.id);
    this.books[bookIndex] = book;
    return book;
  }

  async remove(id: number): Promise<void> {
    const bookIndex = this.books.findIndex(b => b.id === id);
    this.books.splice(bookIndex, 1);
  }
}
