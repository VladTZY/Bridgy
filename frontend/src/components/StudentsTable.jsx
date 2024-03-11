import { Link } from "react-router-dom";

export const StudentsTable = ({ students }) => {
  return (

<div className="rounded-xl shadow overflow-hidden mt-10 ">
      <table className="min-w-full">
        <thead className="bg-[#2135D9] text-white">
          <tr>
            <th className="px-4 py-2 text-left text-l font-medium w-[25%] text-center">Username</th>
            <th className=" hidden lg:table-cell px-4 py-2 text-left text-l font-medium w-[25%] text-center">Email</th>
            <th className="hidden lg:table-cell px-4 py-2 text-left text-l font-medium w-[25%] text-center">
              Phone number
            </th>
            <th className="px-6 py-3 text-left text-l font-medium text-center">Profile</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => {
            return (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 font-semibold text-center">{student.username}</td>
                <td className="hidden lg:table-cell px-4 py-2 font-semibold w-[25%] text-center">{student.email}</td>
                <td className="hidden lg:table-cell px-4 py-2 font-semibold w-[25%] text-center">
                  {student.phoneNumber}
                </td>
                <td className="px-6 py-4 text-center items-center justify-center">
                  <Link
                    to={`/profile/${student.id}`}
                    className="hover:bg-[#2135D9] bg-[#2EA0FB] py-2 px-3 rounded-[50px] text-white text-sm lg:text-md"
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
