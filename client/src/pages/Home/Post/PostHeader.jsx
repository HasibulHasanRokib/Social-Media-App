import Profile from "../../../assets/Profile.jpg"
import { IoVideocam,IoImagesSharp,IoHappyOutline } from "react-icons/io5";
import { FaImage } from "react-icons/fa";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaSmile } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostHeader = ({handleClick}) => {
  return (
    <div className="bg-white border rounded-md shadow-sm p-2 flex flex-col gap-2">

      <div className="flex gap-2 items-center p-2">
      <Link to={'/profile'}> <img className="w-10 rounded-full object-contain order-2" src={Profile} alt="" /></Link>
        <input className="w-full py-1 px-3 rounded-md outline-none" type="text" name="" id="" placeholder={`What's on your mind,Tuhid Hasan...`} />
      </div>
   
      <div className=" flex p-2 items-center gap-1.5 border-t-2">
      <button onClick={handleClick} type="button" className="flex items-center gap-1 bg-[#eef0f2] p-1.5 rounded-md">
             <FaImage size={15} className="text-green-500"/>
             <span className="text-xs">Image</span>
        </button>
        <button onClick={handleClick} type="button" className="flex items-center gap-1 bg-[#eef0f2] p-1.5 rounded-md">
             <IoVideocam size={15} className="text-red-600"/>
             <span className="text-xs">Video</span>
        </button>
        <button onClick={handleClick} type="button" className="flex items-center gap-1 bg-[#eef0f2] p-1.5 rounded-md">
             <BsCalendar2EventFill size={15} className="text-sky-600"/>
             <span className="text-xs">Event</span>
        </button>
   
        <button onClick={handleClick} type="button" className="flex items-center gap-1 bg-[#eef0f2] p-1.5 rounded-md">
             <FaSmile size={15} className="text-yellow-400"/>
             <span className="text-xs">Feeling/activity</span>
        </button>

      </div>
    </div>
  )
}

export default PostHeader
