import {
  ListItemIcon,
  ListItemText,
  ListItem,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const notificationsMapping = {
  ACCEPTED: {
    icon: CheckCircleOutlineIcon,
    secondary: "Do not forget to show up!",
    color: "green.light",
  },
  REJECTED: {
    icon: DoNotDisturbIcon,
    secondary: "Try joining other similar events!",
    color: "red.light",
  },
  STUDENT_REQUESTED: {
    icon: AssignmentIndIcon,
    secondary: "Make sure to accept or reject the request!",
    color: "blue.main",
  },
  STUDENT_FINISHES: {
    icon: CheckBoxIcon,
    secondary: "Your student finished",
    color: "green.light",
  },
};

export const NotificationCard = ({ type, message, studentId, eventId }) => {
  const value = notificationsMapping[type];

  if (value) {
    return (
      <Link to={`/opportunity/${eventId}`}>
        <ListItem
          sx={{
            bgcolor: "white.main",
            borderRadius: 6,
            mb: 2,
            ":hover": {
              boxShadow: 4,
            },
          }}
        >
          <ListItemIcon>
            <value.icon fontSize="large" sx={{ color: value.color }} />
          </ListItemIcon>
          <ListItemText primary={message} secondary={value.secondary} />
        </ListItem>
      </Link>
    );
  }
};
