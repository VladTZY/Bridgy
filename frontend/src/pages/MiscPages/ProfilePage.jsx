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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("No bio");
  const [location, setLocation] = useState({
    location: "",
    city: "",
  });
  const [schoolName, setSchoolName] = useState("");
  const [objective, setObjective] = useState();
  const [objectiveType, setObjectiveType] = useState("EVENT");
  const [name, setName] = useState("");
  const [passwordModal, setPasswordModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/user/profile/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhoneNumber(res.data.phoneNumber);
        setLocation(res.data.location);
        setRole(res.data.role);
        if (res.data.role == "STUDENT") {
          setUsername(res.data.username);
          setSchoolName(res.data.schoolName);
        } else if (res.data.role == "SCHOOL") {
          setObjective(res.data.objective);
          setObjectiveType(res.data.objectiveType);
        }

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

  console.log(role);

  return (
    <div className="p-3 h-full bg-gray-100 flex flex-col space-y-4">
      <div className="bg-white w-full h-80 rounded-3xl relative overflow-hidden shadow-lg">
        <div className="h-1/2 bg-[url('../../Bridgy_Assets/Images/Banner.png')]"></div>
        <img
          className="absolute w-40 h-40 left-32 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
          src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
        ></img>
        <div className="ml-60 mt-6 flex justify-between items-center">
          <div className="flex">
            <div className="flex flex-col">
              {
                {
                  STUDENT: (
                    <h1 className="font-semibold text-2xl">{username}</h1>
                  ),
                  SCHOOL: <h1 className="font-semibold text-2xl">{name}</h1>,
                  ORGANIZATION: (
                    <h1 className="font-semibold text-2xl">{name}</h1>
                  ),
                }[role]
              }
              <p className="text-gray-500 mt-4">{`${role.slice(0, 1)}${role
                .slice(1)
                .toLocaleLowerCase()}`}</p>
            </div>
          </div>
          {userId == id ? (
            <div className="flex items-end">
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
                        <img
                          className="my-auto w-6 h-6"
                          src={EditProfileIcon}
                        />
                        <p className="ml-2 my-auto text-lg">Edit profile</p>
                      </div>
                    ),
                    false: (
                      <div className="flex my-4 mx-12">
                        <img
                          className="my-auto w-6 h-6"
                          src={EditProfileIcon}
                        />
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
      </div>

      <div className="flex flex-col h-full space-y-4">
        <h1 className="font-semibold text-3xl">Account Information</h1>

        <div className="text-xl font-medium text-gray-700 flex flex-col space-y-4">
          <div className="flex mx-5 space-x-20">
            {
              {
                STUDENT: (
                  <div className="flex-1 flex flex-col w-full">
                    <label>Username</label>
                    <input
                      type="text"
                      value={username}
                      readOnly={true}
                      disabled={true}
                      className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
                    ></input>
                  </div>
                ),
                SCHOOL: (
                  <div className="flex-1 flex flex-col w-full">
                    <label>Name of the school</label>
                    <input
                      type="text"
                      value={name}
                      readOnly={true}
                      disabled={true}
                      className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
                    ></input>
                  </div>
                ),
                ORGANIZATION: (
                  <div className="flex-1 flex flex-col w-full">
                    <label>Organization name</label>
                    <input
                      type="text"
                      value={name}
                      readOnly={true}
                      disabled={true}
                      className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
                    ></input>
                  </div>
                ),
              }[role]
            }

            <div className="flex-1 flex flex-col w-full">
              <label>Email</label>
              <input
                type="text"
                value={email}
                readOnly={true}
                disabled={true}
                className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
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
                      value={name}
                      readOnly={true}
                      disabled={true}
                      className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
                    ></input>
                  </div>

                  <div className="flex-1 flex flex-col w-full">
                    <label>School Name</label>
                    <input
                      type="text"
                      value={schoolName}
                      readOnly={true}
                      disabled={true}
                      className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
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
                      value={objectiveType}
                      onChange={(e) => setObjectiveType(e.target.value)}
                      disabled={isDisabled}
                      readOnly={isDisabled}
                      className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
                    >
                      <option value={"EVENT"}>Participating events</option>
                      <option value={"HOURS"}>Working hours</option>
                    </select>
                  </div>

                  <div className="flex-1 flex flex-col w-full">
                    <label>Objective</label>
                    <input
                      type="text"
                      value={objective}
                      onChange={(e) => setObjective(e.target.value)}
                      disabled={isDisabled}
                      readOnly={isDisabled}
                      className="my-2 rounded-lg w-full p-4 bg-gray-100 border-2 border-gray-200 font-normal"
                    ></input>
                  </div>
                </div>
              ),
            }[role]
          }

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
