import { Circle } from "rc-progress";
import pic from "../../../assets/backgroundcard.png";

import { Box, Stack, Typography } from "@mui/material";

export const ProgressCard = ({
  title,
  value,
  percentage,
  description,
  color,
}) => {
  return (
    <div className="w-[100%]  relative flex flex-row overscroll-x-hidden rounded-2xl bg-white shadow-md">
      <img className="absolute w-full h-full  opacity-10" src={pic} />
      <div className="mt-6 flex flex-col space-y-2 flex-grow ml-6">
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="h6">{value}</Typography>
      </div>
      <div className=" my-4 w-[30%] rounded-full flex relative items-center justify-center mr-4">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center text-center text-xl"
          style={{ color: color }}
        >
          {percentage}%
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <Circle
            className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%]"
            percent={percentage}
            strokeColor={color}
            strokeWidth={10}
            trailColor="#d3d3d3"
            trailWidth={10}
            strokeLinecap="round"
            gapPosition="right"
          />
        </div>
      </div>
    </div>
  );
};
