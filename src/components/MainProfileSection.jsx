import { Link, useNavigate, useParams } from "react-router-dom";
import ProfileIcon from "../assets/cypher.png"
import { auth, database } from "../utils/firebase";
import { useContext, useEffect, useState } from "react";
import { child, get, onValue, push, ref, set } from "firebase/database";
import { UserContext } from "../contexts/UserContext";
import { signOut } from "firebase/auth";
import StarRating from "./StarRating";


const MainProfileSection = ({userData,setPlzReRender}) => {  

  const navigate = useNavigate();

  const {user,isLoggedInUserProfile,setIsLoggedInUserProfile} = useContext(UserContext);
  const [clickedUserId,setClickedUserId] = useState(useParams().userId);
  const [isAlreadyFollowing,setIsAlreadyFollowing] = useState(false);
  

  const [rating, setRating] = useState(0); 

  useEffect(()=>{
    //checking if clicked user and logged in user same or not
    if(clickedUserId && user.firebaseUser.uid){
      if(user.firebaseUser.uid===clickedUserId){
        setIsLoggedInUserProfile(true);
      }
      else{
        setIsLoggedInUserProfile(false);
      }
    }


    //checking if logged in user follows clicked user or not
    const checkIfLoggedInUserFollowsClickedUser = async() => {

      const loggedInUserId = user?.firebaseUser?.uid; 

      if(!isAlreadyFollowing){
        try{
          //checking if loggedin user follows clicked user  
          const followingSnapshot = await get(child(ref(database), `profiles/${loggedInUserId}/following/`));
          if (followingSnapshot.exists()) {
            const isFollowingClickedUser = Object.values(followingSnapshot.val()).includes(clickedUserId);
            setIsAlreadyFollowing(isFollowingClickedUser);
          }
      
          //checking if clicked user follows loggedin user
          const followersSnapshot = await get(child(ref(database), `profiles/${clickedUserId}/followers`));
          if (followersSnapshot.exists()) {
            const isFollowedByLoggedInUser = Object.values(followersSnapshot.val()).includes(loggedInUserId);
            setIsAlreadyFollowing(isFollowedByLoggedInUser);
          }
        }catch(error){
          console.log(error);
        }

      }
    }

    checkIfLoggedInUserFollowsClickedUser();

    
  },[]);

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

  const handleSendFollowRequest = async () => {
    const loggedInUserId = user?.firebaseUser?.uid; 
    setIsAlreadyFollowing(true);

      try{
        const followingSnapshot = await get(child(ref(database), `profiles/${loggedInUserId}/following/`));
        if (followingSnapshot.exists()) {
          const isFollowingClickedUser = Object.values(followingSnapshot.val()).includes(clickedUserId);
          setIsAlreadyFollowing(isFollowingClickedUser);
          if(!isFollowingClickedUser){
            await push(ref(database, 'profiles/' + loggedInUserId + '/following'), clickedUserId);
            await push(ref(database, 'profiles/' + clickedUserId + '/followers'), loggedInUserId);
            setPlzReRender(true);
          }
        }
        else{
          await set(ref(database, 'profiles/' + loggedInUserId + '/following'), {});
          await set(ref(database, 'profiles/' + clickedUserId + '/followers'), {});
          await push(ref(database, 'profiles/' + loggedInUserId + '/following'), clickedUserId);
          await push(ref(database, 'profiles/' + clickedUserId + '/followers'), loggedInUserId);
          setPlzReRender(true);
        }
      } catch (error) {
        console.error('Error:', error); 
      }
      
  }
  
  return (
    <div className="mt-20 text-white md:p-36 p-48 bg-gradient-to-b from-violet-500 to-black relative md:text-lg">
      <div className="absolute top-20 left-12">
        <div className="md:flex">
        <img className="md:w-32 md:h-32 w-28 h-28 p-2 object-cover rounded-full" src={userData.image?userData.image:ProfileIcon} alt="" />     
        <div className="p-4">
          <h1 className="pl-2 md:text-4xl text-2xl font-bold">{userData?userData.name:'The Watcher'}</h1>
          <div className="md:flex justify-between w-[80vw]">
          <div className="flex align-middle py-2">
            <div className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30 mx-2">♂️ {userData?userData.age:'22'}</div>
            <div className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30">🟢 Online</div>
          </div>

          <div>
          {
              isLoggedInUserProfile
                ?
                <div>
                  <Link to={"/createProfile"}>
                  <button className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30 mx-2">Edit Profile</button>
                  </Link>
                  <button onClick={handleSignOut} className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30 mx-2">Logout</button>

                </div>
                :
              <div className="flex">
                <button className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30 mx-2">💬</button>
                <button onClick={handleSendFollowRequest} className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30 mx-2">{isAlreadyFollowing?'✔️':'Send Request'}</button>
              </div>
            }
          </div>
          
          </div>
        </div>
     

      </div>
      </div>
    </div>
    )
}

export default MainProfileSection;