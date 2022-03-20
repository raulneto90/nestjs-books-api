import { bookEntityMock, createBookMock } from '@utils/mocks/BooksMock';

import { BooksService } from '../books.service';
import { BooksRepository } from '../repositories/implementations/BooksRepository';

describe('BooksService', () => {
  let booksService: BooksService;

  beforeEach(() => {
    booksService = new BooksService(BooksRepository.prototype);
  });

  describe('create()', () => {
    it('should be able to create new book', async () => {
      jest
        .spyOn(BooksRepository.prototype, 'findByCode')
        .mockResolvedValue(null);

      jest.spyOn(BooksRepository.prototype, 'create').mockResolvedValue(null);

      expect(await booksService.create({ ...createBookMock() }));
    });

    it('should not be able to create new book with same code', async () => {
      jest
        .spyOn(BooksRepository.prototype, 'findByCode')
        .mockResolvedValue(bookEntityMock());

      await expect(
        booksService.create({ ...createBookMock() }),
      ).rejects.toBeInstanceOf(Error);
    });
  });
});
