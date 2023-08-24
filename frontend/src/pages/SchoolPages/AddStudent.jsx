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
    <div className="m-5 p-5 rounded-3xl bg-white">
      <h1 className="text-3xl font-semibold">Add One Student</h1>
      <div className="m-5">
        <form onSubmit={submitHandler}>
          <label className="my-6">
            <p className="text-xl">Name</p>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="my-2 rounded-lg w-1/3 p-2 border-2 border-gray-400"
            placeholder="Name..."
          />
        </label>
        <label className="my-6">
          <p className="text-xl">Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
            className="my-2 rounded-lg w-1/3 p-2 border-2 border-gray-400"
          />
        </label>
        <label className="my-6">
          <p className="text-xl">Phone Number</p>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="my-2 rounded-lg w-1/3 p-2 border-2 border-gray-400"
          />
        </label>
        <div className="self-center">
          <button className="mt-10 text-white bg-[#2EA0FB] hover:bg-[#2135D9] rounded-full px-20 py-4 text-xl" type="submit">
            Add student
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};
