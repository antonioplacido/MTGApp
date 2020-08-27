import React, { createContext, useEffect, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase";
import "firebase/auth";

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

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export const AppContext = createContext(null);

const AppProvider = ({ children, signInWithGoogle, signOut, user }) => {
  const [appUser, setAppUser] = useState({});
  const [message, setMessage] = useState("");
  const handleSignOut = () => {
    signOut();
    setAppUser({});
    setMessage("");
  };

  useEffect(() => {
    if (user) {
      fetch(`/users`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          setAppUser(json.data);
          setMessage(json.message);
        });
    }
  }, [user]);

  return (
    <AppContext.Provider
      value={{ appUser, signInWithGoogle, handleSignOut, message }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
  firebaseApp,
})(AppProvider);
