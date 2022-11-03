import React from "react";

import person from "../assets/images/person.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faHeart } from "@fortawesome/free-solid-svg-icons";
const shareIcon = <FontAwesomeIcon icon={faShare} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} size="1x" />;

const Likes = ({ likesRef, showLikes }) => {
  return (
    <div
      className={`app_likes rounded-[50px] py-3 md:py-6 px-3 md:px-10 absolute sm:w-[20rem] md:w-[30rem] bottom-[6rem] md:left-[10rem] ${
        showLikes ? "block" : "hidden"
      }`}
      ref={likesRef}
    >
      <h1 className="text-[20px] md:text-[40px] font-[700] my-[20px]">
        Who Liked
      </h1>
      <div>
        {[
          {
            img: person,
            name: "Idirs Elba",
          },
        ].map((box, i) => {
          return (
            <div
              className="app_likes-box p-4 rounded-[50px] flex items-center justify-between"
              key={i}
            >
              <div className="w-2/12">
                <img src={box.img} alt="Perosn" className="rounded-full w-16" />
              </div>
              <h3 className="w-6/12 text-left text-[17px] md:text-[20px] pl-6">
                {box.name}
                <span className="ml-4 inline-block">{shareIcon}</span>
              </h3>
              <div className="w-4/12 text-right cursor-pointer">
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
