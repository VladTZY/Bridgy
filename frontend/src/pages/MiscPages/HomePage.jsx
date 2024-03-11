import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div className="col-span-10 row-span-6 col-start-3 row-start-2 h-full bg-gray-100 flex flex-col">
      HomePage <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
};
