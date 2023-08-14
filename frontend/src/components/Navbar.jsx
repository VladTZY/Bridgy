import { Link } from "react-router-dom";

export const Navbar = () => {

  const scToHome = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  const scToAboutUs = () => {
    window.scrollTo({top: 400, behavior: "smooth"});
  };

  const scToFAQ = () => {
    window.scrollTo({top: 1200, behavior: "smooth"});
  };

  const scToContactUs = () => {
    window.scrollTo({top: 1600, behavior: "smooth"});
  };

  const scToMeetOurCharities = () => {
    window.scrollTo({top: 800, behavior: "smooth"});
  };

  return (
    <div className="flex justify-between w-[90%]">
      <div className="flex w-80 h-20 items-center">
        <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '70px', height: '70px'}}/>
        <div className="hover:text-[#2135D9] text-5xl">
          <Link to="/">Bridgy</Link>
        </div>
      </div>

      <div className="flex pl-96 gap-10 items-center">
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
      </div>
      <div className="flex items-center">
        <div className="text-lg">
          <Link to="/login">
            <button className="bg-[#2EA0FB] text-white px-10 py-3 rounded-full hover:bg-[#2135D9]">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
