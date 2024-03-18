import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";
import DefaultImage from "../../../Bridgy_Assets/Images/Missions/defaultMission.png";

export const FindOpportunitiesPage = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/events/by_status?status=PUBLISHED&offset=${page - 1}&pageSize=8`,
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
    if (val == -1 && page + val > 0) setPage(page + val);

    if (val == 1 && events.length > 8) setPage(page + val);
  };

  return (
    <div className="min-h-full bg-gray-100 flex flex-col ml-[15vw] px-3 pt-6">
      <SearchBar />
      <h1 className="text-2xl font-bold  my-7">Published Opportunities</h1>

      <div className="mx-2 flex flex-wrap overflow-x-scroll no-scrollbar space-x-2 space-y-4">
        {events.slice(0, 8).map((event) => {
          return (
            <Card
              key={event.id}
              id={event.id}
              title={event.name}
              description={event.description}
              time={event.time}
              location={event.location}
              duration={event.hours}
              event_type={"opportunity"}
              photoUrl={
                event.photoUrl == "NO_FILE"
                  ? DefaultImage
                  : `${import.meta.env.VITE_MISSIONS_BUCKET_URL}${
                      event.photoUrl
                    }`
              }
            />
          );
        })}
      </div>

      <div className="flex justify-end mx-5 space-x-6 pb-6">
        {page > 1 ? (
          <button
            className="bg-white hover:bg-[#2EA0FB] rounded-xl border-2 text-black hover:text-white shadow-md hover:shadow-2xl py-2 px-5 mt-4"
            onClick={() => handleChangePage(-1)}
          >
            Previous Page
          </button>
        ) : (
          <div className="bg-inherit text-transparent py-2 px-5 mt-4">
            Previous Page
          </div>
        )}
        {events.length > 8 ? (
          <button
            className="bg-white hover:bg-[#2EA0FB] rounded-xl border-2 text-black hover:text-white shadow-md hover:shadow-2xl py-2 px-5 mt-4"
            onClick={() => handleChangePage(1)}
          >
            Next Page
          </button>
        ) : (
          <div className="bg-inherit text-transparent py-2 px-5 mt-4">
            Next Page
          </div>
        )}
      </div>
    </div>
  );
};
