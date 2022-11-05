import React, { useState, useRef } from "react";

import Likes from "./Likes";

import bitcoin from "../assets/images/bitcoin.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faHandsClapping,
  faHeart,
  faLanguage,
  faShare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import {
  faDiscord,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const userIcon = <FontAwesomeIcon icon={faCircleUser} size="2x" />;
const handClappingIcon = <FontAwesomeIcon icon={faHandsClapping} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const starIcon = <FontAwesomeIcon icon={faStar} />;
const languageIcon = <FontAwesomeIcon icon={faLanguage} />;
const shareIcon = <FontAwesomeIcon icon={faShare} />;
const discordIcon = <FontAwesomeIcon icon={faDiscord} />;
const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;

const PostComponent = ({ filterText }) => {
  const [showLikes, setShowLikes] = useState(false);
  const likesRef = useRef(null);
  const heartRef = useRef(null);

  // Render Any Icon
  const renderIcons = (list = []) => {
    return list.map((icon, i) => {
      return (
        <li
          key={i}
          className="mr-[20px] md:mr-[43px] text-[19px] md:text-[34px] mb-[15px]"
        >
          <a href="/">{icon}</a>
        </li>
      );
    });
  };

  // Click Favourite Icon And Assign The Color
  const favIconRef = useRef(null);
  const clickIconFav = (e) => {
    e.preventDefault();
    if (favIconRef.current) {
      favIconRef.current.children[2].firstElementChild.classList.toggle(
        "clicked"
      );
    }
  };

  // The Main Component Structure
  const componentStructure = () => {
    return (
      <div className="app_search_result mx-auto md:mx-0 flex px-6 justify-between rounded-[20px] md:rounded-[50px] relative z-[200] mt-[40px] md:mt-[90px] w-6/6 md:w-11/12">
        <div
          className={`${
            filterText === "All" ? "md:pl-[80px]" : "md:pl-[40px]"
          } w-8/12`}
        >
          <p className={`app_search_result-time font-[300]`}>
            <span className="text-[10px] md:text-[18px]">10.28.22 </span>
            <span className="text-[10px] md:text-[18px]">20:54pm</span>
          </p>
          <h1
            className={`-mt-0 lg:-mt-4 flex items-center ${
              filterText === "All" ? "md:-ml-[65px]" : ""
            }`}
          >
            {filterText === "All" ? (
              <div className="mr-1 text-[13px] md:text-[30px]">{userIcon}</div>
            ) : (
              ""
            )}
            <div className="text-[14px] md:text-[40px]">
              Bitcoin are going to $25.000
            </div>
          </h1>
          <h3 className={`app_search_result-link -mt-4 lg:-mt-6`}>
            <a className="text-[10px] md:text-[20px] font-[300]" href="/">
              https://polkadot.network/.....
            </a>
          </h3>
          <p className={`text-[10px] md:text-[25px] font-[400] w-5/6 -mt-2`}>
            Today bitcoin is will go up.We analyse the crypto volume market.....
          </p>
          <ul
            className={`bordered_icons flex col-span-2 text-center pt-6 pb-6 relative text-[23px] md:text-[40px]`}
            ref={favIconRef}
          >
            <li onClick={(e) => e.preventDefault()}>
              <a href="/">{handClappingIcon}</a>
            </li>
            <li onClick={(e) => e.preventDefault()}>
              <a href="/">{languageIcon}</a>
            </li>
            <li onClick={(e) => clickIconFav(e)}>
              <a
                href="/"
                onMouseEnter={() => setShowLikes(true)}
                onMouseLeave={() => setShowLikes(false)}
                ref={heartRef}
              >
                {window.location.href.includes("search") ? starIcon : heartIcon}
              </a>
            </li>
            {window.location.href.includes("favourites") ? (
              <Likes likesRef={likesRef} showLikes={showLikes} />
            ) : (
              ""
            )}
          </ul>
        </div>
        {filterText !== "All" ? (
          <div className="app_search_result-images flex flex-col pt-[25px] md:pt-[73px] pb-[25px] w-4/12">
            <div className="app_search_result-images_img">
              <img
                className="rounded-[16px] ml-auto w-full h-full md:w-[328px]"
                src={bitcoin}
                alt="Bitcoin"
              />
            </div>
            <ul className="app_search_result-social_icon flex justify-end text-[25px] mt-[30px] md:mt-[29px]">
              {renderIcons([shareIcon, discordIcon, facebookIcon, twitterIcon])}
            </ul>
          </div>
        ) : (
          <ul className="app_search_result-social_icon flex flex-col text-center lg:flex-row justify-center text-[25px] mt-[29px]">
            {renderIcons([shareIcon, discordIcon, facebookIcon, twitterIcon])}
          </ul>
        )}
      </div>
    );
  };

  return <>{componentStructure()}</>;
};

export default PostComponent;
