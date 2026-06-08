import React from 'react'
import {assets} from '../assets/assets'
import {NavLink} from 'react-router-dom'

const navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 front-medium'>
      
      <img src={assets.logo} className="w-32" alt="logo"/>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className=' flex flex-col items-center gap-1'>
          <p>Home</p>
        </NavLink>

      </ul>
    </div>
  )
}

export default navbar

