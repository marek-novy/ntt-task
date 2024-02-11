import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class DogBreedsService {
  getDogBreeds(page: number, limit: number): string[] {
    const dogBreedsFilePath = 'src/assets/dog-breeds.txt';
    const dogBreeds = fs
      .readFileSync(dogBreedsFilePath, 'utf8')
      .split(/\r\n|, /);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return dogBreeds.slice(startIndex, endIndex);
  }
}
