import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const eyeIcon = <FontAwesomeIcon icon={faEye} size="xs" />;
const eyeSlashIcon = <FontAwesomeIcon icon={faEyeSlash} size="xs" />;

const Register = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  return (
    <div className="app_forms w-12/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 lg:mx-auto mt-[76px] px-10 md:px-20 rounded-[30px] bg-white">
      <div className="text-center">
        <h2 className="text-[20px] md:text-[40px] font-[600] mt-[32px] mb-[50px]">
          Register Your Account
        </h2>
        <form className="app_forms-form mt-6 font-[400] text-[12px] md:text-[20px]">
          <input
            type="text"
            className="w-full border-2 rounded-[46px] py-4 indent-6"
            placeholder="Type your Name"
          />
          <input
            type="text"
            className="w-full border-2 rounded-[46px] py-4 indent-6 my-[20px]"
            placeholder="Type your Last Name"
          />
          <input
            type="text"
            className="w-full border-2 rounded-[46px] py-4 indent-6 "
            placeholder="Type your email"
          />
          <div className="relative">
            <input
              type={`${visiblePassword ? "text" : "password"}`}
              className="w-full border-2 rounded-[46px] py-4 indent-6 my-[20px]"
              placeholder="Type your Password"
            />
            <span
              className="absolute top-[32px] md:top-[27px] right-6 cursor-pointer form_eye text-[20px] md:text-[32px]"
              onClick={() => setVisiblePassword(!visiblePassword)}
            >
              {visiblePassword ? eyeIcon : eyeSlashIcon}
            </span>
          </div>
          <div className="relative">
            <input
              type={`${visibleConfirmPassword ? "text" : "password"}`}
              className="w-full border-2 rounded-[46px] py-4 indent-6"
              placeholder="Confirm your Password"
            />
            <span
              className="absolute top-[12px] md:top-[8px] right-6 cursor-pointer form_eye text-[20px] md:text-[32px]"
              onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)}
            >
              {visibleConfirmPassword ? eyeIcon : eyeSlashIcon}
            </span>
          </div>
          <div className="flex justify-between items-center mt-[43px] mb-[38px] md:mb-[150px]">
            <button className="main_btn w-full mr-[5px]">Register</button>
            <Link className="btn w-full ml-[5px]" to="/pages/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
