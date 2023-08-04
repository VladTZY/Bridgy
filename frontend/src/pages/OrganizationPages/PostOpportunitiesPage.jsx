import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const PostOpportunitiesPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState(0);
  const [time, setTime] = useState(new Date());
  const [capacity, setCapacity] = useState(0);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:4004/api/organization/create_event",
        { name, description, hours, time, capacity, country, city },
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
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="text-center align-middle bg-cyan-500">
      <h1>Create New Opportunity</h1>
      <form onSubmit={submitHandler}>
        <label>
          <p>Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <p>Description</p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <p>Number of hours</p>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </label>
        <label>
          <p>Date and time</p>
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label>
          <p>Capacity</p>
          <input
            type="text"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </label>
        <label>
          <p>Country</p>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label>
          <p>City</p>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <div>
          <button className="bg-white mt-5" type="submit">
            Create event
          </button>
        </div>
      </form>
    </div>
  );
};
