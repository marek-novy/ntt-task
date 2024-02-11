import { Injectable } from '@nestjs/common';
import { DogDto } from './dtos/dog.dto';

@Injectable()
export class DogsService {
  getNthPageOfDogs(page: number): DogDto[] {
    page;
    return [];
  }
}
