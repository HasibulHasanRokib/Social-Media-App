import Image from "../../../assets/Profile.jpg"
import { VscChromeClose } from "react-icons/vsc";
import { BsCardImage } from "react-icons/bs";
import { useRef, useState } from "react";

const CreatePost = ({handleClick}) => {

const [file,setFile]=useState()
const fileRef=useRef()

  return (
    <div className="fixed backdrop-blur-sm shadow-md h-screen p-2 flex justify-center items-center w-full bg-slate-700/35 z-50  top-0">
     <div className="md:w-2/5 w-full p-3 my-5 flex flex-col gap-3 bg-white rounded-md shadow-sm border">
       <div className="py-3 border-b-2 flex justify-between">
       <h2 className="font-bold text-lg">Add post here</h2>
       <button onClick={handleClick} type="button"><VscChromeClose/></button>     
       </div>
       
       <div className="flex items-start gap-2">
        <img className="w-10 rounded-full border" src={Image} alt="" />
        <textarea className="w-full outline-none border px-2 rounded-md" name="" id="" placeholder="Share your thoughts..."/>
       </div>

       <div className="flex flex-col gap-3">
       <p className="text-sm">Upload attachment</p>

       <input onChange={(e)=>setFile(e.target.files[0])} accept="image/*" ref={fileRef}  type="file" name="" id="" className="hidden" />
       <div className="flex flex-col cursor-pointer justify-center items-center h-44 border-dotted border-2 p-2 rounded-md" onClick={()=>fileRef.current.click()}>
       <BsCardImage size={45}/>
       <samp className="font-inter">Drag here or click to upload photo.</samp>
       </div>
        
       </div>

       <div className="flex gap-2 justify-end border-t-2 py-2">
        <button onClick={handleClick}  className="font-semibold text-red-600 text-sm bg-red-100 p-2 rounded-md" type="button">Cancel</button>
        <button className="font-semibold text-sm text-green-600 bg-green-100 p-2 rounded-md" type="button">Post</button>
       </div>
       

     </div> 
    </div>
  )
}

export default CreatePost
