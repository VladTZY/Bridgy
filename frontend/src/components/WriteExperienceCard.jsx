import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export const WriteExperienceCard = ({ id, title, eventDescription }) => {
  const [description, setDescription] = useState(eventDescription);
  const [canEdit, setcanEdit] = useState(false);

  const handleClick = () => {
    setcanEdit(false);
    axiosInstance
      .post(`/student/post_feedback/${id}`, { feedback: description })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-[100%] lg:w-[60%] flex flex-col rounded-xl bg-white pt-3 lg:pt-0 lg:m-3">
      <div className="ml-6 mt-6 text-xl font-semibold">Your feedback</div>
      <textarea
        type="text"
        value={description}
        placeholder="Describe the experience in your words"
        className="mx-5 mt-5 mb-2 pb-52 p-4 rounded-xl border border-gray-400"
        disabled={!canEdit}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex items-center">
        <button
          onClick={() => handleClick()}
          className="rounded-3xl ml-6 mt-2 mb-4 px-6 py-2 bg-[#2EA0FB] hover:bg-[#2135D9] text-white text-l"
        >
          Save
        </button>
        <button
          onClick={() => setcanEdit(true)}
          className="rounded-3xl mx-3 mt-2 mb-4 px-6 py-2 bg-[#2EA0FB] hover:bg-[#2135D9] text-white text-l"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
