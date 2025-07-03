import React from 'react'
import project1Img from "../utils/project1.png"
import project2Img from "../utils/project2.png"

const Projects = () => {
  return (
    <div className='w-screen h-screen bg-[#080808]  flex justify-center'>
      <div className='w-[75%]  text-white relative top-20 p-10'>
        <div className='w-full h-[60%] bg-green-500 rounded-2xl p-8 flex flex-row'>
            <img src={project1Img} alt="project image" 
            className='w-[50%] mx-4 p-2'
            />
            <div className='mx-4 p-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa maiores at aperiam odit explicabo nulla quae quis? Soluta voluptates inventore ex aliquam praesentium laudantium quas alias! Voluptatum atque blanditiis sapiente.
            </div>
        </div>

        <div className='w-full h-[60%] bg-green-500 rounded-2xl p-8 flex flex-row my-4'>
            <img src={project2Img} alt="project image" 
            className='w-[50%] mx-4 p-2'
            />
            <div className='mx-4 p-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa maiores at aperiam odit explicabo nulla quae quis? Soluta voluptates inventore ex aliquam praesentium laudantium quas alias! Voluptatum atque blanditiis sapiente.
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
