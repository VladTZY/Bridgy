import pic1 from "../../../Bridgy_Assets/Images/Webpage/hero.png";
import pic2 from "../../../Bridgy_Assets/Images/Webpage/Story 01.png";
import pic3 from "../../../Bridgy_Assets/Images/Webpage/What we do 01.png";
import pic4 from "../../../Bridgy_Assets/Images/Webpage/What we do 02.png";
import pic5 from "../../../Bridgy_Assets/Images/Webpage/What we do 03.png";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const LandingPage = () => {
  const scToAboutUs = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  return (
    <div>
      <div className="h-[15vh]">
        <Navbar />
      </div>
      <div className="flex-row relative">
        <div className="w-[100%] flex justify-between">
          <div className="flex flex-col pt-20 w-[50%] ">
            <div className="font-bold ml-32 text-8xl">Bridgy</div>
            <div className="font-bold ml-32 mt-4 text-6xl w-[75%]">
              Connecting <span className="text-[#2135D9]"> Hearts,   </span>
              <br></br> Building{" "}
              <span className="text-[#2135D9]"> Futures </span>
            </div>
            <div className="ml-32 mt-10 text-2xl" style={{ width: "75%" }}>
              Building highly customized digital infrastructure to make the
              charitable ecosystem easily accessible to high schools in the most
              efficient and secure ways possible.
            </div>
            <div className="text-xl ml-32 mt-5">
              <button
                onClick={scToAboutUs}
                className="bg-[#2EA0FB] text-white px-16 py-4 rounded-full hover:bg-[#2135D9]"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="w-2/4">
            <img
              className="w-100% border-8 border-[#2EA0FB] border-l-0 border-t-0"
              src={pic1}
              style={{ height: "auto" }}
            />
          </div>
        </div>
        <div className="w-[100%] h-[88vh] flex-row space-y-16 pb-0">
          <div className="mt-16 text-center font-bold text-6xl">
            Our <span className="text-[#2135D9]"> Founding </span> Story
          </div>
          <div className="flex items-center pt-8 w-100%">
            <img
              className="border-8 border-[#2EA0FB] border-r-0 border-b-0 w-2/5"
              src={pic2}
              style={{ height: "60vh" }}
            />
            <div className="flex-row ml-8 w-2/4 pr-8 text-justify">
              <div className="text-3xl">
                Our team had a ton of experience engaging in community service
                in high school, with some of us creating charities involving 60+
                people.
              </div>
              <div className="pt-4 text-3xl">
                We noticed <span className="text-[#2135D9]"> 3 things </span> :
              </div>
              <div className="marker:text-[#2135D9] pt-2 pl-6 text-2xl">
                <ul className="list-disc">
                  <li>
                    Finding service opportunities is a manual and laborious
                    process for high school students
                  </li>
                  <li>
                    Monitoring activities and scheduling support is equally time
                    consuming for school administrators
                  </li>
                  <li>
                    Charities have trouble finding a reliable source of young
                    volunteers for periodic missions, impeding their planing and
                    scaling abilities
                  </li>
                </ul>
              </div>
              <div className="pt-4 text-3xl">
                There is simply a lack of centralized access to information or
                the digital infrastructure needed for these ecosystems to
                interact dynamically.
              </div>
            </div>
          </div>
        </div>
        <div className="font-semibold text-center text-4xl pb-[7vh]">
            Bridgy is a <span className="text-[#2135D9]"> pathway </span> across
            that void.
            </div>
        <div className="w-[100%] h-[70vh] flex-row space-x-20">
          <div className="flex-row mx-40 py-32 bg-[#2135D9] text-center rounded-3xl">
            <div className="text-white text-6xl">
              Meet Our Extraordinary Team
            </div>
            <div className="pt-6 text-white text-xl ">
              We are not just a team, we are a collective of individuals who
              embrace innovation, <br></br>
              challenge the status quo, and bring unparalleled passion to our
              work.
            </div>
            <div className="text-xl mt-20">
              <button className="bg-white text-[#2135D9] px-14 py-5 rounded-full hover:bg-slate-200">
                Meet the Team
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex-row">
          <div className="flex justify-around pt-[5vh] content-center pb-20">
            <div className="text-6xl font-bold content-center px-6" >
              What <span className="text-[#2135D9]"> We Do </span>
            </div>
            <div
              className="text-2xl underline decoration-[#2135D9] px-6"
              style={{ width: "60rem" }}
            >
              Welcome to Bridgy, where connecting passion with purpose is our
              mission. We are a vibrant platform that bridges the gap between
              high school students eager to make a difference, educational
              institutions seeking streamlined service programs, and charities
              in need of enthusiastic volunteers. Our digital hub is designed to
              empower students, support schools, and bolster charitable efforts,
              creating a cohesive community dedicated to service and growth.
            </div>
          </div>
          <div className="w-full h-[90vh] bg-gradient-to-r from-[#1e1e1e] to-[#696969] relative ">
            <img
              src={pic3}
              className="absolute w-full mix-blend-overlay object-cover	"
              style={{ height: "90vh " }}
            />
            <div className="text-7xl underline text-white ml-40 pt-40">
              For Schools
            </div>
            <div
              className="text-2xl text-white ml-40 pt-[6vh]"
              style={{ width: "50rem" }}
            >
              Bridgy Inc. offers schools a seamless way to integrate service
              learning into their curriculum. Our tools reduce the
              administrative load, enabling counselors to spend more time
              guiding students and less on paperwork. With our platform,
              educators can track student progress, schedule support, and
              generate insightful reports with ease. Embrace a new era of
              educational excellence and community service with Bridgy.
            </div>
          </div>
          <div className="w-full h-[90vh] bg-gradient-to-r from-[#696969] to-[#1e1e1e] relative">
            <img
              src={pic4}
              className="absolute w-full mix-blend-overlay object-cover	"
              style={{ height: "90vh" }}
            />
            <div className="text-7xl underline text-white pt-40 text-right mr-40">
              For Charities
            </div>
            <div
              className="text-2xl text-white pt-[6vh] mr-40 text-right "
              style={{ marginLeft: "30rem" }}
            >
              Your cause deserves the spotlight and dedicated volunteers ready
              to take action. Bridgy simplifies the volunteer-matching process,
              connecting your charity with students who share your passion for
              change. Our platform ensures you can organize large groups for
              periodic projects effortlessly, allowing you to focus on what
              truly matters—your mission.
            </div>
          </div>
          <div className="w-full h-[90vh] bg-gradient-to-r from-[#1e1e1e] to-[#696969] relative">
            <img
              src={pic5}
              className="absolute w-full mix-blend-overlay object-cover	"
              style={{ height: "90vh" }}
            />
            <div className="text-7xl underline text-white pt-40 ml-40">
              For Students
            </div>
            <div
              className="text-2xl text-white pt-[6vh] ml-40"
              style={{ width: "50rem" }}
            >
              Bridgy is for students ready to explore the world of volunteering
              and earn tremendous pre-professional experience. It is your
              digital compass to finding opportunities that resonate with your
              interests and aspirations. Say goodbye to countless hours
              searching for the right fit. With our hub, you can connect you
              with meaningful projects in a snap, track your accomplishments,
              and build real-time assessments of your impact on the community.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
