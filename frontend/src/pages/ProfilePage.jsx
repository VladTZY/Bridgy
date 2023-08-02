import React from 'react'

export const ProfilePage = () => {
  const name = "Name"
  const email = "Email"
  const school = "School"
  const username = "Username"
  
    return (
    <div className="text-center align-middle">
      <img className="d-block mx-auto img-fluid w-50" style={{height:150, width:200}} src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"/>
      <div className="flex-col"> 
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{school}</h1>
        <h1>{username}</h1>
      </div>
    </div>
  );
}