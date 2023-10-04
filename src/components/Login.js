import React, { useRef, useState } from "react";
import Header from "./Header";
import { emailValidate, passwordValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [emailErrMsg, setEmailErrMsg] = useState(null);
  const [passwordErrMsg, setPasswordErrMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const checkEmailValid = emailValidate(email.current.value);
    const checkPasswordValid = passwordValidate(password.current.value);
    setEmailErrMsg(checkEmailValid);
    setPasswordErrMsg(checkPasswordValid);
    if (checkEmailValid || checkPasswordValid) return;
    if (!isSigninForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user", user);
          navigate('/browse');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
          navigate('/browse');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/eb27ceac-5f53-400f-94ac-8ffc6d354e6a/US-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <div className="flex justify-center text-white">
        <form
          className="absolute p-16 bg-black my-44 rounded-lg bg-opacity-80 w-4/12"
          onSubmit={submitForm}
        >
          <h1 className="text-4xl py-4 font-medium">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSigninForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-3 w-full bg-gray-800"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email"
            className="p-4 my-3 w-full bg-gray-800"
          />
          <p className="text-red-600 font-bold my-0">{emailErrMsg}</p>
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-4 my-3 w-full bg-gray-800"
          />
          <p className="text-red-600 font-bold my-0">{passwordErrMsg}</p>
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="py-0">
            <span className="text-gray-500">
              {isSigninForm ? "New to Netflix? " : "Already Registered? "}
            </span>
            <span
              onClick={toggleSignInForm}
              className="cursor-pointer underline"
            >
              {isSigninForm ? "Sign Up Now." : "Sign In Now"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
