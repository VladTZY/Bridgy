import { useSelector } from "react-redux";

export const Navbar = () => {
  const role = useSelector((state) => state.auth.role);

  return (
    <div className="flex gap-10 items-center bg-cyan-500">
      <div>
        <h1>Bridgy</h1>
      </div>

      <div>    
        {
          { 
            STUDENT:
               <div className="flex gap-10 items-center bg-cyan-500">
                <div><h1>Dashboard</h1></div>
                <div><h1> Find Opportunities</h1></div>
                <div><h1> Find a Group</h1></div>
              </div>,
            ORGANIZATION:
            <div className="flex gap-10 items-center bg-cyan-500">
              <div><h1>My Opportunities</h1></div>
              <div><h1>Post an Opportunity</h1></div>
            </div>,
            SCHOOL:
            <div className="flex gap-10 items-center bg-cyan-500">
              <div><h1>My Students</h1></div>
              <div><h1>Notifications</h1></div>
            </div>,
          }[role]
        }
      </div>

      <div>
         <h1>profile</h1>
      </div>
    </div>
  );
};
