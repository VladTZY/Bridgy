import pic7 from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/Dashboard.png";
import pic8 from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/studenticon.png";
import pic9 from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/charityicon.png";
import pic10 from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/schoolicon.png";
import pic12 from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/stats.png";
import pic14 from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/heropicv1.jpg";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
export const LandingPage = () => {
  const scToAboutUs = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-[100vw] bg-gray-100 pt-[10vh]  md:mt-0">
        <div className="flex flex-col w-[100vw]  md:h-[90vh] 2xl:h-[70vh] bg-gray-100 justify-center items-center">
          <div className="flex flex-col md:flex-row px-8 relative ">
            <img
              className=" md:w-[50%] rounded-2xl drop-shadow-2xl transition opacity-100 ease-in duration-900 transform hover:scale-[101%] duration-300 "
              src={pic14}
              alt="charitieslove"
            />
            <div className="text-black pt-4 xl:pt-0 text-4xl md:text-6xl font-bold flex flex-col justify-center items-center text-center md:w-[50%]">
              Welcome to Bridgy
              <div className="text-black text-2xl md:text-3xl pt-5 ">
                <span className="animate-pulse bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent transition duration-100">
                  Connecting passion with purpose{" "}
                </span>
              </div>
              <div className="text-black text-lg md:text-xl pt-5 w-[100%] md:w-[80%] font-light md:font-semibold text-justify">
                <span>
                  Connecting high-schools to the highest performing charities
                  with optimal efficiency and reliability
                </span>
              </div>
              <a
                href="login"
                class="mt-4 text-white bg-[#2EA0FB] hover:bg-[#2135D9] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800 transform hover:scale-[105%] duration-300"
              >
                Sign me up
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100vw] md:h-[50vh] bg-gray-100 justify-center items-center text-center">
          <div className="text-4xl md:text-6xl text-black font-bold flex flex-col justify-center items-center text-center">
            <span>Our Founding Story</span>
          </div>
          <div className="flex flex-col text-black text-lg md:text-2xl pt-10 w-[100%] md:w-[60%] px-6 xs:font-light md:font-semibold ">
            <span className="text-justify">
              We are a team of college students at Oxford and the University of
              Chicago. We experienced first hand how impractical community
              service can be for high school students, school counselors and
              charities.
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[100vw] md:h-[50vh] bg-gray-100 justify-center items-center text-center">
          <div className="text-4xl md:text-6xl text-black font-bold flex flex-col justify-center items-center text-center">
            <span>We solve three major problems</span>
          </div>
          <div className="flex flex-col md:flex-row w-[100%] bg-gray-100 pt-10 justify-center items-center md:px-6">
            <div className="flex flex-col w-[80%] h-[20vh]  bg-gray-200 rounded-2xl m-5 p-5 items-center justify-center">
              <div className="font-bold text-2xl animate-pulse bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent pb-2">
                ACCESS
              </div>
              <span className="text-justify font-semibold md:text-xl">
                It is impossible to find service opportunities that fit
                students' interests and skills in less than 15 minutes
              </span>
            </div>
            <div className="flex flex-col w-[80%] h-[20vh] bg-gray-200 rounded-2xl m-5 p-5 items-center justify-center">
              <div className="font-bold text-2xl animate-pulse bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent pb-2">
                MANAGEMENT
              </div>
              <span className="text-justify font-semibold md:text-xl">
                It is impossible for charities to efficiently vet and recruit
                high school students
              </span>
            </div>
            <div className="flex flex-col w-[80%]  h-[20vh] bg-gray-200 rounded-2xl m-5 p-5 items-center justify-center">
              <div className="font-bold text-2xl animate-pulse bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent pb-2">
                ADVISE
              </div>
              <span className="text-justify font-semibold md:text-xl">
                It is impossible for school counselors to monitor and manage
                their students' service effortlessly
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100vw] bg-gray-100 justify-center items-center text-center pb-10">
          <div className="flex flex-col md:flex md:flex-row">
            <div className="text-4xl md:text-6xl text-black font-bold flex flex-col justify-center items-center text-center md:w-[50%]">
              <span className="animate-pulse bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent pb-1">
                Bridgy{" "}
              </span>
              <span>is your specialized ecosystem</span>
              <div className="flex flex-col text-black text-lg md:text-xl pt-10 w-[100%] md:w-[80%] px-6 xs:font-light md:font-semibold pb-5">
                <span className="text-justify">
                  Welcome to Bridgy, where connecting passion with purpose is
                  our mission. This platform bridges the gap between high school
                  students eager to make a difference, charities in need of
                  enthusiastic volunteers, and educational institutions seeking
                  streamlined service programs. Our tool is designed to empower
                  students, support schools, and bolster charitable efforts,
                  creating a cohesive community dedicated to service and growth.
                </span>
              </div>
            </div>
            <div className="relative md:w-[50%] bg-gray-100 ">
              <img
                className="  rounded-2xl  bg-gray-100 transform ease-in-out duration-1500"
                src={pic7}
                alt="Dashboard"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100vw] md:h-[90vh] bg-gray-100 justify-center items-center text-center pb-10">
          <div className="text-4xl md:text-6xl text-black font-bold flex flex-col justify-center items-center text-center">
            <span>What We Offer </span>
          </div>
          <div className="flex flex-col md:flex-row w-[100%] bg-gray-100 pt-5 px-4 justify-center items-center md:px-6">
            <div className="flex flex-col w-[100%]  bg-gray-200 rounded-2xl m-5 p-5 items-center justify-evenly h-[50vh] xl:h-[60vh] 2xl:h-[50vh]">
              <div className="text-3xl text-justify font-extrabold animate-pulse bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Educational and service oriented
              </div>
              <div className="flex flex-col items-center">
                <img className="w-[20%] pb-2" src={pic10} alt="schoolicon" />
              </div>
              <span className="text-justify font-semibold md:text-l">
                Bridgy seamlessly integrates service learning into curriculum,
                dramatically reducing the associated administrative load.
                Counselors can spend more time guiding students than on
                paperwork.
              </span>
            </div>
            <div className="flex flex-col w-[100%] bg-gray-200 rounded-2xl m-5 p-5 items-center justify-evenly h-[50vh] xl:h-[60vh] 2xl:h-[50vh]">
              <div className="text-3xl text-justify font-extrabold animate-pulse bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent">
                Solving recruitment management
              </div>
              <div className="flex flex-col items-center">
                <img className="w-[20%] pb-2" src={pic9} alt="charityicon" />
              </div>
              <span className="text-justify font-semibold md:text-l">
                {" "}
                Your cause deserves the spotlight and dedicated volunteers ready
                to take action. Bridgy simplifies the volunteer-matching
                process, connecting your charity with students who share your
                passion for impact.
              </span>
            </div>
            <div className="flex flex-col w-[100%]  bg-gray-200 rounded-2xl m-5 p-5 items-center justify-evenly h-[50vh] xl:h-[60vh] 2xl:h-[50vh]">
              <div className="text-3xl font-extrabold text-justify animate-pulse bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Access to opportunity{" "}
              </div>
              <div className="flex flex-col items-center">
                <img className="w-[20%] pb-2" src={pic8} alt="studenticon" />
              </div>
              <span className="text-justify font-semibold md:text-l">
                Bridgy allows you to find opportunities that resonate with your
                interests and aspirations. You can connect with meaningful
                projects in a snap, track your accomplishments, and get
                real-time reports of your impact.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex  md:flex-row w-[100vw]  bg-gray-100 justify-center items-center text-center pb-10">
          <div className="text-4xl md:text-6xl mb-10 lg:mb-0 text-black font-bold flex flex-col justify-center items-center text-center md:w-[50%]">
            <span>Perks of using Bridgy </span>
            <a
              href="login"
              class=" hidden md:block mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get Started
            </a>
          </div>
          <div className="flex flex-col w-[100%] md:w-[50%] rounded-2xl  items-center justify-center">
            <img className="w-[100%] rounded-2xl " src={pic12} alt="stats" />
          </div>
          <a
            href="login"
            class=" md:hidden mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transform hover:scale-[101%] duration-300"
          >
            Sign me up
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
