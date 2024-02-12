import { DogDto } from './dog.dto';

export class PaginableDogsDto {
  dogs: DogDto[];
  page: number;
  totalPages: number;
}
