import React from 'react'
import logo from '../../assests/IMG_20230107_031054-removebg.png'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-white'>
      <div className='flex flex-col gap-3 w-[300px]'>
        <img src={logo} width="100px" height="100px" className="mx-auto animate-bounce transition-all ease-linear" />
        <div className='flex flex-col gap-4'>
        <h3 className='text-center font-semibold text-md'>welcome to our app</h3>
        <p className='text-center text-md'>login with your account and go to try</p>
        <div className='flex justify-center gap-3 items-center my-2'>
          <Link to="/register" className='px-3 py-2 rounded-sm bg-[#30BADC] text-white'>sign up</Link>
          <Link to="/login" className='px-3 py-2 rounded-sm bg-[#30BADC] text-white'>login</Link>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Welcome
