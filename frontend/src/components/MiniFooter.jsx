import insta from "../../Bridgy_Assets/icon/instagram white.svg";
import twitter from "../../Bridgy_Assets/icon/twitter white.svg";
import telg from "../../Bridgy_Assets/icon/telegram white.svg";
import yt from "../../Bridgy_Assets/icon/youtube white.svg";

export const MiniFooter = () => {
  return (
    <div className="w-[85vw] ml-[15vw] bg-[#2135D9] relative bottom-0 flex justify-between items-center lg:py-2 ">
      <div className="w-[50%] items-center px-2 ">
        <span className="text-gray-400 text-xs "> © Copyright 2023 Bridgy, Inc. | All rights reserved.</span>
      </div>
      <div className="w-[50%] flex justify-end items-center space-x-1 px-4">
      <img src={insta} alt="react logo" className="w-[19%] lg:w-[4%] 2xl:w-[3%]" />
          <img src={twitter} alt="react logo" className="w-[19%] lg:w-[4%] 2xl:w-[3%]" />
          <img src={telg} alt="react logo" className="w-[19%] lg:w-[4%] 2xl:w-[3%]" />
          <img src={yt} alt="react logo" className="w-[19%] lg:w-[4%] 2xl:w-[3%]" />
      </div>
    </div>
  );
};
