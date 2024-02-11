import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { PaginableDogsDto } from './dtos/paginable-dogs.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getDogsPaginated(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ): PaginableDogsDto {
    return this.dogsService.getNthPageOfDogs(page);
  }
}
