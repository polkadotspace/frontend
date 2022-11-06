import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

import Requests from "../components/Requests";

const Sidebar = ({ openNavbar, setOpenNavbar, barsRefIcon }) => {
  // Requests Pop up
  const [openRequest, setOpenRequest] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [urlValue, setURLValue] = useState("");

  // Sidebar Links State
  const links = ["Home", "Favourites", "RPC", "Contact"];
  const sideBarRef = useRef(null);

  // Create Reusable Function For Closing Navabrs Floaitng Containers
  document.body.addEventListener("click", (e) => {
    if (
      barsRefIcon.current &&
      !barsRefIcon.current.contains(e.target) &&
      !sideBarRef.current.contains(e.target)
    ) {
      setOpenNavbar(false);
    }
  });

  // Create Sidebar Links Structure
  const renderLinks = () => {
    return links.map((link, i) => {
      return (
        <li className="sidebar_list-item" key={i}>
          {link === "Home" ? (
            <Link
              to="/"
              className="p-2 flex justify-center cursor-pointer text-lg"
            >
              {link}
            </Link>
          ) : (
            <Link
              to={`/pages/${link.toLowerCase()}`}
              className="p-2 flex justify-center cursor-pointer text-lg"
            >
              {link}
            </Link>
          )}
        </li>
      );
    });
  };

  return (
    <div
      className={`app_sidebar transition-all duration-500 pt-20 px-6 h-screen fixed right-full top-0 translate-x-0 z-[700] ${
        openNavbar ? "translate-x-full" : "translate-x-0"
      }`}
      ref={sideBarRef}
    >
      <div className="app_sidebar-logo text-2xl">
        <Link to="/">Polkadot Space</Link>
      </div>
      <ul className="sidebar_list w-52 mt-20">{renderLinks()}</ul>
      <ul className="app_sidebar-auth mt-16 text-[20px] text-center">
        <li className="mb-6">
          <button
            className="btn block m-auto border-black text-black rounded"
            onClick={() => setOpenRequest(true)}
          >
            Requests
          </button>
        </li>
        <li className="mb-6">
          <Link to="/pages/login" className="btn block">
            Login
          </Link>
        </li>
        <li>
          <Link to="/pages/register" className="btn block">
            Register
          </Link>
        </li>
      </ul>
      <div
        className={`absolute top-10 left-[120%] ${
          openRequest ? "block" : "hidden"
        }`}
      >
        <Requests
          setNameValue={setNameValue}
          setURLValue={setURLValue}
          nameValue={nameValue}
          urlValue={urlValue}
        />
      </div>
    </div>
  );
};

export default Sidebar;
