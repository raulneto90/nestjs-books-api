import { PickType } from '@nestjs/swagger';

import { BookDTO } from './BookDTO';

export class CreateBookResponseDTO extends PickType(BookDTO, ['id']) {}
