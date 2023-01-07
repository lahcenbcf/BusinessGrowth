import React from 'react'
import ContactImg from '../../assests/undraw_personal_email_re_4lx7 (3).svg'
function Contact() {
  return (
    <div className='bg-slate-200'>
        <div className='border-b-2 p-2 text-[#137E98] border-[#137E98] text-4xl mx-auto w-fit py-3'>Contact Us</div>
        <div className='container mx-auto flex justify-between items-center h-auto p-4'>
      <div className='hidden md:block w-[50%]'>
        <img src={ContactImg} />
      </div>
      <div className='w-[70%] my-14 mx-auto md:w-[50%]'>
        <form className='flex flex-col gap-3'>
            <input type='text' className='border p-2 border-[#137E98] outline-none bg-inherit' placeholder='full name' />
            <input type='text' className='border p-2 border-[#137E98] outline-none bg-inherit' placeholder='Email' />
            <input type='text' className='border p-2 border-[#137E98] outline-none bg-inherit' placeholder='subject' />
            
            <textarea placeholder='message' rows={10} cols={13} type='text' className='p-2 border border-[#137E98] bg-inherit' required />    
            <button className='w-fit p-2 bg-[#137E98] text-white font-semibold rounded-sm px-2'>send</button>
        </form>
      </div>
    </div>
    </div>
    
  )
}

export default Contact
