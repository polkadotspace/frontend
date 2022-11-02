import React, { useRef } from "react";

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
  // const [favPosts, setFavPosts] = useState([]);
  const favIconRef = useRef(null);

  // Render Any Icon
  const renderIcons = (list = []) => {
    return list.map((icon, i) => {
      return (
        <li key={i}>
          <a href="/">{icon}</a>
        </li>
      );
    });
  };

  const fav = (e) => {
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
      <div className="app_search_result grid grid-cols-12 px-6 rounded-[50px] relative z-[200] mt-20">
        <div className="col-span-1 mt-8">{userIcon}</div>
        <div className="col-span-9">
          <p className="app_search_result-time font-[300]">
            <span className="text-[1.13rem]">10.28.22 </span>
            <span className="text-[1rem]">20:54pm</span>
          </p>
          <h1 className="text-[2.5rem] -mt-4">Bitcoin are going to $25.000</h1>
          <h3 className="app_search_result-link -mt-6">
            <a className="text-[20px] font-[300]" href="/">
              https://polkadot.network/.....
            </a>
          </h3>
          <p className="text-[25px] font-[400] w-2/3 -mt-2">
            Today bitcoin is will go up.We analyse the crypto volume market.....
          </p>
          <ul
            className="bordered_icons flex col-span-2 text-center pt-6 pb-6"
            ref={favIconRef}
          >
            {[handClappingIcon, languageIcon, heartIcon].map((icon, i) => (
              <li key={i} onClick={(e) => fav(e)}>
                <a href="/">{icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="app_search_result-social_icon col-span-2 flex justify-between text-[25px] mt-16">
          {renderIcons([shareIcon, discordIcon, facebookIcon, twitterIcon])}
        </ul>
      </div>
    );
  };

  return <>{componentStructure()}</>;
};

export default SearchResult;
