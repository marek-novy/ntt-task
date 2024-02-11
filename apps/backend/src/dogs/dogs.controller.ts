import { Controller, Get, Query } from '@nestjs/common';
import { DogDto } from './dtos/dog.dto';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getDogsPaginated(@Query('page') page: number): DogDto[] {
    return this.dogsService.getNthPageOfDogs(page);
  }
}
