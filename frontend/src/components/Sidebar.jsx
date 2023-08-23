import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../store/authSlice";
import dash_white from "../../Bridgy_Assets/icon/Dashboard white.svg";
import dash_black from "../../Bridgy_Assets/icon/Dashboard black.svg";
import fo_white from "../../Bridgy_Assets/icon/Find Opportunities white.svg";
import fo_black from "../../Bridgy_Assets/icon/Find Opportunities black.svg";
import fg_white from "../../Bridgy_Assets/icon/Find A Group white.svg";
import fg_black from "../../Bridgy_Assets/icon/Find A Group black.svg";
import myex_white from "../../Bridgy_Assets/icon/My Experience white.svg";
import myex_black from "../../Bridgy_Assets/icon/My Experience black.svg";
import pf_white from "../../Bridgy_Assets/icon/Account white.svg";
import pf_black from "../../Bridgy_Assets/icon/Account black.svg";
import help from "../../Bridgy_Assets/icon/help black.svg";
import lo from "../../Bridgy_Assets/icon/logout black.svg";
import po_white from "../../Bridgy_Assets/icon/Post opportunities white.svg";
import po_black from "../../Bridgy_Assets/icon/Post opportunities black.svg";
import mss_white from "../../Bridgy_Assets/icon/Mission white.svg";
import mss_black from "../../Bridgy_Assets/icon/Mission black.svg";
import upd_white from "../../Bridgy_Assets/icon/Update whote.svg";
import upd_black from "../../Bridgy_Assets/icon/update black.svg";

export const Sidebar = () => {
  const role = useSelector((state) => state.auth.role);
  const id = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between w-[20%]">
      <div>
        {
          {
            STUDENT: (
              <div className="flex-col mr-3">
                <div>
                  {location.pathname == "/student/dashboard" ? (
                    <Link to="/student/dashboard">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={dash_white}
                          alt="react logo"
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">Dashboard</div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/student/dashboard">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={dash_black}
                          alt="react logo"
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Dashboard</div>
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  {location.pathname == "/student/find_opportunities" ? (
                    <Link to="/student/find_opportunities">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={fo_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">
                          Find Opportunities
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/student/find_opportunities">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={fo_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Find Opportunities</div>
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  {location.pathname == "/student/find_group" ? (
                    <Link to="/student/find_group">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={fg_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">
                          Find A Group
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/student/find_group">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={fg_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Find A Group</div>
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  {location.pathname == "/student/my_experiences" ? (
                    <Link to="/student/my_experiences">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={myex_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">
                          My Experiences
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/student/my_experiences">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={myex_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">My Experiences</div>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            ),
            ORGANIZATION: (
              <div className="flex-col mr-3">
                <div>
                  {location.pathname == "/organization/dashboard" ? (
                    <Link to="/organization/dashboard">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={dash_white}
                          alt="react logo"
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">Dashboard</div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/organization/dashboard">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={dash_black}
                          alt="react logo"
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Dashboard</div>
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  {location.pathname == "/organization/post_opportunities" ? (
                    <Link to="/organization/post_opportunities">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={po_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">
                          Post Opportunities
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/organization/post_opportunities">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={po_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Post Opportunities</div>
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  {location.pathname == "/organization/missions" ? (
                    <Link to="/organization/missions">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={mss_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">Missions</div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/organization/missions">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={mss_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Missions</div>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            ),
            SCHOOL: (
              <div className="flex-col mr-3">
                <div>
                  {location.pathname == "/school/dashboard" ? (
                    <Link to="/school/dashboard">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={dash_white}
                          alt="react logo"
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">Dashboard</div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/school/dashboard">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={dash_black}
                          alt="react logo"
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Dashboard</div>
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  {location.pathname == "/school/add_student" ? (
                    <Link to="/school/add_student">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={fg_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">
                          Add Student
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/school/add_student">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={fg_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Add Student</div>
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  {location.pathname == "/school/updates" ? (
                    <Link to="/school/updates">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={upd_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">Updates</div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/school/updates">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={upd_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Updates</div>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            ),
            ADMIN: (
              <div className="flex-col mr-3">
                <div>
                  {location.pathname == "/admin/create_school" ? (
                    <Link to="/admin/create_school">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={po_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">Create School</div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/admin/create_school">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={po_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Create School</div>
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  {location.pathname == "/admin/create_organization" ? (
                    <Link to="/admin/create_organization">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={myex_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">Create Organization</div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/admin/create_organization">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={myex_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Create Organization</div>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            ),
            SUPER_ADMIN: (
              <div className="flex-col mr-3">
                <div>
                  {location.pathname == "/super_admin/create_admin" ? (
                    <Link to="/super_admin/create_admin">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={fg_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">Create Admin</div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/super_admin/create_admin">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={fg_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Create Admin</div>
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  {location.pathname == "/super_admin/create_school" ? (
                    <Link to="/super_admin/create_school">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={po_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">Create School</div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/super_admin/create_school">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={po_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Create School</div>
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  {location.pathname == "/super_admin/create_organization" ? (
                    <Link to="/super_admin/create_organization">
                      <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                        <img
                          src={myex_white}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-white text-xl">Create Organization</div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/super_admin/create_organization">
                      <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                        <img
                          src={myex_black}
                          alt="react logo"
                          style={{ width: "30px", height: "40px" }}
                        />
                        <div className="ml-2 text-xl">Create Organization</div>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            ),
          }[role]
        }

        <div className="mr-3">
          {location.pathname == `/profile/${id}` ? (
            <Link to={`/profile/${id}`}>
              <div className="ml-6 flex items-center rounded-xl bg-[#2135D9] px-3 py-3">
                <img
                  src={pf_white}
                  alt="react logo"
                  style={{ width: "30px", height: "40px" }}
                />
                <div className="ml-2 text-white text-xl">Profile</div>
              </div>
            </Link>
          ) : (
            <Link to={`/profile/${id}`}>
              <div className="ml-6 flex items-center px-3 py-3 rounded-xl hover:bg-blue-200">
                <img
                  src={pf_black}
                  alt="react logo"
                  style={{ width: "30px", height: "40px" }}
                />
                <div className="ml-2 text-xl">Profile</div>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="ml-8 mb-4">
        <div className="flex items-center">
          <img
            src={help}
            alt="react logo"
            style={{ width: "20px", height: "20px" }}
          />
          <div className="ml-2 hover:text-[#2135D9] text-lg">
            <Link to="/help">Help</Link>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={lo}
            alt="react logo"
            style={{ width: "20px", height: "20px" }}
          />
          <div className="ml-2 hover:text-[#2135D9] text-lg">
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
