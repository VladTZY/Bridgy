import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { CreationModal } from "../../components/CreationModal";
import { ErrorModal } from "../../components/ErrorModal";

import CalendarIcon from "../../../Bridgy_Assets/icon/calender blue.svg";
import LocationIcon from "../../../Bridgy_Assets/icon/location blue.svg";
import ClockIcon from "../../../Bridgy_Assets/icon/clock blue.svg";
import TimeIcon from "../../../Bridgy_Assets/icon/timeplap blue.svg";

export const PostOpportunitiesPage = () => {
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
  const [errorModal, setErrorModal] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [supervisorContactError, setSupervisorContactError] = useState(false);
  const [hoursError, setHoursError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [capacityError, setCapacityError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [initialDate, setInitialDate] = useState(time);

  const fileRef = useRef();

  const errorSetter = (e, nil, setE) => {
    if (e == nil) setE(true);
  };

  useEffect(() => {
    if (file === null) {
      fileRef.current.value = "";
    } else {
      fileRef.current.files = file;
    }
  }, [file]);

  const validate = () => {
    if (
      name == "" ||
      description == "" ||
      supervisorContact == "" ||
      capacity == 0 ||
      hours == 0 ||
      time == initialDate ||
      (!isRemote && (country == "" || city == "" || address == ""))
    )
      return false;
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (file != null) formData.append("photoUrl", file[0]);

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

    if (validate()) {
      setCreationModal(true);
      //setErrorModal(false);
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
          setIsRemote(false);
          setNameError(false);
          setDescriptionError(false);
          setHoursError(false);
          setTimeError(false);
          setCapacityError(false);
          setCountryError(false);
          setCityError(false);
          setAddressError(false);
          setSupervisorContact(false);
        })
        .catch((error) => console.log(error));
    } else {
      setCreationModal(false);
      errorSetter(name, "", setNameError);
      errorSetter(description, "", setDescriptionError);
      errorSetter(supervisorContact, "", setSupervisorContactError);
      errorSetter(hours, 0, setHoursError);
      errorSetter(capacity, 0, setCapacityError);
      errorSetter(time, initialDate, setTimeError);
      if (!isRemote) {
        errorSetter(country, "", setCountryError);
        errorSetter(city, "", setCityError);
        errorSetter(address, "", setAddressError);
      }
      //setErrorModal(true);
    }
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
                        onChange={(e) => {
                          setName(e.target.value);
                          setNameError(false);
                        }}
                        placeholder="Name..."
                        className={`${
                          nameError ? "border-red-500" : "border-gray-400"
                        } my-2 rounded-lg p-2 border-2`}
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
                        className={`${
                          descriptionError
                            ? "border-red-500"
                            : "border-gray-400"
                        } my-2 rounded-lg p-2 border-2`}
                        onChange={(e) => {
                          setDescription(e.target.value);
                          setDescriptionError(false);
                        }}
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
                        onChange={(e) => {
                          setSupervisorContact(e.target.value);
                          setSupervisorContactError(false);
                        }}
                        placeholder="Contact..."
                        className={`${
                          supervisorContactError
                            ? "border-red-500"
                            : "border-gray-400"
                        } my-2 rounded-lg p-2 border-2`}
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
                        onChange={(e) => {
                          setIsRemote(!isRemote);
                          setCityError(false);
                          setCountryError(false);
                          setAddressError(false);
                        }}
                      />
                    </label>
                  </div>

                  <div className="my-6">
                    <label className="flex">
                      <p className="text-xl">Cover Image*</p>
                      <input
                        className="m-2"
                        type="file"
                        ref={fileRef}
                        onChange={(e) => setFile(e.target.files)}
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
                      className={`${
                        capacityError ? "border-red-500" : "border-gray-400"
                      } my-2 rounded-lg w-full p-2 border-2`}
                      onChange={(e) => {
                        setCapacity(e.target.value);
                        setCapacityError(false);
                      }}
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
                      className={`${
                        hoursError ? "border-red-500" : "border-gray-400"
                      } my-2 rounded-lg w-full p-2 border-2`}
                      onChange={(e) => {
                        setHours(e.target.value);
                        setHoursError(false);
                      }}
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
                      className={`${
                        timeError ? "border-red-500" : "border-gray-400"
                      } my-2 rounded-lg w-full p-2 border-2`}
                      onChange={(e) => {
                        setTime(e.target.value);
                        setTimeError(false);
                      }}
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
                          className={`${
                            countryError ? "border-red-500" : "border-gray-400"
                          } my-2 rounded-lg w-full p-2 border-2`}
                          onChange={(e) => {
                            setCountry(e.target.value);
                            setCountryError(false);
                          }}
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
                          className={`${
                            cityError ? "border-red-500" : "border-gray-400"
                          } my-2 rounded-lg w-full p-2 border-2`}
                          onChange={(e) => {
                            setCity(e.target.value);
                            setCityError(false);
                          }}
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
                          className={`${
                            addressError ? "border-red-500" : "border-gray-400"
                          } my-2 rounded-lg w-full p-2 border-2`}
                          onChange={(e) => {
                            setAddress(e.target.value);
                            setAddressError(false);
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {
                {
                  true: (
                    <div className="text-xl text-red-500">
                      Please make sure all mandatory fields are completed.
                    </div>
                  ),
                }[
                  nameError ||
                    descriptionError ||
                    supervisorContactError ||
                    hoursError ||
                    timeError ||
                    capacityError ||
                    cityError ||
                    countryError ||
                    addressError
                ]
              }

              <div className="flex justify-between items-center">
                <button
                  className="bg-[#2EA0FB] text-white mt-5 py-4 px-10 rounded-[50px] hover:bg-[#2135D9]"
                  type="submit"
                >
                  Submit
                </button>
                <div className="text-sm text-gray-400">
                  Fields marked with * are optional.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {creationModal ? (
        <CreationModal setCreationModal={setCreationModal} type={"Event"} />
      ) : null}
      {/* -- Error Modal(disabled)
      errorModal ? <ErrorModal setErrorModal={setErrorModal} /> : null
      */}
    </div>
  );
};
