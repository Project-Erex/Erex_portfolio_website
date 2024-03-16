"use client";

import {initializeApp} from "firebase/app";
import "firebase/firestore";
import {getAnalytics} from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyB0vOGgjmrQkUCuNRGOVc8tJGotRMlqWKg",
  authDomain: "erex-studio.firebaseapp.com",
  databaseURL: "https://erex-studio-default-rtdb.firebaseio.com",
  projectId: "erex-studio",
  storageBucket: "erex-studio.appspot.com",
  messagingSenderId: "780912629775",
  appId: "1:780912629775:web:c6917cdcb8fad19042ab7a",
  measurementId: "G-3ECVELKGF2",
};

const firebase = initializeApp(firebaseConfig);
export const analytics = typeof window !== "undefined" ? getAnalytics(firebase) : null;
