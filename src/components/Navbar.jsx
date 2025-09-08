import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[90%] p-6 bg-[#1B1B1B] absolute left-1/2 transform -translate-x-1/2 rounded-b-2xl z-20">
      <nav>
        <ul className="text-[#9C9C9C] flex justify-evenly text-sm md:text-xl font-semibold">
          <li className=" hover:text-green-400 transition-color hover:scale-110 transition-transform duration-500"><Link to={"/"} >Home</Link></li>
          <li className=" hover:text-green-400 transition-color hover:scale-110 transition-transform duration-500"><Link to={"/project"}>Project</Link></li>
          <li className=" hover:text-green-400 transition-color hover:scale-110 transition-transform duration-500"><a href="https://drive.google.com/file/d/1sJKqpZepnDwAxZf8EK1476-0ejIUa9EK/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li className=" hover:text-green-400 transition-color hover:scale-110 transition-transform duration-500"><Link to={"/contacts"}>Contact</Link></li>
         
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
