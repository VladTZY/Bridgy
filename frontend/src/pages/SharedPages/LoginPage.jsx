import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import { Link } from "react-router-dom";

import LoginImage from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/Login.png";
import { NavBar } from "../../components/landingComponents/NavBar";
import { Toolbar } from "@mui/material";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();
  const [loginModal, setLoginModal] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .then((res) => {
        setEmail("");
        setPassword("");
        setError(false);
      })
      .catch((error) => {
        setError(true);
        //setLoginModal(true);
      });
  };

  return (
    <div className="bg-white">
      <NavBar />
      <Toolbar />
      <div className="flex flex-col lg:flex-row items-center justify-center w-[100vw] h-[90vh]">
        <div className="flex flex-col w-[100%] lg:w-[50%] items-center justify-center">
          <h1 className="font-semibold text-4xl">Login</h1>
          <p className="mt-3 px-4 text-center">
            Don't have an account? Check our account policy{" "}
            <Link to="/help" className="text-[#2EA0FB] hover:underline">
              here
            </Link>
          </p>
          <form
            onSubmit={submitHandler}
            className="flex flex-col mt-6 w-[100%] lg:w-[70%]  px-4"
          >
            <div>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
                className={`${
                  error ? "border-red-500" : "border-gray-200"
                } appearance-none border-2 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]`}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`${
                  error ? "border-red-500" : "border-gray-200"
                } mt-3 appearance-none border-2 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]`}
              />
            </div>

            {
              {
                true: (
                  <div className="mt-2 text-red-500 text-xl">
                    The email or password does not match. Please try again.
                  </div>
                ),
              }[error]
            }

            <div className="flex justify-between mt-5">
              <div className="flex">
                <input type="checkbox" className="checked:bg-[#2135D9]"></input>
                <p className="text-gray-500 ml-2">Remember me</p>
                <br></br>
              </div>
              <p className="text-gray-500">Forgot password?</p>
            </div>

            <div>
              <button
                type="submit"
                className="mt-10 btn w-full bg-[#2EA0FB] py-2 rounded-xl text-white text-xl hover:bg-[#2135D9]"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="hidden lg:flex lg:flex-col w-[50%] items-center justify-center">
          <img
            src={LoginImage}
            alt="Login"
            className="w-[80%] h-[70%] rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
