import React from 'react';
import pic from "../../Bridgy_Assets/LOGO BRIDGY/fav icon/greencircle.png";

export const OrganizationEventCard = () => {
    return (

<div className="w-[100%] p-4 flex-row justify-between items-center text-center">
   <div className="w-[100%] flex flex-row justify-between items-center text-center">
   <div className="w-[5%]">
        <img src={pic} alt="greendot" />
    </div>
    <div className="text-2xl font-bold w-[20%] overflow-hidden truncate "><span>Park cleaning</span></div>
    <div className="w-[20%] overflow-hidden truncate "><span>Description</span></div>
    
    </div>
</div>

  );
};