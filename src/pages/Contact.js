import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const discordIcon = <FontAwesomeIcon icon={faDiscord} size="lg" />;
const atSignIcon = <FontAwesomeIcon icon={faAt} size="lg" />;

const Contact = () => {
  return (
    <div className="app_contact">
      <div className="app_forms w-8/12 m-auto py-16 px-20 rounded-[30px]">
        <div className="text-center">
          <h2 className="text-[40px] font-[600]">Contact Us</h2>
          <form className="app_forms-form mt-6">
            <input
              type="text"
              className="w-full border-2 rounded-[46px] py-4 indent-6 font-[400] text-[20px]"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="w-full border-2 rounded-[46px] py-4 indent-6 font-[400] text-[20px] my-6"
              placeholder="Email"
            />
            <textarea
              className="w-full border-2 rounded-[50px] py-4 indent-6 font-[400] text-[20px] h-[216px]"
              placeholder="Ticket"
            ></textarea>
            <div className="flex justify-between items-center">
              <button className="main_btn mt-8 m-auto">Submit Ticket</button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-[60px] font-[500]">Our Social Media</h2>
        <ul className="app_contact-icons bordered_icons flex justify-center">
          {[discordIcon, atSignIcon].map((icon, i) => (
            <li key={i}>
              <a href="/">{icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
