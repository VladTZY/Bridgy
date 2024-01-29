import { Link } from "react-router-dom";
import logo from "../../Bridgy_Assets/LOGO BRIDGY/fav icon/SVG (1).svg";

export const LoginNavbar = () => {
  return (
    <div className="flex px-20 justify-between">
      <Link to="/">
        <div className="flex items-center hover:text-[#2135D9] h-[7vh] pt-3">
          <img src={logo} alt="react logo" style={{ height: "100%" }} />
          <span className="text-xl font-bold">Bridgy</span>
        </div>
      </Link>

      <div className="flex gap-10 items-center">
        <Link to="/">
          <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg">
            Home
          </div>
        </Link>
        <Link to="/">
          <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg">
            About Us
          </div>
        </Link>
        <Link to="/">
          <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg">
            Meet Our Charities
          </div>
        </Link>
        <Link to="/">
          <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg">
            FAQ
          </div>
        </Link>
        <Link to="/">
          <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg">
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  );
};
