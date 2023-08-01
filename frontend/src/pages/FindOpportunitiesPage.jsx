import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Card } from "../components/Card";

export const FindOpportunitiesPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [type, setType] = useState("PUBLISHED");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4004/api/events/by_status?status=${type}`, {
      headers: {
        'Authorization': `BEARER ${jwt}`
      }
    }).then(res => {
      setEvents(res.data);
    }).catch((error) => {
      console.log(error)
    })
  }, [type])

  return (
    <div>
    {events.map((event) => {
      return <Card name={event.name} description={event.description}/>
    })}
    </div>
  );
}