import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';
import { RefreshController } from './refresh/refresh.token.controller';
import { RefreshService } from './refresh/refresh.token.service';
import { LyricsController } from './lyrics.ts/lyrics.controller';
import { LyricsService } from './lyrics.ts/lyrics.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    AppController,
    LoginController,
    RefreshController,
    LyricsController,
  ],
  providers: [AppService, LoginService, RefreshService, LyricsService],
})
export class AppModule {}
