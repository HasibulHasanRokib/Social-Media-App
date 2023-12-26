import React, { useState } from 'react'
import { VscSettingsGear, VscSignOut } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Profile from '../assets/Profile.jpg'

const DropDown = () => {
const [isOpen,setIsOpen]=useState(false)
  return (
  <>
        <button className='pr-2 flex' onClick={()=>setIsOpen(!isOpen)}>
        <img className="w-9 rounded-md shadow-sm" src={Profile} alt="" />
        </button>
        {isOpen ? (
          <ul className="absolute flex flex-col z-50 py-2 w-40 top-[45px] right-0 bg-white border-2 rounded-md  shadow-lg">
                <Link onClick={()=>setIsOpen(false)} to={'/setting'}><li className='text-sm flex items-center gap-2 p-2  hover:bg-slate-100'><VscSettingsGear/>Setting & Privacy</li></Link>
                <li className='text-sm flex items-center gap-2 p-2 hover:bg-slate-100'><VscSignOut />Sign Out</li>
            </ul>
        ):null}
  </>
  )
}

export default DropDown
