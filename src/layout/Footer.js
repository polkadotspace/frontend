import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const walletIcon = <FontAwesomeIcon icon={faWallet} />;
const discordIcon = <FontAwesomeIcon icon={faDiscord} />;
const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;

const Footer = () => {
  return (
    <div className="app_footer pt-48 pb-20">
      <div className="grid grid-cols-6">
        <div className="app_footer-logo col-span-2">
          <Link to="/" className="app_logo">
            Polkadot <span>Space</span>
          </Link>
        </div>
        <ul className="col-span-1 text-[24px]">
          {["About", "Support", "The Seam"].map((link, i) => {
            return (
              <li className="mt-4" key={i}>
                <Link to={`/pages/${link.toLowerCase()}`}>{link}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="col-span-1 text-[24px]">
          {["Home Page", "Dashboard", "RPC Tools"].map((link, i) => {
            return (
              <li className="mt-4" key={i}>
                {link === "Home Page" ? (
                  <Link to="/">{link}</Link>
                ) : (
                  <Link to={`/pages/${link.toLowerCase()}`}>{link}</Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="col-span-2 text-center">
          <h3>Social Media</h3>
          <ul className="app_footer-social bordered_icons flex justify-center">
            {[walletIcon, discordIcon, facebookIcon, twitterIcon].map(
              (link, i) => {
                return (
                  <li className="mt-4" key={i}>
                    <a href="/">{link}</a>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
