import { CiSearch } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { VscComment } from "react-icons/vsc";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import Notification from "./Notification";

const Navbar = () => {
  return (
    <div className="flex border justify-between items-center py-2 bg-white rounded-md m-2 shadow-sm">
       <div className='flex gap-2 px-2'>       
       <Link to={'/'}><FaFacebookSquare size={35} className="text-blue-700"/></Link>
        <form className='flex max-md:hidden gap-2 bg-[#eef0f2] items-center rounded-md shadow-sm w-full px-2'>
        <CiSearch size={25} className='shadow-sm cursor-pointer  rounded text-gray-400'/>
        <input className='outline-none lg:w-full bg-[#eef0f2]' type="text" name="" id="" placeholder="Search..." />
        </form> 
        </div>

        <ul className="flex items-center gap-2 lg:gap-5 justify-end relative">
        <li><Notification/></li>
        <li className="bg-[#eef0f2] rounded-md p-2"><a href="#"><VscComment size={20}/></a></li>
        <li><DropDown/></li>
        </ul>    
    </div>
  )
}

export default Navbar
