import { Typography, Stack, TextField } from "@mui/material";
import React from "react";

export const ProfileLabel = ({ text, value }) => {
  return (
    <Stack direction="column">
      <Typography variant="h8" fontWeight="bold" color="gray">
        {text}
      </Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={value}
        inputProps={{ disabled: true }}
        sx={{
          pt: 0.5,
          input: {
            color: "black",
            fontWeight: 650,
          },
        }}
      />
    </Stack>
  );
};