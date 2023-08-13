import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <div className="flex justify-between w-[90%]">
      <div className="flex w-80 h-20 items-center">
        <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '70px', height: '70px'}}/>
        <div className="hover:text-sky-400 text-5xl">
          <Link to="/">Bridgy</Link>
        </div>
      </div>

      <div className="flex pl-96 gap-10 items-center">
        <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
          <Link to="/">Home</Link>
        </div>
        <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
          <Link to="/about_us">About Us</Link>
        </div>
        <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
          <Link to="/meet_our_charities">Meet Our Charities</Link>
        </div>
        <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
          <Link to="/contact_us">Contact Us</Link>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-lg">
          <Link to="/login">
            <button className="bg-[#a6c1ee] text-white px-10 py-3 rounded-full hover:bg-[#87acec]">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
