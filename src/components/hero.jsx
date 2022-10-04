import React from "react";
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[-40px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:pt-6">Grow with data.</h1>
        <div className="flex justify-center text-center">
            <p className="md:text-3xl sm:text-2xl text-xl font-bold md:mt-6 sm: pt-2">Fast, flexible financing for</p>
            <Typed className="md:text-3xl sm:text-2xl text-xl font-bold md:mt-6 px-3 sm: pt-2"
                strings={[
                    'BTB', 'BTC', 'SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop >
                </Typed>
                </div>
             <p className="md:text-xl text-xl font-bold text-gray-500 py-5 max-w-[600px] mx-auto sm:px-5">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                    <button className="text-black bg-[#00df9a] py-3 w-[200px] mx-auto font-medium my-3 rounded-lg ">Click Here
                    </button>
                </div>
                </div>
  )
}

export default Hero