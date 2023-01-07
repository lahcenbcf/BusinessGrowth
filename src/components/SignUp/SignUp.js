import React, { useEffect, useState } from 'react'
import {SiGnuprivacyguard} from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
import {createUser} from '../../api/user'
import { validateEmail } from './ValidateEmail'
const SignUp = () => {
  const [registerData,setRegisterData]=useState({username:"",email:"",password:""}) 
  const [emailisValid,setEmailisValid]=useState(null)
  const [passwordIsValid,setPasswordIsValid]=useState(null)
  const [actif,setActif]=useState(false)
  const navigate=useNavigate()
  const submitHandle=(e)=>{
    e.preventDefault()
    createUser(registerData)
    navigate('/login')
  }

  useEffect(()=>{
      if(registerData.password.length > 7
        && validateEmail(registerData.email)){
          
        setEmailisValid(true)

        setPasswordIsValid(true)
        setActif(true)
      }
  })

  return (
    <div className='w-[300px] h-auto border rounded-sm p-6 mx-auto my-10 flex flex-col gap-4'>
      <SiGnuprivacyguard size={60} className="mx-auto my-4" color='#137E97' />
      <label className='text-start font-semibold text-sm ml-2'>E-mail address</label>
      <input type='text'autoComplete="off" className={`w-[90%] border border-slate-400 ${emailisValid ? 'border-emerald-600' : 'border-red-600'} rounded-sm p-2 mx-auto`} onChange={(e)=>{setRegisterData({...registerData,email:e.target.value})}} placeholder='email' required />
      <label className='text-start font-semibold text-sm ml-2'>username</label>
      <input  type='text'autoComplete="off" className={`w-[90%] border border-slate-400 rounded-sm p-2 mx-auto`} placeholder='username' onChange={(e)=>{setRegisterData({...registerData,username:e.target.value})}}  required />
      <label className='text-start font-semibold text-sm ml-2'>password</label>
      <input type='password'autoComplete="off" className={`w-[90%] border border-slate-400 ${passwordIsValid ? 'border-emerald-600' : 'border-red-600'} rounded-sm p-2 mx-auto`} placeholder='mot de passe' onChange={(e)=>{setRegisterData({...registerData,password:e.target.value})}} required  />
      <button className=' bg-[#137E98] text-white p-2 textstart' onClick={submitHandle} disabled={!actif}>sign up</button>   
    </div>
  )
}

export default SignUp
