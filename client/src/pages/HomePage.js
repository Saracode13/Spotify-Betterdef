import React from "react"
import { Container } from "react-bootstrap"
import foto from '../imagenes/foto.png'

const AUTH_URL =
  `https://accounts.spotify.com/authorize?client_id=3edd1e09d44943ea8908ac67d569d795&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center space-around" style={{backgroundColor: "#33FFA5"}} >
      <h1 className="d-flex justify-content-center align-items-center" style= {{color:"#3633FF", fontWeight: "700"}} >Disfruta de la música dondequiera que estés</h1>
      <img src= {foto} alt="" class="rounded" ></img>
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}>
      
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Login With Spotify
        </a>
         </Container> 
     </Container>
  )
}


