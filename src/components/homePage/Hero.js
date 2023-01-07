import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from "../../assests/undraw_finance_re_gnv2.svg"
const Hero = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-around my-[20px] md:my-[120px] '>
        <div className='w-[50%] relative p-4'>
            <img src={heroImg} className="mx-auto animate-none  md:animate-bounce transition-all ease-linear" height='400px' width='400px' />
        </div>
      <div className='flex flex-col gap-6 w-[50%] mx-auto'>
        <h1 className=' text-1xl md:text-4xl text-white text-start w-[70%]'>
            A sample and a smart Tool That will Help Grow Your Business
        </h1>
        <p className='hidden md:block md:text-sm text-start text-white w-[70%] font-semibold'>
            our app allow you to grow your business and find solutions for 
            future problems so it is your way to go ahead and shine
        </p>
        <Link to="/Profile"><button className='text-[white] font-semibold text-slate p-2 rounded-sm bg-[#137E98] w-fit hover:bg-white hover:text-[#137E98]'>see profile</button></Link>
      </div>
      <div></div>
    </div>
  )
}

export default Hero
