import { Link } from 'react-router-dom';
import Profile from '../assets/Profile.jpg'
import Cover from '../assets/Profile.jpg'
import { VscBriefcase,VscHome,VscLocation,VscCalendar,VscMortarBoard } from "react-icons/vsc";


const ProfileCard = () => {
  return (
    <section className='max-lg:hidden'>
    <div className=' bg-white border rounded-lg relative flex flex-col gap-2 shadow-sm'>
    <div className="flex p-2 flex-col justify-center items-center relative">
    <img className='h-32 w-full rounded-sm object-cover' src={Cover} alt="Cover" />
    <img className='w-24 border-2 rounded-full shadow-md absolute bottom-[-2rem]' src={Profile} alt="Profile" />
    </div>

    <div className="flex flex-col justify-center items-center mt-8">
        <span className=' capitalize font-semibold'>tuhid hasan sakib</span>
        <span className=' capitalize text-sm text-slate-600'>web developer</span>
    </div>

    <div className="py-3 px-10">
    <hr/>
    <div className="flex justify-center items-center p-3 gap-10">
        <div className="flex flex-col justify-center items-center ">
            <p className='font-bold'>6,866</p>
            <p className='text-xs text-gray-600'>Followers</p>
        </div>
        <div className="border h-14 border-l-0 border-gray300"></div>
        <div className="flex flex-col justify-center items-center">
            <p className='font-bold'>6</p>
            <p className='text-xs text-gray-600'>Following</p>
        </div>
    </div>
    <hr />
   </div>
    
    <div className=" p-4">
    <h5 className='font-bold py-3'>About</h5>
      <ul className='flex flex-col gap-2'>
        <li className='flex items-center gap-1'><VscBriefcase size={25}/><p className='font-semibold text-sm'>Works at</p></li>
        <li className='flex items-center gap-1'><VscMortarBoard size={25}/><p className='font-semibold text-sm'>Studied at</p></li>
        <li className='flex items-center gap-1'><VscHome size={25}/><p className='font-semibold text-sm'>Lives in</p></li>
        <li className='flex items-center gap-1'><VscLocation size={25}/><p className='font-semibold text-sm'>From</p></li>
        <li className='flex items-center gap-1'><VscCalendar size={25}/><p className='font-semibold text-sm'>Joined</p></li>
      </ul>
    </div>

    <Link to={'/profile'} className='py-2 text-center border-t-2 font-semibold text-blue-700'>View Profile</Link>
     
  </div>
  </section>
  )
}

export default ProfileCard
