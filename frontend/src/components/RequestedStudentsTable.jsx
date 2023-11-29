import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

export const RequestedStudentsTable = ({
  eventId,
  students,
  setRequestedStudents,
  acceptedStudents,
  setAcceptedStudents,
}) => {
  const acceptStudent = (id, index) => {
    axios
      .post(
        `${
          import.meta.env.VITE_API_URL
        }/organization/confirm_student?studentId=${id}&eventId=${eventId}`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setAcceptedStudents([...acceptedStudents, students[index]]);
        setRequestedStudents(
          students.filter((student) => student.user.id != id)
        );
      });
  };

  const rejectStudent = (id, index) => {
    axios
      .post(
        `${
          import.meta.env.VITE_API_URL
        }/organization/reject_student?studentId=${id}&eventId=${eventId}`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setRequestedStudents(
          students.filter((student) => student.user.id != id)
        );
      });
  };

  return (
    <div className="rounded-[15px] overflow-hidden mt-5">
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
          {students.map((student, index) => {
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
                  <Link
                    to={`/profile/${student.user.id}`}
                    className="hover:bg-[#2135D9] bg-[#2EA0FB] py-3 px-5 rounded-[50px] text-white text-lg"
                  >
                    View profile
                  </Link>
                </td>
                <td className="px-6 py-4 font-semibold">
                  <button
                    className="hover:text-green-700 border-green-700 border-2 hover:bg-white py-2 px-5 rounded-[50px] bg-green-700 text-white text-lg"
                    onClick={() => acceptStudent(student.user.id, index)}
                  >
                    Accept
                  </button>
                </td>
                <td className="px-6 py-4 font-semibold">
                  <button
                    className="bg-red-700 hover:text-red-700 border-red-700 border-2 hover:bg-white py-2 px-5 rounded-[50px] text-white text-lg"
                    onClick={() => rejectStudent(student.user.id, index)}
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
