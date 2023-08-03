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
          <div key={student.id} className="bg-cyan-500 mt-5">
            <h1>{student.username}</h1>
            <p>{student.id}</p>
            <a href={`http://127.0.0.1:5173/profile/${student.id}`}>
              View profile
            </a>
          </div>
        );
      })}
    </div>
  );
};
