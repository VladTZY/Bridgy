import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const MiniNavbar = () => {
  const name = useSelector((state) => state.auth.username)

  return (
    <div className="flex justify-between w-[90%]">
      <div className="flex w-80 h-20 items-center">
        <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '50px', height: '50px'}}/>
        <div className="hover:text-[#2135D9] text-3xl">
          <Link to="/">Bridgy</Link>
        </div>
      </div>
      <div className="flex items-center">
        <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
        <div className="pl-2 text-lg">
            Logged in as : {name}
        </div>
      </div>
    </div>
  );
};
