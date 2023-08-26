import insta from "../../Bridgy_Assets/icon/instagram white.svg";
import twitter from "../../Bridgy_Assets/icon/twitter white.svg";
import telg from "../../Bridgy_Assets/icon/telegram white.svg";
import yt from "../../Bridgy_Assets/icon/youtube white.svg";

export const MiniFooter = () => {
  return (
    <div className="flex items-center justify-between h-[8%] w-full bg-[#2135D9]">
      <div className="text-gray-400 pl-60 text-sm">
        © Copyright 2023 Bridgy | All rights reserved.
      </div>
      <div className="flex items-center pr-20 space-x-3">
        <img
          src={insta}
          alt="react logo"
          style={{ width: "40px", height: "40px" }}
        />
        <img
          src={twitter}
          alt="react logo"
          style={{ width: "40px", height: "40px" }}
        />
        <img
          src={telg}
          alt="react logo"
          style={{ width: "40px", height: "40px" }}
        />
        <img
          src={yt}
          alt="react logo"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
};
