import SpotifyWebApi from "spotify-web-api-node";


const spotifyApi = new SpotifyWebApi({
    client_id: process.env.REACT_APP_CLIENT_ID,
    secret: process.env.REACT_APP_SECRET,
    redirect_uri:"http://localhost:3000",
  })
  export default spotifyApi