import { TextField, InputAdornment } from "@mui/material";

export const IconInput = ({ id, name, value, error, icon, updateFormData }) => {
  return (
    <TextField
      error={error}
      id={id}
      label={name}
      color="secondary"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      sx={{ width: 1 }}
      variant="outlined"
      value={value}
      onChange={(e) => updateFormData(e)}
    />
  );
};
