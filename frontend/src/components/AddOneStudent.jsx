import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export const AddOneStudent = ({
  setCreationModal,
  setErrorModal,
  setErrorMessage,
}) => {
  const [student, setStudent] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    grade: 9,
  });

  const [studentError, setStudentError] = useState({
    usernameError: false,
    emailError: false,
    phoneNumberError: false,
    countryError: false,
    cityError: false,
  });

  const handleErrorChange = (e) => {
    setStudentError((prev) => ({ ...prev, [`${e.target.name}Error`]: false }));
  };

  const errorSetter = () => {
    for (const key in student)
      if (student[key] == "")
        setStudentError((prev) => ({ ...prev, [`${key}Error`]: true }));
  };

  const resetStudent = () => {
    for (const key in student) student[key] = "";
    student.grade = 9;
  };

  const resetError = () => {
    for (const key in studentError) student[key] = false;
  };

  const validate = () => {
    for (const key in student) if (student[key] == "") return false;
    return true;
  };

  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (validate()) {
      axiosInstance
        .post(`/school/create_one_student`, {
          username: student.username,
          email: student.email,
          phoneNumber: student.phoneNumber,
          country: student.country,
          city: student.city,
          grade: student.grade,
        })
        .then((res) => {
          resetStudent();
          resetError();
          setCreationModal(true);
        })
        .catch((error) => {
          console.error(error.response.data);
          setErrorMessage(error.response.data);
          setErrorModal(true);
        });
    } else {
      errorSetter();
    }
  };

  return (
    <div className="flex-1 mx-3 p- rounded-3xl bg-white ">
      <h1 className="text-2xl font-semibold px-5 pt-6">Add One Student</h1>
      <form className="m-5 flex flex-col space-y-6" onSubmit={submitHandler}>
        <label className="flex flex-col space-y-2">
          <p className="text-xl w-[50%] ">Name</p>
          <input
            type="text"
            name="username"
            value={student.username}
            onChange={(e) => {
              handleChange(e);
              handleErrorChange(e);
            }}
            className={`${
              studentError.usernameError ? "border-red-500" : "border-gray-200"
            } rounded-lg lg:w-1/2 py-2 pl-2 border outline-none`}
            placeholder="Name..."
          />
        </label>
        <label className="flex flex-col space-y-2">
          <p className="text-xl w-[50%]">Email</p>
          <input
            type="text"
            name="email"
            value={student.email}
            onChange={(e) => {
              handleChange(e);
              handleErrorChange(e);
            }}
            className={`${
              studentError.emailError ? "border-red-500" : "border-gray-200"
            } rounded-lg lg:w-1/2 py-2 pl-2 border outline-none`}
            placeholder="Email..."
          />
        </label>
        <label className="flex flex-col space-y-2">
          <p className="text-xl w-[50%]">Grade</p>
          <select
            name="grade"
            value={student.grade}
            className="bg-white lg:w-1/2 py-2 pl-2 border border-gray-200 rounded-lg outline-none"
            onChange={(e) => {
              handleChange(e);
              handleErrorChange(e);
            }}
          >
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
          </select>
        </label>
        <label className="flex flex-col space-y-2">
          <p className="text-xl w-[50%]">Phone Number</p>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone number..."
            value={student.phoneNumber}
            onChange={(e) => {
              handleChange(e);
              handleErrorChange(e);
            }}
            className={`${
              studentError.phoneNumberError
                ? "border-red-500"
                : "border-gray-200"
            } rounded-lg lg:w-1/2 py-2 pl-2 border outline-none`}
          />
        </label>
        <label className="flex flex-col space-y-2">
          <p className="text-xl w-[50%]">Country</p>
          <input
            type="text"
            name="country"
            value={student.country}
            onChange={(e) => {
              handleChange(e);
              handleErrorChange(e);
            }}
            className={`${
              studentError.countryError ? "border-red-500" : "border-gray-200"
            } rounded-lg lg:w-1/2 py-2 pl-2 border outline-none`}
            placeholder="Country..."
          />
        </label>
        <label className="flex flex-col space-y-2">
          <p className="text-xl w-[50%]">City</p>
          <input
            type="text"
            name="city"
            value={student.city}
            onChange={(e) => {
              handleChange(e);
              handleErrorChange(e);
            }}
            className={`${
              studentError.cityError ? "border-red-500" : "border-gray-200"
            } rounded-lg lg:w-1/2 py-2 pl-2 border outline-none`}
            placeholder="City..."
          />
        </label>

        <div className="lg:w-[50%]">
          <button
            className="mt-2 lg:mt-10 text-white bg-[#2EA0FB] hover:bg-[#2135D9] rounded-full px-8 py-2 text-xl"
            type="submit"
          >
            Add student
          </button>
        </div>
      </form>
    </div>
  );
};
