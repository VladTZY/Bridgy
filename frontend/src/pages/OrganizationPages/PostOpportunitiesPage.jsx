import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { CreationModal } from "../../components/CreationModal";

import CalendarIcon from "../../../Bridgy_Assets/icon/calender blue.svg";
import LocationIcon from "../../../Bridgy_Assets/icon/location blue.svg";
import ClockIcon from "../../../Bridgy_Assets/icon/clock blue.svg";
import TimeIcon from "../../../Bridgy_Assets/icon/timeplap blue.svg";

export const PostOpportunitiesPage = () => {
  const [creationModal, setCreationModal] = useState(false);

  const emptyForm = {
    name: "",
    description: "",
    supervisorContact: "",
    isRemote: false,
    file: null,
    hours: 0,
    time: new Date(),
    capacity: 0,
    country: "",
    city: "",
    address: "",
  };

  const emptyFormError = {
    nameError: false,
    descriptionError: false,
    supervisorContactError: false,
    hoursError: false,
    timeError: false,
    capacityError: false,
    countryError: false,
    cityError: false,
    addressError: false,
  };

  const [form, setForm] = useState({
    name: "",
    description: "",
    supervisorContact: "",
    isRemote: false,
    file: null,
    hours: 0,
    time: new Date(),
    capacity: 0,
    country: "",
    city: "",
    address: "",
  });

  const [initialDate, setInitialDate] = useState(form["time"]);

  const [formError, setFormError] = useState({
    nameError: false,
    descriptionError: false,
    supervisorContactError: false,
    hoursError: false,
    timeError: false,
    capacityError: false,
    countryError: false,
    cityError: false,
    addressError: false,
  });

  const fileRef = useRef();

  const handleChange = (e) => {
    if (e.target.name != "file")
      setForm({ ...form, [e.target.name]: e.target.value });
    else setForm({ ...form, [e.target.name]: e.target.files });
  };

  const handleErrorChange = (e) => {
    setFormError({ ...formError, [`${e.target.name}Error`]: false });
  };

  const handleRemote = (e) => {
    const newisRemote = !form["isRemote"];
    setForm((prev) => ({ ...prev, isRemote: newisRemote }));
    setFormError((prev) => ({
      ...prev,
      cityError: false,
      countryError: false,
      addressError: false,
    }));
  };

  const errorSetter = (e, nil, error) => {
    if (e == nil) setFormError((prev) => ({ ...prev, [error]: true }));
  };

  useEffect(() => {
    if (form["file"] === null) {
      fileRef.current.value = "";
    } else {
      fileRef.current.files = form["file"];
    }
  }, [form["file"]]);

  const validate = () => {
    if (
      form["name"] == "" ||
      form["description"] == "" ||
      form["supervisorContact"] == "" ||
      form["capacity"] == 0 ||
      form["hours"] == 0 ||
      form["time"] == initialDate ||
      (!form["isRemote"] &&
        (form["country"] == "" || form["city"] == "" || form["address"] == ""))
    )
      return false;
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("muie", 5);

    if (form["file"] != null) formData.append("photoUrl", form["file"][0]);

    for (const key in form)
      if (key != "file" && key != "isRemote") formData.append(key, form[key]);

    formData.append("remote", form["isRemote"]);

    if (validate()) {
      //setErrorModal(false);
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/organization/create_event`,
          formData,
          { withCredentials: true }
        )
        .then((res) => {
          setForm(emptyForm);
          setFormError(emptyFormError);
        })
        .catch((error) => console.log(error));
      setCreationModal(true);
    } else {
      setCreationModal(false);
      errorSetter(form["name"], "", "nameError");
      errorSetter(form["description"], "", "descriptionError");
      errorSetter(form["supervisorContact"], "", "supervisorContactError");
      errorSetter(form["hours"], 0, "hoursError");
      errorSetter(form["capacity"], 0, "capacityError");
      errorSetter(form["time"], initialDate, "timeError");
      if (!form["isRemote"]) {
        errorSetter(form["country"], "", "countryError");
        errorSetter(form["city"], "", "cityError");
        errorSetter(form["address"], "", "addressError");
      }
    }
  };

  return (
    <div className=" bg-gray-100 ml-[15vw] px-4 pb-10 pt-6">
      <div className="flex flex-col bg-gray-100">
        <div className="bg-white p-5 rounded-3xl">
          <h1 className="text-xl font-semibold">Create New Opportunity</h1>
          <form
            className="mt-4 flex flex-col space-y-8"
            onSubmit={submitHandler}
          >
            <label className="flex flex-col space-y-2">
              <p className="text-l">Description</p>
              <textarea
                type="text"
                name="description"
                onChange={(e) => {
                  handleChange(e);
                  handleErrorChange(e);
                }}
                value={form["description"]}
                placeholder="Write a short description for the event..."
                className={`${
                  formError["descriptionError"]
                    ? "border-red-500"
                    : "border-gray-200"
                } rounded-lg p-4 border h-40 outline-none`}
                style={{ width: "100%" }}
              />
            </label>
            <div className="flex flex-col md:flex-row justify-between md:space-x-10">
              <label className="flex-1 flex flex-col space-y-2 mb-2">
                <p className="text-l">Mission Title</p>
                <input
                  type="text"
                  name="name"
                  value={form["name"]}
                  onChange={(e) => {
                    handleChange(e);
                    handleErrorChange(e);
                  }}
                  placeholder="Name..."
                  className={`${
                    formError["nameError"]
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded-lg p-4 border outline-none`}
                  style={{ width: "100%" }}
                />
              </label>
              <label className=" flex-1 flex flex-col space-y-2">
                <p className="text-l">Supervisor Contact</p>
                <input
                  type="text"
                  name="supervisorContact"
                  onChange={(e) => {
                    handleChange(e);
                    handleErrorChange(e);
                  }}
                  value={form["supervisorContact"]}
                  placeholder="Contact..."
                  className={`${
                    formError["supervisorContactError"]
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded-lg p-4 border outline-none`}
                  style={{ width: "100%" }}
                />
              </label>
              <label className="flex-1 flex items-center justify-center mt-4">
                <p className="text-xl">Is the event remote?</p>
                <input
                  className="m-2"
                  type="checkbox"
                  checked={form.isRemote}
                  onChange={(e) => {
                    handleRemote();
                  }}
                />
              </label>
            </div>

            <div className="flex justify-between flex-col md:flex-row md:space-x-10 ">
              <label className=" flex flex-1 flex-col space-y-2 mb-2">
                <p className="text-l">Number of students</p>
                <div
                  className={`${
                    formError["capacityError"]
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded-lg w-full border flex`}
                >
                  <img className="ml-2 w-[5vw]  md:w-[1.8vw]" src={TimeIcon} />
                  <input
                    type="number"
                    name={"capacity"}
                    onChange={(e) => {
                      handleChange(e);
                      handleErrorChange(e);
                    }}
                    value={form["capacity"]}
                    placeholder="0"
                    className="p-4 w-full outline-none"
                  />
                </div>
              </label>

              <label className=" flex-1 flex flex-col space-y-2 mb-2">
                <p className="text-l">Required hours</p>
                <div
                  className={`${
                    formError["hoursError"]
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded-lg w-full border flex`}
                >
                  <img className="ml-2 w-[5vw] md:w-[1.8vw]" src={TimeIcon} />
                  <input
                    type="number"
                    name="hours"
                    onChange={(e) => {
                      handleChange(e);
                      handleErrorChange(e);
                    }}
                    value={form["hours"]}
                    placeholder="0"
                    className="p-4 w-full outline-none"
                  />
                </div>
              </label>

              <label className=" flex-1 flex flex-col space-y-2 mb-2">
                <p className="text-l">Date and time</p>
                <div
                  className={`${
                    formError["timeError"]
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded-lg w-full border flex`}
                >
                  <img
                    className="ml-2 w-[5vw] md:w-[1.8vw]"
                    src={CalendarIcon}
                  />
                  <input
                    type="datetime-local"
                    name="time"
                    onChange={(e) => {
                      handleChange(e);
                      handleErrorChange(e);
                    }}
                    value={form["time"]}
                    className="p-4 w-full outline-none"
                  />
                </div>
              </label>
            </div>

            {form["isRemote"] ? (
              <></>
            ) : (
              <div className="flex justify-between flex-col md:flex-row md:space-x-10">
                <label className="flex-1 flex flex-col space-y-2 mb-2">
                  <p className="text-l">Country</p>
                  <div
                    className={`${
                      formError["countryError"]
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg w-full border flex`}
                  >
                    <img
                      className="ml-2 w-[5vw] md:w-[1.8vw]"
                      src={LocationIcon}
                    />
                    <input
                      type="text"
                      name="country"
                      onChange={(e) => {
                        handleChange(e);
                        handleErrorChange(e);
                      }}
                      value={form["country"]}
                      placeholder="Country..."
                      className="p-4 w-full outline-none"
                    />
                  </div>
                </label>

                <label className="flex-1 flex flex-col space-y-2 mb-2">
                  <p className="text-l">City</p>
                  <div
                    className={`${
                      formError["cityError"]
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg w-full border flex`}
                  >
                    <img
                      className="ml-2 w-[5vw] md:w-[1.8vw]"
                      src={LocationIcon}
                    />
                    <input
                      type="text"
                      name="city"
                      onChange={(e) => {
                        handleChange(e);
                        handleErrorChange(e);
                      }}
                      value={form["city"]}
                      placeholder="City..."
                      className="p-4 w-full outline-none"
                    />
                  </div>
                </label>

                <label className="flex-1 flex flex-col space-y-2 mb-2">
                  <p className="text-l">Address</p>
                  <div
                    className={`${
                      formError["addressError"]
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg w-full border flex`}
                  >
                    <img
                      className="ml-2 w-[5vw] md:w-[1.8vw]"
                      src={LocationIcon}
                    />
                    <input
                      type="text"
                      name="address"
                      onChange={(e) => {
                        handleChange(e);
                        handleErrorChange(e);
                      }}
                      value={form["address"]}
                      placeholder="Address..."
                      className="p-4 w-full outline-none"
                    />
                  </div>
                </label>
              </div>
            )}
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 flex flex-col space-y-2">
                <p className="text-l">Cover Image*</p>
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border border-[#2135D9] border-dashed rounded-lg cursor-pointer bg-[#f8fcfd] hover:bg-[#e9f5f8]"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                      <svg
                        class="w-10 h-10 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-lg text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                      ref={fileRef}
                      name="file"
                      onChange={(e) => handleChange(e)}
                    />
                  </label>
                </div>
                {form["file"] === null ? (
                  <></>
                ) : (
                  <div className="text-xl"> File Uploaded!</div>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-end items-end my-4">
                <button
                  className="bg-[#2EA0FB] text-white py-2 px-6  rounded-full hover:bg-[#2135D9] text-l"
                  type="submit"
                >
                  Submit
                </button>
                <div className="text-sm text-gray-400 mt-2">
                  Fields marked with * are optional.
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {creationModal ? (
        <CreationModal setCreationModal={setCreationModal} type={"Event"} />
      ) : null}
    </div>
  );
};
