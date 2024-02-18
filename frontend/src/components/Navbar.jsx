import { Link } from "react-router-dom";
import logo from "../../Bridgy_Assets/LOGO BRIDGY/fav icon/SVG (1).svg";
import { useNavigate } from "react-router-dom";
import pic from "../../Bridgy_Assets/LOGO BRIDGY/fav icon/burgermenu.svg";
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
    <nav class="bg-gray-100  fixed w-full z-20 top-0 start-0">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-2">
    <a href="https://flowbite.com/" class="flex items-center rtl:space-x-reverse">
        <img src={logo} class="h-10" alt="Bridgy Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Bridgy</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100 ">
        <li>
          <a href={scToHome} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href={scToAboutUs} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">About Us</a>
        </li>
        <li>
          <a href={scToMeetOurCharities} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Meet Our Charities</a>
        </li>
        <li>
          <a href={scToFAQ} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">FAQ</a>
        </li>
        <li>
          <a href={scToContactUs} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

