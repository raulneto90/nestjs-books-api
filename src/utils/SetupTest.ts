import { IBooksRepository } from '@modules/books/repositories/IBooksRepository';
import { BooksRepository } from '@modules/books/repositories/implementations/BooksRepository';
import { TestingModule } from '@nestjs/testing';

export class SetupTest {
  private booksRepository: IBooksRepository;

  constructor(module: TestingModule) {
    this.booksRepository = module.get<IBooksRepository>(BooksRepository);
  }

  public async clearDatabase(): Promise<void> {
    await this.booksRepository.truncateTable();
  }
}
