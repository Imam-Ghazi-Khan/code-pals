
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


import { getDatabase } from "firebase/database";
import { getStorage } from "@firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyBW5Z4Scz1KG0mn8JGMI-C4YEZkcofR1Lw",

  authDomain: "codepals-45aa9.firebaseapp.com",

  projectId: "codepals-45aa9",

  storageBucket: "codepals-45aa9.appspot.com",

  messagingSenderId: "1069814787391",

  appId: "1:1069814787391:web:f83d0a360f4a01d56a378a",

  measurementId: "G-TRLS94S1YZ"

};


const app = initializeApp(firebaseConfig);
 
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const database = getDatabase(app);

export const storage = getStorage(app);