import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
import Body from "./components/Body";

const App = ()=>{
  return (
    <div>
      <BrowserRouter>
        <Routes path="/" element={<Body/>}>
          <Route path="/" element={<Body/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;