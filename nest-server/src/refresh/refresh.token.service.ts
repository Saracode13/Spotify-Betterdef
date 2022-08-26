import { Injectable } from '@nestjs/common';
import SpotifyWebApi from 'spotify-web-api-node';

@Injectable()
export class RefreshService {
  async postRefresh(refreshToken: any): Promise<any> {
    const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:3000',
      clientId: 'dbecbbca8a7845639c96927afbb145ed',
      clientSecret: '7b7747e9ccd445eab26c930140cfe316',
      refreshToken,
    });

    return await spotifyApi.refreshAccessToken();
  }
}
