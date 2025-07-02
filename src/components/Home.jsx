import React from 'react'
import profileImg from "../utils/KeshavImage.jpeg"

const Home = () => {
  return (
     <div className="w-screen h-screen bg-[#080808] flex justify-evenly items-center ">
            <div className='text-white w-[30%] font-mono'>
                <h1 className='text-5xl font-bold'>Keshav Kumar</h1>
                <p className='my-4 text-xl '>Hi, I'm a MERN stack developer with strong programming skills and a passion for building scalable, user-friendly web applications.</p>
                <div className='p-4 w-[50%] bg-[#3F8E00] flex justify-center font-semibold text-xl rounded-md shadow-lg shadow-[#62BA1B]/40'>Developer</div>
            </div>
            <div >
                <img src={profileImg} alt="" className='rounded-full'/>
            </div>
    </div>
  )
}

export default Home
