import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditProfileIcon from "../../../Bridgy_Assets/icon/edit profile white.svg";
import banner from "../../../Bridgy_Assets/Images/Banner.png";

export const ProfilePage = () => {
  let { id } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [location, setLocation] = useState({
    location: "",
    city: "",
  });
  const [role, setRole] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4004/api/user/profile/${id}`).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPhoneNumber(res.data.phoneNumber);
      setLocation(res.data.location);
      setRole(res.data.role);
    });
  }, [id]);

  return (
    <div className=" h-full bg-gray-100 flex flex-col">
      <div className="bg-white m-10 rounded-3xl h-[40vh] bg-[url('../../Bridgy_Assets/Images/Banner.png')] bg-no-repeat bg-contain flex justify-between">
        <div className="flex m-5 items-end">
          <img
            className="rounded-xl ml-6 mb-10"
            style={{ height: "50%", width: "50%", borderRadius: "50%" }}
            src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
          />

          <div className="flex ml-16 mb-10">
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl">{username}</h1>
              <p className="text-gray-500 mt-4">{`${role.slice(0, 1)}${role
                .slice(1)
                .toLocaleLowerCase()}`}</p>
            </div>
          </div>
        </div>
        <div className="flex items-end mr-6 mb-10">
          <button className="bg-[#2135D9] text-white m-5 rounded-[50px]">
            <div className="flex my-4 mx-12">
              <img className="my-auto w-6 h-6" src={EditProfileIcon} />
              <p className="ml-2 my-auto text-lg">Edit profile</p>
            </div>
          </button>
        </div>
      </div>

      <div className=" flex flex-col h-full">
        <h1 className="mx-10 font-semibold text-3xl">Account Information</h1>

        <div className="mt-5 text-xl font-medium text-gray-700 flex flex-col">
          <div className="flex my-2">
            <div className="flex flex-col w-full ml-10 mr-5">
              <label>Username</label>
              <input
                type="text"
                defaultValue={username}
                disabled={isDisabled}
                readOnly={isDisabled}
                className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
              ></input>
            </div>

            <div className="flex flex-col w-full ml-5 mr-10">
              <label>Email</label>
              <input
                type="text"
                defaultValue={email}
                disabled={isDisabled}
                readOnly={isDisabled}
                className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
              ></input>
            </div>
          </div>

          <div className="flex my-2">
            <div className="flex flex-col w-full ml-10 mr-5">
              <label>Phone number</label>
              <input
                type="text"
                defaultValue={phoneNumber}
                disabled={isDisabled}
                readOnly={isDisabled}
                className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
              ></input>
            </div>

            <div className="flex flex-col w-full ml-5 mr-10">
              <label>Location</label>
              <input
                type="text"
                value={`${location.country}, ${location.city}`}
                disabled={isDisabled}
                readOnly={isDisabled}
                className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
              ></input>
            </div>
          </div>

          <div className="flex flex-col my-2 mx-10">
            <label>Bio</label>
            <textarea
              type="text"
              defaultValue={bio}
              disabled={isDisabled}
              readOnly={isDisabled}
              className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal h-[150px]"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
