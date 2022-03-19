import { OmitType } from '@nestjs/swagger';

import { BookDTO } from './BookDTO';

export class UpdateBookDTO extends OmitType(BookDTO, [
  'id',
  'createdAt',
  'updatedAt',
]) {}
