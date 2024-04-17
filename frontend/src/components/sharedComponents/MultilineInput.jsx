import { TextField } from "@mui/material";

export const MultilineInput = ({ id, name, value, error, updateFormData }) => {
  return (
    <TextField
      error={error}
      id={id}
      label={name}
      variant="outlined"
      multiline
      rows={4}
      sx={{
        width: 1,
      }}
      value={value}
      onChange={(e) => updateFormData(e)}
    />
  );
};
