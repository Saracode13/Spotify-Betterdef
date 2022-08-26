
/*import {Router} from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import {dotenvconfig} from 'dotenv'

dotenvconfig()


const router = Router();

router.post('/login', (req,res)=>{
	const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
    })

    console.log(res.json)
});


export default router;*/
