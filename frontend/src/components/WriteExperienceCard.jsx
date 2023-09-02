import { useState } from "react";

export const WriteExperienceCard = ({ id, title, eventDescription }) => {
  const [description, setDescription] = useState("");

  return (
    <div className="w-[70%] flex flex-col rounded-xl bg-white m-3">
      <div className="text-6xl font-semibold">{title}</div>
      <div className="text-xl">
        {eventDescription?.toString().substring(0, 80)}...
      </div>
      <textarea
        type="text"
        value={description}
        placeholder="Describe the experience in your words"
        className="m-5 pb-80 p-4 rounded-xl border-2 border-gray-400"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex items-start">
        <button className="rounded-3xl mx-6 mt-8 mb-4 px-20 py-4 bg-[#2EA0FB] hover:bg-[#2135D9] text-white text-xl">
          Save
        </button>
        <button className="rounded-3xl mx-6 mt-8 mb-4 px-16 py-4 bg-white hover:bg-slate-300 text-[#2EA0FB] text-xl">
          Cancel
        </button>
      </div>
    </div>
  );
};
