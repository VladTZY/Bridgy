import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditProfileIcon from "../../../Bridgy_Assets/icon/edit profile white.svg";
import { useSelector } from "react-redux";

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
    <div className="px-3 pt-3 h-[100vh] bg-gray-100 flex flex-col space-y-4 pb-10">
      <div className="bg-white w-full  rounded-3xl relative h-[50%] absolute top-0   ">
        <div className="sticky h-1/2 top-2/2 bg-[url('../../Bridgy_Assets/Images/Banner.png')]"></div>
        <img
          className="absolute w-[12%] left-32 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
          src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
        ></img>
        <div className="sticky pl-60 pt-7 pr-6 flex justify-between items-center w-[100%]  ">
          <div className="flex">
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl">{userInfo.username}</h1>
              <p className="text-gray-500 ">{`${userInfo.role.slice(
                0,
                1
              )}${userInfo.role.slice(1).toLocaleLowerCase()}`}</p>
            </div>
          </div>
          {userId == id ? (
            <div className="flex items-end space-x-3">
              <button
                onClick={() => setPasswordModal(true)}
                className="bg-[#2135D9] text-white p-0.5 rounded-[50px] hover:bg-blue-900"
              >
                <div className="flex my-1 mx-4">
                  <img className="my-auto w-6 h-6" src={EditProfileIcon} />
                  <p className="pl-2 my-auto text-l">Change Password</p>
                </div>
              </button>
              <button
                onClick={onClickHandler}
                className="bg-[#2135D9] text-white p-0.5 rounded-[50px] hover:bg-blue-900"
              >
                {
                  {
                    true: (
                      <div className="flex my-1 mx-4">
                        <img
                          className="my-auto w-6 h-6"
                          src={EditProfileIcon}
                        />
                        <p className="ml-2 my-auto text-l">Edit profile</p>
                      </div>
                    ),
                    false: (
                      <div className="flex my-1 mx-4">
                        <img
                          className="my-auto w-6 h-6"
                          src={EditProfileIcon}
                        />
                        <p className="ml-2 my-auto text-l">Save profile</p>
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
      </div>

      <div className="flex flex-col h-full space-y-4 pt-3">
        <h1 className="font-semibold text-2xl pl-3">Account Information</h1>

        <div className="text-l text-center font-medium text-gray-700 flex flex-col space-y-4">
          <div className="flex mx-5 space-x-20">
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
                      className="my-2 rounded-full w-full py-3 bg-gray-100 border border-gray-200 font-normal text-center"
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
                      className="my-2 rounded-full w-full py-3 bg-gray-100 border border-gray-200 font-normal text-center"
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
                      className="my-2 rounded-full w-full py-3 bg-gray-100 border border-gray-200 font-normal text-center"
                    ></input>
                  </div>
                ),
              }[userInfo.role]
            }

            <div className="flex-1 flex flex-col">
              <label>Email</label>
              <input
                type="text"
                value={userInfo.email}
                readOnly={true}
                disabled={true}
                className="my-2 rounded-full py-3 bg-gray-100 border border-gray-200 font-normal text-center"
              ></input>
            </div>
          </div>

          {
            {
              STUDENT: (
                <div className="flex mx-5 space-x-20">
                  <div className="flex-1 flex flex-col w-full">
                    <label>Full Name</label>
                    <input
                      type="text"
                      value={userInfo.username}
                      readOnly={true}
                      disabled={true}
                      className="my-2 rounded-full w-full p-4 bg-gray-100 border border-gray-200 font-normal text-center"
                    ></input>
                  </div>

                  <div className="flex-1 flex flex-col w-full">
                    <label>School Name</label>
                    <input
                      type="text"
                      value={userInfo.schoolName}
                      readOnly={true}
                      disabled={true}
                      className="my-2 rounded-full w-full p-4 bg-gray-100 border border-gray-200 font-normal text-center"
                    ></input>
                  </div>
                </div>
              ),
              SCHOOL: (
                <div className="flex mx-5 space-x-20">
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
                      className="my-2 rounded-full w-full p-4 bg-gray-100 border border-gray-200 font-normal text-center"
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
                      className="my-2 rounded-full w-full p-4 bg-gray-100 border border-gray-200 font-normal text-center"
                    ></input>
                  </div>
                </div>
              ),
            }[userInfo.role]
          }

          <div className="flex mx-5 space-x-20">
            <div className="flex-1 flex flex-col w-full">
              <label>Phone number</label>
              <input
                type="text"
                value={userInfo.phoneNumber}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phoneNumber: e.target.value })
                }
                disabled={isDisabled}
                readOnly={isDisabled}
                className="my-2 rounded-full p-4 bg-gray-100 border border-gray-200 font-normal text-center"
              ></input>
            </div>

            <div className="flex-1 flex flex-col w-full">
              <label>Location</label>
              <input
                type="text"
                value={`${userInfo.location.country}, ${userInfo.location.city}`}
                disabled={isDisabled}
                readOnly={isDisabled}
                className="my-2 rounded-full w-full p-4 bg-gray-100 border border-gray-200 font-normal text-center"
              ></input>
            </div>
          </div>

          <div className="flex flex-col mx-5">
            <label className="text-left">Bio</label>
            <textarea
              type="text"
              value={userInfo.bio}
              onChange={(e) =>
                setUserInfo({ ...userInfo, bio: e.target.value })
              }
              disabled={isDisabled}
              readOnly={isDisabled}
              className="my-2 rounded-lg w-full p-4 bg-gray-100 border border-gray-200 font-normal h-[150px]"
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
