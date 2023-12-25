import Follower from '../../../assets/Follower.jpg'
const FollowerCard = () => {
  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="flex gap-2 items-center">
        <img className='w-12 rounded-full shadow-sm object-contain' src={Follower} alt="" />
        <div className='flex flex-col'>
        <samp className=' capitalize text-sm font-inter'>tuhid hasan sakib</samp>
        <span className='font-bold text-xs'>@tuhidhasan</span>
        </div>
        </div>
        <button className='font-bold rounded-md bg-blue-700 p-2 shadow-sm text-white text-xs'>Follow</button>
      </div>
    </>
  )
}

export default FollowerCard
