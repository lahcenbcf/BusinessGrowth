import React, { useEffect, useState } from 'react'
import {RiLoginCircleLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { checkUser } from '../../api/user'
const Login = () => {
   const [logindata,setLoginData]=useState({data:"",password:""})
   const [errMsg,setErrMsg]=useState(true)
   const [succes,setSucces]=useState(false)
const submit=async(e)=>{
  e.preventDefault()
  const response=await checkUser(logindata)
  console.log(response)
  if(response.status===200){
    setSucces(true)
    localStorage.setItem('userLogged',JSON.stringify(logindata))
  }
}
useEffect(()=>{
  setErrMsg(false)
},[logindata])
  return (

    <div className='w-[300px] h-auto border rounded-sm p-6 mx-auto my-10 '>
      {errMsg && <h2>UnAuthotorized</h2>}
      {
        !succes ? <div className='flex flex-col gap-4'>
        <RiLoginCircleLine size={60} className="mx-auto my-4" color='#137E97' />
        <label className='text-start font-semibold text-sm ml-2'>username / email </label>
        <input type='text' autoComplete="off" placeholder='username/E-mail' className='w-[90%] border border-slate-500 rounded-sm p-2 mx-auto' onChange={(e)=>{setLoginData({...logindata,data:e.target.value})}}  required />
        <label className='text-start font-semibold text-sm ml-2'>password</label>
        <input  type='password' placeholder='mot de passe' autoComplete="off" className='w-[90%] border border-slate-500 rounded-sm p-2 mx-auto' onChange={(e)=>{setLoginData({...logindata,password:e.target.value})}} required />
        <button className=' bg-[#137E98] text-white p-2 textstart' onClick={submit} >login</button>   
      </div>
      : <div>
        <h3 className='font-semibold'>you logged successufully</h3>
        <Link to="/Home">go to Home</Link>
      </div>
      }
      
    </div>
  )
}

export default Login
