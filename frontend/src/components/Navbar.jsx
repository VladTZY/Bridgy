import { Link } from "react-router-dom";
import logo from "../../Bridgy_Assets/LOGO BRIDGY/Logo/SVG.svg";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate("/login");
  };

  const scToHome = () => {
    window.scrollTo({ height: "10%", behavior: "smooth" });
  };

  const scToAboutUs = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  const scToFAQ = () => {
    window.scrollTo({ top: 2100, behavior: "smooth" });
  };

  const scToContactUs = () => {
    window.scrollTo({ top: 3100, behavior: "smooth" });
  };

  const scToMeetOurCharities = () => {
    window.scrollTo({ top: 4100, behavior: "smooth" });
  };

  return (
    <div className="flex px-20 justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="react logo"
            style={{ width: "120px", height: "120px" }}
          />
        </Link>
      </div>

      <div className="flex gap-10 items-center">
        <button onClick={scToHome}>
          <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg">
            Home
          </div>
        </button>
        <button onClick={scToAboutUs}>
          <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg">
            About Us
          </div>
        </button>
        <button onClick={scToMeetOurCharities}>
          <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg">
            Meet Our Charities
          </div>
        </button>
        <button onClick={scToFAQ}>
          <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg">
            FAQ
          </div>
        </button>
        <button onClick={scToContactUs}>
          <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg">
            Contact Us
          </div>
        </button>
        <div className="flex items-center ml-10">
          <div className="text-lg">
            <button
              onClick={handleMoreInfo}
              className="bg-[#2EA0FB] text-white px-10 py-3 rounded-full hover:bg-[#2135D9]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
