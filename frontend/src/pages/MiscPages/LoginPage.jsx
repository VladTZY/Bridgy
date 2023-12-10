import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import { Link } from "react-router-dom";
import { LoginModal } from "../../components/LoginModal";

import LoginImage from "../../../Bridgy_Assets/Images/Webpage/Login.png";
import { LoginNavbar } from "../../components/LoginNavbar";

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
    <div>
      <div className="h-[15vh]">
        <LoginNavbar />
      </div>
      <div className="h-[85vh] flex">
        <div className="w-6/12 flex items-center justify-center content-center">
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
      {/* -- Login Modal(disabled)
      loginModal ? <LoginModal setLoginModal={setLoginModal} /> : null
      */}
    </div>
  );
};
