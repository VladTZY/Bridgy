import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditProfileIcon from "../../../Bridgy_Assets/icon/edit profile white.svg";
import { useSelector } from "react-redux";
import padlockIcon from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/padlock.png";

import { ChangePasswordModal } from "../../components/ChangePasswordModal";

export const ProfilePage = () => {
  const userId = useSelector((state) => state.auth.id);
  let { id } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  const [passwordModal, setPasswordModal] = useState(false);

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    role: "",
    bio: "",
    location: {
      country: "",
      city: "",
    },
    schoolName: "",
    objective: null,
    objectiveType: null,
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/user/profile/${id}`)
      .then((res) => {
        setUserInfo(res.data);
      });
  }, [id]);

  const onClickHandler = () => {
    if (!isDisabled) {
      let payload = { bio: userInfo.bio, phoneNumber: userInfo.phoneNumber };

      if (userInfo.role == "SCHOOL") {
        payload.objective = userInfo.objective;
        payload.objectiveType = userInfo.objectiveType;
      }

      axios
        .put(`${import.meta.env.VITE_API_URL}/user/update_profile`, payload, {
          withCredentials: true,
        })
        .then((res) => {
          setUserInfo({
            ...userInfo,
            bio: res.data.bio,
            phoneNumber: res.data.phoneNumber,
          });
        });
    }
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="flex flex-col bg-gray-100">
      <div className="w-[85vw]  flex ml-[15vw] px-4 mb-10 pt-6">
        <div className="flex flex-col w-full bg-white rounded-xl">
          <div className="flex flex-row justify-between items-center pr-4">
            <div className=" pr-4 flex flex-row justify-around items-center py-">
              <img
                className="w-[20vw] lg:w-[10vw] pr-4 rounded-xl 2xl:w-[5vw]"
                src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
              ></img>
              <div className="flex flex-col">
                <h2 className="text-sm lg:text-xl font-semibold">
                  {userInfo.username}
                </h2>
                <p className="text-gray-400 text-sm">
                  {`${userInfo.role.slice(0, 1)}${userInfo.role
                    .slice(1)
                    .toLocaleLowerCase()}`}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="bg-[#2135D9] p-1.5 lg:p-2 rounded-l lg:rounded-xl mr-2 flex flex-row justify-center items-center">
                <img
                  src={EditProfileIcon}
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => setIsDisabled(!isDisabled)}
                />
                <p className="pl-2 text-white hidden lg:block">Edit profile</p>
              </div>
              <div className="hidden bg-[#2135D9] p-1.5 lg:p-2 rounded-l lg:rounded-xl mr-2 flex flex-row justify-center items-center">
                // Div pt save profile sa ii faci cod
                <img
                  src={EditProfileIcon}
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => setIsDisabled(!isDisabled)}
                />
                <p className="pl-2 text-white hidden lg:block">Save profile</p>
              </div>

              <div className="bg-[#2135D9] p-1.5 lg:p-2 rounded-r lg:rounded-xl flex flex-row justify-center items-center">
                <img
                  src={padlockIcon}
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => setPasswordModal(true)}
                />
                <p className="pl-2 text-white hidden lg:block">
                  Change password
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85vw] flex flex-col lg:flex-row ml-[15vw] px-4 ">
        <div className="flex flex-col w-[100%] lg:w-[50%] bg-white rounded-xl p-4 lg:mr-2 mb-2 lg:mb-0">
          <div>
            {
              {
                STUDENT: (
                  <div className="flex-1 flex flex-col w-full">
                    <label>Username</label>
                    <input
                      type="text"
                      value={userInfo.username}
                      readOnly={true}
                      disabled={true}
                      className="my-2 rounded-xl w-full py-3 bg-white border border-gray-200 font-normal text-center"
                    ></input>
                  </div>
                ),
                SCHOOL: (
                  <div className="flex-1 flex flex-col w-full">
                    <label>Name of the school</label>
                    <input
                      type="text"
                      value={userInfo.username}
                      readOnly={true}
                      disabled={true}
                      className="my-2 rounded-xl w-full py-3 bg-white border border-gray-200 font-normal text-center"
                    ></input>
                  </div>
                ),
                ORGANIZATION: (
                  <div className="flex-1 flex flex-col w-full">
                    <label>Organization name</label>
                    <input
                      type="text"
                      value={userInfo.username}
                      readOnly={true}
                      disabled={true}
                      className="my-2 rounded-xl w-full py-3 bg-white border border-gray-200 font-normal text-center"
                    ></input>
                  </div>
                ),
              }[userInfo.role]
            }

            <div className="flex-1 flex flex-col w-full">
              <label>Email</label>
              <input
                type="text"
                value={userInfo.email}
                readOnly={true}
                disabled={true}
                className="my-2 rounded-xl w-full py-3 bg-white border border-gray-200 font-normal text-center"
              ></input>
            </div>

            <div className="flex-1 flex flex-col w-full">
              <label>Phone number</label>
              <input
                type="text"
                value={userInfo.phoneNumber}
                readOnly={isDisabled}
                disabled={isDisabled}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phoneNumber: e.target.value })
                }
                className="my-2 rounded-xl w-full py-3 bg-white border border-gray-200 font-normal text-center"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100%] lg:w-[50%] bg-white rounded-xl p-4 lg:ml-2 mt-2 lg:mt-0">
          <div className="flex-1 flex flex-col w-full">
            <label>Location</label>
            <input
              type="text"
              value={`${userInfo.location.city}, ${userInfo.location.country}`}
              readOnly={true}
              disabled={true}
              className="my-2 rounded-xl w-full py-3 bg-white border border-gray-200 font-normal text-center"
            ></input>
          </div>
          <div className="flex-1 flex flex-col w-full">
            <label>Objective Type</label>
            <select
              type="text"
              value={userInfo.objectiveType}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  objectiveType: e.target.value,
                })
              }
              disabled={isDisabled}
              readOnly={isDisabled}
              className="my-2 rounded-xl w-full p-4 bg-white border border-gray-200 font-normal text-center"
            >
              <option value={"EVENT"}>Participating events</option>
              <option value={"HOURS"}>Working hours</option>
            </select>
          </div>

          <div className="flex-1 flex flex-col w-full">
            <label>Objective</label>
            <input
              type="text"
              value={userInfo.objective}
              onChange={(e) =>
                setUserInfo({ ...userInfo, objective: e.target.value })
              }
              disabled={isDisabled}
              readOnly={isDisabled}
              className="my-2 rounded-xl w-full p-4 bg-white border border-gray-200 font-normal text-center"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[85vw] ml-[15vw] px-4 mt-5 lg:mt-10 mb-10 lg:mb-0">
        <label className="text-left">Bio</label>
        <textarea
          type="text"
          value={userInfo.bio}
          onChange={(e) => setUserInfo({ ...userInfo, bio: e.target.value })}
          disabled={isDisabled}
          readOnly={isDisabled}
          className="my-2 rounded-lg w-full p-4 bg-white border border-gray-200 font-normal h-[150px]"
        ></textarea>
      </div>
    </div>
  );
};
