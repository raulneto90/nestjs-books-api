import { Injectable } from '@nestjs/common';

import { Book } from './entities/Book';

@Injectable()
export class BooksService {
  private books: Book[] = [];

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
