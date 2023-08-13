import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../store/authSlice";

export const Sidebar = () => {
  const role = useSelector((state) => state.auth.role);
  const id = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className="sidebar fixed top-20 bottom-0 lg:left-0 pt-8 w-[300px] overflow-y-auto">
          {
            {
              STUDENT: (
                <div className="flex-col">
                  <div>
                    {
                      (location.pathname == "/student/dashboard") ? (
                        <Link to="/student/dashboard"> 
                          <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-4 py-4">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-white text-xl">
                                Dashboard
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <Link to="/student/dashboard">
                          <div className="ml-6 flex items-center px-4 py-4 rounded-xl hover:bg-blue-200">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-xl">
                                Dashboard
                            </div>
                          </div>
                        </Link>
                      )
                    }
                  </div>
                  <div>
                    {
                      (location.pathname == "/student/find_opportunities") ? (
                        <Link to="/student/find_opportunities">
                          <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-4 py-4">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-white text-xl">
                                Find Opportunities
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <Link to="/student/find_opportunities">
                          <div className="ml-6 flex items-center px-4 py-4 rounded-xl hover:bg-blue-200">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-xl">
                                Find Opportunities
                            </div>
                          </div>
                        </Link>
                      )
                    }
                  </div>
                  <div>
                    {
                      (location.pathname == "/student/find_group") ? (
                        <Link to="/student/find_group"> 
                          <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-4 py-4">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-white text-xl">
                                Find A Group
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <Link to="/student/find_group">
                          <div className="ml-6 flex items-center px-4 py-4 rounded-xl hover:bg-blue-200">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-xl">
                                Find A Group
                            </div>
                          </div>
                        </Link>
                      )
                    }
                  </div>
                  <div>
                    {
                      (location.pathname == "/student/my_experiences") ? (
                        <Link to="/student/my_experiences"> 
                          <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-4 py-4">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-white text-xl">
                                My Experiences
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <Link to="/student/my_experiences">
                          <div className="ml-6 flex items-center px-4 py-4 rounded-xl hover:bg-blue-200">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-xl">
                                My Experiences
                            </div>
                          </div>
                        </Link>
                      )
                    }
                  </div>
                </div>
              ),
              ORGANIZATION: (
                <div className="flex-col">
                  <div>
                    {
                      (location.pathname == "/organization/dashboard") ? (
                        <Link to="/organization/dashboard"> 
                          <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-4 py-4">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-white text-xl">
                                Dashboard
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <Link to="/organization/dashboard">
                          <div className="ml-6 flex items-center px-4 py-4 rounded-xl hover:bg-blue-200">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-xl">
                                Dashboard
                            </div>
                          </div>
                        </Link>
                      )
                    }
                  </div>
                  <div>
                    {
                      (location.pathname == "/organization/post_opportunities") ? (
                        <Link to="/organization/post_opportunities">
                          <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-4 py-4">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-white text-xl">
                                Post Opportunities
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <Link to="/organization/post_opportunities">
                          <div className="ml-6 flex items-center px-4 py-4 rounded-xl hover:bg-blue-200">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-xl">
                                Post Opportunities
                            </div>
                          </div>
                        </Link>
                      )
                    }
                  </div>
                  <div>
                    {
                      (location.pathname == "/organization/missions") ? (
                        <Link to="/organization/missions"> 
                          <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-4 py-4">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-white text-xl">
                                Missions
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <Link to="/organization/missions">
                          <div className="ml-6 flex items-center px-4 py-4 rounded-xl hover:bg-blue-200">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-xl">
                                Missions
                            </div>
                          </div>
                        </Link>
                      )
                    }
                  </div>
                </div>
              ),
              SCHOOL: (
                <div className="flex-col">
                <div>
                  {
                    (location.pathname == "/school/dashboard") ? (
                      <Link to="/school/dashboard"> 
                        <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-4 py-4">
                          <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                          <div className="ml-2 text-white text-xl">
                              Dashboard
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <Link to="/school/dashboard">
                        <div className="ml-6 flex items-center px-4 py-4 rounded-xl hover:bg-blue-200">
                          <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                          <div className="ml-2 text-xl">
                              Dashboard
                          </div>
                        </div>
                      </Link>
                    )
                  }
                </div>
                <div>
                  {
                    (location.pathname == "/school/add_student") ? (
                      <Link to="/school/add_student">
                        <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-4 py-4">
                          <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                          <div className="ml-2 text-white text-xl">
                              Add Student
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <Link to="/school/add_student">
                        <div className="ml-6 flex items-center px-4 py-4 rounded-xl hover:bg-blue-200">
                          <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                          <div className="ml-2 text-xl">
                              Add Student
                          </div>
                        </div>
                      </Link>
                    )
                  }
                </div>
                <div>
                  {
                    (location.pathname == "/school/updates") ? (
                      <Link to="/school/updates"> 
                        <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-4 py-4">
                          <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                          <div className="ml-2 text-white text-xl">
                              Updates
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <Link to="/school/updates">
                        <div className="ml-6 flex items-center px-4 py-4 rounded-xl hover:bg-blue-200">
                          <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                          <div className="ml-2 text-xl">
                              Updates
                          </div>
                        </div>
                      </Link>
                    )
                  }
                </div>
              </div>
              ),
            }[role]
          }
          <div>
                    {
                      (location.pathname == `/profile/${id}`) ? ( 
                        <Link to={`/profile/${id}`}>
                          <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-4 py-4">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-white text-xl">
                                Profile
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <Link to={`/profile/${id}`}>
                          <div className="ml-6 flex items-center px-4 py-4 rounded-xl hover:bg-blue-200">
                            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
                            <div className="ml-2 text-xl">
                                Profile
                            </div>
                          </div>
                        </Link>
                      )
                    }
          </div>
          <div className="ml-6 flex items-center pt-96">
            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
            <div className="ml-2 hover:text-[#2135D9] text-lg">
              <Link to="/contact_us">Help</Link>
            </div>
          </div>
          <div className="ml-6 flex items-center">
            <img src="http://ih0.redbubble.net/image.12044100.3946/sticker,375x360.png" alt="react logo" style={{ width: '20px', height: '20px'}}/>
            <div className="ml-2 hover:text-[#2135D9] text-lg">
              <button onClick={() => dispatch(logout())}>Logout</button>
            </div>
          </div>
    </div>
  );
};