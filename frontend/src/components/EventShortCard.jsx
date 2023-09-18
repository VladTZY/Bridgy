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
      <div className="mx-12 my-1 px-6 py-2 rounded-md w-[94%] bg-white flex justify-between transform transition duration-200  hover:scale-105 hover:drop-shadow-black">
        <div className="flex space-x-4 items-center">
          <div className="py-4 text-3xl font-semibold">{title}</div>
          <div className="text-xl">{description}</div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="text-2xl">
            {attendance}/{capacity}
          </div>
          <img src={MoreInfoIcon} style={{ height: "100%", width: "2vw" }} />
        </div>
      </div>
    </button>
  );
};
