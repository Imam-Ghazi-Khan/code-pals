import React from 'react'
import CypherIMG from '../assets/cypher.png'

const Login = () => {
  return (
    <div className=' text-white h-screen flex justify-between'>
      <img src={CypherIMG} alt=""
      className='md:static fixed h-full md:w-1/2 w-full -z-10'/>
      <div className='flex justify-center items-center h-full md:w-1/2 w-full'>
      <div className='p-4 bg-blue-950 rounded-lg bg-opacity-50'>
        <div>
          <h1 className='mt-4 font-bold text-2xl'>Login</h1>
          <p className='mt-4'>Enter your Email</p>
          <input className=' mt-4 bg-transparent border p-2 md:pr-[50%]' type="text" placeholder="Email"/>
          <p className='mt-4'>Enter your Password</p>
          <input className='mt-4 bg-transparent border p-2 md:pr-[50%]' type="text" placeholder='Password'/>
        </div>
        <button
            className="mt-4 bg-gradient-to-r from-violet-800 to-violet-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Log In
          </button>      
        </div>
      </div>
    </div>
  )
}

export default Login;