import { Injectable } from '@nestjs/common';
import SpotifyWebApi from 'spotify-web-api-node';

@Injectable()
export class AuthService {
  private spotifyApi = new SpotifyWebApi();
  public async getAccessToken() {
    return this.spotifyApi.getAccessToken;
  } 
}