import { OmitType } from '@nestjs/swagger';

import { BookDTO } from './BookDTO';

export class CreateBookDTO extends OmitType(BookDTO, [
  'id',
  'createdAt',
  'updatedAt',
]) {}
