import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const eyeIcon = <FontAwesomeIcon icon={faEye} size="xs" />;
const eyeSlashIcon = <FontAwesomeIcon icon={faEyeSlash} size="xs" />;

const Login = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <div className="app_forms w-12/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 sm:mx-auto mt-20 py-16 px-10 md:px-20 rounded-[30px]">
      <div className="text-center">
        <h2 className="text-[32px] sm:text-[40px] font-[600]">
          Login to your Account
        </h2>
        <form className="app_forms-form mt-6">
          <input
            type="text"
            className="w-full border-2 rounded-[46px] py-4 indent-6 font-[400] text-[20px]"
            placeholder="Type your email"
          />
          <div className="relative">
            <input
              type={`${visiblePassword ? "text" : "password"}`}
              className="w-full border-2 rounded-[46px] py-4 my-6 indent-6 font-[400] text-[20px]"
              placeholder="Type your Password"
            />
            <span
              className="absolute top-9 right-6 cursor-pointer form_eye"
              onClick={() => setVisiblePassword(!visiblePassword)}
            >
              {visiblePassword ? eyeIcon : eyeSlashIcon}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <button className="main_btn mt-8 w-full sm:mr-2">Login</button>
            <Link to="/pages/register" className="btn mt-8 sm:ml-2 w-full">
              Register
            </Link>
          </div>
          <p className="forgot_email mt-4 md:text-[20px] font-[400]">
            <Link to="/pages/reset" className="text-[10px] p-0">
              Forgot Your Password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
