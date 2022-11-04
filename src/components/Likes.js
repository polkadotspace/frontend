import React from "react";

import person from "../assets/images/person.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faHeart } from "@fortawesome/free-solid-svg-icons";
const shareIcon = <FontAwesomeIcon icon={faShare} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} size="1x" />;

const Likes = ({ likesRef, showLikes }) => {
  return (
    <div
      className={`app_likes rounded-[50px] py-3 md:py-6 px-3 md:px-10 absolute sm:w-[20rem] md:w-[30rem] -bottom-8 md:left-[10rem] ${
        showLikes ? "block" : "hidden"
      }`}
      ref={likesRef}
    >
      <h1 className="text-[30px] md:text-[40px] font-[700] my-[20px]">
        Who Liked
      </h1>
      <div>
        {[
          {
            img: person,
            name: "Idirs Elba",
          },
          {
            img: person,
            name: "Idirs Elba",
          },
        ].map((box, i) => {
          return (
            <div
              className="app_likes-box py-[10px] pl-[5px] pr-[17px] rounded-[50px] flex items-center justify-between mt-[15px]"
              key={i}
            >
              <div className="w-2/12">
                <img
                  src={box.img}
                  alt="Perosn"
                  className="rounded-full w-full border-[1px]"
                />
              </div>
              <h3 className="w-8/12 text-left text-[15px] md:text-[20px] pl-6 flex">
                <span>{box.name}</span>
                <span className="ml-4 inline-block">{shareIcon}</span>
              </h3>
              <div className="w-2/12 text-right cursor-pointer text-[23px]">
                {heartIcon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Likes;
