import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProfilePage = () => {
  let { id } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4004/api/user/profile/${id}`).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPhoneNumber(res.data.phoneNumber);
      setRole(res.data.role);
    });
  }, [id]);

  return (
    <div className="col-span-10 row-span-6 col-start-3 row-start-2 h-full bg-gray-100">
      <div className="text-center align-middle">
        <img
          className="d-block mx-auto img-fluid w-50"
          style={{ height: 150, width: 200 }}
          src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
        />
        <div className="flex-col">
          <h1>{username}</h1>
          <h1>{email}</h1>
          <h1>{phoneNumber}</h1>
          <h1>{role}</h1>
          <h1>{id}</h1>
        </div>
      </div>
    </div>
  );
};
