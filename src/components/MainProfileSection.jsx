import { useNavigate, useParams } from "react-router-dom";
import ProfileIcon from "../assets/cypher.png"
import { auth, database } from "../utils/firebase";
import { useContext, useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { UserContext } from "../contexts/UserContext";
import { signOut } from "firebase/auth";
import StarRating from "./StarRating";


const MainProfileSection = ({userData}) => {  

  const navigate = useNavigate();

  const {user,isLoggedInUserProfile,setIsLoggedInUserProfile} = useContext(UserContext);
  const [loggedInUserId,setLoggedInUserId] = useState(useParams().userId);

  const [rating, setRating] = useState(0); 

  useEffect(()=>{
    if(loggedInUserId && user.firebaseUser.uid){
      if(user.firebaseUser.uid===loggedInUserId){
        setIsLoggedInUserProfile(true);
      }
      else{
        setIsLoggedInUserProfile(false);
      }
    }
  },[])

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
  
  return (
    <div className="mt-20 text-white w-full p-36 bg-gradient-to-b from-violet-500 to-black relative">
      <div className="absolute flex align-middle top-20 left-12">
      <img className="md:w-32 w-28 rounded-full" src={ProfileIcon} alt="" />     
      <div className="p-4">
        <h1 className="md:text-4xl text-2xl font-bold">{userData?userData.name:'The Watcher'}</h1>
        <div className="md:flex justify-between w-[80vw]">
        <div className="flex align-middle py-2">
          <div className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30 mx-2">♂️ {userData.age}</div>
          <div className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30">🟢 Online</div>
        </div>
       <div>
       {
          isLoggedInUserProfile
            ?
          <button onClick={handleSignOut} className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30 mx-2">Logout</button>
            :
          <div>
            <button className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30 mx-2">Send Request</button>
            {/* <button className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30 mx-2">Give Rating</button> */}
          </div>
        }
       </div>
        </div>

      </div>
      </div>
    </div>
    )
}

export default MainProfileSection;