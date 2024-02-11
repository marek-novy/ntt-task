export interface DogDto {
    breedName: string;
    synonyms?: string[];
  }
  

  export interface PaginableDogsDto {
    dogs: DogDto[];
    page: number;
    totalPages: number;
  }