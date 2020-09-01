import React, { createContext, useState, useEffect } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase";
import "firebase/auth";

export const AuthContext = createContext(null);
const firebaseConfig = {
  apiKey: "AIzaSyDzMZhamouVJ8Iee5_in1OkzPF78TOU1jI",
  authDomain: "tolarian-28508.firebaseapp.com",
  databaseURL: "https://tolarian-28508.firebaseio.com",
  projectId: "tolarian-28508",
  storageBucket: "tolarian-28508.appspot.com",
  messagingSenderId: "28431493258",
  appId: "1:28431493258:web:291fc49853f473b5b3a573",
  measurementId: "G-S7SB50XMKT",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
function createUserWithEmail(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}
function signInWithEmail(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}
const AuthProvider = ({ children, signOut, user }) => {
  const [appUser, setAppUser] = useState(null);
  const [message, setMessage] = useState("");
  const handleSignOut = () => {
    signOut();
    setAppUser(null);
  };
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => {
    return firebase.auth().signInWithPopup(googleProvider);
  };
  useEffect(() => {
    if (user && Object.keys(user).length > 0 && user.email) {
      setAppUser(user.email);
    } else if (!user) {
      setAppUser(null);
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        appUser,
        createUserWithEmail,
        signInWithEmail,
        signInWithGoogle,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default withFirebaseAuth({
  firebaseAppAuth,
})(AuthProvider);
