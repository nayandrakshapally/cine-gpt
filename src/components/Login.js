import React from "react";
import Header from "./Header";

const Login = () => {
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
        <form className="w-4/12 absolute p-16 bg-black my-44 rounded-lg bg-opacity-80">
          <h1 className="text-4xl py-4 font-medium">Sign In</h1>
          <input
            type="text"
            placeholder="Email"
            className="p-4 my-4 w-full bg-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-800"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            Sign In
          </button>
          <div className="py-0">
            <span className="text-gray-500">New to Netflix?</span>
            <span> Sign Up Now.</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
