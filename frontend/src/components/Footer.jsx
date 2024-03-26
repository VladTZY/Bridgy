import logo from "../../Bridgy_Assets/LOGO BRIDGY/fav icon/SVG (1).svg";
import insta from "../../Bridgy_Assets/icon/instagram white.svg";
import twitter from "../../Bridgy_Assets/icon/twitter white.svg";
import telg from "../../Bridgy_Assets/icon/telegram white.svg";
import yt from "../../Bridgy_Assets/icon/youtube white.svg";

export const Footer = () => {
  const scToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scToAboutUs = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  const scToFAQ = () => {
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };

  const scToContactUs = () => {
    window.scrollTo({ top: 1600, behavior: "smooth" });
  };

  const scToMeetOurCharities = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] bg-black">
      <img src={logo} alt="react logo" style={{ height: "10vh" }} />
      <span className="text-xl font-bold text-white">Bridgy</span>
      <span className="text-sm font-bold text-white justify-center items-center text-center">
        Connecting hearts,<br></br> building futures!
      </span>
      <div className="flex flex-col md:flex-row w-[100vw] bg-black-100 justify-center md:justify-around margin-auto items-center text-center pb-10 px-10">
        <div className="flex flex-col justify-center items-center text-center pt-4 pb-4 md:w-[30%]">
          <button onClick={scToHome}>
            <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg text-white">
              Home
            </div>
          </button>
          <button onClick={scToAboutUs}>
            <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg text-white">
              About Us
            </div>
          </button>
          <button onClick={scToMeetOurCharities}>
            <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg text-white">
              Meet Our Charities
            </div>
          </button>
          <button onClick={scToFAQ}>
            <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg text-white">
              FAQ
            </div>
          </button>
          <button onClick={scToContactUs}>
            <div className="hover:underline underline-offset-8 decoration-2 hover:text-[#2135D9] text-lg text-white">
              Contact Us
            </div>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center text-center pb-4 md:pb-0 md:w-[30%]">
          <span className="text-white text-lg font-bold">Address</span>
          <span className="text-white text-sm font-semibold">
            5500 S UNIVERSITY AVE
          </span>
          <span className="text-white text-sm font-semibold">
            CHICAGO, IL 60637
          </span>
        </div>
        <div className="flex flex-col justify-center items-center text-center md:w-[30%]">
          <span className="text-white text-lg font-bold">
            Want to get involved?
          </span>
          <span className="text-white text-lg font-bold pb-4">Contact Us!</span>
          <div className="flex space-x-6 pt-2">
            <img className="w-[9vw] md:w-[2vw]" src={insta} alt="react logo" />
            <img
              className="w-[9vw] md:w-[2vw]"
              src={twitter}
              alt="react logo"
            />
            <img className="w-[9vw] md:w-[2vw]" src={telg} alt="react logo" />
            <img className="w-[9vw] md:w-[2vw]" src={yt} alt="react logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
