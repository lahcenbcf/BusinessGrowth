import React, { useEffect, useState } from 'react'
import ProfilePicture from '../../assests/profile-user-svgrepo-com.svg'
import emailIcon from '../../assests/email-svgrepo-com.svg'
import linkedin from '../../assests/linkedin-svgrepo-com.svg'
import {updateUser} from '../../api/user'
import  {getOneUser} from '../../api/user.js'
import { Link } from 'react-router-dom'
const ProfilePage = () => {
    const data=JSON.parse(localStorage.getItem('userLogged'))
    console.log(data)
    const [link,setLink]=useState(false)
    const [profileDetails,setProfileDetails]=useState({})
    const [inputProfile,setInputProfile]=useState('')

    const updateTask=async (e)=>{
        e.preventDefault()
        await updateUser({_id:profileDetails._id,linkedin:inputProfile})

    }
    const getData=async()=>{
        const res=await getOneUser({password:data.password})
        if(res.data){
            console.log('Hi')
            setProfileDetails(res.data)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(profileDetails)
  return (
    <div className='h-auto w-[400px] mx-auto my-20'>
    <div className=' mx-auto border border-[#137E98] p-4'>
      <div className='h-[30%] w-full mx-auto flex justify-around'>
        <img src={ProfilePicture} height="60px" width="60px" alt='#' />
        
        <div className='flex flex-col'>
            <h3 className='text-md font-bold text-start'>{profileDetails.username}</h3>
            <p className='text-start'>Hello I am <span className='font-bold'>{profileDetails.username}</span> the president of   </p>
            
        </div>
        </div>
        
  </div>
  <div className='border rounded-md p-3 h-[60px] my-2 flex justify-around gap-1 items-center'>
    <img src={emailIcon} height="30px" width="30px" />
    <h3 className='font-semibold'>{profileDetails.email}</h3>
</div>

<div className='border rounded-md p-3 h-[60px] my-2 flex gap-3 flex justify-around items-center'>
    <img src={linkedin} height="30px" width="30px" />
    
        {profileDetails.linkedin ? <h3 className='font-semibold'>{profileDetails.email}</h3> :  !link ?
        <button className='px-3 py-1 tex-white bg-[#137E98] rounded-sm' onClick={()=>{setLink(true)}}>share your linkedin</button>
    : <input type="text" placeHolder="linkedin name" className="p-2 rounded-sm" onChange={(e)=>{
            setInputProfile(e.target.value)
    }} />
    }
    
    
    
</div>
<button className={`${!link && 'hidden'} text-start bg-[#137E98] p-2 text-white rounded-sm ml-2`} onClick={updateTask}>update</button>
   <div className='my-4 flex justify-start items-center gap-4'>
    <Link to="/Home"><button className="bg-[#137E97] p-3 rounded-sm">back to home</button> </Link>
    <Link to="/"><button className="bg-[#137E97] p-3 rounded-sm">logout</button> </Link>
   </div>
    </div>
    

  )
}

export default ProfilePage
