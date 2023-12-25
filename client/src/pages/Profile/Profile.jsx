import { useState } from "react"
import PostCard from "../Home/Post/PostCard"
import PostHeader from "../Home/Post/PostHeader"
import Followers from "../Home/Right/Followers"
import About from "./About"
import ProfileHeader from "./ProfileHeader"
import EditProfile from "./EditProfile"

const Profile = () => {

const [edit,setEdit]=useState(false)

const handleEditProfile=()=>{
setEdit(!edit)
}

  return (
    <>
    <div className=" grid lg:grid-cols-4 px-4 gap-3">
    <div className="col-span-3 flex flex-col gap-3 overflow-scroll h-screen">
    <ProfileHeader handleEditProfile={handleEditProfile} />
    <PostHeader/>
    <PostCard/>
    </div> 
    <div className="flex flex-col gap-3 max-md:hidden">
    <About/>
    <Followers/>
    </div>
    </div>
    {edit ? <EditProfile handleEditProfile={handleEditProfile}/>:null}
    </>
  )
}

export default Profile
