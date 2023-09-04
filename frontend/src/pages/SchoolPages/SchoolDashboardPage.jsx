import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { StudentsTable } from "../../components/StudentsTable";

export const SchoolStudentsMyPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [students, setStudents] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [grade, setGrade] = useState("9");
  const [sorted, setSorted] = useState("none");

  useEffect(() => {
    axios
      .get(`http://localhost:4004/api/school/students?grade=${grade}`, {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => {
        setStudents(res.data);
        setTableData(res.data);
      })
      .catch((error) => console.log(error));
  }, [jwt, grade]);

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
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Students</h1>
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
