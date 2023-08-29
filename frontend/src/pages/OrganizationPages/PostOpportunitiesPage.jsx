import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";

import CalendarIcon from "../../../Bridgy_Assets/icon/calender blue.svg";
import LocationIcon from "../../../Bridgy_Assets/icon/location blue.svg";
import ClockIcon from "../../../Bridgy_Assets/icon/clock blue.svg";
import TimeIcon from "../../../Bridgy_Assets/icon/timeplap blue.svg";

export const PostOpportunitiesPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [hours, setHours] = useState(0);
  const [time, setTime] = useState(new Date());
  const [capacity, setCapacity] = useState(0);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:4004/api/organization/create_event",
        {
          name,
          description,
          remote: isRemote,
          hours,
          time,
          capacity,
          country,
          city,
          address,
        },
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => {
        setName("");
        setDescription("");
        setHours(0);
        setTime(new Date());
        setCapacity(0);
        setCountry("");
        setCity("");
        setAddress("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-full bg-gray-100 flex flex-col">
      <div className="bg-white m-5 p-5 rounded-3xl">
        <h1 className="text-3xl font-semibold">Create New Opportunity</h1>
        <div className="m-5">
          <form onSubmit={submitHandler}>
            <div className="my-6">
              <label>
                <p className="text-xl">Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name..."
                  className="my-2 rounded-lg w-1/3 p-2 border-2 border-gray-400"
                />
              </label>
            </div>

            <div className="my-6">
              <label>
                <p className="text-xl">Description</p>
                <textarea
                  type="text"
                  value={description}
                  placeholder="Description..."
                  className="my-2 rounded-lg w-1/3 p-2 border-2 border-gray-400"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>

            <div className="my-6">
              <label className="flex">
                <p className="text-xl">Is the event remote?</p>
                <input
                  className="m-2"
                  type="checkbox"
                  value={isRemote}
                  onChange={(e) => setIsRemote(e.target.value)}
                />
              </label>
            </div>

            <div className="flex my-6">
              <div className="w-full">
                <label>
                  <div className="flex">
                    <img className="my-auto" src={TimeIcon} />
                    <p className="my-auto text-xl">Capacity</p>
                  </div>
                  <input
                    type="number"
                    value={capacity}
                    className="my-2 rounded-lg w-full p-2 border-2 border-gray-400"
                    onChange={(e) => setCapacity(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-full mx-8">
                <label>
                  <div className="flex">
                    <img className="my-auto" src={ClockIcon} />
                    <p className="my-auto text-xl">Required hours</p>
                  </div>
                  <input
                    type="number"
                    value={hours}
                    className="my-2 rounded-lg w-full p-2 border-2 border-gray-400"
                    onChange={(e) => setHours(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-full">
                <label>
                  <div className="flex">
                    <img className="my-auto" src={CalendarIcon} />
                    <p className="my-auto text-xl">Date and time</p>
                  </div>
                  <input
                    type="datetime-local"
                    value={time}
                    className="my-2 rounded-lg w-full p-2 border-2 border-gray-400"
                    onChange={(e) => setTime(e.target.value)}
                  />
                </label>
              </div>
            </div>

            <div className="flex my-6">
              <div className="w-full">
                <label>
                  <div className="flex">
                    <img className="my-auto" src={LocationIcon} />
                    <p className="my-auto text-xl">Country</p>
                  </div>
                  <input
                    type="text"
                    value={country}
                    className="my-2 rounded-lg w-full p-2 border-2 border-gray-400"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-full mx-6">
                <label>
                  <div className="flex">
                    <img className="my-auto" src={LocationIcon} />
                    <p className="my-auto text-xl">City</p>
                  </div>
                  <input
                    type="text"
                    value={city}
                    className="my-2 rounded-lg w-full p-2 border-2 border-gray-400"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-full">
                <label>
                  <div className="flex">
                    <img className="my-auto" src={LocationIcon} />
                    <p className="my-auto text-xl">Address</p>
                  </div>
                  <input
                    type="text"
                    value={address}
                    className="my-2 rounded-lg w-full p-2 border-2 border-gray-400"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>
              </div>
            </div>

            <div>
              <button
                className="bg-[#2EA0FB] text-white mt-5 py-4 px-10 rounded-[50px] hover:bg-[#2135D9]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
