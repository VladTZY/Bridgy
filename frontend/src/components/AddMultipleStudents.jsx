import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const AddMultipleStudents = () => {
  const [file, setFile] = useState(null);

  /*const fileRef = useRef();

  useEffect(() => {
    if (file === null) {
      fileRef.current.value = "";
    } else {
      fileRef.current.files = file;
    }
  }, [file]);*/

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
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="m-5 p-5 rounded-3xl bg-white flex flex-col justify-between">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">Add Multiple Students</h1>
        <div className="m-5 flex flex-col space-y-2">
          <p className="text-xl">Upload student table</p>
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border border-[#2135D9] border-dashed rounded-lg cursor-pointer bg-[#f8fcfd] hover:bg-[#e9f5f8]"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
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
                <p class="mb-2 px-2 text-lg text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
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
