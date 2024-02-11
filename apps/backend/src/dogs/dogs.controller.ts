import {
  BadRequestException,
  Controller,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { PaginableDogsDto } from './dtos/paginable-dogs.dto';
import { InvalidPageRequestedError } from './errors/InvalidPageRequestedError';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getDogsPaginated(
    @Query('page', ParseIntPipe) page: number,
  ): PaginableDogsDto {
    try {
      return this.dogsService.getNthPageOfDogs(page);
    } catch (err) {
      if (err instanceof InvalidPageRequestedError) {
        throw new BadRequestException();
      }
    }
  }
}
