import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";

export const OportunityPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const { id } = useParams();
  const [event, setEvent] = useState({
    name: "",
    description: "",
    hours: null,
    time: new Date(),
    capacity: 0,
    country: "",
    city: "",
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4004/api/events/id?id=${id}`, {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => {
        setEvent(res.data);
      })
      .catch((error) => console.log(error));
  }, [id, jwt]);

  return (
    <div>
      <h1>{id}</h1> <h1>{event.name}</h1> <h1>{event.description}</h1>
    </div>
  );
};
