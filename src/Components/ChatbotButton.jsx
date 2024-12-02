import React, { useState } from "react";


import { FaYoutube, FaInstagram } from 'react-icons/fa';

const ChatbotButton = ({ toggleChat }) => {
  return (
    <div>
      {/* <div className="fixed top-1/2 right-0 z-20 transform -translate-y-1/2 flex flex-col ">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 p-3 text-white shadow-md hover:bg-red-700"
        >
          <FaYoutube size={32} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 text-white shadow-md hover:from-pink-600 hover:to-purple-700"
        >
          <FaInstagram size={32} />
        </a>
      </div> */}
      <div className="fixed bottom-20 md:bottom-24 space-y-2 flex flex-col right-4 z-20">
        <div className="bg-dark px-6   text-center hidden md:hidden flex justify-center  items-center rounded-full shadow-lg mr-6 transition-all duration-300">
          <p>
            Chat with us!{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </p>
        </div>

        <button
          className="bg-dark z-20 bg-opacity-75 text-white rounded-full px-2 py-2 shadow-lg space-x-2 transition-all duration-300 flex"
          onClick={toggleChat}
        >
          <span className="text-white">Chat With Us!</span>
          <svg
            className="h-6 w-6 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
            <line x1="12" y1="11" x2="12" y2="11.01" />
            <line x1="8" y1="11" x2="8" y2="11.01" />
            <line x1="16" y1="11" x2="16" y2="11.01" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatbotButton;
