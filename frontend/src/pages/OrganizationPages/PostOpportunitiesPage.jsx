import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { CreationModal } from "../../components/CreationModal";

import CalendarIcon from "../../../Bridgy_Assets/icon/calender blue.svg";
import LocationIcon from "../../../Bridgy_Assets/icon/location blue.svg";
import ClockIcon from "../../../Bridgy_Assets/icon/clock blue.svg";
import TimeIcon from "../../../Bridgy_Assets/icon/timeplap blue.svg";

export const PostOpportunitiesPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [supervisorContact, setSupervisorContact] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [file, setFile] = useState(null);
  const [hours, setHours] = useState(0);
  const [time, setTime] = useState(new Date());
  const [capacity, setCapacity] = useState(0);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [creationModal, setCreationModal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setCreationModal(true);

    const formData = new FormData();
    formData.append("photoUrl", file);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("remote", isRemote);
    formData.append("hours", hours);
    formData.append("time", time);
    formData.append("capacity", capacity);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("supervisorContact", supervisorContact);

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/organization/create_event`,
        formData,
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
        setSupervisorContact("");
        setIsRemote("false");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-full m-5 bg-gray-100">
      <div className="flex flex-col">
        <div className="bg-white p-5 rounded-3xl">
          <h1 className="text-3xl font-semibold">Create New Opportunity</h1>
          <div className="">
            <form onSubmit={submitHandler}>
              <div className="flex">
                <div className="flex-1">
                  <div className="my-6">
                    <label>
                      <p className="text-xl">Name</p>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name..."
                        className="my-2 rounded-lg p-2 border-2 border-gray-400"
                        style={{ width: "30rem" }}
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
                        className="my-2 rounded-lg p-2 border-2 border-gray-400"
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ width: "30rem" }}
                      />
                    </label>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="my-6">
                    <label>
                      <p className="text-xl">Supervisor Contact</p>
                      <input
                        type="text"
                        value={supervisorContact}
                        onChange={(e) => setSupervisorContact(e.target.value)}
                        placeholder="Contact..."
                        className="my-2 rounded-lg p-2 border-2 border-gray-400"
                        style={{ width: "30rem" }}
                      />
                    </label>
                  </div>
                  <div className="my-6">
                    <label className="flex">
                      <p className="text-xl">Is the event remote?</p>
                      <input
                        className="m-2"
                        type="checkbox"
                        defaultChecked={isRemote}
                        onChange={(e) => setIsRemote(!isRemote)}
                      />
                    </label>
                  </div>

                  <div className="my-6">
                    <label className="flex">
                      <p className="text-xl">Cover Image*</p>
                      <input
                        className="m-2"
                        type="file"
                        value={""}
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex my-6">
                <div className="w-full">
                  <label>
                    <div className="flex">
                      <img className="my-auto" src={TimeIcon} />
                      <p className="my-auto text-xl">Number of students</p>
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

              {isRemote ? (
                <></>
              ) : (
                <div>
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
                </div>
              )}
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
      {creationModal ? (
        <CreationModal setCreationModal={setCreationModal} type={"Event"} />
      ) : null}
    </div>
  );
};
