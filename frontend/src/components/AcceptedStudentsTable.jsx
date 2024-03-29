import { Link } from "react-router-dom";

export const AcceptedStudentsTable = ({ eventId, students }) => {
  return (
    <div className="overflow-hidden mt-5 ">
      <table className="min-w-full">
        <thead className="bg-gray-100 text-black">
          <tr>
            <th className="px-6 py-2 text-left text-l font-medium">Username</th>
            <th className="px-6 py-2 text-left text-l font-medium">Email</th>
            <th className="px-6 py-2 text-left text-l font-medium">
              Phone number
            </th>
            <th className="px-6 py-2 text-left text-l font-medium">Profile</th>
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
                  <Link
                    to={`/profile/${student.user.id}`}
                    className="hover:bg-[#2135D9] bg-[#2EA0FB] py-2 px-5 rounded-[50px] text-white text-l"
                  >
                    View profile
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
