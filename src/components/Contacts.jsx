import React from 'react'

const Contacts = () => {
  return (
    <div className='bg-[#080808]  flex justify-center z-10 py-25'>
      <div className='w-[75%] text-white bg-[#121212] p-10 flex justify-center rounded-xl font-mono'>
        <div className='bg-[#1F1F1F] w-[60%] mr-8 rounded-md '> 
          <form className=' p-5'>
            <h1 className='text-2xl font-semibold text-emerald-400 mb-4'>We’d Love to Hear from You</h1>
            <div className='flex flex-row pb-4'>

            <div className='w-[80%] my-2 mr-4 flex flex-col justify-between'>
              <label className='font-semibold'>Name</label>
              <input type="text" name="" id=""  className='border-2 bg-[#333] py-1 px-4 rounded-sm'/>
            </div>
            <div className=' w-[80%] my-2 flex flex-col justify-between'>
              <label className='font-semibold'>E-mail</label>
              <input type="text" name="" id="" className='border-2 bg-[#333] py-1 px-4 rounded-sm'/>
            </div>
            </div>

            <div className=''>
              <label className='font-semibold'>Message</label>
              <textarea type="text" name="" id="" className='border-2 bg-[#333] w-full h-[100px] py-1 px-4 rounded-sm'/>
            </div>

            <div className='mt-4 '>
              <button type='submit' 
              className='rounded-md bg-emerald-600 hover:scale-105 transition-transform duration-500 text-gray-200 py-2 px-4 text-xl font-semibold cursor-pointer'>
                Send Message
              </button>
            </div>
          </form>  
        </div>
        
        <div className='bg-[#1F1F1F] w-[35%] rounded-md p-5'>
          <h1 className='text-2xl text-emerald-400 font-semibold'>Contact Info</h1>
          <p className='my-2'> <strong>Email :</strong> 
            <a href='mailto:keshavks9810@gmail.com '
            className='mx-2'>keshavks9810@gmail.com</a></p>
          <p className=' my-2'><strong>Location :</strong> 
          <a href='mailto:keshavks9810@gmail.com' className='mx-2'>Faridabad</a></p>
          
           <p className='my-2 font-bold'> <a href='https://linkedin.com/in/keshavks' className='hover:text-blue-300 transition-colors duration-200'>🌐Linkedin</a></p>
         
          <div>
          <h1 className='font-bold text-xl mt-8 text-emerald-500'>💻Coding Profile</h1>
           <p className='my-2 '> <a href='https://leetcode.com/u/keshavks/' className='hover:text-yellow-500 transition-colors duration-200'>🔗Leetcode</a></p>
           <p className='my-2'> <a href='https://www.geeksforgeeks.org/user/keshavks/' className='hover:text-green-400 transition-colors duration-200'>🔗GeeksForGeeks</a></p>
           <p className='my-2'> <a href='https://github.com/keshavks21' className='hover:text-black transition-colors duration-200'>🔗Github</a></p>
          </div>
      </div> 
        </div>
    </div>
  )
}

export default Contacts
