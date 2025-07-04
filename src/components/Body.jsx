import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

const Body = ()=>{
    return (
        <div className="w-screen min-h-screen flex flex-col bg-[#080808] overflow-x-hidden">
            <Navbar/>
            <div className="flex-grow">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Body;