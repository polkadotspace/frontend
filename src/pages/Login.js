import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const eyeIcon = <FontAwesomeIcon icon={faEye} size="xs" />;
const eyeSlashIcon = <FontAwesomeIcon icon={faEyeSlash} size="xs" />;

const Login = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <div className="app_forms w-12/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 lg:mx-auto mt-20 px-10 md:px-20 rounded-[30px] bg-white">
      <div className="text-center">
        <h2 className="text-[20px] md:text-[40px] font-[600] mt-[41px] mb-[49px] md:mt-[76px]">
          Login to your Account
        </h2>
        <form className="app_forms-form md:mt-[85px]">
          <input
            type="text"
            className="w-full border-2 rounded-[46px] py-4 indent-6 font-[400] text-[12px] md:text-[20px]"
            placeholder="Type your email"
          />
          <div className="relative mt-[20px] md:mt-[35px]">
            <input
              type={`${visiblePassword ? "text" : "password"}`}
              className="w-full border-2 rounded-[46px] py-4 my-6 indent-6 font-[400] text-[12px] md:text-[20px]"
              placeholder="Type your Password"
            />
            <span
              className="absolute top-[30px] right-6 cursor-pointer form_eye"
              onClick={() => setVisiblePassword(!visiblePassword)}
            >
              {visiblePassword ? eyeIcon : eyeSlashIcon}
            </span>
          </div>
          <div className="form_btns flex justify-between items-center mt-[25px] md:mt-[35px]">
            <button
              className="main_btn w-full mr-[5px]"
              onClick={() => {
                window.sessionStorage.setItem("isLogged", true);
              }}
            >
              Login
            </button>
            <Link to="/pages/register" className="btn w-full ml-[5px]">
              Register
            </Link>
          </div>
          <p className="forgot_email md:text-[20px] font-[400] mt-[25px] md:mb-[100px] mb-[56px]">
            <Link to="/pages/reset" className="text-[10px] md:text-[20px]">
              Forgot Your Password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
