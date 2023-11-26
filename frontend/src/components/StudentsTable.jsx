import { Link } from "react-router-dom";

export const StudentsTable = ({ students }) => {
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
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => {
            return (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 font-semibold">{student.username}</td>
                <td className="px-6 py-4 font-semibold">{student.email}</td>
                <td className="px-6 py-4 font-semibold">
                  {student.phoneNumber}
                </td>
                <td className="px-6 py-4 font-semibold">
                  <Link
                    to={`/profile/${student.user.id}`}
                    className="hover:bg-[#2135D9] bg-[#2EA0FB] py-2 px-5 rounded-[50px] text-white text-lg"
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
