import React, { useEffect } from "react";
import whatsapplogo from "../assets/whatsapplogo.png";

const Chatboat = () => {
  const handleWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone=9582000035`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className=" fixed bottom-10 right-8 ">
        <img src={whatsapplogo} alt="" className="w-[70px] " />
      </div>
    </div>
  );
};

export default Chatboat;
