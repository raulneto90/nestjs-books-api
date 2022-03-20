import * as request from 'supertest';

import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { createBookMock } from '@utils/mocks/BooksMock';
import { SetupTest } from '@utils/SetupTest';

import { AppModule } from '../../../app.module';

describe('Books E2E', () => {
  let app: INestApplication;
  let setupTest: SetupTest;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    setupTest = new SetupTest(module);

    app = module.createNestApplication();

    await app.init();
  });

  beforeEach(async () => {
    await setupTest.clearDatabase();
  });

  afterAll(async () => {
    await setupTest.clearDatabase();
    await app.close();
  });

  describe('create()', () => {
    it('should be able to create new book', async () => {
      await request(app.getHttpServer())
        .post('/books')
        .send({ ...createBookMock() })
        .expect(201);
    });

    it('should not be able to create new book with same code', async () => {
      await request(app.getHttpServer())
        .post('/books')
        .send({ ...createBookMock() })
        .expect(201);

      await request(app.getHttpServer())
        .post('/books')
        .send({ ...createBookMock() })
        .expect(400);
    });
  });

  describe('findAll()', () => {
    it('should be able to find books', async () => {
      await request(app.getHttpServer())
        .post('/books')
        .send({ ...createBookMock() })
        .expect(201);

      const getBooksResponse = await request(app.getHttpServer())
        .get('/books')
        .expect(200);

      expect(getBooksResponse.body).toHaveLength(1);
    });
  });

  describe('findOne()', () => {
    it('should be able to find one book', async () => {
      const createBookResponse = await request(app.getHttpServer())
        .post('/books')
        .send({ ...createBookMock() })
        .expect(201);

      const getBooksResponse = await request(app.getHttpServer())
        .get(`/books/${createBookResponse.body.id}`)
        .expect(200);

      expect(getBooksResponse.body).toHaveProperty('id');
    });
  });

  describe('update()', () => {
    it('should be able to update one book', async () => {
      const createBookResponse = await request(app.getHttpServer())
        .post('/books')
        .send({ ...createBookMock() })
        .expect(201);

      await request(app.getHttpServer())
        .put(`/books/${createBookResponse.body.id}`)
        .send({ ...createBookMock() })
        .expect(204);
    });
  });

  describe('remove()', () => {
    it('should be able to remove one book', async () => {
      const createBookResponse = await request(app.getHttpServer())
        .post('/books')
        .send({ ...createBookMock() })
        .expect(201);

      await request(app.getHttpServer())
        .delete(`/books/${createBookResponse.body.id}`)
        .expect(204);
    });
  });
});
