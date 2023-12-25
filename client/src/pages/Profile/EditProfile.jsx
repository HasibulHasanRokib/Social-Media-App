import Image from "../../assets/Profile.jpg"
import Cover from "../../assets/cover2.jpg"
import { VscChromeClose } from "react-icons/vsc";
import { BsCardImage } from "react-icons/bs";
import { useRef, useState } from "react";
import { VscEdit,VscEllipsis } from "react-icons/vsc";
import { VscBriefcase,VscHome,VscLocation,VscCalendar,VscMortarBoard } from "react-icons/vsc";


const EditProfile = ({handleEditProfile}) => {

const [file,setFile]=useState()
const fileRef=useRef()

  return (
    <div className="fixed backdrop-blur-sm shadow-md h-screen p-2 flex justify-center items-center w-full bg-slate-700/35 z-50  top-0">
     <div className="md:w-2/5 w-full p-3 my-5 flex flex-col gap-3 bg-white rounded-md shadow-sm border">
       <div className="py-3 border-b-2 flex justify-between">
       <h2 className="font-bold text-lg">Edit profile</h2>
       <button onClick={handleEditProfile} type="button"><VscChromeClose/></button>     
       </div>

      {/* profile */}
       <div className="flex flex-col gap-3">
       <div className="flex items-center justify-between">
       <p className="text-sm">Profile picture</p>
       <button  onClick={()=>fileRef.current.click()} className="p-2 rounded-md border bg-[#eef0f2]" type="button"><VscEdit/> </button>
       </div>
       
       <input onChange={(e)=>setFile(e.target.files[0])} accept="image/*" ref={fileRef}  type="file" name="" id="" className="hidden" />
       <img src={Image} alt="" className="w-20 rounded-full border-2 mx-auto"/>         
       </div>

      {/* cover */}
       <div className="flex flex-col gap-3">
       <div className="flex items-center justify-between">
       <p className="text-sm">Cover picture</p>
       <button  onClick={()=>fileRef.current.click()} className="p-2 rounded-md border bg-[#eef0f2]" type="button"><VscEdit/> </button>
       </div>
       
       <input onChange={(e)=>setFile(e.target.files[0])} accept="image/*" ref={fileRef}  type="file" name="" id="" className="hidden" />
       <img src={Cover} alt="" className="h-44 border-dotted border-2 p-2 rounded-md"/>         
       </div>

       <div className="flex gap-2 justify-end border-t-2 py-2">
        <button onClick={handleEditProfile}  className="font-semibold text-red-600 text-sm bg-red-100 p-2 rounded-md" type="button">Cancel</button>
        <button className="font-semibold text-sm text-green-600 bg-green-100 p-2 rounded-md" type="button">Post</button>
       </div>
       

     </div> 
    </div>
  )
}

export default EditProfile

