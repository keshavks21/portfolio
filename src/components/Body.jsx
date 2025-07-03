import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

const Body = ()=>{
    return (
        <div className="w-screen h-screen bg-[#080808] overflow-x-hidden">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Body;