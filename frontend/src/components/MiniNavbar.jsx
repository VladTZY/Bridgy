import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../Bridgy_Assets/LOGO BRIDGY/fav icon/SVG (1).svg";
import notificationsIcon from "../../Bridgy_Assets/icon/notification black.svg";

export const MiniNavbar = () => {
  const name = useSelector((state) => state.auth.username);

  return (
    <div className="h-[7vh] pr-7 bg-white">
      <div className="h-full flex justify-between">
        <div className="flex items-center py-5">
          <img
            src={logo}
            alt="react logo"
            style={{
              width: "4rem 2xl:w-[5rem]",
            }}
          />
          <div className="hover:text-[#2135D9] text-2xl">
            <Link to="/">Bridgy</Link>
          </div>
        </div>
        <div className=" flex items-center space-x-2">
          <img
            src={notificationsIcon}
            alt="react logo"
            style={{ width: "1.5rem" }}
          />
          <div className="text-sm 2xl:text-lg">Logged in as : {name}</div>
        </div>
      </div>
    </div>
  );
};
