import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const role = useSelector((state) => state.auth.role);
  const id = useSelector((state) => state.auth.id);

  return (
    <div className="flex justify-between w-[95%]">
      <div className="flex w-80 h-20 items-center">
        <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '70px', height: '70px'}}/>
        <div className="hover:text-sky-400 text-3xl">
          <Link to="/">Bridgy</Link>
        </div>
      </div>

      {role != "" ? (
        <div className="flex gap-10 items-center bg-white-500">
          {
            {
              STUDENT: (
                <div className="flex gap-10 items-center">
                  <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
                    <Link to="/student/dashboard">My activity</Link>
                  </div>
                  <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
                    <Link to="/student/find_opportunities">
                      Find Opportunities
                    </Link>
                  </div>
                  <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
                    <Link to="/student/find_group"> Find a Group</Link>
                  </div>
                </div>
              ),
              ORGANIZATION: (
                <div className="flex gap-10 items-center bg-cyan-500">
                  <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
                    <Link to="/organization/my_opportunities">
                      My Opportunities
                    </Link>
                  </div>
                  <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
                    <Link to="/organization/post_opportunities">
                      Post an Opportunity
                    </Link>
                  </div>
                </div>
              ),
              SCHOOL: (
                <div className="flex gap-10 items-center bg-cyan-500">
                  <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
                    <Link to="/school/my_students">My Students</Link>
                  </div>
                  <div className="hover:underline underline-offset-8 decoration-2 hover:text-sky-400 text-lg">
                    <Link to="/school/add_student">Add Student</Link>
                  </div>
                </div>
              ),
            }[role]
          }
          <div className="text-lg">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              <Link to={`/profile/${id}`}>Profile</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="text-lg">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
