import Cover from '../../assets/cover2.jpg'
import Profile from '../../assets/Follower.jpg'
import { VscEdit,VscEllipsis } from "react-icons/vsc";
import { VscBriefcase,VscHome,VscLocation,VscCalendar,VscMortarBoard } from "react-icons/vsc";

const ProfileHeader = ({handleEditProfile}) => {
  return (
   <>
    <div className=" relative bg-white p-3 rounded-md shadow-sm border">
        <img src={Cover} alt="" className='w-full lg:h-64 h-32 rounded-md border' />

        <div className="flex max-md:flex-col max-md:gap-2 lg:justify-between lg:items-center py-3 mt-[-3rem] px-4 border-b">
        <div className="flex max-md:flex-col items-center">
            <img src={Profile} alt="" className='w-28 rounded-full border-4' />
            <div className="flex flex-col lg:mt-8 max-md:items-center">
                 <samp className=' capitalize font-semibold text-lg font-inter'>tuhid hasan sakib</samp>
                 <samp className='text-sm font-inter text-gray-500'>web developer</samp>
            </div>
        </div>
        <div className="flex gap-2 lg:mt-8  max-md:justify-center">
           <button onClick={handleEditProfile} className='flex items-center p-2 rounded-md shadow-sm gap-2 font-semibold text-sm text-red-500 bg-red-100'><VscEdit/>Edit profile</button> 
           <button className='bg-[#eef0f2] p-2 rounded-md max-md:hidden'><VscEllipsis/></button>
        </div>
        </div>
        <div className="flex flex-col gap-3 lg:px-10 px-4 lg:hidden">
       <h5 className='font-bold py-2 border-b'>Profile Info</h5>
      <ul className='flex flex-col gap-2'>
        <li className='flex items-center gap-1'><VscBriefcase size={25}/><p className='font-semibold text-sm'>Works at</p></li>
        <li className='flex items-center gap-1'><VscMortarBoard size={25}/><p className='font-semibold text-sm'>Studied at</p></li>
        <li className='flex items-center gap-1'><VscHome size={25}/><p className='font-semibold text-sm'>Lives in</p></li>
        <li className='flex items-center gap-1'><VscLocation size={25}/><p className='font-semibold text-sm'>From</p></li>
        <li className='flex items-center gap-1'><VscCalendar size={25}/><p className='font-semibold text-sm'>Joined</p></li>
      </ul>
        </div>
    </div>
    
   </>
  )
}

export default ProfileHeader
