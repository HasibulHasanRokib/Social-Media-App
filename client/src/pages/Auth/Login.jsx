import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const Login = () => {

  const [show, setShow] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)



  return (
    <>
      <div className="flex flex-col gap-4 py-4 px-2 justify-center md:w-1/2 md:mt-10 md:mx-auto">
        <h1 className="font-bold text-blue-700 text-3xl text-center">facebook</h1>

        <div className="bg-white border shadow-sm rounded-md">
          <form className=" flex flex-col gap-5 px-4 py-8 ">
            <input className="border p-2 rounded-md outline-blue-400" type="email" name="email" id="email" placeholder="Email address" />
            <samp className="flex items-center">
              <input className="border p-2 w-full rounded-l-md outline-blue-400 font-inter" type={show ? "text" : "password"} name="password" id="password" placeholder="Password" />
              <button onClick={() => setShow(!show)} type="button">{show ? <VscEyeClosed size={41} className="bg-[#eef0f2] rounded-r-md border p-2" /> : <VscEye size={41} className="bg-[#eef0f2] rounded-r-md border p-2" />} </button>
            </samp>
            <button className="bg-blue-500 hover:opacity-90 text-white font-bold p-2 rounded-md" type="submit">Log in</button>
          </form>

          <div className="mx-auto border-t-2 py-4 w-full text-center">
            <button onClick={() => { setShowSignUp(true) }} className="bg-green-500 hover:opacity-90 text-center font-inter text-white font-bold px-2 py-3 rounded-md" >Create new account</button>
          </div>
        </div>
        <h5 className="text-center text-sm"><samp className="font-semibold font-inter">Create a Page</samp> for a celebrity, brand or business.</h5>

      </div>

      {showSignUp ? <SignUp setShowSignUp={setShowSignUp} /> : null}
    </>
  )
}

export default Login
