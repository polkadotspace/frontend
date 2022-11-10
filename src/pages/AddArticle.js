import React, { useRef, useState } from "react";

const AddArticle = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const areaRef = useRef();
  return (
    <div className="app_addArticle bg-white md:bg-transparent">
      <h1 className="text-[30px] md:text-[70px] text-center mb-10">
        Add Article
      </h1>
      <div className="app_addArticle-form w-3/3 md:w-2/3 mx-auto">
        <form className="flex flex-col text-[20px]">
          <input
            type="text"
            placeholder="Title"
            className="bg-transparent border-2 py-1 px-2"
          />
          <input type="file" className="mt-8 " />
          <textarea
            className="my-8 app_addArticle-form_textarea resize-none bg-transparent border-2 h-[500px] py-1 px-2 w-full"
            placeholder="Your Story"
            onChange={(e) => setTextareaValue(e.target.value)}
            value={textareaValue}
            ref={areaRef}
          ></textarea>
          <button className="main_btn text-[#e6007a]" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
