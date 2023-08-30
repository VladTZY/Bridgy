import axios from "axios";
import { useNavigate } from "react-router-dom";

export const StudentMoreInfo = ({ jwt, eventId }) => {
  const navigate = useNavigate();

  const joinEvent = () => {
    axios
      .post(
        `http://localhost:4004/api/student/join_event/${eventId}`,
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
    <div className="mt-10">
      <button
        className="w-[30%] rounded-full bg-[#2EA0FB] hover:bg-[#2135D9] py-5 text-white text-xl"
        onClick={() => joinEvent()}
      >
        Join Now
      </button>
    </div>
  );
};
