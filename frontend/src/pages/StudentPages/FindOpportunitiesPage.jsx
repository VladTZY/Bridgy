import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";

export const FindOpportunitiesPage = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/events/by_status?status=PUBLISHED&offset=${page - 1}&pageSize=6`,
        { withCredentials: true }
      )
      .then((res) => {
        setEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handleChangePage = (val) => {
    if (val == -1 && page + val >= 1) setPage(page + val);

    if (val == 1 && events.length > 6) setPage(page + val);
  };

  return (
    <div className="min-h-full bg-gray-100 flex flex-col ml-[15vw] px-6 pt-6">
      <SearchBar />
      <h1 className="text-2xl font-bold  my-7">
        Published Opportunities
      </h1>

      <div className=" flex flex-wrap justify-center items-center overflow-x-scroll ">
        {events.slice(0, 6).map((event) => {
          return (
            <Card
              key={event.id}
              id={event.id}
              title={event.name}
              description={event.description}
              time={event.time}
              location={event.location.city}
              duration={event.hours}
              event_type={"opportunity"}
              photoUrl={
                event.photoUrl == "NO_FILE"
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
        {page > 1 ? (
          <button
            className="bg-[#2EA0FB] rounded-xl text-white py-1 px-4"
            onClick={() => handleChangePage(-1)}
          >
            Previous Page
          </button>
        ) : (
          <button className="bg-[#c8d2da] rounded-xl text-white py-1 px-4">
            Previous Page
          </button>
        )}

        {events.length >= 6 && (
          <button
            className="bg-[#2EA0FB] rounded-xl text-white py-1 px-4"
            onClick={() => handleChangePage(1)}
          >
            Next Page
          </button>
        )}
      </div>
    </div>
  );
};
