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
      <div>
        <h1 className="text-2xl font-semibold">Add Multiple Students</h1>
        <div className="m-5 my-6">
          <label className="flex flex-col space-y-2">
            <p className="text-xl">Students table</p>
            <input
              className="m-2"
              type="file"
              value={""}
              //ref={fileRef}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
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
