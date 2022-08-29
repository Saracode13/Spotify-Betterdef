import React from "react"
import { Container } from "react-bootstrap"
import foto from '../imagenes/foto.png'


const AUTH_URL =`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function Login() {
  return (
<<<<<<< HEAD
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
=======
   
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
     <a className="btn btn-neon" href={AUTH_URL}>
      <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
        Login With Spotify
      </a>
    </Container>
  
>>>>>>> f647f1934c6eb5becccb47a22792a73af85bc31e
  )
}


