import { useSelector } from "react-redux";

export const Navbar = () => {
  const role = useSelector((state) => state.auth.role);

  return (
    <div>
      <h1>Bridgy</h1>

      {
        {
          STUDENT: <h1>Student ok</h1>,
          ORGANIZATION: <h1>ORGANIZATION OK</h1>,
          SCHOOL: <h1>School ok</h1>,
        }[role]
      }

      <h1>profile</h1>
    </div>
  );
};
