import React, { useState } from 'react'
import PostHeader from './PostHeader'
import PostCard from './PostCard'

const PostLayout = ({handleClick}) => {
 
  return (
    <>
    <div className='flex flex-col relative  gap-2 h-screen overflow-y-scroll'>
     <PostHeader handleClick={handleClick}/>
     <div className="flex flex-col gap-2">
      <PostCard/>
      <PostCard/>
      <PostCard/>
     </div>
    </div>
    </>
  )
}

export default PostLayout
