import { CiSearch } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { VscBell, VscComment ,VscSettingsGear } from "react-icons/vsc";
import Profile from '../assets/Profile.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex border justify-between items-center px-2 lg:px-4 py-2 bg-white rounded-md m-2 shadow-sm">

       <div className='flex gap-2'>       
       <Link to={'/'}><FaFacebookSquare size={35} className="text-blue-700"/></Link>
        <form className='flex max-md:hidden gap-2 bg-[#eef0f2] items-center rounded-md shadow-sm w-full px-2'>
        <CiSearch size={25} className='shadow-sm cursor-pointer  rounded text-gray-400'/>
        <input className='outline-none lg:w-full bg-[#eef0f2]' type="text" name="" id="" placeholder="Search..." />
        </form> 
        </div>

        <ul className="flex items-center gap-2 lg:gap-5 justify-end">
        <li className="bg-[#eef0f2] rounded-md p-2"><a href="#"><VscSettingsGear size={20}/></a></li>
        <li className="bg-[#eef0f2] rounded-md p-2"><a href="#"><VscBell size={20}/></a></li>
        <li className="bg-[#eef0f2] rounded-md p-2"><a href="#"><VscComment size={20}/></a></li>
        <li><Link to={'/profile'}><img className="w-9 rounded-md shadow-sm" src={Profile} alt="" /></Link></li>
        </ul>
      
    </div>
  )
}

export default Navbar
