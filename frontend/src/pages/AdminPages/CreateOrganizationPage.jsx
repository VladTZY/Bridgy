import { useState } from "react";
import axios from "axios";
import { CreationModal } from "../../components/CreationModal";
import { ErrorModal } from "../../components/ErrorModal";

export const CreateOrganizationPage = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationEmail, setOrganizationEmail] = useState("");
  const [organizationPhoneNumber, setOrganizationPhoneNumber] = useState("");
  const [organizationCountry, setOrganizationCountry] = useState("");
  const [organizationCity, setOrganizationCity] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [creationModal, setCreationModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const validate = () => {
    if (
      organizationName == "" ||
      organizationEmail == "" ||
      organizationPhoneNumber == "" ||
      organizationCountry == "" ||
      organizationCity == "" ||
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
          `${import.meta.env.VITE_API_URL}/admin/create_organization`,
          {
            organizationName,
            organizationEmail,
            organizationPhoneNumber,
            organizationCity,
            organizationCountry,
            username,
            email,
            phoneNumber,
          },
          { withCredentials: true }
        )
        .then((res) => {
          setOrganizationName("");
          setOrganizationEmail("");
          setOrganizationPhoneNumber("");
          setOrganizationCountry("");
          setOrganizationCity("");
          setUsername("");
          setEmail("");
          setPhoneNumber("");
        })
        .catch((error) => console.log(error));
    } else {
      setErrorModal(true);
      setCreationModal(false);
    }
  };

  return (
    <div className="h-full bg-gray-100 ml-[15vw] px-4 pb-10">
      <div className="flex flex-col ">
        <div className="px-2 pt-6 bg-white rounded-xl">
          <h1 className=" text-2xl lg:text-3xl font-semibold px-5 mb-4 text-center">
            Create organization
          </h1>
          <form onSubmit={submitHandler}>
            <div className="p-2">
              <input
                type="text"
                placeholder="Organization name"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <div className="p-2">
              <input
                type="text"
                placeholder="Organization Email"
                value={organizationEmail}
                onChange={(e) => setOrganizationEmail(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <div className="p-2">
              <input
                type="text"
                placeholder="Organization Phone Number"
                value={organizationPhoneNumber}
                onChange={(e) => setOrganizationPhoneNumber(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <div className="p-2">
              <input
                type="text"
                placeholder="Organization Country of origin"
                value={organizationCountry}
                onChange={(e) => setOrganizationCountry(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl w-full py-4 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-[#2EA0FB]"
              />
            </div>

            <div className="p-2">
              <input
                type="text"
                placeholder="Organization City of origin"
                value={organizationCity}
                onChange={(e) => setOrganizationCity(e.target.value)}
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
              className="bg-[#2EA0FB] text-white text-l py-2 px-5 rounded-xl m-5 hover:bg-[#2135D9]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {creationModal ? (
        <CreationModal
          setCreationModal={setCreationModal}
          type={"Organization"}
        />
      ) : null}
      {errorModal ? <ErrorModal setErrorModal={setErrorModal} /> : null}
    </div>
  );
};
