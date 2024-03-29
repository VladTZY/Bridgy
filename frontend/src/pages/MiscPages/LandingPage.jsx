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
        <div className="flex flex-col w-[100vw]  md:h-[100vh] 2xl:h-[85vh] bg-gray-100 pb-10 justify-center items-center">
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
                  Connecting passion with purpose!{" "}
                </span>
              </div>
              <div className="text-black text-lg md:text-xl pt-5 w-[100%] md:w-[80%] font-light md:font-semibold">
                <span>
                  Connecting high-schools to the highest performing charities
                  with optimal efficiency and reliability
                </span>
              </div>
              <a
                href="login"
                class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transform hover:scale-[105%] duration-300"
              >
                Sign me up
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100vw] md:h-[90vh] bg-gray-100 justify-center items-center text-center pb-10">
          <div className="text-4xl md:text-6xl text-black font-bold flex flex-col justify-center items-center text-center">
            <span>Our Founding Story</span>
          </div>
          <div className="flex flex-col text-black text-lg md:text-2xl pt-10 w-[100%] md:w-[60%] px-6 xs:font-light md:font-semibold ">
            <span>
              Our team created charities, led government-sponsored initiatives
              in community service, and ran their high school community service
              clubs. We experienced how grossly inefficient community service
              access is in high school despite students' high motivation and
              ample skillset.
            </span>
          </div>
          <div className="text-3xl md:text-2xl text-black font-bold flex flex-col justify-center items-center text-center pt-5">
            <span>We solve three major problems:</span>
          </div>
          <div className="flex flex-col md:flex-row w-[100%] bg-gray-100 pt-5 justify-center items-center md:px-6">
            <div className="flex flex-col w-[80%] h-[30vh]  bg-gray-200 rounded-2xl m-5 p-5 items-center justify-center">
              <span className="text-center font-semibold md:text-xl">
                Finding and obtaining the right community service missions takes
                an average of 15 hours per opportunity for students.
              </span>
            </div>
            <div className="flex flex-col w-[80%] h-[30vh] bg-gray-200 rounded-2xl m-5 p-5 items-center justify-center">
              <span className="text-center font-semibold md:text-xl">
                Charities struggle to find a consistent source of dynamic and
                motivated volunteers for their missions, hampering their scale
                and operational capabilities.
              </span>
            </div>
            <div className="flex flex-col w-[80%]   h-[30vh] bg-gray-200 rounded-2xl m-5 p-5 items-center justify-center">
              <span className="text-center font-semibold md:text-xl">
                School advisors take an absurdly long time reconciling their
                students' data and scheduling support.
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
                <span>
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
              <div className="text-3xl font-extrabold text-center animate-pulse bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Embrace a new era of educational excellence and community
                service with Bridgy{" "}
              </div>
              <div className="flex flex-col items-center">
                <img className="w-[20%] pb-2" src={pic10} alt="schoolicon" />
              </div>
              <span className="text-center font-semibold md:text-l">
                Bridgy offers schools a seamless way to integrate service
                learning into their curriculum. Our tools reduce the
                administrative load dramatically. This enables counselors to
                spend more time guiding students than on paperwork. With our
                platform, educators can track student progress, schedule
                support, and generate insightful reports with ease.
              </span>
            </div>
            <div className="flex flex-col w-[100%] bg-gray-200 rounded-2xl m-5 p-5 items-center justify-evenly h-[50vh] xl:h-[60vh] 2xl:h-[50vh]">
              <div className="text-3xl font-extrabold text-center animate-pulse bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent">
                Solving your recruitment management
              </div>
              <div className="flex flex-col items-center">
                <img className="w-[20%] pb-2" src={pic9} alt="charityicon" />
              </div>
              <span className="text-center font-semibold md:text-l">
                {" "}
                Your cause deserves the spotlight and dedicated volunteers ready
                to take action. Bridgy simplifies the volunteer-matching
                process, connecting your charity with students who share your
                passion for impact.
              </span>
            </div>
            <div className="flex flex-col w-[100%]  bg-gray-200 rounded-2xl m-5 p-5 items-center justify-evenly h-[50vh] xl:h-[60vh] 2xl:h-[50vh]">
              <div className="text-3xl font-extrabold text-center animate-pulse bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Access to opportunity{" "}
              </div>
              <div className="flex flex-col items-center">
                <img className="w-[20%] pb-2" src={pic8} alt="studenticon" />
              </div>
              <span className="text-center font-semibold md:text-l">
                As a student Bridgy is your digital compass to finding
                opportunities that resonate with your interests and aspirations.
                With our hub, you can connect with meaningful projects in a
                snap, track your accomplishments, and build real-time
                assessments of your impact on the community.
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
