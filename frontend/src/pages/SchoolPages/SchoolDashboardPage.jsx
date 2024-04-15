import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

import { StudentsTable } from "../../components/StudentsTable";
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
    axiosInstance
      .get(`/school/students?grade=${grade}`)
      .then((res) => {
        setStudents(res.data);
        setTableData(res.data);
      })
      .catch((error) => console.log(error));
  }, [grade]);

  useEffect(() => {
    axiosInstance
      .get(`/school/stats`)
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
    <div className="ml-[15vw] pb-[8vh]">
      <div className=" md:flex w-[85vw] bg-gray-100 flex flex-col  overflow-x-scroll  ">
        <div className=" hidden md:flex md:flex-row overflow-x-scroll  justify-center items-center w-[100%]"></div>

        <div className=" w-[85vw] bg-gray-100 flex flex-col overflow-x-scroll overscroll-contain md:hidden"></div>
        <div className="  flex flex-row overflow-x-scroll justify-center items-center w-[300%] md:hidden">
          <div className="flex flex-row overflow-x-scroll justify-center items-center w-[100%]"></div>
          <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]"></div>
          <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]"></div>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex md:flex-row justify-between  w-[100%] px-4">
        <h1 className="text-2xl font-semibold text-center lg:text-left">
          Students
        </h1>
        <div className="flex  mt-3 md:mt-0 justify-center text-center">
          <select
            value={sorted}
            onChange={(e) => handleOrderChange(e.target.value)}
            className="bg-white shadow-md p-2 rounded-xl mr-2 border"
          >
            <option value="none">Order</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="bg-white shadow-md p-2 rounded-xl border"
          >
            <option value="9">9th Grade</option>
            <option value="10">10th Grade</option>
            <option value="11">11th Grade</option>
            <option value="12">12th Grade</option>
          </select>
        </div>
      </div>
      <div className=" mx-3 mt-6  ">
        <StudentsTable students={tableData} />
      </div>
    </div>
  );
};
