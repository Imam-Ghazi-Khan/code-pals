import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { getDatabase, ref, set } from "firebase/database";
import ProfileIcon from "../assets/cypher.png"

const Header = () => {

  const navigate = useNavigate();

  const {user,isLoggedIn} = useContext(UserContext);


  const handleSignOut = () => {
    signOut(auth)
      .then(()=>{
        navigate("/login");
        //don't worry about removing user from context api
        //onAuthStateChanged in UserContext is taking care of that 
      })
      .catch((error)=>{
        navigate("/error");
      })
  }

  



  // function writeUserData(userId, name, email, imageUrl) {
  //   const db = getDatabase();
  //   set(ref(db, 'users/' + userId), {
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  //   });
  // }

  // writeUserData(1,2,3,4);

  return (
    <div className="fixed top-0 left-0 right-0 p-8 bg-gray-900 flex flex-col md:flex-row items-center justify-between text-white z-50">
      <Link to={"/"}><div className="font-bold text-2xl mb-4 md:mb-0 md:mr-8 cursor-pointer">&lt; / &gt; CODE-PALS</div></Link>
      <div className="flex">

        {isLoggedIn 
        &&
        <img onClick={handleSignOut} className="md:w-16 w-16 rounded-full cursor-pointer" src={ProfileIcon} alt="" />     
        }
        
        {!isLoggedIn && <Link to={"/login"}>
          <button
            className="mr-4 bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Log In
          </button>
        </Link>}
       {!isLoggedIn && <Link to={"/signup"}>
          <button
            className="bg-gradient-to-r from-violet-800 to-violet-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Sign Up
          </button>
        </Link>}
      </div>
    </div>
  );
};

export default Header;
