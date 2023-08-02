import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const role = useSelector((state) => state.auth.role);

  return (
    <div className="flex gap-10 items-center bg-cyan-500">
      <div>
        <div><Link to="/">Bridgy</Link></div>
      </div>

      {role != '' ? 
      <div className="flex gap-10 items-center bg-cyan-500">    
        {
          { 
            STUDENT:
               <div className="flex gap-10 items-center bg-cyan-500">
                <div><Link to="/student/dashboard">Dashboard</Link></div>
                <div><Link to="/student/find_opportunities"> Find Opportunities</Link></div>
                <div><Link to="/student/find_group"> Find a Group</Link></div>
              </div>,
            ORGANIZATION:
            <div className="flex gap-10 items-center bg-cyan-500">
              <div><Link to="/organization/my_opportunities">My Opportunities</Link></div>
              <div><Link to="/organization/post_opportunity">Post an Opportunity</Link></div>
            </div>,
            SCHOOL:
            <div className="flex gap-10 items-center bg-cyan-500">
              <div><Link to="/school/my_students">My Students</Link></div>
              <div><Link to="/school/notifications">Notifications</Link></div>
            </div>,
          }[role]
        }
        <div><Link to="/profile/?????">Profile</Link></div>
      </div>
: <div><Link to="/login">Login</Link></div>}

    </div>
  );
};
