import { BadRequestException } from '@nestjs/common';

export class InvalidPageRequestedException extends BadRequestException {
  constructor(requestedPage: number) {
    super(`Requested page (${requestedPage}) is out of bounds...`);
  }
}
