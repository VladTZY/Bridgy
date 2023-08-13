import { Link } from "react-router-dom";

export const MiniFooter = () => {

  return (
    <div className="flex items-center justify-between h-[50px] w-full bg-[#2135D9]">
      <div className="text-gray-400 pl-60 text-sm">
        © Copyright 2023 Bridgy | All rights reserved. 
      </div>
      <div className="flex items-center pr-8 space-x-2">
        <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '50px', height: '50px'}}/>
        <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '50px', height: '50px'}}/>
        <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '50px', height: '50px'}}/>
        <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '50px', height: '50px'}}/>
      </div>
    </div>
  );
};
