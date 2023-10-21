import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditProfileIcon from "../../../Bridgy_Assets/icon/edit profile white.svg";
import { useSelector } from "react-redux";

import { ChangePasswordModal } from "../../components/ChangePasswordModal";

export const ProfilePage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const userId = useSelector((state) => state.auth.id);
  let { id } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("No bio");
  const [location, setLocation] = useState({
    location: "",
    city: "",
  });
  const [role, setRole] = useState("");
  const [passwordModal, setPasswordModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/user/profile/${id}`)
      .then((res) => {
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPhoneNumber(res.data.phoneNumber);
        setLocation(res.data.location);
        setRole(res.data.role);

        if (res.data.bio) setBio(res.data.bio);
      });
  }, [id]);

  const onClickHandler = () => {
    if (!isDisabled) {
      axios
        .put(
          `${import.meta.env.VITE_API_URL}/user/update_profile`,
          {
            bio,
            phoneNumber,
          },
          {
            headers: {
              Authorization: `BEARER ${jwt}`,
            },
          }
        )
        .then((res) => {
          setUsername(res.data.username);
          setEmail(res.data.email);
          setPhoneNumber(res.data.phoneNumber);

          if (res.data.bio) setBio(res.data.bio);
        });
    }
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="p-3 h-full bg-gray-100 flex flex-col space-y-4">
      <div className="bg-white rounded-3xl h-[40vh] bg-[url('../../Bridgy_Assets/Images/Banner.png')] bg-no-repeat bg-contain flex justify-between">
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
        {userId == id ? (
          <div className="flex items-end mr-6 mb-10">
            <button
              onClick={() => setPasswordModal(true)}
              className="bg-[#2135D9] text-white my-5 rounded-[50px] hover:bg-blue-900"
            >
              <div className="flex my-4 mx-12">
                <img className="my-auto w-6 h-6" src={EditProfileIcon} />
                <p className="ml-2 my-auto text-lg">Change Password</p>
              </div>
            </button>
            <button
              onClick={onClickHandler}
              className="bg-[#2135D9] text-white m-5 rounded-[50px] hover:bg-blue-900"
            >
              {
                {
                  true: (
                    <div className="flex my-4 mx-12">
                      <img className="my-auto w-6 h-6" src={EditProfileIcon} />
                      <p className="ml-2 my-auto text-lg">Edit profile</p>
                    </div>
                  ),
                  false: (
                    <div className="flex my-4 mx-12">
                      <img className="my-auto w-6 h-6" src={EditProfileIcon} />
                      <p className="ml-2 my-auto text-lg">Save profile</p>
                    </div>
                  ),
                }[isDisabled]
              }
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col h-full space-y-4">
        <h1 className="font-semibold text-3xl">Account Information</h1>

        <div className="text-xl font-medium text-gray-700 flex flex-col space-y-4">
          <div className="flex mx-5 space-x-20">
            <div className="flex-1 flex flex-col w-full">
              <label>Username</label>
              <input
                type="text"
                value={username}
                disabled={true}
                readOnly={true}
                className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
              ></input>
            </div>

            <div className="flex-1 flex flex-col w-full">
              <label>Email</label>
              <input
                type="text"
                value={email}
                disabled={true}
                readOnly={true}
                className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
              ></input>
            </div>
          </div>

          <div className="flex mx-5 space-x-20">
            <div className="flex-1 flex flex-col w-full">
              <label>Phone number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={isDisabled}
                readOnly={isDisabled}
                className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
              ></input>
            </div>

            <div className="flex-1 flex flex-col w-full">
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

          <div className="flex flex-col mx-5">
            <label>Bio</label>
            <textarea
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              disabled={isDisabled}
              readOnly={isDisabled}
              className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal h-[150px]"
            ></textarea>
          </div>
        </div>
      </div>

      {passwordModal ? (
        <ChangePasswordModal setModal={setPasswordModal} />
      ) : null}
    </div>
  );
};
