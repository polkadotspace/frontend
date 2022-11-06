import React from "react";

import person from "../assets/images/person.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const penIcon = <FontAwesomeIcon icon={faPen} />;

const AccountChange = () => {
  return (
    <div className="app_accountChange app_profile app_forms w-12/12 lg:w-10/12 xl:w-9/12 sm:mx-auto mt-20 pt-[20px] md:pt-[51px] pb-[25px] md:pb-[55px] px-10 md:pl-[44px] rounded-[30px] md:pr-[63px] bg-white">
      <div className="text-center">
        <div className="text-[40px] font-[600] relative flex">
          <img
            src={person}
            alt="Person"
            className="rounded-full w-[125px] border-[0.5px]"
          />
          <span className="edit_pen absolute top-20 left-20 cursor-pointer w-[40px] h-[40px] bg-white rounded-full text-[24px] leading-[40px]">
            {penIcon}
          </span>
          <h2 className="flex flex-col text-[15px] md:text-[30px] text-left justify-center ml-[16px] font-[500]">
            <span>User Name</span>
            <span>User Last Name</span>
          </h2>
        </div>
        <form className="app_forms-form mt-[53px] text-[15px] md:text-[25px]">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 md:mr-[60px]">
              <label className="font-[300] mt-[20px] block text-[15px] text-left ml-8 mb-[10px]">
                Change Name
              </label>
              <input
                type="text"
                className="w-full border-2 rounded-[46px] py-4 indent-6 mr-4"
                placeholder="Name"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="font-[300] mt-[20px] block text-[15px] text-left ml-8 mb-[10px]">
                Change Last name
              </label>
              <input
                type="text"
                className="w-full md:mt-0 border-2 rounded-[46px] py-4 indent-6"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 md:mr-[60px]">
              <label className="font-[300] mt-[20px] block text-[15px] text-left ml-8 mb-[10px]">
                Change Password
              </label>
              <input
                type="text"
                className="w-full border-2 rounded-[46px] py-4 indent-6 mr-4"
                placeholder="Password: ***************"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="font-[300] mt-[20px] block text-[15px] text-left ml-8 mb-[10px]">
                Change Email
              </label>
              <input
                type="text"
                className="w-full md:mt-0 border-2 rounded-[46px] py-4 indent-6"
                placeholder="Email"
              />
            </div>
          </div>
          <label className="font-[300] mt-[20px] block text-[15px] text-left ml-8 mb-[10px]">
            Change Wallet
          </label>
          <input
            type="text"
            className="wallet w-full border-2 rounded-[46px] py-4 indent-6 mb-[51px]"
            placeholder="W7Wh&weyu&ysduftudsfuW7Wh&weyu&ysduftudsfu"
          />
          <button className="main_btn mt-0">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default AccountChange;
