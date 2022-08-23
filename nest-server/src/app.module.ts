import { Module } from '@nestjs/common';
import { TracksModule } from './tracks/tracks.module';
import { AuthModule } from './auth/auth.module';
import { TracksController } from './tracks/tracks.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [TracksModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
