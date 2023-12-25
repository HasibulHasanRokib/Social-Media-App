import User from '../../../assets/Follower.jpg'

const New = () => {
  return (
    <div>
        <div className="flex justify-between items-center p-1">
        <div className="flex gap-2 items-center">
        <img className='w-10 rounded-full shadow-sm object-contain' src={User} alt="" />
        <div className='flex items-end gap-1'>
        <samp className=' capitalize text-sm font-inter font-semibold'>tuhid hasan sakib</samp>
        <span className='text-xs'>added a new photo.</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default New
