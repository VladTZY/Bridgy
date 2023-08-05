import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { StudentOportunity } from "../../components/StudentOportunity";
import { OrganizationAdminOportunity } from "../../components/OrganizationAdminOportunity";

export const OportunityPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const role = useSelector((state) => state.auth.role);
  const userId = useSelector((state) => state.auth.id);
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

  const isAdmin = (role, userId, eventId) => {
    return false;
  };

  return (
    <div>
      <h1>id: {id}</h1> <h1>{event.name}</h1> <h1>{event.description}</h1>
      {role == "STUDENT" ? (
        <StudentOportunity jwt={jwt} eventId={id} />
      ) : isAdmin(role, userId, id) ? (
        <OrganizationAdminOportunity />
      ) : (
        <div></div>
      )}
    </div>
  );
};
