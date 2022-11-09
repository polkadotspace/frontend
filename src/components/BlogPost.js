import React from "react";

import person from "../assets/images/person.jpg";
import bitcoin from "../assets/images/bitcoin.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

import {
  faDiscord,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const shareIcon = <FontAwesomeIcon icon={faShare} />;
const discordIcon = <FontAwesomeIcon icon={faDiscord} />;
const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;

const BlogPost = () => {
  const renderIcons = (list = []) => {
    return list.map((icon, i) => {
      return (
        <li
          key={i}
          className={`mr-[10px] lg:mr-[30px] text-[12px] md:text-[20px] mb-[15px]`}
        >
          <a href="/">{icon}</a>
        </li>
      );
    });
  };
  return (
    <>
      <div className="app_blog-box border-b-2 flex md:pb-[25px] pl-[16px] pb-[15px] justify-between mt-[25px]">
        <div className="app_blog-box_info w-4/6">
          <div className="app_blog-box_author flex items-center">
            <img
              src={person}
              alt="Person"
              className="w-6 md:w-10 rounded-full"
            />
            <span className="text-[12px] md:text-[18px] ml-2 mr-6">
              Anthony Barrios
            </span>
            <span className="text-[8px] md:text-[15px] text-gray-400">
              Jan 8
            </span>
          </div>
          <div className="app_blog-box_title text-[14px] md:text-[22px] font-[700] my-3">
            <a href="/pages/blogarticle">
              How I Used Data Science to Establish 3 Consistent Streams of
              Income
            </a>
          </div>
          <div className="app_blog-box_description text-[12px] md:text-[16px]">
            <a href="/">
              Reproducible ways to create high-yield income streams with data
              science — Hey guys, I know many of you have thought about ways to
              reinvent...
            </a>
          </div>
          <div className="app_blog-box_tags mt-[25px] lg:mt-[58px] flex">
            <span className="py-[4px] md:py-[9px] px-[8px] md:px-[30px] text-[10px] md:text-[15px] cursor-pointer bg-[#D9D9D9] rounded-[34px]">
              Python
            </span>
            <span className="py-[4px] md:py-[9px] px-[8px] md:px-[30px] text-[10px] md:text-[15px] cursor-pointer bg-[#D9D9D9] rounded-[34px] mx-4">
              Javascript
            </span>
            <span className="py-[4px] md:py-[9px] px-[8px] md:px-[30px] text-[10px] md:text-[15px] cursor-pointer bg-[#D9D9D9] rounded-[34px]">
              Data Science
            </span>
          </div>
        </div>
        <div className="app_blog-box_img w-2/6 flex flex-col items-center justify-center">
          <div className="app_search_result-images_img">
            <img
              className="rounded-[16px] mx-auto w-full lg:w-[80%]"
              src={bitcoin}
              alt="Bitcoin"
            />
            <ul className="app_search_result-social_icon flex justify-center mt-[30px] lg:mt-[20px]">
              {renderIcons([shareIcon, discordIcon, facebookIcon, twitterIcon])}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;