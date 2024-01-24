import insta from "../../Bridgy_Assets/icon/instagram white.svg";
import twitter from "../../Bridgy_Assets/icon/twitter white.svg";
import telg from "../../Bridgy_Assets/icon/telegram white.svg";
import yt from "../../Bridgy_Assets/icon/youtube white.svg";

export const MiniFooter = () => {
  return (
    <div className="h-[5vh] px-20 bg-[#2135D9] absolute bottom-0 left-0 right-0">
      <div className="h-full flex items-center justify-between">
        <div className=" text-gray-400 text-xs">
          © Copyright 2023 Bridgy, Inc. | All rights reserved.
        </div>
        <div className="flex items-center space-x-2">
          <img src={insta} alt="react logo" style={{ width: "1.5rem" }} />
          <img src={twitter} alt="react logo" style={{ width: "1.5rem" }} />
          <img src={telg} alt="react logo" style={{ width: "1.5rem" }} />
          <img src={yt} alt="react logo" style={{ width: "1.5rem" }} />
        </div>
      </div>
    </div>
  );
};
