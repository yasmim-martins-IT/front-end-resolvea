import React, { useEffect, useState, useRef } from "react";
import Logo from "../assets/svg/Logo.svg";
import FramePage from "../assets/svg/FramePageNoBg.svg";

import AnswerMessage from "../components/AnswerMessage";
import UserMessage from "../components/UserMessage";

const messageSequence = [
  { type: "user", text: "Oi, Answer! Você pode me ajudar com o TCC?" },
  { type: "answer", text: "Oi! Eu sou o Answer, seu assistente virtual 🤖" },
  { type: "user", text: "E as regras da empresa? Onde vejo isso?" },
  {
    type: "answer",
    text: "Claro! Tenho várias dicas e orientações para você começar.",
  },
  { type: "user", text: "E as regras da empresa? Onde vejo isso?" },
  {
    type: "answer",
    text: "Eu também explico as normas e tudo que você precisa saber.",
  },
];

export default function SinglePage() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [started, setStarted] = useState(false);
  const mensagensRef = useRef(null);

  const scrollToMensagens = () => {
    mensagensRef.current.scrollIntoView({ behavior: "smooth" });
    setStarted(true);
  };

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev < messageSequence.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
      i++;
    }, 1000);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Hero Section */}
      {/* Hero Section visual baseada no Figma */}
      <div className="h-screen w-full flex flex-col justify-between items-center bg-gradient-to-b from-white to-[#005A90] text-white relative">
        <div className="pt-8">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="text-center pb-8 max-w-sm">
            <div className="w-full pb-10">
                <img
                    src={FramePage}
                    alt="Tela do Answer"
                    className="w-full"
                />
            </div>
          <p className="text-[1.2rem] text-center mb-4">
            O Answer é um assistente virtual com inteligência artificial que
            responde dúvidas do dia a dia dos aprendizes. Ele oferece suporte
            rápido, claro e 24h sobre temas como regras, TCC, atestados e muito
            mais.
          </p>

          <button
            onClick={scrollToMensagens}
            className="bg-white text-[#005A90] px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition-colors flex items-center mx-auto"
          >
            Conheça mais
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mensagens */}
      <div
        ref={mensagensRef}
        className="w-full max-w-2xl flex flex-col items-center px-4 py-12"
      >
        <div className="w-full space-y-6">
          {messageSequence.map((msg, index) => {
            const isVisible = index < visibleMessages;
            const isUser = msg.type === "user";

            return (
              <div
                key={index}
                className={`
                  transition duration-500 ease-out
                  ${
                    isVisible
                      ? isUser
                        ? "opacity-100 translate-x-0"
                        : "opacity-100 -translate-x-0"
                      : isUser
                      ? "opacity-0 translate-x-20"
                      : "opacity-0 -translate-x-20"
                  }
                `}
              >
                {msg.type === "answer" ? (
                  <AnswerMessage message={msg.text} />
                ) : (
                  <UserMessage message={msg.text} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
