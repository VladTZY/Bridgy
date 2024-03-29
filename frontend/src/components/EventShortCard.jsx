import { useNavigate } from "react-router-dom";
import MoreInfoIcon from "../../Bridgy_Assets/icon/checkbox blue.svg";

export const EventShortCard = ({
  id,
  title,
  description,
  attendance,
  capacity,
}) => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(`/opportunity/${id}`);
  };

  return (
    <button onClick={handleButton}>
      <div className=" mx-5 my-1 px-4 py-2 rounded-xl bg-white flex justify-between transform transition duration-200  hover:scale-[1.01] hover:drop-shadow-black">
        <div className="flex space-x-4 items-center justify-between w-[100%]  ">
          <div className="py-4 text-xl font-semibold">{title}</div>
          <div className="hidden md:block text-l">{description}</div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="text-xl">
            {attendance}/{capacity}
          </div>
          <img src={MoreInfoIcon} style={{ height: "35%", width: "35%" }} />
        </div>
      </div>
    </button>
  );
};
