import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { CreationModal } from "../../components/CreationModal";
import { ErrorModal } from "../../components/ErrorModal";

export const CreateSchoolPage = () => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [schoolPhoneNumber, setSchoolPhoneNumber] = useState("");
  const [schoolCountry, setSchoolCountry] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [creationModal, setCreationModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const validate = () => {
    if (
      schoolName == "" ||
      schoolEmail == "" ||
      schoolPhoneNumber == "" ||
      schoolCountry == "" ||
      schoolCity == "" ||
      username == "" ||
      email == "" ||
      phoneNumber == ""
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
          `${import.meta.env.VITE_API_URL}/admin/create_school`,
          {
            schoolName,
            schoolEmail,
            schoolPhoneNumber,
            schoolCity,
            schoolCountry,
            username,
            email,
            phoneNumber,
          },
          { withCredentials: true }
        )
        .then((res) => {
          setSchoolName("");
          setSchoolEmail("");
          setSchoolPhoneNumber("");
          setSchoolCountry("");
          setSchoolCity("");
          setUsername("");
          setEmail("");
          setPhoneNumber("");
        })
        .catch((error) => console.log(error.message));
    } else {
      setCreationModal(false);
      setErrorModal(true);
    }
  };

  return (
    <div className="h-full bg-gray-100 ml-[15vw] px-4 pb-10">
      <div className="flex flex-col">
        <div className="p-5 bg-white rounded-xl">
          <h1 className="text-2xl lg:text-3xl font-semibold px-5 mb-4 text-center">Create school</h1>
          <form onSubmit={submitHandler}>
            <div className="p-2">
              <input
                type="text"
                placeholder="School name"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <div className="p-2">
              <input
                type="text"
                placeholder="School Email"
                value={schoolEmail}
                onChange={(e) => setSchoolEmail(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <div className="p-2">
              <input
                type="text"
                placeholder="School Phone Number"
                value={schoolPhoneNumber}
                onChange={(e) => setSchoolPhoneNumber(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <div className="p-2">
              <input
                type="text"
                placeholder="School Country of origin"
                value={schoolCountry}
                onChange={(e) => setSchoolCountry(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <div className="p-2">
              <input
                type="text"
                placeholder="School City of origin"
                value={schoolCity}
                onChange={(e) => setSchoolCity(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <div className="p-2">
              <input
                type="text"
                placeholder="Account username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <div className="p-2">
              <input
                type="text"
                placeholder="Account email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <div className="p-2">
              <input
                type="text"
                placeholder="Account phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#2EA0FB] text-white text-ll py-2 px-5 rounded-xl m-5 hover:bg-[#2135D9]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {creationModal ? (
        <CreationModal setCreationModal={setCreationModal} type={"School"} />
      ) : null}
      {errorModal ? <ErrorModal setErrorModal={setErrorModal} /> : null}
    </div>
  );
};
