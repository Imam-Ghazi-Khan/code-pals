import { useParams } from "react-router-dom";
import MainProfileSection from "./MainProfileSection";
import SecondaryProfileSection from "./SecondaryProfileSection";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";

const CoderProfile = () => {

  const {userProfileDataObject} = useContext(UserContext);
  const {userId} = useParams();
  const [userData,setUserData] = useState(null);

  useEffect(()=>{
  if(userProfileDataObject) setUserData(userProfileDataObject[userId]);
  },[userProfileDataObject,userId])

  return (
    <div>
      {userData && <div>
        <MainProfileSection userData={userData}/>
        <SecondaryProfileSection userData={userData}/>
      </div>}
    </div>
  )
}

export default CoderProfile;