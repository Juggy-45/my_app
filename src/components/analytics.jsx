import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
    return (
        <div className='w-full bg-white'>
            <div className='w-full max-w-[1240px] my-[30px] py-[65px] mx-auto grid md:grid-cols-2'>
                <img className='flex justify-center' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center px-4'>
                    <p className='text-[#00df9a] font-bold text-center md:text-start'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-1xl text-gray-900 font-bold text-center md:text-start'>Manage Data Analytics Centrally</h1>
                    <p className='py-3 text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id quas quos nam voluptatibus! A quis modi tempora placeat voluptas dolor nam dicta incidunt sint, totam excepturi, inventore quam? Deserunt!</p>
                </div>
            </div>
        </div>
    )
}

export default Analytics