import { Link } from "react-router-dom";
import logo from '../../Bridgy_Assets/LOGO BRIDGY/Logo/SVG.svg';

export const LoginNavbar = () => {

  return (
    <div className="flex px-20 justify-between h-[100px]">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="react logo" style={{ width: '120px', height: '120px'}}/>
        </Link>
      </div>

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
