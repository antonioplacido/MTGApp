import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { database } from "firebase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const { signInWithGoogle } = useContext(AuthContext);
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
        <div id="firebaseui-auth-container"></div>
      </Wrapper>
    </>
  );
}
export default Login;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  height: auto;
  color: black;
  border: 1px solid #161616;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  height: 46px;
  border-bottom: 1px solid #161616;
  line-height: 46px;
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
`;
