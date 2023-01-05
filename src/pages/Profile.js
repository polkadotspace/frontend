import React, { useState, useEffect } from "react";
import { UPDATE_MYSELF_USER_URL } from '../commons/constant';
import { toast } from 'react-toastify';
import { getUserData, getToken, setUserData } from "../auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
// import { useTab } from "@mui/base";

const userIcon = <FontAwesomeIcon icon={faUserCircle} size="2x" />;

const Profile = () => {
  const [verified, setVerified] = useState(false);

  // const [profile, setProfile] = useState({ first_name: "", last_name: "", username: "", email: "" })

  const [first_name, setFirstname] = useState("")
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");
  const [password, setPassword] = useState("");

  const updateProfile = async (e) => {
    e.preventDefault();
    console.log(`register button clicked!`);
    
    const data = { first_name, last_name, email, wallet, password };
    console.log(`body: `, data);

    fetch(`${UPDATE_MYSELF_USER_URL}`, {
      method: 'PUT',
      headers: {
        // "Accept": "application/json text/plain",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${getToken()}`
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        console.log(`user update res: `, res);
        if (res.status === 200) {
          toast.success("Successfully updated profile!");
        }
        return res.json();
      })
      .then((data) => {
        if(data?.email){
          setUserData(data)
        }
        // setProfile({ first_name: data?.first_name, last_name: data?.last_name, username: data?.username, email: data?.email });
        console.log(`user update data: `, data);
      })
      .catch((err) => {
        console.log(`user update err: `, err);
        toast.error("Profile update failed!")
      })
  }

  useEffect(() => {
    const userData = getUserData();
    setFirstname(userData?.first_name)
    setLastname(userData?.last_name)
    setEmail(userData?.email)
    setWallet(userData?.profile?.wallet)
    // setProfile({ first_name: userData?.first_name, last_name: userData?.last_name, username: userData?.username, email: userData?.email })
  }, [])


  return (
    <div className="app_profile app_forms w-12/12 lg:w-10/12 xl:w-9/12 sm:mx-auto mt-20 pt-[20px] md:pt-[75px] pb-[25px] md:pb-[55px] px-10 md:px-20 rounded-[30px] bg-white">
      <div className="text-center">
        <h2 className="text-[40px] font-[600]">{userIcon}</h2>
        <form className="app_forms-form mt-6 text-[15px] md:text-[25px]" onSubmit={updateProfile}>
          <div className="flex flex-col md:flex-row justify-between">
            <input
              type="text"
              name="first_name"
              className="w-full md:w-1/2 border-2 rounded-[46px] py-4 indent-6 mr-4"
              placeholder="User Name"
              value={first_name}
              onChange={(e)=> setFirstname(e.target.value)}
              />
            <input
              type="text"
              name="last_name"
              className="w-full md:w-1/2 mt-5 md:mt-0 border-2 rounded-[46px] py-4 indent-6"
              placeholder="User Last Name"
              value={last_name}
              onChange={(e)=> setLastname(e.target.value)}
              />
          </div>
          <div className="flex flex-col md:flex-row justify-between text-[20px] mt-5 md:mt-[58px] mb-[38px]">
            <div className="w-full md:w-1/2 mr-4 text-[15px] md:text-[25px]">
              <input
                type="password"
                name="password"
                className="w-full border-2 rounded-[46px] py-4 indent-6"
                placeholder="****"
                onChange={(e)=> setPassword(e.target.value)}
              />
              <input
                type="email"
                name="email"
                className="w-full border-2 rounded-[46px] py-4 indent-6 block md:hidden mt-[20px]"
                placeholder="User Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
              <label className="font-[300] mt-[20px] block">
                Change the password
              </label>
            </div>
            <div className="app_profile-verify_btn w-full md:w-1/2 text-[15px] md:text-[25px]">
              <input
                type="text"
                name="wallet"
                className="w-full border-2 rounded-[46px] py-4 indent-6 hidden md:block"
                placeholder="User Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
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
            name="wallet"
            value={wallet}
            onChange={(e)=> setWallet(e.target.value)}
            className={`w-full border-2 rounded-[46px] py-4 indent-6  ${verified ? "connected" : ""
          }`}
            placeholder={`${verified
                ? "W7Wh&weyu&ysduftudsfuW7Wh&weyu&ysduftudsfu"
                : "Connect your wallet"
              }`}
          />
          <label
            className={`font-[300] mr-[111px] mt-[18px] mb-[51px] block text-[15px] md:text-[25px] text-left ml-8`}
          >
            Change Wallet
          </label>
          <button className="main_btn mt-0 bg-pink-600 text-white" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
