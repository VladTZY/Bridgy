import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import { Link } from "react-router-dom";

import LoginImage from "../../../Bridgy_Assets/Images/Webpage/Login.png";
import { LoginNavbar } from "../../components/LoginNavbar";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })).then((res) => {
      setEmail("");
      setPassword("");
    });
  };

  return (
    <div>
      <div className="h-[10%]">
        <LoginNavbar />
      </div>
      <div className="flex h-[90%]">
        <div className="mt-40 w-6/12 flex items-center justify-center content-center">
          <div className="w-8/12">
            <h1 className="font-semibold text-6xl">Login</h1>
            <p className="mt-3">
              Don`t have an account? Check our account policy{" "}
              <Link to="/help" className="text-[#2EA0FB] hover:underline">
                here
              </Link>
            </p>

            <form onSubmit={submitHandler} className="flex flex-col mt-12">
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-3 appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
                />
              </div>

              <div className="flex justify-between mt-5">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="checked:bg-[#2135D9]"
                  ></input>
                  <p className="text-gray-500 ml-2">Remember me</p>
                </div>
                <p className="text-gray-500">Forgot password?</p>
              </div>

              <div>
                <button
                  type="submit"
                  className="mt-10 btn w-full bg-[#2EA0FB] p-5 rounded-[40px] text-white text-3xl hover:bg-[#2135D9]"
                >
                  Login
                </button>
              </div>
            </form>

            <hr className="w-full h-px my-10 bg-[#2EA0FB] border-0" />
          </div>
        </div>

        <div className="w-6/12">
          <img
            src={LoginImage}
            className="w-5/12 absolute bottom-0 right-0"
          ></img>
        </div>
      </div>
    </div>
  );
};
