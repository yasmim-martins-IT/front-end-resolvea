import React from "react";
import { GoPerson } from "react-icons/go";

const UserMessage = ({ message }) => {
  return (
    <div className="w-full flex justify-end items-start gap-2 p-4">
      {/* Conteúdo da mensagem do usuário */}
      <div className="max-w-[15rem] bg-[#007BC0] text-white px-4 py-2 break-words">
        <p className="whitespace-pre-line">{message}</p>
      </div>

      {/* Avatar do usuário */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#D9D9D9]">
        <GoPerson size={32} color="gray" />
      </div>
    </div>
  );
};

export default UserMessage;
