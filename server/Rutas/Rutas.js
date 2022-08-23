import {BrowserRouter, Route, Routes,} from "react-router-dom";
import HomePage from "./pages/HomePage"
import MainShow from "./pages/MainShow";


export default function Rutas() {

    return( 

<BrowserRouter>
<Routes>

<Route path="/login" element= {<HomePage />}></Route>
<Route exact path='/mainshow' element= {<MainShow/>}/>
</Routes>
</BrowserRouter>
)

}

