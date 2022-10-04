import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/people02.png'

function Card(props) {
  return (
    <div className='bg-white pt-[15%] pb-[10%]'>
    <div className='w-full max-w-[1240px] grid md:grid-cols-3 mx-auto gap-8'>
        <div className='w-full shadow-xl p-4 mb-5 rounded-lg hover:scale-105 duration-300 gap-5]'>
        <img className='w-20 mx-auto mt-[-3rem]' src={props.img} alt="/" />
        <p className="md:text-2xl sm:text-xl text-xl font-bold md:mt-6 sm:pt-2 text-center">{props.title}</p>
        <p className="md:text-4xl sm:text-xl text-xl font-bold  mt-4 text-center">{props.price}</p>
        <div className='text-center font-medium'>
              <p className='py-4 border-b mx-8 mt-8 '>500 GB Storage</p>
              <p className='py-4 border-b mx-8 '>1 Granted User</p>
              <p className='py-4 border-b mx-8 '>Send up to 2 GB</p>
              <button className="text-black bg-[#00df9a] py-3 w-[200px] mx-auto font-medium my-10 rounded-lg ">Start Trial
                </button>
        </div>
          
        </div>
        <div className='w-full shadow-xl p-4 mb-5 rounded-lg hover:scale-105 duration-300 gap-5Start bg-gray-100'>
        <img className='w-20 mx-auto mt-[-3rem]' src={Double} alt="/" />
        <p className="md:text-2xl sm:text-xl text-xl font-bold md:mt-6 sm:pt-2 text-center">Single User</p>
        <p className="md:text-4xl sm:text-xl text-xl font-bold  mt-4 text-center">$149</p>
        <div className='text-center font-medium'>
              <p className='py-4 border-b mx-8 mt-8 '>500 GB Storage</p>
              <p className='py-4 border-b mx-8 '>1 Granted User</p>
              <p className='py-4 border-b mx-8 '>Send up to 2 GB</p>
              <button className="text-black bg-[#00df9a] py-3 w-[200px] mx-auto font-medium my-10 rounded-lg ">Start Trial
                </button>
        </div>
          
        </div>
        <div className='w-full shadow-xl p-4 mb-5 rounded-lg hover:scale-105 duration-300 gap-5'>
        <img className='w-20 mx-auto mt-[-3rem]' src={Single} alt="/" />
        <p className="md:text-2xl sm:text-xl text-xl font-bold md:mt-6 sm:pt-2 text-center">Single User</p>
        <p className="md:text-4xl sm:text-xl text-xl font-bold  mt-4 text-center">$149</p>
        <div className='text-center font-medium'>
              <p className='py-4 border-b mx-8 mt-8 '>500 GB Storage</p>
              <p className='py-4 border-b mx-8 '>1 Granted User</p>
              <p className='py-4 border-b mx-8 '>Send up to 2 GB</p>
              <button className="text-black bg-[#00df9a] py-3 w-[200px] mx-auto font-medium my-10 rounded-lg ">Start Trial
                </button>
        </div>
          
        </div>
    </div>
</div>
  )
}

export default Card