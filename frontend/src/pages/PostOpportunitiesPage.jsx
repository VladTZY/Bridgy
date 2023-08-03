import { useState, useEffect } from "react"
import axios from "axios"

export const PostOpportunitiesPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState(0);
  const [status, setStatus] = useState("");
  const [time, setTime] = useState(new Date());
  const [capacity, setCapacity] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4004/api/organization/create_event", {
      headers: {
        'Authorization': `BEARER ${jwt}`
      },
      name : {name},
      description : {description},
      hours : {hours},
      status : {status},
      time : {time},
      capacity : {capacity},
    }).then((res) => {
      setName("");
      setDescription("");
      setHours(0);
      setStatus("");
      setTime(new Date());
      setCapacity(0);
    })
  };

  return (
    <div className = "text-center align-middle">
      <h1>Create New Opportunity</h1>
      <form onSubmit={submitHandler}>
        <label>
          <p>Title</p>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <p>Number of hours</p>
          <input type="number" onChange={(e) => setHours(e.target.value)} />
        </label>
        <label>
          <p>Status</p>
          <input type="text" onChange={(e) => setStatus(e.target.value)} />
        </label>
        <label>
          <p>Date and time</p>
          <input type="datetime-local" onChange={(e) => setTime(e.target.value)} />
        </label>
        <label>
          <p>Capacity</p>
          <input type="text" onChange={(e) => setCapacity(e.target.value)} />
        </label>
        <label>
          <p>Description</p>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </label>
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}