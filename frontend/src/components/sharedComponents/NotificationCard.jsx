import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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
    icon: HelpOutlineIcon,
    secondary: "Make sure to accept or reject the request!",
  },
};

export const NotificationCard = ({ type, message, studentId, eventId }) => {
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
          <CheckCircleOutlineIcon />
        </ListItemIcon>
        <ListItemText
          primary={message}
          secondary={"Do not forget to show up!"}
        />
      </ListItem>
    </Link>
  );
};
