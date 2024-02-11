import { DogDto } from './dtos/dog.dto';
import { DogEntity } from './entities/dog.entity';

export const mapRawDogsToEntities = (allDogs: string): DogEntity[] => {
  const splitDogs = allDogs.split('\n');
  return splitDogs.map(mapSingleRawDogToEntity);
};

const mapSingleRawDogToEntity = (dog: string): DogEntity => {
  return {
    breedNames: dog.split(', '),
  };
};

export const mapDogsEntitiesToDtos = (dogs: DogEntity[]): DogDto[] => {
  return dogs.map(mapSingleDogEntityToDto);
};

export const mapSingleDogEntityToDto = (dog: DogEntity): DogDto => {
  const breedName = dog.breedNames[0];
  const restOfNames = dog.breedNames.slice(1);
  const synonyms: string[] | undefined =
    restOfNames.length > 0 ? restOfNames : undefined;
  return {
    breedName,
    ...(synonyms && { synonyms }),
  };
};
