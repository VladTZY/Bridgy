import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { StudentsTable } from "../../components/StudentsTable";
import { SchoolProgressCard } from "../../components/SchoolProgressCard";

export const SchoolDashboardPage = () => {
  const [students, setStudents] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [grade, setGrade] = useState("9");
  const [sorted, setSorted] = useState("none");
  const [stats, setStats] = useState({
    numberOfStudents: 0,
    completedStudents: 0,
    totalEconomy: 0,
    totalObjective: 0,
    actualObjective: 0,
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/school/students?grade=${grade}`, {
        withCredentials: true,
      })
      .then((res) => {
        setStudents(res.data);
        setTableData(res.data);
      })
      .catch((error) => console.log(error));
  }, [grade]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/school/stats`, {
        withCredentials: true,
      })
      .then((res) => {
        setStats(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleOrderChange = (value) => {
    if (value == "none") setTableData(students);

    if (value == "alphabetical") {
      const sortedArray = [...students].sort((a, b) =>
        a.username.toLowerCase() > b.username.toLowerCase()
          ? 1
          : b.username.toLowerCase() > a.username.toLowerCase()
          ? -1
          : 0
      );
      setTableData(sortedArray);
    }

    setSorted(value);
  };

  return (
      <div>
        <div className=" md:flex w-[85vw] ml-[15vw] bg-gray-100 flex flex-col px-2 md:p-5 overflow-x-scroll ">
          <div className=" hidden md:flex md:flex-row overflow-x-scroll  justify-center items-center w-[100%]">
            <SchoolProgressCard 
              title={"Objective"}
              total={stats.actualObjective + "/" + stats.totalObjective}
              description={""}
              percentage={Math.round(
                (stats.actualObjective / stats.totalObjective) * 100
              )}
              color={"#32cd32"}
            />
            <SchoolProgressCard
              title={"Total Economy"}
              total={stats.totalEconomy + "$"}
              description={""}
              percentage={100}
              color={"#eed202"}
            />
            <SchoolProgressCard
              title={"Nr. of Students"}
              total={stats.completedStudents + "/" + stats.numberOfStudents}
              description={""}
              percentage={Math.round(
                (stats.completedStudents / stats.numberOfStudents) * 100
              )}
              color={"#a40000"}
            />
          </div>

          <div className=" w-[85vw] ml-[15vw] bg-gray-100 flex flex-col  md:p-5 overflow-x-scroll overscroll-contain md:hidden"></div>      
          <div className="  flex flex-row overflow-x-scroll  justify-center items-center w-[300%] md:hidden"> 
            <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]">
              <SchoolProgressCard 
                title={"Objective"}
                total={stats.actualObjective + "/" + stats.totalObjective}
                description={""}
                percentage={Math.round(
                  (stats.actualObjective / stats.totalObjective) * 100
                )}
                color={"#32cd32"}
              />
            </div>
            <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]">
              <SchoolProgressCard
                title={"Total Economy"}
                total={stats.totalEconomy + "$"}
                description={""}
                percentage={100}
                color={"#eed202"}
              />
            </div>
            <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]">
              <SchoolProgressCard
                title={"Nr. of Students"}
                total={stats.completedStudents + "/" + stats.numberOfStudents}
                description={""}
                percentage={Math.round(
                  (stats.completedStudents / stats.numberOfStudents) * 100
                )}
                color={"#a40000"}
              />
            </div>
          </div>
        </div>
        <div className="ml-[15vw] mt-6 flex flex-col md:flex md:flex-row justify-between  w-[85%] px-6">
          <h1 className="text-2xl font-semibold text-center md:text-left">Students</h1>
          <div className="flex items-center justify-center mt-3 md:mt-0">
            <select
              value={sorted}
              onChange={(e) => handleOrderChange(e.target.value)}
              className="bg-gray-100 border-2 border-gray-300 p-2 rounded-xl mr-2"
            >
              <option value="none">Order</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="bg-gray-100 border-2 border-gray-300 p-2 rounded-xl"
            >
              <option value="9">9th Grade</option>
              <option value="10">10th Grade</option>
              <option value="11">11th Grade</option>
              <option value="12">12th Grade</option>
            </select>
          </div>
        </div >
        <div className="ml-[15vw]">
        <StudentsTable students={tableData} />
        </div>
      </div>
    );
};
