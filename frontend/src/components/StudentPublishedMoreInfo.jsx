import axios from "axios";
import { useNavigate } from "react-router-dom";

export const StudentPublishedMoreInfo = ({ jwt, eventId }) => {
  const navigate = useNavigate();

  const joinEvent = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/student/join_event/${eventId}`,
        {},
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => {
        navigate("/student/dashboard");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-5 flex justify-evenly items-center">
      <button
        className="px-40 rounded-full bg-[#2EA0FB] hover:bg-[#2135D9] py-5 text-white text-3xl"
        onClick={() => joinEvent()}
      >
        Join Now
      </button>
      <div className="text-3xl font-semibold">32 places left!</div>
    </div>
  );
};
