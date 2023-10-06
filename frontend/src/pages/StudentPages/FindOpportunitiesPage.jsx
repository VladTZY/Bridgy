import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Card } from "../../components/Card";

import { SearchBar } from "../../components/SearchBar";

export const FindOpportunitiesPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [type, setType] = useState("PUBLISHED");
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/events/by_status?status=${type}&offset=${page - 1}&pageSize=6`,
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => {
        setEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [type, page]);

  const handleChangePage = (val) => {
    if (val == -1) if (page + val > 0) setPage(page - 1);
    if (val == 1) if (events.length == 6) setPage(page + 1);
  };

  return (
    <div className="min-h-full bg-gray-100 flex flex-col">
      <SearchBar />
      <h1 className="text-4xl font-semibold mx-5 my-7">
        Published Opportunities
      </h1>

      <div className="mx-2 flex flex-wrap">
        {events.map((event) => {
          return (
            <Card
              key={event.id}
              id={event.id}
              title={event.name}
              description={event.description}
              date={event.time}
              location={event.location.city}
              duration={event.hours}
              event_type={"opportunity"}
              photoUrl={
                event.photoUrl == null
                  ? "../../Bridgy_Assets/Images/Webpage/What we do 01.png"
                  : `${import.meta.env.VITE_UPLOAD_URL}/uploads/${
                      event.photoUrl
                    }`
              }
            />
          );
        })}
      </div>

      <div className="flex justify-between  mx-5 my-7">
        <button
          className="bg-[#2EA0FB] rounded-xl text-white py-2 px-5"
          onClick={() => handleChangePage(-1)}
        >
          Previous Page
        </button>
        <button
          className="bg-[#2EA0FB] rounded-xl text-white py-2 px-5"
          onClick={() => handleChangePage(1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};
