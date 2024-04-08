// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import { getStorage } from "@firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// export const database = getDatabase(app);
// export const storage = getStorage(app);



import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


import { getDatabase } from "firebase/database";
import { getStorage } from "@firebase/storage";


const firebaseConfig = {

  REACT_APP_FIREBASE_API_KEY: "AIzaSyBW5Z4Scz1KG0mn8JGMI-C4YEZkcofR1Lw",

  REACT_APP_FIREBASE_AUTH_DOMAIN: "codepals-45aa9.firebaseapp.com",

  REACT_APP_FIREBASE_PROJECT_ID: "codepals-45aa9",

  REACT_APP_FIREBASE_STORAGE_BUCKET: "codepals-45aa9.appspot.com",

  REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "1069814787391",

  REACT_APP_FIREBASE_APP_ID: "1:1069814787391:web:f83d0a360f4a01d56a378a",

  REACT_APP_FIREBASE_MEASUREMENT_ID: "G-TRLS94S1YZ"

};


const app = initializeApp(firebaseConfig);
 
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const database = getDatabase(app);

export const storage = getStorage(app);
