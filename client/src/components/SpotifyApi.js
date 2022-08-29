import SpotifyWebApi from "spotify-web-api-node";


const spotifyApi = new SpotifyWebApi({
    client_id: process.env.REACT_APP_CLIENT_ID,
    secret: process.env.REACT_APP_SECRET,
    redirect_uri:process.env.REACT_APP_REDIRECT_URI,
  })
  export default spotifyApi