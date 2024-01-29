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
    setForm({ ...form, [e.target.name]: e.target.value });
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

  const checkError = () => {
    for (const key in formError) if (formError[key]) return true;
    return false;
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
    <div className="h-full m-5 bg-gray-100">
      <div className="flex flex-col">
        <div className="bg-white p-5 rounded-3xl">
          <h1 className="text-xl font-semibold">Create New Opportunity</h1>
          <div className="">
            <form onSubmit={submitHandler}>
              <div className="flex">
                <div className="flex-1">
                  <div className="my-6">
                    <label>
                      <p className="text-l">Name</p>
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
                            : "border-gray-400"
                        } my-2 rounded-lg p-2 border-2`}
                        style={{ width: "50%" }}
                      />
                    </label>
                  </div>

                  <div className="my-6">
                    <label>
                      <p className="text-l">Description</p>
                      <textarea
                        type="text"
                        name="description"
                        onChange={(e) => {
                          handleChange(e);
                          handleErrorChange(e);
                        }}
                        value={form["description"]}
                        placeholder="Description..."
                        className={`${
                          formError["descriptionError"]
                            ? "border-red-500"
                            : "border-gray-400"
                        } my-2 rounded-lg p-2 border-2`}
                        style={{ width: "70%" }}
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
                            : "border-gray-400"
                        } my-2 rounded-lg p-2 border-2`}
                        style={{ width: "50%" }}
                      />
                    </label>
                  </div>
                  <div className="my-6">
                    <label className="flex">
                      <p className="text-l">Is the event remote?</p>
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

                  <div className="my-6">
                    <label className="flex">
                      <p className="text-l">Cover Image*</p>
                      <input
                        className="m-2"
                        type="file"
                        ref={fileRef}
                        name="file"
                        onChange={(e) => handleChange(e)}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex my-6">
                <div className="w-full">
                  <label>
                    <div className="flex">
                      <img className="my-auto w-[7%]" src={TimeIcon} />
                      <p className="my-auto text-l">Number of students</p>
                    </div>
                    <input
                      type="number"
                      name={"capacity"}
                      onChange={(e) => {
                        handleChange(e);
                        handleErrorChange(e);
                      }}
                      value={form["capacity"]}
                      placeholder="0"
                      className={`${
                        formError["capacityError"]
                          ? "border-red-500"
                          : "border-gray-400"
                      } my-2 rounded-lg w-full p-2 border-2`}
                    />
                  </label>
                </div>

                <div className="w-full mx-8">
                  <label>
                    <div className="flex">
                      <img className="my-auto w-[7%]" src={ClockIcon} />
                      <p className="my-auto text-l">Required hours</p>
                    </div>
                    <input
                      type="number"
                      name="hours"
                      onChange={(e) => {
                        handleChange(e);
                        handleErrorChange(e);
                      }}
                      value={form["hours"]}
                      placeholder="0"
                      className={`${
                        formError["hoursError"]
                          ? "border-red-500"
                          : "border-gray-400"
                      } my-2 rounded-lg w-full p-2 border-2`}
                    />
                  </label>
                </div>

                <div className="w-full">
                  <label>
                    <div className="flex">
                      <img className="my-auto w-[7%]" src={CalendarIcon} />
                      <p className="my-auto text-l">Date and time</p>
                    </div>
                    <input
                      type="datetime-local"
                      name="time"
                      onChange={(e) => {
                        handleChange(e);
                        handleErrorChange(e);
                      }}
                      value={form["time"]}
                      className={`${
                        formError["timeError"]
                          ? "border-red-500"
                          : "border-gray-400"
                      } my-2 rounded-lg w-full p-2 border-2`}
                    />
                  </label>
                </div>
              </div>

              {form["isRemote"] ? (
                <></>
              ) : (
                <div>
                  <div className="flex my-6">
                    <div className="w-full">
                      <label>
                        <div className="flex">
                          <img className="my-auto w-[7%]" src={LocationIcon} />
                          <p className="my-auto text-l">Country</p>
                        </div>
                        <input
                          type="text"
                          name="country"
                          onChange={(e) => {
                            handleChange(e);
                            handleErrorChange(e);
                          }}
                          value={form["country"]}
                          placeholder="Country..."
                          className={`${
                            formError["countryError"]
                              ? "border-red-500"
                              : "border-gray-400"
                          } my-2 rounded-lg w-full p-2 border-2`}
                        />
                      </label>
                    </div>

                    <div className="w-full mx-6">
                      <label>
                        <div className="flex">
                          <img className="my-auto w-[7%]" src={LocationIcon} />
                          <p className="my-auto text-l">City</p>
                        </div>
                        <input
                          type="text"
                          name="city"
                          onChange={(e) => {
                            handleChange(e);
                            handleErrorChange(e);
                          }}
                          value={form["city"]}
                          placeholder="City..."
                          className={`${
                            formError["cityError"]
                              ? "border-red-500"
                              : "border-gray-400"
                          } my-2 rounded-lg w-full p-2 border-2`}
                        />
                      </label>
                    </div>

                    <div className="w-full">
                      <label>
                        <div className="flex">
                          <img className="my-auto w-[7%]" src={LocationIcon} />
                          <p className="my-auto text-l">Address</p>
                        </div>
                        <input
                          type="text"
                          name="address"
                          onChange={(e) => {
                            handleChange(e);
                            handleErrorChange(e);
                          }}
                          value={form["address"]}
                          placeholder="Address..."
                          className={`${
                            formError["addressError"]
                              ? "border-red-500"
                              : "border-gray-400"
                          } my-2 rounded-lg w-full p-2 border-2`}
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
                }[checkError]
              }

              <div className="flex justify-between items-center">
                <button
                  className="bg-[#2EA0FB] text-white mt-5 py-2 px-4 rounded-[50px] hover:bg-[#2135D9]"
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
    </div>
  );
};
