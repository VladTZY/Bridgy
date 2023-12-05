import insta from "../../Bridgy_Assets/icon/instagram white.svg";
import twitter from "../../Bridgy_Assets/icon/twitter white.svg";
import telg from "../../Bridgy_Assets/icon/telegram white.svg";
import yt from "../../Bridgy_Assets/icon/youtube white.svg";

export const MiniFooter = () => {
  return (
    <div className="h-full px-20 py-2 bg-[#2135D9]">
      <div className="h-full flex items-center justify-between">
        <div className=" text-gray-400 text-sm">
          © Copyright 2023 Bridgy, Inc. | All rights reserved.
        </div>
        <div className="flex items-center space-x-2">
          <img src={insta} alt="react logo" style={{ width: "3rem" }} />
          <img src={twitter} alt="react logo" style={{ width: "3rem" }} />
          <img src={telg} alt="react logo" style={{ width: "3rem" }} />
          <img src={yt} alt="react logo" style={{ width: "3rem" }} />
        </div>
      </div>
    </div>
  );
};
