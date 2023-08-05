import axios from "axios";
import { useNavigate } from "react-router-dom";

export const StudentOportunity = ({ jwt, eventId }) => {
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
        navigate("/student");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={() => joinEvent()}>Join Event</button>
    </div>
  );
};
