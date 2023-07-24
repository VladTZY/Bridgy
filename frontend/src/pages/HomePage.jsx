import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      HomePage <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
};
