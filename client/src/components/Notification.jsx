import { VscBell } from "react-icons/vsc"
import New from "./New"
import { useState } from "react"


const Notification = () => {
const [isOpen,setIsOpen]=useState(false)

  return (
    <>
    <button className='bg-[#eef0f2] rounded-md p-2' onClick={()=>setIsOpen(!isOpen)}>
    <VscBell size={20}/>
    </button>
    {isOpen ? (
      <div className="bg-white p-3 rounded-md border shadow-lg flex flex-col gap-2 absolute z-50 right-0 top-16  w-[370px] lg:min-h-[30rem]">
      <h5 className="font-semibold border-b-2 py-1">Today's news</h5>
      <New/>
      <New/>
      <New/>
    </div>
    ):null} 
    </>

  )
}

export default Notification
