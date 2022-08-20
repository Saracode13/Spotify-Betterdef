import { Module } from '@nestjs/common';

import { TracksModule } from './tracks/tracks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TracksModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
