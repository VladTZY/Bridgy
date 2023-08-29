import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const RequestedStudentsTable = ({ eventId }) => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4004/api/organization/requested_students?eventId=${eventId}`,
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => setStudents(res.data))
      .catch((error) => console.log(error));
  }, [jwt]);

  const acceptStudent = async (id) => {
    console.log(id);
  };

  const rejectStudent = async (id) => {
    console.log(id);
  };

  return (
    <div className="rounded-[15px] overflow-hidden mt-10">
      <table className="min-w-full">
        <thead className="bg-[#2135D9] text-white">
          <tr>
            <th className="px-6 py-3 text-left text-l font-medium">Username</th>
            <th className="px-6 py-3 text-left text-l font-medium">Email</th>
            <th className="px-6 py-3 text-left text-l font-medium">
              Phone number
            </th>
            <th className="px-6 py-3 text-left text-l font-medium">Profile</th>
            <th className="px-6 py-3 text-left text-l font-medium">Accept</th>
            <th className="px-6 py-3 text-left text-l font-medium">Reject</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => {
            return (
              <tr key={student.user.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 font-semibold">
                  {student.user.username}
                </td>
                <td className="px-6 py-4 font-semibold">
                  {student.user.email}
                </td>
                <td className="px-6 py-4 font-semibold">
                  {student.user.phoneNumber}
                </td>
                <td className="px-6 py-4 font-semibold">
                  <a
                    className="bg-[#2EA0FB] py-2 px-5 rounded-[50px] text-white text-l"
                    href={`http://127.0.0.1:5173/profile/${student.user.id}`}
                  >
                    View profile
                  </a>
                </td>
                <td className="px-6 py-4 font-semibold">
                  <button
                    className="bg-green-700 py-2 px-5 rounded-[50px] text-white text-l"
                    onClick={() => acceptStudent(student.user.id)}
                  >
                    Accept
                  </button>
                </td>
                <td className="px-6 py-4 font-semibold">
                  <button
                    className="bg-red-700 py-2 px-5 rounded-[50px] text-white text-l"
                    onClick={() => rejectStudent(student.user.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};