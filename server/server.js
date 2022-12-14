
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import SpotifyWebApi from "spotify-web-api-node"
import lyricsFinder from "lyrics-finder";




const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


 
app.post("/login", (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri:"http://localhost:3000",
    clientId:"dbecbbca8a7845639c96927afbb145ed",
    clientSecret:"7b7747e9ccd445eab26c930140cfe316",
  })
  console.log ({redirectUri:"http://localhost:3000",
  clientId:"dbecbbca8a7845639c96927afbb145ed",
  clientSecret:"7b7747e9ccd445eab26c930140cfe316"})

  
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
        console.log(err)
        res.sendStatus(400)
      })
  })


app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_SECRET,
    refreshToken,
  })


  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})


app.get("/lyrics", async (req, res) => {
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) || "No Lyrics Found"
  res.json({ lyrics })
})

app.listen(3001,()=> console.log("Server running at http://localhost:3001"))

    
    
    

