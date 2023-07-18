import BridgyLogo from "../assets/bridgyLogo.jpg";
import { Card } from "../components/Card";

export const LandingPage = () => {
  return (
    <div>
      <nav className="bg-cyan-500">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center">
            <img src={BridgyLogo} className="h-8 mr-3" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bridgy
            </span>
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-2 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-cyan-500 ">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-cyan-500"
                >
                  Create an account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-cyan-500"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-cyan-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="m-20 font-mono">
        <div className="text-center">
          <h1 className="text-5xl bold">Founding Story</h1>
          <p className="text-2xl mt-20">
            Our team had a ton of experience engaging in community service in
            high school, with some of us creating charities involving 60+ people
          </p>
          <h1 className="text-4xl mt-10 mb-4">We noticed 3 things:</h1>
          <div className="flex  justify-center">
            <Card text="Finding service opportunities is a manual and laborious process for high school students" />
            <Card text="Charities have trouble finding a reliable source of young volunteers for periodic missions, impeding their planing and scaling abilities" />
            <Card text="Monitoring activities and scheduling support is equally time consuming for school administrators" />
          </div>
          <p className="text-2xl mt-5">
            There is simply a lack of centralized access to information or the
            digital infrastructure needed for these ecosystems to interact
            dynamically
          </p>
          <p className="text-5xl bold mt-10 trasnform transition duration-500 drop-shadow-[0px_0px_15px_rgba(6,182,212,100)]">
            Bridgy is a pathway across that void
          </p>
        </div>

        <div className="text-center mt-24">
          <h1 className="text-5xl bold">What we do?</h1>
          <p className="text-2xl mt-20">
            We are building highly customized digital infrastructure to make the
            charitable ecosystem easily accessible to high schools in the most
            efficient and secure ways possible.
          </p>
          <div className="flex  justify-center mt-5">
            <Card text="Gives students access to a wide range of charitable organizations and encourages them to initiate projects" />
            <Card text="Automates a large part of the time-consuming monitoring and planning necessary to school supervisors" />
            <Card text="Provides a source of volunteers and intelligent planning tools that have never been made available to charities before" />
          </div>
          <p className="text-2xl mt-5">
            Signing up to service opportunities, recording service involvement
            and planning student support all happens in a few clicks for the
            comfort of students, school supervisors and charities
          </p>

          <p className="text-5xl mt-24">For Schools</p>
          <div className="flex  justify-center mt-5">
            <Card text="Real time monitoring capacity for school supervisors" />
            <Card text="Intelligent reminders and calendar building capabilities to streamline student/administrator catch-ups" />
            <Card text="Analytics and detailed summaries of every past, current and planned mission, for every student" />
            <Card text="Student database optimized by year of graduation, extracurricular engagement and a lot of customizable filters!" />
          </div>
          <p className="text-5xl mt-24">For Charities</p>
          <div className="flex  justify-center mt-5">
            <Card text="Publish opportunities with a couple clicks on your dashboard" />
            <Card text="APIs to your ERP, Bridgy is super flexible in allowing you to select features relevant to your activity!" />
            <Card text="Mission analytics and summaries" />
          </div>
          <p className="text-5xl mt-24">For Students</p>
          <div className="flex  justify-center mt-5">
            <Card text="Access missions matching your skill set and availabilities from hundreds of service opportunities" />
            <Card text="Record experiences for posterity by filling out a diary of takeaways at the end of missions" />
            <Card text="No need to manually report experiences to school supervisors, we do that!" />
          </div>
        </div>
      </div>

      <footer className="bg-white rounded-lg shadow m-4 w-full dark:bg-cyan-500">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-white">
            © 2023 <a className="hover:underline">Birdgy™</a>. All Rights
            Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
