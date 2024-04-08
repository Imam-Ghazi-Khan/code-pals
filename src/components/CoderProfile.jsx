import { useNavigate, useParams } from "react-router-dom";
import MainProfileSection from "./MainProfileSection";
import SecondaryProfileSection from "./SecondaryProfileSection";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";

const CoderProfile = () => {

  const navigate = useNavigate();

  const {user,userProfileDataObject} = useContext(UserContext);
  const {userId} = useParams();
  const [userData,setUserData] = useState(null);

  const [plzReRender,setPlzReRender] = useState(false);

  useEffect(()=>{
  if(userProfileDataObject) {
    if(!userProfileDataObject[user.firebaseUser.uid]) navigate("/createProfile");
    setUserData(userProfileDataObject[userId]);
  }
  },[userProfileDataObject,userId])

  return (
    <div>
      {userData && <div>
        <MainProfileSection userData={userData} plzReRender={plzReRender} setPlzReRender={setPlzReRender}/>
        <SecondaryProfileSection userData={userData} plzReRender={plzReRender}/>
      </div>}
    </div>
  )
}

export default CoderProfile;