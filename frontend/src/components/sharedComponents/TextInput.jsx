import { TextField } from "@mui/material";

export const TextInput = ({ id, name, value, error, updateFormData }) => {
  return (
    <TextField
      error={error}
      id={id}
      label={name}
      variant="outlined"
      sx={{
        width: 1,
      }}
      value={value}
      onChange={(e) => updateFormData(e)}
    />
  );
};
