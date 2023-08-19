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
    <div className="col-span-10 row-span-6 col-start-3 row-start-2 h-full bg-gray-100 flex flex-col p-5">
      <h1 className="text-4xl font-semibold">Students</h1>

      <div className="rounded-[15px] overflow-hidden mt-5">
        <table className="min-w-full">
          <thead className="bg-[#2135D9] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-l font-medium">
                Username
              </th>
              <th className="px-6 py-3 text-left text-l font-medium">Email</th>
              <th className="px-6 py-3 text-left text-l font-medium">
                Phone number
              </th>
              <th className="px-6 py-3 text-left text-l font-medium">
                Profile
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => {
              return (
                <tr key={student.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 font-semibold">
                    {student.username}
                  </td>
                  <td className="px-6 py-4 font-semibold">{student.email}</td>
                  <td className="px-6 py-4 font-semibold">
                    {student.phoneNumber}
                  </td>
                  <td className="px-6 py-4 font-semibold">
                    <a
                      className="bg-[#2EA0FB] py-2 px-5 rounded-[50px] text-white text-l"
                      href={`http://127.0.0.1:5173/profile/${student.id}`}
                    >
                      View profile
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
