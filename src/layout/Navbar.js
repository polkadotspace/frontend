import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faCaretDown,
  faBars,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const userIcon = <FontAwesomeIcon icon={faUserCircle} />;
const arrowDownIcon = <FontAwesomeIcon icon={faCaretDown} />;
const barsIcon = <FontAwesomeIcon icon={faBars} size="lg" />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;

const Navbar = () => {
  const languageList = ["en", "fr"];
  const [openLanguages, setOpenLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageList[0]);
  const langaugesIconRef = useRef(null);

  const applyLangaugeOnClick = (e) => {
    if (langaugesIconRef.current) {
      setSelectedLanguage(e.target.textContent);
      setOpenLanguages(false);
    }
  };

  // Set Sidebar State
  const [openNavbar, setOpenNavbar] = useState(false);
  const barsRefIcon = useRef(null);

  return (
    <div className="app_navbar py-8 flex flex-col md:flex-row justify-between items-center">
      <div className="app_navbar-logo text-center lg:text-left w-12/12 sm:w-5/12 lg:w-6/12 text-[1.88rem]">
        <Link to="/" className="app_logo">
          Polkadot <span>Space</span>
        </Link>
      </div>
      <div className="app_navbar-items flex justify-between items-center w-12/12 sm:w-6/12 lg:w-4/12">
        <div className="app_navbar-items_language cursor-pointer relative font-[200]">
          <div
            className="app_navbar-items_language-icon w-full flex justify-between py-2"
            onClick={() => setOpenLanguages(!openLanguages)}
            ref={langaugesIconRef}
          >
            <span>{arrowDownIcon}</span>
            <span className="ml-2">{selectedLanguage}</span>
          </div>
          <ul
            className={`px-2 absolute -left-1 w-20 rounded ${
              openLanguages ? "top-100" : "-top-64"
            }`}
          >
            {languageList.map((lang, i) => {
              return (
                <li
                  className="cursor-pointer border-b-2"
                  onClick={(e) => applyLangaugeOnClick(e)}
                  key={i}
                >
                  {lang}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="app_navbar-items_login w-3/6">
          <Link to="/pages/login" className="btn px-8 py-2 text-[18px]">
            login
          </Link>
        </div> */}
        <div className="app_navbar-items_favourites cursor-pointer text-[42px] text-center ml-6 md:ml-0">
          <Link to="/pages/favourites">
            {heartIcon} <span>2</span>
          </Link>
        </div>
        <div className="app_navbar-items_profile cursor-pointer text-[42px] mx-6 md:mx-0">
          <Link to="/pages/profile">{userIcon}</Link>
        </div>
        <div
          className="app_navbar-items_bars cursor-pointer text-right"
          onClick={() => setOpenNavbar(!openNavbar)}
          ref={barsRefIcon}
        >
          <span>{barsIcon}</span>
        </div>
      </div>
      <Sidebar
        openNavbar={openNavbar}
        setOpenNavbar={setOpenNavbar}
        barsRefIcon={barsRefIcon}
      />
    </div>
  );
};

export default Navbar;
