import React from 'react'
import { motion } from "framer-motion";
import profileImg from "../utils/KeshavImage.jpeg"
import Skills from './Skills'
import Gallery from './Gallery'
import Certificates from './Certificates'

const Home = () => {
  return (
    <div>
        <div className="w-screen min-h-screen pt-10 md:pt-0 bg-[#080808] flex flex-col-reverse md:flex-row md:justify-evenly md:items-center">
            <div className='text-white px-6 mb-10 md:px-0 md:mb-0 md:w-[30%] font-mono '>
                <h1 className='text-5xl font-bold text-green-400 my-4'>Keshav Kumar</h1>
                <p className='my-4 text-xl '>I'm a full-stack <span className='text-green-400'>MERN developer </span> with strong problem-solving skills, focused on building smooth, scalable websites and writing clean, reliable backend code.</p>
                <div className='p-4 w-[50%] mt-10 bg-green-600 flex justify-center font-semibold text-2xl rounded-md shadow-lg shadow-green-400/40 hover:scale-105 transition-transform duration-300'>Developer</div>
            </div>
<motion.img
  drag
  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // keeps it in place
  dragElastic={0.2} // makes dragging feel "stretchy"
  whileHover={{ scale: 1.2 }}
  src={profileImg}
  alt="Profile"
  className="rounded-full border-4 border-green-600 cursor-grab"
  transition={{ type: "spring", stiffness: 200, damping: 10 }} // smooth & slow
/>


            {/* <div className='p-16 md:p-0'>
                <img src={profileImg} alt="" className=' rounded-full border-5 border-green-600 hover:scale-105 transition-transform duration-300 '/>
            </div> */}
            
      </div>
      <Skills />
      <Gallery/>
      <Certificates/>
    </div>
    
  )
}

export default Home
