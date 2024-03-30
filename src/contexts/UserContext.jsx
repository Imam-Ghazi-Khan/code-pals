import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../utils/firebase';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfileData,setUserProfileData] = useState(null);
  const [userProfileDataObject,setUserProfileDataObject] = useState(null);

  const [isLoggedIn,setIsLoggedIn] = useState(false);


  return (
    <UserContext.Provider value={{ user, setUser,isLoggedIn,setIsLoggedIn,userProfileData,setUserProfileData,userProfileDataObject,setUserProfileDataObject }}>
      {children}
    </UserContext.Provider>
  );
};

