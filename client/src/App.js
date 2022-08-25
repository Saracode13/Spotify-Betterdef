import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../src/pages/HomePage";
import MainShow from "../src/pages/MainShow";


const code = new URLSearchParams(window.location.search).get("code")

function App() {
  
  return code ? <MainShow code={code} /> :<HomePage />
}

export default App;
