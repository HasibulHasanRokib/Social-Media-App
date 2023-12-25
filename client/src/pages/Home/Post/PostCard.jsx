import Profile from '../../../assets/Profile.jpg'
import Image from '../../../assets/cover2.jpg'
import { GoHeart, GoHeartFill,GoComment } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";


const PostCard = () => {
  return (
    <div className='bg-white flex flex-col gap-2 p-6 rounded-md shadow-sm border'>

      <div className="flex items-center gap-2">
        <img className='w-11 rounded-full ring-1 ring-blue-700 p-1' src={Profile} alt="" />
        <div className="flex flex-col">
        <span className=' capitalize text-sm font-bold'>tuhid hasan sakib</span>
        <span className='text-xs'>.Now</span>
        </div>
      </div>

      <div className="">
        <p className='text-sm text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid praesentium rerum ullam doloribus esse tenetur, temporibus, maiores autem optio culpa enim placeat facere at assumenda eos expedita harum nostrum necessitatibus.</p>
      </div>

      <div className="">
        <img className="w-full h-full rounded object-contain" src={Image} alt="" />
      </div>

      <div className="flex items-center gap-3 lg:gap-5 py-3">
        <button className='flex items-center gap-1'><GoHeart size={25}/><span className='text-xs lg:text-sm'>20 Likes</span></button>
        <button className='flex items-center gap-1'><GoComment size={25}/><span className='text-xs lg:text-sm'>20 Comments</span></button>
        <button className='flex items-center gap-1'><PiShareFat size={25}/><span className='text-xs lg:text-sm'>20 Shares</span></button>
      </div>
     
    </div>
  )
}

export default PostCard
