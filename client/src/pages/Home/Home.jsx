import PostLayout from './Post/PostLayout'
import { useState } from 'react'
import CreatePost from './Post/CreatePost'
import Followers from '../../components/Followers'
import ProfileCard from '../../components/ProfileCard'


const Home = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }


  return (
    <>
      <div className=' grid lg:grid-cols-4 lg:px-3 px-1 gap-2'>
        <ProfileCard />
        <div className="lg:col-span-2">
          <PostLayout handleClick={handleClick} />
        </div>
        <Followers/>
      </div>
      {show ? <CreatePost handleClick={handleClick} /> : null}
    </>
  )
}

export default Home
