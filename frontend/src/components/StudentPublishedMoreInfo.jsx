import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export const StudentPublishedMoreInfo = ({ eventId, placesLeft }) => {
  const navigate = useNavigate();

  const joinEvent = () => {
    axiosInstance
      .post(`/student/join_event/${eventId}`, {})
      .then((res) => {
        navigate("/student/dashboard");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-5 flex justify-evenly items-center">
      <button
        className="px-20 rounded-full bg-[#2EA0FB] hover:bg-[#2135D9] py-3 text-white text-xl"
        onClick={() => joinEvent()}
      >
        Join Now
      </button>
      <div className="text-3xl font-semibold">{placesLeft} places left!</div>
    </div>
  );
};
