import React from "react";
import {Container} from "react-bootstrap";




/*const CLIENT_ID = 'dbecbbca8a7845639c96927afbb145ed'
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT= 'http://accounts.spotify.com/authorize';
const scopes= ["user-read-email", 
"user-read-private","user-library-read",
"user-library-modify","user-read-playblack-state",
"user-modify-playback-state"]
*/



const AUTH_URL= "https://accounts.spotify.com/authorize?client_id=dbecbbca8a7845639c96927afbb145ed&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"



export default function Login() {

        return (
          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
              Login With Spotify
            </a>
          </Container>
        )
      }


    
   /* return (
       
       <Container className="d-flex justify-content-center align-items-center" style= {{minHeight: "100vh"}}>
        
        <a className='btn btn-success btn-lg' 
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}
        &redirect_uri=${REDIRECT_URI}
        &response_type=code&scopes=${scopes.join("%20")}`}> Login with Spotify 
        </a>
        </Container>
    )

}
  */