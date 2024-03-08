import { useState } from "react";
import axios from "axios";

import CalendarIcon from "../../../Bridgy_Assets/icon/calender blue.svg";
import LocationIcon from "../../../Bridgy_Assets/icon/location blue.svg";
import ClockIcon from "../../../Bridgy_Assets/icon/clock blue.svg";
import TimeIcon from "../../../Bridgy_Assets/icon/timeplap blue.svg";

export const AddPreviousEventsPage = () => {
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

  const submitHandler = (e) => {
    e.preventDefault();

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
        { withCredentials: true }
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
    <div className="h-full p-3 bg-gray-100 flex flex-col ml-[15vw]">
      <div className="bg-white p-5 rounded-3xl">
        <h1 className="text-2xl font-bold">Add a previous event</h1>
        <div className="">
          <form onSubmit={submitHandler}>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <div className="my-6">
                  <label>
                    <p className="text-l">Name</p>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name..."
                      className="my-2 rounded-lg p-2 border border-gray-400 w-[100%] lg:w-[30rem]"
                    />
                  </label>
                </div>

                <div className="my-6">
                  <label>
                    <p className="text-l">Description</p>
                    <textarea
                      type="text"
                      value={description}
                      placeholder="Description..."
                      className="my-2 rounded-lg p-2 border border-gray-400 w-[100%] lg:w-[30rem]"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <div className="my-6">
                  <label>
                    <p className="text-l">Supervisor Contact</p>
                    <input
                      type="text"
                      value={supervisorContact}
                      onChange={(e) => setSupervisorContact(e.target.value)}
                      placeholder="Contact..."
                      className="my-2 rounded-lg p-2 border border-gray-400 w-[100%] lg:w-[30rem]"
                    />
                  </label>
                </div>
                <div className="my-6">
                  <label className="flex">
                    <p className="text-l">Is the event remote?</p>
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
                    <p className="text-l">Cover Image*</p>
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

            <div className="flex flex-col lg:flex-row my-6">
              <div className="w-full">
                <label>
                  <div className="flex">
                    <img className="my-auto w-[5%]" src={TimeIcon} />
                    <p className="my-auto text-l">Capacity</p>
                  </div>
                  <input
                    type="number"
                    value={capacity}
                    className="my-2 rounded-lg w-full p-2 border border-gray-400"
                    onChange={(e) => setCapacity(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-full lg:mx-8">
                <label>
                  <div className="flex">
                    <img className="my-auto w-[5%]" src={ClockIcon} />
                    <p className="my-auto text-l">Required hours</p>
                  </div>
                  <input
                    type="number"
                    value={hours}
                    className="my-2 rounded-lg w-full p-2 border border-gray-400"
                    onChange={(e) => setHours(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-full">
                <label>
                  <div className="flex">
                    <img className="my-auto w-[5%]" src={CalendarIcon} />
                    <p className="my-auto text-l">Date and time</p>
                  </div>
                  <input
                    type="datetime-local"
                    value={time}
                    className="my-2 rounded-lg w-full p-2 border border-gray-400"
                    onChange={(e) => setTime(e.target.value)}
                  />
                </label>
              </div>
            </div>

            {isRemote ? (
              <></>
            ) : (
              <div>
                <div className="flex flex-col lg:flex-row my-6">
                  <div className="w-full">
                    <label>
                      <div className="flex">
                        <img className="my-auto w-[5%]" src={LocationIcon} />
                        <p className="my-auto text-l">Country</p>
                      </div>
                      <input
                        type="text"
                        value={country}
                        className="my-2 rounded-lg w-full p-2 border border-gray-400"
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="w-full lg:mx-6">
                    <label>
                      <div className="flex">
                        <img className="my-auto w-[5%]" src={LocationIcon} />
                        <p className="my-auto text-l">City</p>
                      </div>
                      <input
                        type="text"
                        value={city}
                        className="my-2 rounded-lg w-full p-2 border border-gray-400"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="w-full">
                    <label>
                      <div className="flex">
                        <img className="my-auto w-[5%]" src={LocationIcon} />
                        <p className="my-auto text-l">Address</p>
                      </div>
                      <input
                        type="text"
                        value={address}
                        className="my-2 rounded-lg w-full p-2 border border-gray-400"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}
            <div>
              <button
                className="bg-[#2EA0FB] text-white mt-5 py-2 px-4 rounded-[50px] hover:bg-[#2135D9]"
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
