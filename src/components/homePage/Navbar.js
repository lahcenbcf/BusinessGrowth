import React, { useState } from 'react'
import logo from '../../assests/IMG_20230107_031054-removebg.png'
import {AiOutlineHome} from 'react-icons/ai'
import AboutIcon from '../../assests/about-description-help-svgrepo-com (1).svg'
import SolutionIcon from '../../assests/solution-svgrepo-com (1).svg'
import {IoIosCall} from 'react-icons/io'
import './style.css'
const Navbar = () => {
   const logout=()=>{
    localStorage.removeItem("userLogged")
   }
  return (
    <div className='container h-[70px] w-full flex justify-between items-center mx-auto'>
            <img src={logo} height="60px" width="60px"/>
            
            <ul className='hidden md:flex items-center gap-4'>
                <li><a href='#' className='text-white p-2 text-lg rounded-sm  hover:text-[#137E98]'>Home</a></li>
                <li><a href='#' className='text-white  p-2 text-lg rounded-sm hover:text-[#137E98]'>About</a></li>
                <li><a href='#' className='text-white  p-2 text-lg rounded-sm  hover:text-[#137E98]'>Services</a></li>
                <li><a href='#' className='text-white p-2 text-lg rounded-sm hover:text-[#137E98]'>Contact us</a></li>
                <li><a href='/' className='text-white p-2 text-lg bg-[#137E98] rounded-sm hover:rounded-sm hover:text-[#137E98] hover:bg-white' onClick={logout}>logout</a></li>
            </ul>

            <ul className='menu md:hidden flex w-[250px] h-[50px] justify-center items-center gap-7 fixed mx-auto border border-white rounded-sm p-2'>
                <li className=''><a href=''><AiOutlineHome color='#137E98' size={25} /></a></li>
                <li className=''><a href=''><img className='img' src={AboutIcon} height="25px" width="25px" /></a></li>
                <li className=''><a href=''><img className='img' src={SolutionIcon} color='#137E98' height="30px" width="30px" /></a></li>
                <li className=''><a href=''><IoIosCall color='#137E98' size={25} /></a></li>
            </ul>
    </div>
  )
}

export default Navbar
