import React, { useState, useEffect } from "react";

import AdminPanel from "./AdminPanel";
import Popup from "./Popup";
import PostsPagination from "../components/PostsPagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;
const plusIcon = <FontAwesomeIcon icon={faPlus} />;

const Websites = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [urlValue, setURLValue] = useState("");
  const [websites, setWebsites] = useState([
    { id: 1, icon: googleIcon, name: "Google", url: "https://www.google.com" },
    {
      id: 2,
      icon: twitterIcon,
      name: "Twitter",
      url: "https://www.twitter.com",
    },
    {
      id: 2,
      icon: twitterIcon,
      name: "Twitter",
      url: "https://www.twitter.com",
    },
  ]);
  const addWebsite = () => {
    setWebsites((webs) => [
      ...webs,
      { icon: googleIcon, name: nameValue, url: urlValue },
    ]);
    setVisiblePopup(false);
    setNameValue("");
    setURLValue("");
  };

  return (
    <div className="admin_websites">
      <h1 className="text-[70px] font-[700] text-center mb-10">Websites</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/12">
          <AdminPanel />
        </div>
        <div className="admin_users-wrapper h-[1050px] md:w-9/12 md:ml-6 p-6 rounded-[50px] grid grid-rows-6">
          <div className="overflow-y-scroll row-span-4">
            {websites.map((box, i) => {
              return (
                <div
                  className="admin_users-wrapper_box admin_websites-box flex justify-center mt-[80px]"
                  key={i}
                >
                  <ul className="w-1/6 bordered_icons">
                    <li>
                      <a href={box.url} onClick={(e) => e.preventDefault()}>
                        {box.icon}
                      </a>
                    </li>
                  </ul>
                  <div className="w-5/6 flex">
                    <div className="w-1/6">
                      <h3 className="admin_wesbites-box_name text-[30px]">
                        {box.name}
                      </h3>
                    </div>
                    <div className="w-5/6">
                      <h3 className="text-[30px] text-center">
                        <a href={box.url}>{box.url}</a>
                      </h3>
                    </div>
                  </div>
                  <div
                    className="w-1-6 cursor-pointer"
                    onClick={(e) => {
                      setVisiblePopup(true);
                    }}
                  >
                    {editIcon}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="admin_websites-popup text-center relative mt-6 rows-span-1 flex justify-center items-end">
            <button
              className="admin_websites-popup_plus main_btn py-1 px-[70px] text-[23px]"
              onClick={() => {
                setVisiblePopup(true);
              }}
            >
              {plusIcon}
            </button>
            <div
              className={`admin_websites-popup_box absolute bottom-[50%] bg-white ${
                visiblePopup ? "block" : "hidden"
              }`}
            >
              <Popup
                setVisiblePopup={setVisiblePopup}
                setNameValue={setNameValue}
                setURLValue={setURLValue}
                nameValue={nameValue}
                urlValue={urlValue}
                addWebsite={addWebsite}
              />
            </div>
          </div>
          {websites.length > 10 ? (
            <div className="rows-span-1 -mt-[12.5rem]">
              <PostsPagination />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Websites;
