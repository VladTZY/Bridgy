import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Card } from "../../components/Card";
import pic from "../../../Bridgy_Assets/Images/Webpage/What we do 01.png";

import { SearchBar } from "../../components/SearchBar";

export const FindOpportunitiesPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [type, setType] = useState("PUBLISHED");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4004/api/events/by_status?status=${type}`, {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => {
        setEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [type]);

  return (
    <div className="min-h-full bg-gray-100 flex flex-col">
      <SearchBar />
      <h1 className="text-4xl font-semibold m-10">Published Opportunities</h1>

      <div className="mx-6 flex flex-wrap">
        {events.map((event) => {
          return (
            <Card
              key={event.id}
              id={event.id}
              title={event.name}
              description={event.description}
              date={event.time}
              location={event.location}
              duration={event.hours}
              event_type={"opportunity"}
              pic={pic}
            />
          );
        })}
      </div>
    </div>
  );
};
