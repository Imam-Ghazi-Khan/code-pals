import React, { useContext, useEffect, useRef } from 'react'
import CypherIMG from '../assets/cypher.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Login = () => {

  const {user,setUser,isLoggedIn} = useContext(UserContext);

  const navigate = useNavigate();

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  useEffect(()=>{
    if(isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate])

  const handleSignInButton = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      const user = userCredential.user;
      setUser(user);
      alert('Login Successful');
      navigate('/');
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <div className=' text-white h-screen flex justify-between'>
      <img src={CypherIMG} alt=""
      className='md:static fixed h-full md:w-1/2 w-full -z-10'/>
      <div className='flex justify-center items-center h-full md:w-1/2 w-full'>
      <div className='p-4 md:bg-transparent bg-blue-950 rounded-lg bg-opacity-50'>
        <div>
          <h1 className='mt-4 font-bold text-2xl'>Login</h1>
          <p className='mt-4'>Enter your Email</p>
          <input ref={emailRef} className=' mt-4 bg-transparent border p-2 md:pr-[50%]' type="text" placeholder="Email"/>
          <p className='mt-4'>Enter your Password</p>
          <input ref={passwordRef} className='mt-4 bg-transparent border p-2 md:pr-[50%]' type="text" placeholder='Password'/>
        </div>
        <button
            className="mt-4 bg-gradient-to-r from-violet-800 to-violet-500 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSignInButton}
            type='submit'
          >
            Log In
          </button>      
        </div>
      </div>
    </div>
  )
}

export default Login;