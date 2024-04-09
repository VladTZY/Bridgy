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

const notificationsMapping = {
  ACCEPTED: {
    icon: CheckCircleOutlineIcon,
    secondary: "Do not forget to show up!",
  },
  REJECTED: {
    icon: DoNotDisturbIcon,
    secondary: "Try joining other similar events!",
  },
  STUDENT_REQUESTED: {
    icon: AssignmentIndIcon,
    secondary: "Make sure to accept or reject the request!",
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
              boxShadow: 10,
            },
          }}
        >
          <ListItemIcon>
            <value.icon sx={{ color: "blue.main" }} />
          </ListItemIcon>
          <ListItemText primary={message} secondary={value.secondary} />
        </ListItem>
      </Link>
    );
  }

  /*return (
    <ListItem
      sx={{
        bgcolor: "white.main",
        borderRadius: 6,
        mb: 2,
        ":hover": {
          boxShadow: 10,
        },
      }}
    >
      <CircularProgress />
    </ListItem>
  );*/
};
