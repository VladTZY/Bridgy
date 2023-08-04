import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";

export const AddStudent = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:4004/api/school/create_one_student",
        { username, email, phoneNumber },
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => {
        setUsername("");
        setEmail("");
        setPhoneNumber("");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="text-center align-middle bg-cyan-500">
      <h1>Add one student</h1>
      <form onSubmit={submitHandler}>
        <label>
          <p>Name</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Phone Number</p>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <div>
          <button className="bg-white mt-5" type="submit">
            Add student
          </button>
        </div>
      </form>
    </div>
  );
};
