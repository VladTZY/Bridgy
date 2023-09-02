import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { StudentsTable } from "../../components/StudentsTable";

export const SchoolStudentsMyPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [students, setStudents] = useState([]);
  const [grade, setGrade] = useState("9");

  useEffect(() => {
    axios
      .get(`http://localhost:4004/api/school/students?grade=${grade}`, {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => setStudents(res.data))
      .catch((error) => console.log(error));
  }, [jwt, grade]);

  return (
    <div className="h-full bg-gray-100 flex flex-col p-5">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Students</h1>
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
      <StudentsTable students={students} />
    </div>
  );
};
