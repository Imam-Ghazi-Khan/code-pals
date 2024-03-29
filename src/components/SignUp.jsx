import React, { useContext, useRef } from 'react'
import CypherIMG from '../assets/cypher.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';


const SignUp = () => {

  const {user,setUser} = useContext(UserContext);

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignUpButton = () => {
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Sign Up successful");
        navigate("/createProfile")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode+":"+errorMessage);
      });
  }

  return (
    <div className=' text-white h-screen flex justify-between'>
      <img src={CypherIMG} alt=""
      className='md:static fixed h-full md:w-1/2 w-full -z-10'/>
      <div className='flex justify-center items-center h-full md:w-1/2 w-full'>
      <div className='p-4 md:bg-transparent bg-blue-950 rounded-lg bg-opacity-50'>
        <div>
          <h1 className='mt-4 font-bold text-2xl'>Sign Up</h1>
          <p className='mt-4'>Enter your Email</p>
          <input ref={emailRef} className=' mt-4 bg-transparent border p-2 md:pr-[50%]' type="text" placeholder="Email"/>
          <p className='mt-4'>Enter your Password</p>
          <input ref={passwordRef} className='mt-4 bg-transparent border p-2 md:pr-[50%]' type="text" placeholder='Password'/>
        </div>
        <button
            className="mt-4 bg-gradient-to-r from-violet-800 to-violet-500 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSignUpButton}
          >
            Sign Up
          </button>      
        </div>
      </div>
    </div>
  )
}

export default SignUp;