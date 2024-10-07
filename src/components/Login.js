import React, { useState } from "react";
import Header from "./Header";
import poster from "../images/poster.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={poster} alt="poster" />
      </div>
      <form className="w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white absolute bg-black rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-300"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-300"
          type="text"
          placeholder="Email Address"
        />

        <input
          className="p-4 my-4 w-full bg-gray-300"
          type="password"
          placeholder="Password"
        />

        <button className="p-4 my-4 w-full bg-red-700 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
