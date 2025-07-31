import React from "react";

import icon from "../assets/svg/Icon.svg"

const AnswerMessage = ({ message }) => {
  return (
    <div className="w-full flex justify-start items-start gap-2 p-4 ">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5bb0c0] relative">
        <img
          src={icon}
          className="w-15 absolute bottom-3 right-2"
          alt="Answer mascot"
        />
      </div>
      <div className="bg-[#EFF1F2] text-black px-4 py-2 max-w-[15rem] break-words">
        <p className="whitespace-pre-line">{message}</p>
      </div>
    </div>
  );
};

export default AnswerMessage;
