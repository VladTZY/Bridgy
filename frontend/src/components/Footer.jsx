import { Link } from "react-router-dom";

export const Footer = () => {

  return (
    <div className="flex-row items-center h-[500px] bg-[#02040D]">
    <div className="flex items-start justify-around h-[85%] bg-[#02040D]">
      <div className="flex-row items-center mt-40">
        <div className="text-white text-4xl font-nunito">
          Bridgy
        </div>
        <div className="text-gray-400 text-lg pt-4 font-nunito">
          Making the connections
        </div>
        <div className="text-gray-400 text-lg font-nunito">
          no one cares to do
        </div>
      </div>
      <div className="flex-row space-y-5 mt-24">
        <div className="text-2xl text-white">
          Companies
        </div>
        <div className="text-lg text-white pt-6">
          <Link to="/">Home</Link>
        </div>
        <div className="text-lg text-white">
          <Link to="/about_us">About Us</Link>
        </div>
        <div className="text-lg text-white">
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="text-lg text-white">
          <Link to="/contact_us">Contact Us</Link>
        </div>
      </div>
      <div className="flex-row space-y-5 mt-24">
        <div className="text-2xl text-white">
            Address
        </div>
        <div className="text-base text-white pt-6">
          New York, ..........
        </div>
      </div>
      <div className="flex-row space-y-5 mt-24">
        <div className="text-2xl text-white">
          Want to get involved? <br></br> Contact Us!
        </div>
      </div>
    </div>
    <div className="flex-row items-center space-y-6">
      <hr className="color-[#9CA3AF] mx-28 self-center"></hr>
      <div className="text-gray-400 font-nunito text-center">
        Copyright Bridgy 2023 | Privacy Policy | Terms & Conditions
      </div>
    </div>
    </div>
  );
};
