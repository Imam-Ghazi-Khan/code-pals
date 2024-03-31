import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue, get, child } from 'firebase/database';
import { database } from '../utils/firebase';
import CoderCard from './CoderCard';
import coderInfosMock from '../mocks/coderInfos.json';

const CoderCardLists = () => {
  const [coderInfos, setCoderInfos] = useState([]);

  const { user, isLoggedIn, userProfileData, setUserProfileData,userProfileDataObject,setUserProfileDataObject } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoggedIn) {
        navigate('/login');
        return;
      }
      if (!user || !user.firebaseUser) {
        return;
      }
  
      if (userProfileData) {
        // If userProfileData is available, use it directly
        setCoderInfos(userProfileData);
      } else {
        setCoderInfos(coderInfosMock);
        // If userProfileData is null, fetch data from Firebase
        await readDataFromFirebase();
      }
      
    };

    fetchData();
  }, [isLoggedIn, user, userProfileData, navigate,userProfileDataObject]);

  const readDataFromFirebase = async () => {
    const profilesRef = ref(database, 'profiles');

    onValue(profilesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const profilesArray = Object.values(data);
        setUserProfileDataObject(data);
        setCoderInfos(profilesArray);
        setUserProfileData(profilesArray);
      }
    });
  };

  return (
    <div className="mt-40">
      {/* CodePals */}
      <p className="ml-10 text-2xl text-white font-bold">CodePals</p>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {coderInfos.map((coderInfo, index) => (
            <CoderCard key={index} coderInfo={coderInfo} />
          ))}
        </div>
      </div>
      {/* Free CodePals */}
      <p className="ml-10 text-2xl text-white font-bold">FreePals</p>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {
          coderInfos && 
          coderInfos.map((coderInfo,index)=>(
            (coderInfo.price=="Free" || coderInfo.price=="free") &&
            <CoderCard key={index} coderInfo={coderInfo}/>
          )) 
          }
        </div>
      </div>

      {/* Paid CodePals */}
      <p className="ml-10 text-2xl text-white font-bold">PaidPals</p>
      <div className="flex overflow-x-scroll">
      <div className="flex justify-center">
        {
          coderInfos && 
         coderInfos.map((coderInfo,index)=>(
          coderInfo.price!=="Free" &&
          <CoderCard key={index} coderInfo={coderInfo}/>
         )) 
        }
      </div>
      </div>
    </div>
  );
};

export default CoderCardLists;
