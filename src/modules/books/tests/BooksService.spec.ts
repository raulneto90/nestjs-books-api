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

      jest
        .spyOn(BooksRepository.prototype, 'create')
        .mockResolvedValue(bookEntityMock());

      const book = await booksService.create(createBookMock());

      expect(book).toHaveProperty('id');
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

  describe('findAll()', () => {
    it('should be able to find books', async () => {
      jest
        .spyOn(BooksRepository.prototype, 'findAll')
        .mockResolvedValue([bookEntityMock()]);

      const books = await booksService.findAll();

      expect(books).toHaveLength(1);
      expect.arrayContaining(books);
    });
  });

  describe('findOne()', () => {
    it('should be able to find one book', async () => {
      const existingBook = bookEntityMock();

      jest
        .spyOn(BooksRepository.prototype, 'findById')
        .mockResolvedValue(existingBook);

      const book = await booksService.findOne(1);

      expect(book).toMatchObject(existingBook);
    });
  });

  describe('update()', () => {
    it('should be able to update one book', async () => {
      const existingBook = bookEntityMock();
      existingBook.name = 'Updated Book';

      jest.spyOn(BooksRepository.prototype, 'update').mockResolvedValue(null);

      expect(await booksService.update(1, existingBook));
    });
  });

  describe('remove()', () => {
    it('should be able to remove one book', async () => {
      jest.spyOn(BooksRepository.prototype, 'delete').mockResolvedValue(null);

      expect(await booksService.remove(1));
    });
  });
});
