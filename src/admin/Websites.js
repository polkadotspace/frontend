import React from "react";

import AdminPanel from "./AdminPanel";
import PostsPagination from "../components/PostsPagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;

const Websites = () => {
  return (
    <div className="admin_websites">
      <h1 className="text-[70px] font-[700] text-center mb-10">Websites</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/12">
          <AdminPanel />
        </div>
        <div className="admin_users-wrapper md:w-9/12 md:ml-6 p-6 rounded-[50px] flex flex-col justify-between">
          <div>
            {[
              {
                icon: googleIcon,
                name: "Google",
                url: "https://google.com",
              },
              {
                icon: twitterIcon,
                name: "Twitter",
                url: "htths://twitter.com",
              },
            ].map((box, i) => {
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
                  <div className="w-4/6 flex flex-col lg:flex-row">
                    <div className="w-2/6">
                      <h3 className="text-[20px] lg:text-[25px] xl:text-[30px]">
                        {box.name}
                      </h3>
                    </div>
                    <div className="w-4/6">
                      <h3 className="text-[20px] lg:text-[25px] xl:text-[30px]">
                        <a href={box.url}>{box.url}</a>
                      </h3>
                    </div>
                  </div>
                  <div className="w-1-6">{editIcon}</div>
                </div>
              );
            })}
          </div>
          <div className="-mt-32">
            <PostsPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Websites;
