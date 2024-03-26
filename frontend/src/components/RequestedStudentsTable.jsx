import axiosInstance from "../utils/axiosInstance";
import { Link } from "react-router-dom";

export const RequestedStudentsTable = ({
  eventId,
  students,
  setRequestedStudents,
  acceptedStudents,
  setAcceptedStudents,
}) => {
  const acceptStudent = (id, index) => {
    axiosInstance
      .post(
        `/organization/confirm_student?studentId=${id}&eventId=${eventId}`,
        {}
      )
      .then((res) => {
        setAcceptedStudents([...acceptedStudents, students[index]]);
        setRequestedStudents(
          students.filter((student) => student.user.id != id)
        );
      });
  };

  const rejectStudent = (id, index) => {
    axiosInstance
      .post(
        `/organization/reject_student?studentId=${id}&eventId=${eventId}`,
        {}
      )
      .then((res) => {
        setRequestedStudents(
          students.filter((student) => student.user.id != id)
        );
      });
  };

  return (
    <div className=" overflow-hidden mt-5">
      <table className="min-w-full ">
        <thead className="bg-gray-100 text-black">
          <tr>
            <th className="px-6 py-2 text-left text-l font-medium">Username</th>
            <th className="px-6 py-2 text-left text-l font-medium">Email</th>
            <th className="px-6 py-2 text-left text-l font-medium">
              Phone number
            </th>
            <th className="px-6 py-2 text-left text-l font-medium">Profile</th>
            <th className="px-6 py-2 text-left text-l font-medium">Accept</th>
            <th className="px-6 py-2 text-left text-l font-medium">Reject</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student, index) => {
            return (
              <tr key={student.user.id} className="hover:bg-gray-100">
                <td className="px-6 py-2 font-semibold">
                  {student.user.username}
                </td>
                <td className="px-6 py-2 font-semibold">
                  {student.user.email}
                </td>
                <td className="px-6 py-2 font-semibold">
                  {student.user.phoneNumber}
                </td>
                <td className="px-6 py-2 font-semibold">
                  <Link
                    to={`/profile/${student.user.id}`}
                    className="hover:bg-[#2135D9] bg-[#2EA0FB] py-1.5 px-3 rounded-[50px] text-white text-l"
                  >
                    View profile
                  </Link>
                </td>
                <td className="px-6 py-4 font-semibold">
                  <button
                    className="hover:text-green-700 border-green-700  hover:bg-white py-1.5 px-3 rounded-[50px] bg-green-700 text-white text-l"
                    onClick={() => acceptStudent(student.user.id, index)}
                  >
                    Accept
                  </button>
                </td>
                <td className="px-6 py-4 font-semibold">
                  <button
                    className="bg-red-700 hover:text-red-700 border-red-700  hover:bg-white py-1.5 px-3 rounded-[50px] text-white text-l"
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
