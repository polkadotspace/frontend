import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const userIcon = <FontAwesomeIcon icon={faUserCircle} size="2x" />;

const Profile = () => {
  return (
    <div className="app_profile app_forms w-8/12 m-auto py-16 px-20 rounded-[30px]">
      <div className="text-center">
        <h2 className="text-[40px] font-[600]">{userIcon}</h2>
        <form className="app_forms-form mt-6">
          <div className="flex justify-between">
            <input
              type="text"
              className="w-1/2 border-2 rounded-[46px] py-4 indent-6 font-[400] text-[20px] mr-4"
              placeholder="User Name"
            />
            <input
              type="text"
              className="w-1/2 border-2 rounded-[46px] py-4 indent-6 font-[400] text-[20px]"
              placeholder="User Last Name"
            />
          </div>
          <div className="flex justify-between text-[20px] mt-[58px] mb-[38px]">
            <div className="w-1/2 mr-4">
              <input
                type="password"
                className="w-full border-2 rounded-[46px] py-4 indent-6 font-[400]"
                placeholder="Password"
              />
              <label className="font-[300] mt-[20px] block">
                Change the password
              </label>
            </div>
            <div className="app_profile-verify_btn w-1/2">
              <input
                type="text"
                className="w-full border-2 rounded-[46px] py-4 indent-6 font-[400] text-[20px]"
                placeholder="User Email"
              />
              <button className="mt-[38px]">Verify your email</button>
            </div>
          </div>
          <input
            type="text"
            className="w-full border-2 rounded-[46px] py-4 indent-6 font-[400] text-[20px]"
            placeholder="Connect your wallet"
          />
          <button className="main_btn mt-8">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
