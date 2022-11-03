import React, { useState, useRef } from "react";

import Likes from "./Likes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faHandsClapping,
  faHeart,
  faLanguage,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faDiscord,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const userIcon = <FontAwesomeIcon icon={faCircleUser} size="2x" />;
const handClappingIcon = <FontAwesomeIcon icon={faHandsClapping} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const languageIcon = <FontAwesomeIcon icon={faLanguage} />;
const shareIcon = <FontAwesomeIcon icon={faShare} />;
const discordIcon = <FontAwesomeIcon icon={faDiscord} />;
const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;

const SearchResult = () => {
  const [showLikes, setShowLikes] = useState(false);
  const likesRef = useRef(null);
  const heartRef = useRef(null);

  // Render Any Icon
  const renderIcons = (list = []) => {
    return list.map((icon, i) => {
      return (
        <li key={i} className="mx-2 my-2 lg:my-0 text-center">
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
      <div className="app_search_result mx-auto md:mx-0 flex px-6 justify-between rounded-[20px] md:rounded-[50px] relative z-[200] mt-[40px] md:mt-[90px] w-6/6 md:w-5/6">
        <div className="mt-8 hidden md:block text-[30px] mr-6">{userIcon}</div>
        <div>
          <p className="app_search_result-time font-[300]">
            <span className="text-[10px] md:text-[18px]">10.28.22 </span>
            <span className="text-[10px] md:text-[18px]">20:54pm</span>
          </p>
          <h1 className="-mt-0 lg:-mt-4 flex items-center">
            <div className="mr-4 block md:hidden text-[13px]">{userIcon}</div>
            <div className="text-[14px] md:text-[40px]">
              Bitcoin are going to $25.000
            </div>
          </h1>
          <h3 className="app_search_result-link -mt-4 lg:-mt-6">
            <a className="text-[10px] md:text-[20px] font-[300]" href="/">
              https://polkadot.network/.....
            </a>
          </h3>
          <p className="text-[10px] md:text-[25px] font-[400] w-2/3 -mt-2">
            Today bitcoin is will go up.We analyse the crypto volume market.....
          </p>
          <ul
            className="bordered_icons flex col-span-2 text-center pt-6 pb-6 relative text-[15px] md:text-[40px]"
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
                {heartIcon}
              </a>
            </li>
            <Likes likesRef={likesRef} showLikes={showLikes} />
          </ul>
        </div>
        <ul className="app_search_result-social_icon flex flex-col lg:flex-row justify-center text-[25px] mt-0 lg:mt-16">
          {renderIcons([shareIcon, discordIcon, facebookIcon, twitterIcon])}
        </ul>
      </div>
    );
  };

  return <>{componentStructure()}</>;
};

export default SearchResult;
