import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {

  const navigate = useNavigate();

  const user = useContext(UserContext)

  const handleSignOut = () => {
    signOut(auth)
      .then(()=>{
        console.log(user);
        navigate("/login");
      })
      .catch((error)=>{
        console.log(user);
        navigate("/error");
      })
  }

  return (
    <div className="fixed top-0 left-0 right-0 p-8 bg-gray-900 flex flex-col md:flex-row items-center justify-between text-white z-50">
      <Link to={"/"}><div onClick={handleSignOut} className="font-bold text-2xl mb-4 md:mb-0 md:mr-8 cursor-pointer">&lt; / &gt; CODE-PALS</div></Link>
      <div className="flex">
        <Link to={"/login"}>
          <button
            className="mr-4 bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Log In
          </button>
        </Link>
        <Link to={"/signup"}>
          <button
            className="bg-gradient-to-r from-violet-800 to-violet-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
