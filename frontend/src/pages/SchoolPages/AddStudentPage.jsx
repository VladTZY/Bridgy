import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { AddMultipleStudents } from "../../components/AddMultipleStudents";
import { CreationModal } from "../../components/CreationModal";
import { ErrorModal } from "../../components/ErrorModal";

export const AddStudentPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [grade, setGrade] = useState(9);
  const [creationModal, setCreationModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const validate = () => {
    if (
      username == "" ||
      email == "" ||
      phoneNumber == "" ||
      country == "" ||
      city == "" ||
      grade == 0
    )
      return false;
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (validate()) {
      setCreationModal(true);
      setErrorModal(false);
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/school/create_one_student`,
          { username, email, phoneNumber, country, city, grade },
          { withCredentials: true }
        )
        .then((res) => {
          setUsername("");
          setEmail("");
          setPhoneNumber("");
          setCountry("");
          setCity("");
          setGrade(9);
        })
        .catch((error) => console.log(error.message));
    } else {
      setCreationModal(false);
      setErrorModal(true);
    }
  };

  return (
    <>
      <div className="m-5 p-5 rounded-3xl bg-white ">
        <h1 className="text-3xl pl-5 pt-2 font-semibold">Add One Student</h1>
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
              <p className="text-xl">Grade</p>
              <input
                type="number"
                max={12}
                min={9}
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Grade..."
                className="my-2 rounded-lg w-1/3 p-2 border-2 border-gray-400"
              />
            </label>
            <label className="my-6">
              <p className="text-xl">Phone Number</p>
              <input
                type="number"
                placeholder="Phone number..."
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="my-2 rounded-lg w-1/3 p-2 border-2 border-gray-400"
              />
            </label>
            <label className="my-6">
              <p className="text-xl">Country</p>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country..."
                className="my-2 rounded-lg w-1/3 p-2 border-2 border-gray-400"
              />
            </label>
            <label className="my-6">
              <p className="text-xl">City</p>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City..."
                className="my-2 rounded-lg w-1/3 p-2 border-2 border-gray-400"
              />
            </label>

            <div className="self-center">
              <button
                className="mt-10 text-white bg-[#2EA0FB] hover:bg-[#2135D9] rounded-full px-20 py-4 text-xl"
                type="submit"
              >
                Add student
              </button>
            </div>
          </form>
        </div>
      </div>

      <AddMultipleStudents />

      {creationModal ? (
        <CreationModal setCreationModal={setCreationModal} type={"Student"} />
      ) : null}
      {errorModal ? <ErrorModal setErrorModal={setErrorModal} /> : null}
    </>
  );
};
