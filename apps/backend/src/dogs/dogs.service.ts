import { Injectable } from '@nestjs/common';
import { PaginableDogsDto } from './dtos/paginable-dogs.dto';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { DogEntity } from './entities/dog.entity';
import {
  mapDogsEntitiesToDtos,
  mapRawDogsToEntities,
} from './dogs.mapper-service';
import { InvalidPageRequestedException } from './exceptions/InvalidPageRequestedException';

@Injectable()
export class DogsService {
  private readonly dogs: DogEntity[];
  private readonly totalPages: number;

  constructor() {
    this.dogs = this.getDogs();
    this.totalPages = Math.ceil(this.dogs.length / 10);
  }

  getNthPageOfDogs(page: number): PaginableDogsDto {
    if (page <= 0 || page > this.totalPages) {
      throw new InvalidPageRequestedException(page);
    }
    const slicingNumber = (page - 1) * 10;

    return {
      dogs: mapDogsEntitiesToDtos(
        this.dogs.slice(slicingNumber, slicingNumber + 9),
      ),
      page,
      totalPages: this.totalPages,
    };
  }

  private getDogs(): DogEntity[] {
    const path = resolve(__dirname, '../../src/assets/dog-breeds.txt');
    try {
      return mapRawDogsToEntities(readFileSync(path, 'utf-8'));
    } catch (e) {
      console.error('Reading of dogs file errored...');
    }
  }
}
