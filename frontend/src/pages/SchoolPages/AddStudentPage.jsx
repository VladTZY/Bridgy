import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { AddMultipleStudents } from "../../components/AddMultipleStudents";
import { CreationModal } from "../../components/CreationModal";

export const AddStudentPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [grade, setGrade] = useState(9);
  const [creationModal, setCreationModal] = useState(false);

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

  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

  const submitHandler = (e) => {
    e.preventDefault();

    setUsername(student.username);
    setEmail(student.email);
    setPhoneNumber(student.phoneNumber);
    setCountry(student.country);
    setCity(student.city);
    setGrade(student.grade);

    if (validate()) {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/school/create_one_student`,
          { username, email, phoneNumber, country, city, grade },
          { withCredentials: true }
        )
        .then((res) => {
          resetStudent();
          resetError();
        })
        .catch((error) => console.log(error.message));
      setCreationModal(true);
    } else {
      setCreationModal(false);
      errorSetter();
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between bg-gray-100">
        <div className="flex-1 m-5 p-5 rounded-3xl bg-white ">
          <h1 className="text-2xl font-semibold">Add One Student</h1>
          <form
            className="m-5 flex flex-col space-y-6"
            onSubmit={submitHandler}
          >
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
                  studentError.usernameError
                    ? "border-red-500"
                    : "border-gray-200"
                } rounded-lg w-1/2 py-2 pl-2 border outline-none`}
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
                } rounded-lg w-1/2 py-2 pl-2 border outline-none`}
                placeholder="Email..."
              />
            </label>
            <label className="flex flex-col space-y-2">
              <p className="text-xl w-[50%]">Grade</p>
              <select
                value={grade}
                className="bg-white w-1/2 py-2 pl-2 border border-gray-200 rounded-lg outline-none"
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
                } rounded-lg w-1/2 py-2 pl-2 border outline-none`}
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
                  studentError.countryError
                    ? "border-red-500"
                    : "border-gray-200"
                } rounded-lg w-1/2 py-2 pl-2 border outline-none`}
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
                } rounded-lg w-1/2 py-2 pl-2 border outline-none`}
                placeholder="City..."
              />
            </label>

            <div className="w-[50%]">
              <button
                className="mt-10 text-white bg-[#2EA0FB] hover:bg-[#2135D9] rounded-full px-8 py-2 text-xl"
                type="submit"
              >
                Add student
              </button>
            </div>
          </form>
        </div>

        <AddMultipleStudents />
      </div>

      {creationModal ? (
        <CreationModal setCreationModal={setCreationModal} type={"Student"} />
      ) : null}
    </>
  );
};
