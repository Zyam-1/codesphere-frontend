import React from "react";
import btmImg1 from "./assets/bottomimg1.png";
import btmImg2 from "./assets/bottomimg2.png";

const BottomMenu = () => {
  return (
    <div className="bg-[#41C6C1] h-31 ">
      <div className="flex justify-between items-center ">
        <img src={btmImg1} alt="Mobile Interaction" className="h-30 ml-35" />
        <img src={btmImg2} alt="Email Notification" className="h-30 mr-35" />
      </div>
    </div>
  );
};

export default BottomMenu;
