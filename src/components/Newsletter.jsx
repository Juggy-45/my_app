import React from 'react'

function Newsletter() {
  return (
    <div className='py-[12%] max-w-[1440px] grid md:grid-cols-2 w-full px-[4%] gap-5 mx-auto'>
      <div className=' text-white max-w-[1240px] mx-auto w-full'>
        <p className='md:text-4xl sm:text-2xl text-xl font-bold md:mt-6 sm: pt-2'>
          Want tips & tricks to optimize your flow?
        </p>
        <p className='py-5'>Sign up to our newsletter and stay up to date.</p>
      </div>
      <div>
        <div className='flex justify-between px-12'>
          <input className='my-10 w-full mx-auto rounded-lg px-3 mr-4'
            type="email"
            placeholder='Enter Your Email' />
          <button className="text-black bg-[#00df9a] py-3 w-[200px] mx-auto font-medium my-10 rounded-lg ">Sign Up Now!
          </button>
        </div>
        <p className='text-white px-14'>We care bout the protection of your data. Read our{' '} <span className='text-[#00df9a]'>Privacy Policy.</span></p>
      </div>
    </div>
  )
}

export default Newsletter