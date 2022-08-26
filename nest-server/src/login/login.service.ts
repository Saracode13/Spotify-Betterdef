import { Injectable } from '@nestjs/common';
import SpotifyWebApi from 'spotify-web-api-node';

@Injectable()
export class LoginService {
  async postLogin(code: any): Promise<any> {
    const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:3000',
      clientId: 'dbecbbca8a7845639c96927afbb145ed',
      clientSecret: '7b7747e9ccd445eab26c930140cfe316',
    });
    console.log({
      redirectUri: 'http://localhost:3000',
      clientId: 'dbecbbca8a7845639c96927afbb145ed',
      clientSecret: '7b7747e9ccd445eab26c930140cfe316',
    });

    return spotifyApi.authorizationCodeGrant(code);
  }
}

/*async getAccessToken(token: any): Promise<any> {
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_SECRET,
    });
    return spotifyApi.clientCredentialsGrant(token);
  }
}
*/
