import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../Bridgy_Assets/LOGO BRIDGY/fav icon/SVG (1).svg";
import notificationsIcon from "../../Bridgy_Assets/icon/notification black.svg";

export const MiniNavbar = () => {
  const name = useSelector((state) => state.auth.username);

  return (
    <div className="flex justify-between w-[90%] h-[10%]">
      <div className="flex w-80 items-center">
        <img
          src={logo}
          alt="react logo"
          style={{ width: "100px", height: "120px" }}
        />
        <div className="hover:text-[#2135D9] text-3xl">
          <Link to="/">Bridgy</Link>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src={notificationsIcon}
          alt="react logo"
          style={{ width: "20px", height: "20px" }}
        />
        <div className="pl-2 text-lg">Logged in as : {name}</div>
      </div>
    </div>
  );
};
