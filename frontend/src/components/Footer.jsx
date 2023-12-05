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
    <div className="flex-row items-center h-[55vh] bg-[#02040D]">
      <div className="flex items-start justify-around h-[85%] bg-[#02040D]">
        <div className="flex-row items-center mt-24">
          <img
            src={logo}
            alt="react logo"
            style={{ width: "150px", height: "150px" }}
          />
          <div className="text-white text-4xl font-nunito">Bridgy</div>
          <div className="text-gray-400 text-lg pt-4 font-nunito">
            Connecting Hearts, <br></br> Building Futures
          </div>
        </div>
        <div className="flex flex-col space-y-5 mt-24">
          <div className="text-2xl text-white font-nunito">Companies</div>
          <div>
            <button onClick={scToHome}>
              <div className="text-lg text-white pt-4 font-nunito">Home</div>
            </button>
          </div>
          <div>
            <button onClick={scToAboutUs}>
              <div className="text-lg text-white pt-4 font-nunito">
                About Us
              </div>
            </button>
          </div>
          <div>
            <button onClick={scToFAQ}>
              <div className="text-lg text-white pt-4 font-nunito">FAQ</div>
            </button>
          </div>
          <div>
            <button onClick={scToContactUs}>
              <div className="text-lg text-white pt-4 font-nunito">
                Contact Us
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-5 mt-24">
          <div className="text-2xl text-white font-nunito">Address</div>
          <div className="text-base text-white pt-6 font-nunito">
            5500 S UNIVERSITY AVE <br></br> CHICAGO, IL 60637
          </div>
        </div>
        <div className="flex flex-col space-y-5 mt-24">
          <div className="text-2xl text-white font-nunito">
            Want to get involved? <br></br> Contact Us!
          </div>
          <div className="flex space-x-6">
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
      </div>
      <div className="space-y-6">
        <hr className="color-[#9CA3AF] mx-28 self-center"></hr>
        <div className="text-gray-400 font-nunito text-center">
          Copyright Bridgy, Inc. 2023 | Privacy Policy | Terms & Conditions
        </div>
      </div>
    </div>
  );
};
