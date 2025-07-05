import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
import Body from "./components/Body";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Contacts from "./components/Contacts";

const App = ()=>{
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route index element={<Home/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;