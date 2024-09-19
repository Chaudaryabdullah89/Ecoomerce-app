import React from 'react'
import { assests } from "../assets"
const About = () => {
  return (
    <div className='flex items-center justify-between font-semibold text-md'>
        <img src= {assests.logo} alt="Logo" className='w-35' />
        
    </div>
  )
}

export default About