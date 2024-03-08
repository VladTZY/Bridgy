import { useState } from "react";
import axios from "axios";

export const AddMultipleStudents = ({
  setCreationModal,
  setErrorModal,
  setErrorMessage,
}) => {
  const [file, setFile] = useState(null);

  const clickHandler = (e) => {
    e.preventDefault();

    if (file == null) {
      console.log("Submit file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/school/create_multiple_students`,
        formData,
        { withCredentials: true }
      )
      .then((res) => {
        setFile(null);
        setCreationModal(true);
      })
      .catch((error) => {
        console.error(error.response.data);
        setErrorMessage(error.response.data);
        setErrorModal(true);
      });
  };

  return (
    <div className="mx-3 mt-5 lg:mt-0 rounded-3xl bg-white flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold px-5 pt-6">
          Add Multiple Students
        </h1>
        <a
          className="mt-5"
          href={"../../BridgySampleTable.csv"}
          download={"BridgySampleTable.csv"}
        >
          <strong>Click here to download sample table</strong>
        </a>
        <div className="m-5 flex flex-col space-y-2 justify-center items-center">
          <p className="text-xl">Upload student table</p>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border border-[#2135D9] border-dashed rounded-lg cursor-pointer bg-[#f8fcfd] hover:bg-[#e9f5f8]"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-10 h-10 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 px-2 text-lg text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          {file === null ? (
            <></>
          ) : (
            <div className="text-xl"> File Uploaded!</div>
          )}
        </div>
      </div>
      <div className="m-5 self-center">
        <button
          onClick={(e) => clickHandler(e)}
          className="mt-10 text-white bg-[#2EA0FB] hover:bg-[#2135D9] rounded-full px-8 py-2 text-xl"
          type="submit"
        >
          Submit table
        </button>
      </div>
    </div>
  );
};
