import { ref, get, child } from 'firebase/database';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { database } from '../utils/firebase';

const CoderDetailsCard = ({ userData,plzReRender }) => {
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const { userId } = useParams();

  useEffect(() => {
    const fetchFollowersCount = async () => {
      try {
        const snapshot = await get(child(ref(database), `profiles/${userId}/followers`));
        if (snapshot.exists() && typeof snapshot.val === 'function') {
          // Ensure snapshot is a DataSnapshot object
          const followersData = snapshot.val();
          // Get the count of followersData
          const count = Object.keys(followersData).length;
          setFollowersCount(count);
        } else {
          // Handle the case when snapshot is not a DataSnapshot object
          setFollowersCount(0);
        }
      } catch (error) {
        console.error('Error fetching followers count:', error);
      }
    };
    
    const fetchFollowingCount = async () => {
      try {
        const snapshot = await get(child(ref(database), `profiles/${userId}/following`));
        if (snapshot.exists() && typeof snapshot.val === 'function') {
          // Ensure snapshot is a DataSnapshot object
          const followingData = snapshot.val();
          // Get the count of followingData
          const count = Object.keys(followingData).length;
          setFollowingCount(count);
        } else {
          // Handle the case when snapshot is not a DataSnapshot object
          setFollowingCount(0);
        }
      } catch (error) {
        console.error('Error fetching following count:', error);
      }
    };
    
    fetchFollowersCount();
    fetchFollowingCount();
  }, [plzReRender]);

  return (
    <div className="m-8 p-4 cursor-pointer rounded-2xl shadow-md bg-gray-900 md:w-2/5">
      <h1 className="p-2 font-bold">Details</h1>
      <div className="flex align-items justify-between">
        <div className="m-2 p-4 w-1/2 rounded-lg cursor-pointer shadow-md bg-gray-800">
          <p>Followers</p>
          <p className="font-bold text-2xl">{followersCount}</p>
        </div>
        <div className="m-2 p-4 w-1/2 rounded-lg cursor-pointer shadow-md bg-gray-800">
          <p>Following</p>
          <p className="font-bold text-2xl">{followingCount}</p>
        </div>
      </div>
      <p className="p-2">Bio</p>
      <div className="m-2 p-4 rounded-lg cursor-pointer shadow-md bg-gray-800 flex justify-center">
        <p className="text-gray-400">{userData.bio}</p>
      </div>
      <p className="p-2">Interests</p>
      <div className="m-2 p-4 rounded-lg cursor-pointer shadow-md bg-gray-800 flex justify-center">
        <p className="text-gray-400">{userData.title}</p>
      </div>
      <p className="p-2">Github</p>
      <div className="m-2 p-4 rounded-lg cursor-pointer shadow-md bg-gray-800 flex justify-center">
        <p className="text-gray-400">{userData.github}</p>
      </div>
    </div>
  );
};

export default CoderDetailsCard;
