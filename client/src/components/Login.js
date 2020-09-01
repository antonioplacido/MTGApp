import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AuthContext } from "./AuthContext";
import { database } from "firebase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import tolarian from "../assets/Tolarian.PNG";

function Login() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const { signInWithGoogle } = useContext(AuthContext);
  const state = useSelector((state) => state.auth);
  const history = useHistory();
  function handleGoogleSignIn() {
    signInWithGoogle()
      .then((data) => {
        console.log(database);
        return fetch("/user", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            displayName: data.user.displayName,
            email: data.user.email,
            photoURL: data.user.photoURL,
          }),
        });
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        console.log(json.data.email);
        setLoggedIn(true);
      })
      .then((data) => {
        history.push("/home");
        console.log(loggedIn);
      });
  }
  return (
    <>
      <Wrapper>
        <Title>Tolarian</Title>
        <button onClick={handleGoogleSignIn}> Sign In with Google</button>
      </Wrapper>
    </>
  );
}
export default Login;

const Wrapper = styled.div`
  background-image: url(../assets/Tolarian.PNG);
`;

const Title = styled.div``;
