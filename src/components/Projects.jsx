import React from 'react'
import project1Img from "../utils/project1.png"
import project2Img from "../utils/project2.png"
import project3Img from "../utils/project3.png"
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='bg-[#080808]  flex justify-center z-10 py-25'>
      <div className='w-[75%]  text-white p-4'>
        {/* Project1 */}
        <div className='w-full bg-[#1F1F1F] text-gray-200 rounded-2xl p-8 flex flex-row mb-10 hover:scale-105 transition-transform duration-600'>
            <img src={project1Img} alt="project image" 
            className='w-[45%] rounded-2xl  object-cover shadow-lg'/>
            <div className='mx-4 p-2 '>
                <h1 className='text-emerald-400 text-3xl font-bold mb-2'>DevCirle <span className='text-sm text-gray-400 ml-5'>(Full Stack)</span></h1>
                <h3 className='text-gray-400 text-sm mb-4'>A platform for developers to create profiles, connect, and collaborate. DevCircle lets users edit profiles, authenticate securely, and interact in a modern, responsive UI.</h3>
                <div className='my-2 '>
                  <h2 className='mb-2 text-gray-300 font-semibold'>Key Features :</h2>
                  <ul className='grid grid-cols-2 gap-2  text-md text-gray-300 '>
                    <li className='bg-[#333] rounded-md px-2 py-1'>🔐 JWT Authentication</li>
                    <li className='bg-[#333] rounded-md px-2 py-1'>🧾 RESTful APIs</li>
                    <li className='bg-[#333] rounded-md px-2 py-1'>🧑‍💻 Editable Profiles</li>
                    <li className='bg-[#333] rounded-md px-2 py-1'>📱 Mobile Responsive</li>
                  </ul>
                </div>

                <div className='my-4 flex flex-wrap gap-2 text-xs py-2'>
                  {["Node.js","React.js","Express.js","MongoDB","Tailwind","Socket.IO"].map((techStack,index)=>(
                    <span key={index} className='bg-[#333] text-gray-300 px-2 py-1 rounded-md'>
                      {techStack}
                    </span>
                  ))}
                </div>
                <div className='flex gap-5 font-semibold text-emerald-400'>
                  <a href="https://devcircle.site"
                  target='_blank'
                  rel='noopener noreferrer'
                  >🌐Live Demo</a>
                  <a href="https://github.com/keshavks21/devCircle"
                  target='_blank'
                  rel='noopener noreferrer'
                  >💻GitHub</a>
                </div>
            </div>
        </div>

        {/* Project2 */}
        <div className='w-full bg-[#1F1F1F] text-gray-200 rounded-2xl p-8 flex flex-row mb-10 hover:scale-105 transition-transform duration-600'>
            <img src={project2Img} alt="project image" 
            className='w-[45%] rounded-2xl  object-cover shadow-lg'/>
            <div className='mx-4 p-2 '>
                <h1 className='text-emerald-400 text-3xl font-bold mb-2'>Netflix-Clone <span className='text-sm text-gray-400 ml-5'>(Frontend)</span></h1>
                <h3 className='text-gray-400 text-sm mb-4'>A full-stack clone of Netflix with dynamic movie content using TMDB API, user authentication, and responsive design.</h3>
                <div className='my-2 '>
                  <h2 className='mb-2 text-gray-300 font-semibold'>Key Features :</h2>
                  <ul className='grid grid-cols-2 gap-2  text-md text-gray-300 '>
                    <li className='bg-[#333] rounded-md px-2 py-1'>🔐 JWT Authentication</li>
                    <li className='bg-[#333] rounded-md px-2 py-1'>🧾 RESTful APIs</li>
                    <li className='bg-[#333] rounded-md px-2 py-1'>🧑‍💻 Editable Profiles</li>
                    <li className='bg-[#333] rounded-md px-2 py-1'>📱 Mobile Responsive</li>
                  </ul>
                </div>

                <div className='my-4 flex flex-wrap gap-2 text-xs py-2'>
                  {["React", "Firebase Auth", "Tailwind", "TMDB API"].map((techStack,index)=>(
                    <span key={index} className='bg-[#333] text-gray-300 px-2 py-1 rounded-md'>
                      {techStack}
                    </span>
                  ))}
                </div>
                <div className='flex gap-5 font-semibold text-emerald-400'>
                  <a href="https://netflione.netlify.app/"
                  target='_blank'
                  rel='noopener noreferrer'
                  >🌐Live Demo</a>
                  <a href="https://github.com/keshavks21/Netflix-Project"
                  target='_blank'
                  rel='noopener noreferrer'
                  >💻GitHub</a>
                </div>
            </div>
        </div>
        {/* Project3 */}
        <div className='w-full bg-[#1F1F1F] text-gray-200 rounded-2xl p-8 flex flex-row mb-10 hover:scale-105 transition-transform duration-600'>
            <img src={project3Img} alt="project image" 
            className='w-[45%] rounded-2xl  object-cover shadow-lg'/>
            <div className='mx-4 p-2 '>
                <h1 className='text-emerald-400 text-3xl font-bold mb-2'>Amazone-Clone  <span className='text-sm text-gray-400 ml-5'>(Frontend)</span></h1>
                <h3 className='text-gray-400 text-sm mb-4'>A full-stack clone of Netflix with dynamic movie content using TMDB API, user authentication, and responsive design.</h3>

                <div className='my-4 flex flex-wrap gap-2 text-xs py-2'>
                  {["HTML", "CSS"].map((techStack,index)=>(
                    <span key={index} className='bg-[#333] text-gray-300 px-2 py-1 rounded-md'>
                      {techStack}
                    </span>
                  ))}
                </div>
                <div className='flex gap-5 font-semibold text-emerald-400'>
                  <a href="https://amazonne.netlify.app/"
                  target='_blank'
                  rel='noopener noreferrer'
                  >🌐Live Demo</a>
                  <a href="https://github.com/keshavks21/amazon-clone"
                  target='_blank'
                  rel='noopener noreferrer'
                  >💻GitHub</a>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
