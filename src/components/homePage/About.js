import React, { useState } from 'react'
import logo from '../../assests/IMG_20230107_031054-removebg.png'
import './style.css'
const About = () => {
  const [clamp,setClamp]=useState(true)
  return (
    <div className='flex flex-col gap-y-6'>
      <div className='w-fit text-4xl mx-auto text-white border-b-2 border-white p-2'>About us</div>
      <div className='flex jutify-between h-auto p-6 w-[80%] mx-auto rounded-lg shadow-2xl bg-white'>
      <div className='flex flex-col gap-3 w-full p-3 md:w-[50%] '>
      <h1 className=' text-4xl text-[#137E98]'>All The Tools You Need <br/>In One Workspace</h1>
      <p className={`text-sm my-2 text-slate-700 text-start w-[70%] h-[60px] overflow-hidden ${clamp ? 'line-clamp-1' : 'line-clamp-4'} `} >a lot of time is spent on accont finance by business people,On average, people spend 1.8 hours per day searching for information from the internet or the data pool of an organization. It takes 9.3 hours per week on average. As the data growth is multiplying every passing day, enterprises and organizations are now suggested to use AI tools,like Our app, by using It you will save a lot of time,money and effort. </p>
      <button onClick={()=>{
        setClamp(!clamp)
      }} className='text-slate text-[#137E98] font-semibold p-2 rounded-sm border border-[#137E98] bg-white w-fit hover:bg-[#137E98] hover:text-white'>read more</button>
      </div>
      
      <div className='hidden md:block w-[50%]'>
      <img src={logo} height='300px' width='300px' />
      </div>
    </div>
    </div>
    
  )
}

export default About
