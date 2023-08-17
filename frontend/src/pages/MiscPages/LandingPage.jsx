import pic1 from "../../../Bridgy_Assets/Images/Webpage/hero.png"
import pic2 from "../../../Bridgy_Assets/Images/Webpage/Story 01.png"
import pic3 from "../../../Bridgy_Assets/Images/Webpage/What we do 01.png"
import pic4 from "../../../Bridgy_Assets/Images/Webpage/What we do 02.png"
import pic5 from "../../../Bridgy_Assets/Images/Webpage/What we do 03.png"


export const LandingPage = () => {
  const scToAboutUs = () => {
    window.scrollTo({top: 1000, behavior: "smooth"});
  };

  return (
    <div className="flex-row relative">
      <div className="w-[100%] h-[900px] flex justify-between">
        <div className="flex-row mt-40">
          <div className="font-bold ml-32 text-8xl">
            Bridgy
          </div>
          <div className="font-bold ml-32 mt-4 text-6xl">
            Making The Connections <br></br> No One Cares <span className="text-[#2135D9]"> To Do </span>
          </div>
          <div className="ml-32 mt-10 text-xl">
              Description Description Description Description
          </div>
          <div className="text-xl ml-40 mt-20">
            <button onClick={scToAboutUs} className="bg-[#2EA0FB] text-white px-10 py-4 rounded-full hover:bg-[#2135D9]">
              Learn more
            </button>
          </div>
        </div>
        <div>
        <img className="w-full border-8 border-[#2EA0FB] border-l-0 border-t-0" src={pic1} style={{width: '950px', height: '800px'}} />
        </div>
      </div>
      <div className="w-[100%] h-[1000px] flex-row space-y-16">
        <div className="mt-16 text-center font-bold text-6xl">
          Our <span className="text-[#2135D9]"> Founding </span> Story
        </div>
        <div className="flex px-48 items-center pt-8">
          <img className="border-8 border-[#2EA0FB] border-r-0 border-b-0" src={pic2} style={{width: '700px', height: '600px'}} />
          <div className="flex-row ml-8">
            <div className="text-3xl">
              Our team had a ton of experience engaging in community service in high school, with some of us creating charities involving 60+ people.
            </div>
            <div className="pt-4 text-3xl">
              We noticed <span className="text-[#2135D9]"> 3 things </span> :
            </div>
            <div className="marker:text-[#2135D9] pt-2 pl-6 text-2xl">
              <ul className="list-disc">
                <li>Finding service opportunities is a manual and laborious process for high school students</li>
                <li>Monitoring activities and scheduling support is equally time consuming for school administrators</li>
                <li>Charities have trouble finding a reliable source of young volunteers for periodic missions, impeding their planing and scaling abilities</li>
              </ul>
            </div>
            <div className="pt-4 text-3xl">
              There is simply a lack of centralized access to information or the digital infrastructure needed for these ecosystems to interact dynamically. 
            </div>
          </div>
        </div>
        <div className="font-semibold text-center text-4xl">
          Bridgy is a <span className="text-[#2135D9]"> pathway </span> across that void.
        </div>
      </div>
      <div className="w-[100%] h-[700px] flex-row space-x-20">
        <div className="flex-row mx-40 py-32 bg-[#2135D9] text-center rounded-3xl">
          <div className="text-white text-6xl">
            Meet Our Extraordinary Team
          </div>
          <div className="pt-6 text-white text-xl ">
            We are not just a team, we are a collective of individuals who embrace innovation, <br></br>
            challenge the status quo, and bring unparalleled passion to our work.
          </div>
          <div className="text-xl mt-20">
            <button className="bg-white text-[#2135D9] px-14 py-5 rounded-full hover:bg-slate-200">
              Meet the Team
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex-row">
        <div className="flex justify-around">
          <div className="text-6xl font-bold">
            What <span className="text-[#2135D9]"> We Do </span>
          </div>
          <div className="text-2xl underline decoration-[#2135D9]">
          We are building highly customized digital infrastructure to make <br></br> the charitable ecosystem easily accessible to high schools in the <br></br> most efficient and secure ways possible.
          </div>
        </div>
        <div className="mt-32 w-full h-[800px] bg-gradient-to-r from-[#1e1e1e] to-[#696969] relative">
          <img src={pic3} className="absolute w-full mix-blend-overlay" style={{height: '800px'}}/>
          <div className="text-7xl text-white ml-40 pt-60">
            For Schools
          </div>
          <ul className="text-2xl text-white ml-40 list-disc pt-10 space-y-4">
            <li>Real time monitoring capacity for school supervisors</li>
            <li>Intelligent reminders and calendar building capabilities to streamline student/administrator catch-ups</li>
            <li>Analytics and detailed summaries of every past, current and planned mission, for every student</li>
            <li>Student database optimized by year of graduation, extracurricular engagement and a lot of customizable filters!</li>
          </ul>
        </div>
        <div className="w-full h-[800px] bg-gradient-to-r from-[#696969] to-[#1e1e1e] relative">
          <img src={pic4} className="absolute w-full mix-blend-overlay" style={{height: '800px'}}/>
          <div className="text-7xl text-white pt-60 text-right mr-40">
            For Charities
          </div>
          <ul className="text-2xl text-white list-disc pt-10 space-y-4 text-right mr-40 list-inside">
            <li>Publish opportunities with a couple clicks on your dashboard</li>
            <li>Mission analytics and summaries</li>
            <li>APIs to your ERP, Bridgy is super flexible in allowing you <br></br> to select features relevant to your activity!</li>
          </ul>
        </div>
        <div className="w-full h-[800px] bg-gradient-to-r from-[#1e1e1e] to-[#696969] relative">
          <img src={pic5} className="absolute w-full mix-blend-overlay" style={{height: '800px'}}/>
          <div className="text-7xl text-white pt-60 ml-40">
            For Students
          </div>
          <ul className="text-2xl text-white list-disc pt-10 space-y-4 ml-40">
            <li>Access missions matching your skill set and availabilities from hundreds of service opportunities</li>
            <li>Sign-up online super quickly</li>
            <li>Record experiences for posterity by filling out a diary of takeaways at the end of missions</li>
            <li>No need to manually report experiences to school supervisors, we do that!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
