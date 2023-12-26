import { VscBriefcase, VscCalendar, VscHome, VscLocation, VscMortarBoard } from "react-icons/vsc"

const About = () => {
  return (
    <>
    <div className="p-6 flex flex-col gap-3 bg-white border rounded-md shadow-sm max-lg:hidden">
    <h5 className='font-bold border-b py-2'>About</h5>
      <ul className='flex flex-col gap-2'>
        <li className='flex items-center gap-1'><VscBriefcase size={25}/><p className='font-semibold text-sm'>Works at</p></li>
        <li className='flex items-center gap-1'><VscMortarBoard size={25}/><p className='font-semibold text-sm'>Studied at</p></li>
        <li className='flex items-center gap-1'><VscHome size={25}/><p className='font-semibold text-sm'>Lives in</p></li>
        <li className='flex items-center gap-1'><VscLocation size={25}/><p className='font-semibold text-sm'>From</p></li>
        <li className='flex items-center gap-1'><VscCalendar size={25}/><p className='font-semibold text-sm'>Joined</p></li>
      </ul>
    </div>
    </>
  )
}

export default About
