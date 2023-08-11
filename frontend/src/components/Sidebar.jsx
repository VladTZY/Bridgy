import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/authSlice";

export const Sidebar = () => {
  const role = useSelector((state) => state.auth.role);
  const id = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

  return (
    <div className="sidebar fixed top-20 bottom-0 lg:left-0 pl-2 pt-8 w-[300px] overflow-y-auto space-y-6">
          {
            {
              STUDENT: (
                <div className="flex-col space-y-6">
                  <div className="ml-6 flex items-center border-b-2">
                    <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                    <div className="ml-2 hover:text-sky-400 text-xl">
                      <Link to="/student/dashboard">Dashboard</Link>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center border-b-2">
                    <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                    <div className="ml-2 hover:text-sky-400 text-xl">
                      <Link to="/student/find_opportunities">
                        Find Opportunities
                      </Link>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center border-b-2">
                  <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                    <div className="ml-2 hover:text-sky-400 text-xl">
                      <Link to="/student/find_group">Find A Group</Link>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center border-b-2">
                  <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                    <div className="ml-2 hover:text-sky-400 text-xl">
                      <Link to="/student/my_experiences">My Experiences</Link>
                    </div>
                  </div>
                </div>
              ),
              ORGANIZATION: (
                <div className="flex-col space-y-6">
                  <div className="ml-6 flex items-center border-b-2">
                    <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                    <div className="ml-2 hover:text-sky-400 text-xl">
                      <Link to="/organization/dashboard">
                        Dashboard
                      </Link>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center border-b-2">
                    <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                    <div className="ml-2 hover:text-sky-400 text-xl">
                      <Link to="/organization/post_opportunities">
                        Post Opportunities
                      </Link>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center border-b-2">
                  <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                    <div className="ml-2 hover:text-sky-400 text-xl">
                      <Link to="/organization/missions">Missions</Link>
                    </div>
                  </div>
                </div>
              ),
              SCHOOL: (
                <div className="flex-col space-y-6">
                  <div className="ml-6 flex items-center border-b-2">
                    <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                    <div className="ml-2 hover:text-sky-400 text-xl">
                      <Link to="/school/dashboard">Dashboard</Link>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center border-b-2">
                    <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                    <div className="ml-2 hover:text-sky-400 text-xl">
                      <Link to="/school/add_student">Add Student</Link>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center border-b-2">
                  <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                    <div className="ml-2 hover:text-sky-400 text-xl">
                      <Link to="/school/updates">Updates</Link>
                    </div>
                  </div>
                </div>
              ),
            }[role]
          }
          <div className="ml-6 flex items-center border-b-2">
            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
            <div className="ml-2 hover:text-sky-400 text-xl">
              <Link to={`/profile/${id}`}>Profile</Link>
            </div>
          </div>
          <div className="ml-6 flex items-center pt-96">
            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
            <div className="ml-2 hover:text-sky-400 text-lg">
              <Link to="/contact_us">Help</Link>
            </div>
          </div>
          <div className="ml-6 flex items-center">
            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
            <div className="ml-2 hover:text-sky-400 text-lg">
              <button onClick={() => dispatch(logout())}>Logout</button>
            </div>
          </div>
    </div>
  );
};