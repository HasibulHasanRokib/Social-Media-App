import { useState } from "react"
import { VscClose } from "react-icons/vsc";
const SignUp = ({setShowSignUp}) => {

 const [show,setShow]=useState(false)


  return (
    <div className="fixed backdrop-blur-sm shadow-md h-screen p-2 flex justify-center items-center w-full bg-slate-700/25 z-50  top-0">
    <div className="flex flex-col gap-3 lg:w-1/2 mx-auto my-2 bg-white rounded-md border shadow-sm p-4">
    <article className=" flex justify-between items-center">
    <samp>
    <h1 className="font-bold text-2xl py-3 font-inter">Sign Up</h1>
    <p className="text-sm font-inter">It's quick and easy.</p>
    </samp>
    <button onClick={()=>setShowSignUp(false)} className=""><VscClose size={30}/></button>
    </article>

    <form className="flex flex-col gap-2">
    <div className="flex gap-2">
        <input className="border w-full p-2 rounded-md outline-blue-600" type="text" placeholder="First name" name="firstName" id="firstName" />
        <input className="border w-full p-2 rounded-md outline-blue-600" type="text" name="lastName" id="lastName" placeholder="Last name"  />
    </div>
    <input className="border p-2 rounded-md outline-blue-600" type="email" name="email" id="email" placeholder="Email address" />
   
   <label className="text-sm">Gender:</label>
   <div className="flex gap-4 items-center">
    <span className="flex items-center gap-4 border p-2 rounded-md">
        <label className="text-sm">Male</label>
        <input type="radio" name="gender" id="male" />
    </span>
 
    <span className="flex items-center gap-4 border p-2 rounded-md">
        <label className="text-sm">Female</label>
        <input type="radio" name="gender" id="female" />
    </span>
 
    <span className="flex items-center gap-4 border p-2 rounded-md">
        <label className="text-sm">Custom</label>
        <input type="radio" name="gender" id="custom" />
    </span>
   </div>

   <div className="flex flex-col gap-2">
    <label className="text-sm">Date of Birth:</label>
    <input className="border rounded-md p-2" type="date" name="" id="" />
   </div>
    
    <input className="border p-2 rounded-md outline-blue-600" type={show ? 'text' : 'password'} name="password" id="password" placeholder="Password" />
    <input className="border p-2 rounded-md outline-blue-600" type={show ? 'text' : 'password'} name="confirmPassword" id="confirmPassword" placeholder="Confirm password" />
    
    <div className="flex items-center gap-2 py-3">
    <input className="w-5 h-5" type="checkbox" onClick={()=>setShow(!show)} name="" id="" />
    <label className="text-sm">Show password</label>
    </div>
 
    <div className="py-5 flex flex-col gap-3">
        <p className="text-xs">People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
        <p className="text-xs">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
    </div>

    <button type="submit" className="font-bold text-white bg-green-600 p-2 rounded-md shadow-sm border hover:opacity-90">Sign Up</button>
    </form>
    </div>
    </div>
  )
}

export default SignUp
