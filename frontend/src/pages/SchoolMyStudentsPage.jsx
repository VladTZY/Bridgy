import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export const SchoolStudentsMyPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4004/api/school/students", {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => setStudents(res.data))
      .catch((error) => console.log(error));
  }, [jwt]);

  return (
    <div>
      {students.map((student) => {
        return (
          <div className="bg-cyan-500">
            <h1>{student.username}</h1>
            <p>{student.id}</p>
          </div>
        );
      })}
    </div>
  );
};
