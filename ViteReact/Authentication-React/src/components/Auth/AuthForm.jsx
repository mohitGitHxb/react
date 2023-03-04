import { useContext, useRef } from "react";
import { useState } from "react";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [invalid, setInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    let emailValue = emailInputRef.current.value;
    let passwordValue = passwordInputRef.current.value;
    console.log(`email: ${emailValue}  password: ${passwordValue}`);
    if (
      !emailValue.includes("@") ||
      emailValue.trim().length < 5 ||
      emailValue.includes(" ")
    ) {
      setInvalid(true);
      return;
    }
    if (passwordValue.includes(" ") || passwordValue.trim().length < 6) {
      setInvalid(true);
      return;
    } else {
      setInvalid(false);
    }

    setIsLoading(true);
    if (isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiwKIKLDe4SxzvzVY02JHJEbBu1OmPHyM",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
            returnSecureToken: true,
          }),
          headers: {
            "content-type": "application/json",
          },
        }
      ).then((response) => {
        setIsLoading(false);
        if (!response.ok) {
          alert("Error fetching identity");
          response.json().then((data) => {
            console.log(data);
          });
        } else {
          alert("Success fetching");
          return response
            .json()
            .then((data) => {
              let expirationTime = new Date(new Date().getTime + (+data.expiresIn * 1000))
              authCtx.login(data.idToken,expirationTime.toISOString());
            })
            .catch((err) => console.log(err));
        }
      });
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiwKIKLDe4SxzvzVY02JHJEbBu1OmPHyM",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
            returnSecureToken: true,
          }),
          headers: {
            "content-type": "application/json",
          },
        }
      ).then((response) => {
        setIsLoading(false);
        if (!response.ok) {
          alert("Something went wrong");
          response.json().then((data) => console.log(data));
        } else {
          alert("Response successfully sent");
          navigate("/");
        }
        emailInputRef.current.value = ``;
        passwordInputRef.current.value = ``;
        setInvalid(false);
      });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button type="submit">
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
          {invalid && (
            <h4 color="White">{`Please enter valid email (min 5 char) and password (min 6 char) `}</h4>
          )}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
