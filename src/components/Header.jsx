import { signOut } from "firebase/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getDatabase, ref, set } from "firebase/database";
import ProfileIcon from "../assets/cypher.png"

const Header = () => {

  const navigate = useNavigate();

  const {user,setUser,isLoggedIn,setIsLoggedIn,setUserProfileData,setUserProfileDataObject,isLoggedInUserProfile,setIsLoggedInUserProfile} = useContext(UserContext);


  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          firebaseUser
        });
        setIsLoggedIn(true);
        setUserProfileData(null);
        setUserProfileDataObject(null);
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setUserProfileData(null);
        setUserProfileDataObject(null);
      }
    });

    return () => unsubscribe();
  }, [isLoggedIn, setIsLoggedIn, setUser, setUserProfileData, setUserProfileDataObject]);



  return (
    <div className="fixed top-0 left-0 right-0 p-7 bg-gray-900 flex flex-col md:flex-row items-center justify-between text-white z-50">
      <Link to={"/"}><div className="font-bold text-xl mb-4 md:mb-0 md:mr-8 cursor-pointer">&lt; / &gt; CODE-PALS</div></Link>
      <div className="flex">

          {isLoggedIn 
          &&
          <img onClick={()=>{
            setIsLoggedInUserProfile(true);
            navigate("/profile/"+user.firebaseUser.uid);
          }
          } className="w-12 rounded-full cursor-pointer" src={ProfileIcon} alt="" />     
          }  

        {!isLoggedIn && <Link to={"/login"}>
          <button
            className="mr-4 bg-gray-700 text-white font-bold py-1 px-4 rounded-full"
          >
            Log In
          </button>
        </Link>}
       {!isLoggedIn && <Link to={"/signup"}>
          <button
            className="bg-gradient-to-r from-violet-800 to-violet-500 text-white font-bold py-1 px-4 rounded-full"
          >
            Sign Up
          </button>
        </Link>}
      </div>
    </div>
  );
};

export default Header;
