import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { InputAdornment } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";

export const DateInput = ({ id, name, value, error, updateFormData }) => {
  return (
    <DateTimePicker
      error={error}
      id={id}
      label={name}
      value={value}
      disableOpenPicker
      sx={{
        width: 1,
      }}
      slotProps={{
        textField: {
          InputProps: {
            startAdornment: (
              <InputAdornment position="start">
                <TodayIcon sx={{ color: "blue.main" }} />
              </InputAdornment>
            ),
          },
        },
      }}
      onChange={(newValue) => {
        const trick = {
          target: {
            value: newValue,
            id: id,
          },
        };
        updateFormData(trick);
      }}
    />
  );
};
