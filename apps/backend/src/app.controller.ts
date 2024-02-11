import { Controller, Get, Query } from '@nestjs/common';
import { DogBreedsService } from './app.service';

@Controller('dog-breeds')
export class DogBreedsController {
  constructor(private readonly dogBreedService: DogBreedsService) {}

  @Get()
  getDogBreeds(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): string[] {
    return this.dogBreedService.getDogBreeds(page, limit);
  }
}
