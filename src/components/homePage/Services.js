import React, { useEffect } from 'react'
import analytic from '../../assests/analytics-statistics-svgrepo-com.svg'
import customers from "../../assests/target-audience-svgrepo-com.svg"
import gain from "../../assests/investment-growth-svgrepo-com.svg"
import crystale from "../../assests/crystal-ball-svgrepo-com.svg"
import { Link } from 'react-router-dom'
const Services = () => {
    const services=[
        {
            title:"Business Dataset Analytics",
            icon:analytic,path:"/services/analytics"
        },{title:"Customer sugmentation",
    icon:customers,path:"/services/analytics"},
        {title:"customer lifetime value",
    icon:gain,path:"/services/analytics"},
        {title:"Predecting customers next purchase",icon:crystale,path:"/services/analytics"}
    ]
  return (
    <div className='h-auto flex flex-col my-6 gap-y-4'>
      
      <div className='border-b-2 p-2 text-[#137E98] border-[#137E98] text-4xl mx-auto'>Our Services</div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-16 mx-auto my-10'>
           {
            services.map((item)=>(
                <Link to={item.path}>
                    <div className='h-[20x] w-[200px] px-5 p-3 text-1xl rounded-md flex flex-col items-center gap-4 shadow-lg border border-[#137E98]'>
                        <img src={item.icon} className="hover:scale-110 transition-all ease-linear" alt="#" />
                        <h3 className='text-slate-800 font-bold text-center'>{item.title}</h3>
                </div>
                </Link>
                
            ))
           }
        </div>
    </div>
  )
}

export default Services
