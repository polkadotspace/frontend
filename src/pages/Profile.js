import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const userIcon = <FontAwesomeIcon icon={faUserCircle} size="2x" />;

const Profile = () => {
  const [verified, setVerified] = useState(false);
  return (
    <div className="app_profile app_forms w-12/12 lg:w-10/12 xl:w-9/12 sm:mx-auto mt-20 pt-[20px] md:pt-[75px] pb-[25px] md:pb-[55px] px-10 md:px-20 rounded-[30px] bg-white">
      <div className="text-center">
        <h2 className="text-[40px] font-[600]">{userIcon}</h2>
        <form className="app_forms-form mt-6 text-[15px] md:text-[25px]">
          <div className="flex flex-col md:flex-row justify-between">
            <input
              type="text"
              className="w-full md:w-1/2 border-2 rounded-[46px] py-4 indent-6 mr-4"
              placeholder="User Name"
            />
            <input
              type="text"
              className="w-full md:w-1/2 mt-5 md:mt-0 border-2 rounded-[46px] py-4 indent-6"
              placeholder="User Last Name"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between text-[20px] mt-5 md:mt-[58px] mb-[38px]">
            <div className="w-full md:w-1/2 mr-4 text-[15px] md:text-[25px]">
              <input
                type="password"
                className="w-full border-2 rounded-[46px] py-4 indent-6"
                placeholder="Password"
              />
              <input
                type="text"
                className="w-full border-2 rounded-[46px] py-4 indent-6 block md:hidden mt-[20px]"
                placeholder="User Email"
              />
              <label className="font-[300] mt-[20px] block">
                Change the password
              </label>
            </div>
            <div className="app_profile-verify_btn w-full md:w-1/2 text-[15px] md:text-[25px]">
              <input
                type="text"
                className="w-full border-2 rounded-[46px] py-4 indent-6 hidden md:block"
                placeholder="User Email"
              />
              {verified ? (
                <button className="mt-[38px] hidden md:block m-auto rounded-[33px]">
                  Verify your email
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <input
            type="text"
            className={`w-full border-2 rounded-[46px] py-4 indent-6  ${
              verified ? "connected" : ""
            }`}
            placeholder={`${
              verified
                ? "W7Wh&weyu&ysduftudsfuW7Wh&weyu&ysduftudsfu"
                : "Connect your wallet"
            }`}
          />
          <label
            className={`font-[300] mr-[111px] mt-[18px] mb-[51px] block text-[15px] md:text-[25px] text-left ml-8`}
          >
            Change Wallet
          </label>
          <button className="main_btn mt-0">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
