import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DogBreedsController } from './app.controller';
import { DogBreedsService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend', 'dist'),
    }),
  ],
  controllers: [DogBreedsController],
  providers: [DogBreedsService],
})
export class AppModule {}
