import React, { useState } from "react";

import BlogSidebar from "../components/BlogSidebar";
import Comments from "../components/Comments";

import person from "../assets/images/person.jpg";
import blogImgOne from "../assets/images/blog/blog.jpg";
import blogImgTwo from "../assets/images/blog/blog2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShare,
  faHandsClapping,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;
const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const discordIcon = <FontAwesomeIcon icon={faDiscord} />;
const shareIcon = <FontAwesomeIcon icon={faShare} />;
const clappingIcon = <FontAwesomeIcon icon={faHandsClapping} />;
const commentIcon = <FontAwesomeIcon icon={faComment} />;

const BlogArticle = () => {
  // Trigger Color Change On Like Click
  const [clicked, setClicked] = useState(false);

  // Trigger Comments Open On Comment Icon Click
  const [openComments, setOpenComments] = useState(true);

  return (
    <div className="app_blogarticle mt-20">
      <h1 className="w-6/6 mb-16 text-center text-[26px] md:text-[70px] font-[800]">
        RPC
      </h1>
      <div className="flex">
        <div className="app_blog-context w-full lg:w-4/6 pr-6">
          <div className="app_blogarticle-author flex items-center flex-wrap">
            <div className="app_blogarticle-author_img w-6/6 md:w-3/6 flex items-center">
              <img src={person} alt="Author" className="w-16 rounded-full" />
              <div className="app_blogarticle-author_info ml-4">
                <h2 className="text-[17px]">John Doe</h2>
                <h4 className="text-[14px]">Nov 2 . 7 min read.</h4>
              </div>
              <div
                className="cursor-pointer ml-16 flex items-center text-[20px] text-gray-600"
                onClick={() => setOpenComments(!openComments)}
              >
                <span>{commentIcon}</span>
                <span className="ml-1 text-[14px]">20</span>
              </div>
            </div>
            <ul className="app_blogarticle-author_social flex mx-auto md:ml-auto justify-end w-6/6 md:w-3/6 text-gray-400 text-[20px]">
              <li className="mr-4">
                <a href="/">{facebookIcon}</a>
              </li>
              <li className="mr-4">
                <a href="/">{twitterIcon}</a>
              </li>
              <li className="mr-4">
                <a href="/">{discordIcon}</a>
              </li>{" "}
              <li className="">
                <a href="/" title="Share">
                  {shareIcon}
                </a>
              </li>
            </ul>
          </div>
          <article className="app_blogarticle-article">
            <header className="my-6">
              <h1 className="text-[26px] md:text-[32px] font-[800]">
                5 Data Science Projects to Skyrocket Your Portfolio
              </h1>
              <h3 className="text-[24px] font-[300]">
                The next big thing, or just massively overhyped?
              </h3>
            </header>
            <section className="app_blogarticle-article_image">
              <img src={blogImgOne} alt="Article" className="w-[80%]" />
            </section>
            <section className="app_blogarticle-article_content mt-6">
              {[
                `I am one of the participants of SistersLab Women in Tech Academy project supported by the Community Volunteers Foundation (https://www.tog.org.tr/en/). The project aims to empower people between the age of 20–28 who identify as woman, through 3 months long software training and supporting trainings to increase their participation in the workforce in the IT sector. You can access detailed information about the project using this link: https://sisterslab.co/women-in-tech-academy/`,
                `In this artical, i’ll talk about file operations in Python. Our main topics will be;`,
                ` Opening a File`,
                `os Module`,
                `Reading a File`,
                `File Reading Methods`,
                `Writing a File`,
                `File Writing Methods`,
                `Searching a File`,
                `Renaming a File`,
                ` Deletion a File`,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
              ].map((text, i) => {
                return (
                  <p key={i} className="text-[20px] mt-6">
                    {text}
                  </p>
                );
              })}
            </section>
            <section className="app_blogarticle-article_image">
              <img src={blogImgTwo} alt="Article" className="w-[80%]" />
            </section>
            <section className="app_blogarticle-article_content mt-6">
              {[
                `I am one of the participants of SistersLab Women in Tech Academy project supported by the Community Volunteers Foundation (https://www.tog.org.tr/en/). The project aims to empower people between the age of 20–28 who identify as woman, through 3 months long software training and supporting trainings to increase their participation in the workforce in the IT sector. You can access detailed information about the project using this link: https://sisterslab.co/women-in-tech-academy/`,
                `In this artical, i’ll talk about file operations in Python. Our main topics will be;`,
                ` Opening a File`,
                `os Module`,
                `Reading a File`,
                `File Reading Methods`,
                `Writing a File`,
                `File Writing Methods`,
                `Searching a File`,
                `Renaming a File`,
                ` Deletion a File`,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
              ].map((text, i) => {
                return (
                  <p key={i} className="text-[20px] mt-6">
                    {text}
                  </p>
                );
              })}
            </section>
            <section className="italic text-[20px] mt-10">
              <blockquote>
                “I'm selfish, impatient and a little insecure. I make mistakes,
                I am out of control and at times hard to handle. But if you
                can't handle me at my worst, then you sure as hell don't deserve
                me at my best.”
              </blockquote>
            </section>
            <div className="app_blogarticle-article_rating mt-10 flex text-[20px] text-gray-600">
              <div className="cursor-pointer">
                <span
                  onClick={() => setClicked(!clicked)}
                  className={`blog_like ${clicked ? "clicked" : ""}`}
                >
                  {clappingIcon}
                </span>
                <span className="ml-1 text-[14px]">1k</span>
              </div>
              <div
                className="cursor-pointer ml-6 flex items-center"
                onClick={() => setOpenComments(!openComments)}
              >
                <span>{commentIcon}</span>
                <span className="ml-1 text-[14px]">20</span>
              </div>
            </div>
          </article>
        </div>
        <div
          className={`w-2/6 border-l-2 pl-8 h-[${
            document.querySelector(".app_blogarticle") &&
            document.querySelector(".app_blogarticle").offsetHeight
          }px] hidden lg:block`}
        >
          <div className="mb-4">
            <a href="/pages/addarticle" className="text-blue-400">
              Add new article <span>{editIcon}</span>
            </a>
          </div>
          <h2 className="text-[16px] font-[600] mb-10">
            More From Polkadotspace
          </h2>
          <BlogSidebar />
          <BlogSidebar />
          <BlogSidebar />
          <BlogSidebar />
          <BlogSidebar />
          <BlogSidebar />
          <div className="app_blogsidebar-topics mt-[25px] lg:mt-[58px]">
            <h3 className="text-[15px]">Recommended topics</h3>
            <div className="app_blog-box_tags flex flex-wrap">
              {["Programing", "UI/UX", "BTC", "Polkadot"].map((topic, i) => {
                return (
                  <span
                    className="my-2 mr-2 py-[4px] md:py-[9px] px-[8px] md:px-[30px] text-[10px] md:text-[15px] cursor-pointer bg-[#E6007A] rounded-[34px] text-white"
                    key={i}
                  >
                    {topic}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <Comments
          openComments={openComments}
          setOpenComments={setOpenComments}
        />
      </div>
    </div>
  );
};

export default BlogArticle;
