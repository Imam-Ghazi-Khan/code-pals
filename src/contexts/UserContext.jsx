import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../utils/firebase';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //to check if loggedin user clicks on their own profile or someone else's profile
  const [isLoggedInUserProfile,setIsLoggedInUserProfile] = useState(false);

  //logged in user
  const [user, setUser] = useState(null);

  //all users profile in array form
  const [userProfileData,setUserProfileData] = useState(null);

  //all users profile in object form
  const [userProfileDataObject,setUserProfileDataObject] = useState(null);

  //is a user logged in
  const [isLoggedIn,setIsLoggedIn] = useState(false);


  return (
    <UserContext.Provider value={{ user, setUser,isLoggedIn,setIsLoggedIn,userProfileData,setUserProfileData,userProfileDataObject,setUserProfileDataObject, isLoggedInUserProfile,setIsLoggedInUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

