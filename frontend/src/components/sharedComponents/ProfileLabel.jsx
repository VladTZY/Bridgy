import { Typography, Stack, TextField } from "@mui/material";
import React from "react";

export const ProfileLabel = ({ text, value, setValue, rows, disabled }) => {
  return (
    <Stack direction="column">
      <Typography variant="h8" fontWeight="bold" color="gray">
        {text}
      </Typography>
      <TextField
        value={value}
        onChange={(e) => setValue(e)}
        multiline
        rows={rows}
        inputProps={{ readOnly: disabled }}
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
