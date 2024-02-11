import { Controller, Get, Query } from '@nestjs/common';
import { DogDto } from './dtos/dog.dto';

@Controller('dogs')
export class DogsController {
  @Get()
  getDogsPaginated(@Query('page') page: number): DogDto[] {
    page;
    return [];
  }
}
