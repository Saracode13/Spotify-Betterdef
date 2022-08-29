import { Injectable } from '@nestjs/common';
import SpotifyWebApi from 'spotify-web-api-node';

@Injectable()
export class LoginService {
  async postLogin(code: any): Promise<any> {
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_SECRET,
    });

    return spotifyApi.authorizationCodeGrant(code);
  }
}
