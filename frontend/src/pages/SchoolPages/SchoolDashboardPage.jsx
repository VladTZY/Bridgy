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
    <div className="h-full bg-gray-100 flex flex-col p-5">
      <div className="flex">
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
      <div className="mt-6 flex justify-between pl-1 mx-3">
        <h1 className="text-2xl font-semibold">Students</h1>
        <div className="flex">
          <select
            value={sorted}
            onChange={(e) => handleOrderChange(e.target.value)}
            className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md mr-2"
          >
            <option value="none">Order</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md"
          >
            <option value="9">9th Grade</option>
            <option value="10">10th Grade</option>
            <option value="11">11th Grade</option>
            <option value="12">12th Grade</option>
          </select>
        </div>
      </div>
      <StudentsTable students={tableData} />
    </div>
  );
};
