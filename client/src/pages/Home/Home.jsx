import ProfileSide from './ProfileSide/Profile'
import PostLayout from './Post/PostLayout'
import RightLayout from './Right/RightLayout'
import { useState } from 'react'
import CreatePost from './Post/CreatePost'


const Home = () => {
const[show,setShow]=useState(false)

  const handleClick=()=>{
    setShow(!show)
  }


  return (
    <>
    <div className=' grid lg:grid-cols-4'>
      <ProfileSide />
      <div className="col-span-2">
      <PostLayout handleClick={handleClick}/>
      </div>
      <RightLayout/>
    </div>
    {show ? <CreatePost handleClick={handleClick}/> :null} 
    </>
  )
}

export default Home
