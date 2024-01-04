import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";

export const WriteExperienceCard = ({ id, title, eventDescription }) => {
  const [description, setDescription] = useState(eventDescription);
  const [canEdit, setcanEdit] = useState(false);

  const handleClick = () => {
    setcanEdit(false);
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/student/post_feedback/${id}`,
        { feedback: description },
        { withCredentials: true }
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-[60%] flex flex-col rounded-xl bg-white m-3">
      <div className="ml-6 mt-6 text-5xl font-semibold">Your feedback</div>
      <textarea
        type="text"
        value={description}
        placeholder="Describe the experience in your words"
        className="m-5 pb-52 p-4 rounded-xl border-2 border-gray-400"
        disabled={!canEdit}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex items-center">
        <button
          onClick={() => handleClick()}
          className="rounded-3xl mx-6 mt-4 mb-4 px-20 py-4 bg-[#2EA0FB] hover:bg-[#2135D9] text-white text-xl"
        >
          Save
        </button>
        <button
          onClick={() => setcanEdit(true)}
          className="rounded-3xl mx-6 mt-4 mb-4 px-20 py-4 bg-[#2EA0FB] hover:bg-[#2135D9] text-white text-xl"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
