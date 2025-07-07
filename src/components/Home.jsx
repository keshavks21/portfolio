import React from 'react'
import profileImg from "../utils/KeshavImage.jpeg"

const Home = () => {
  return (
     <div className="w-screen min-h-screen pt-10 md:pt-0 bg-[#080808] flex flex-col-reverse md:flex-row md:justify-evenly md:items-center">
            <div className='text-white px-6 mb-10 md:px-0 md:mb-0 md:w-[30%] font-mono '>
                <h1 className='text-5xl font-bold text-green-600 my-4'>Keshav Kumar</h1>
                <p className='my-4 text-xl '>I'm a full-stack <span className='text-green-400'>MERN developer </span> with strong problem-solving skills, focused on building smooth, scalable websites and writing clean, reliable backend code.</p>
                <div className='p-4 w-[50%] mt-10 bg-green-600 flex justify-center font-semibold text-2xl rounded-md shadow-lg shadow-green-400/40 hover:scale-105 transition-transform duration-300'>Developer</div>
            </div>
            <div className='p-16 md:p-0'>
                <img src={profileImg} alt="" className=' rounded-full border-5 border-green-600 hover:scale-105 transition-transform duration-300 '/>
            </div>
    </div>
  )
}

export default Home
