import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

import {
  Box,
  Typography,
  Select,
  MenuItem,
  Toolbar,
  TextField,
  Button,
} from "@mui/material";
import { ObjectiveChangeModal } from "./ObjectiveChangeModal";

export const ObjectiveDash = () => {
  const [unchangedObjective, setUnchangedObjective] = useState({
    objectiveType: "",
    objective: 0,
  });
  const [objective, setObjective] = useState({
    objectiveType: "",
    objective: 0,
  });
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/school/get_objective`)
      .then((res) => {
        setObjective({
          objectiveType: res.data.objectiveType,
          objective: res.data.objective,
        });
        setUnchangedObjective({
          objectiveType: res.data.objectiveType,
          objective: res.data.objective,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = () => {
    axiosInstance
      .post(`/school/set_objective`, {
        objectiveType: objective.objectiveType,
        objective: objective.objective,
      })
      .then((res) => {
        setObjective({
          objectiveType: res.data.objectiveType,
          objective: res.data.objective,
        });
        setUnchangedObjective({
          objectiveType: res.data.objectiveType,
          objective: res.data.objective,
        });
        setModal(true);
        setModalMessage("Objective set successfully");
      })
      .catch((error) => {
        setModal(true);
        setModalMessage(error.message);
      });
  };

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="700"
        sx={{
          flexGrow: 1,
          fontSize: {
            xs: "22px",
            lg: "26px",
            xl: "30px",
          },
        }}
      >
        Your objective
      </Typography>
      <Box sx={{ mt: 1, ml: 2, width: "330px" }}>
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Objective Type:{" "}
          </Typography>

          <Select
            id="objType"
            value={objective.objectiveType}
            onChange={(e) => {
              setObjective((prev) => ({
                ...prev,
                objectiveType: e.target.value,
              }));
            }}
            size="small"
            sx={{ minWidth: "140px", ml: 2 }}
          >
            <MenuItem value={"HOURS"}>Hours</MenuItem>
            <MenuItem value={"EVENTS"}>Events</MenuItem>
          </Select>
        </Toolbar>
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Objective Quantity:{" "}
          </Typography>

          <TextField
            id="obj"
            value={objective.objective}
            onChange={(e) => {
              setObjective((prev) => ({
                ...prev,
                objective: e.target.value,
              }));
            }}
            size="small"
            type="number"
            sx={{ width: "140px", ml: 2 }}
          ></TextField>
        </Toolbar>

        {(objective.objectiveType != unchangedObjective.objectiveType ||
          objective.objective != unchangedObjective.objective) && (
          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "blue.light",
                color: "blue.contrastText",
                px: 2,
                py: 1,
                fontSize: "18px",
                borderRadius: 8,
                textTransform: "none",
                ":hover": {
                  bgcolor: "blue.main",
                },
              }}
              onClick={handleSubmit}
            >
              Save objective
            </Button>
          </Box>
        )}
      </Box>
      {modal && (
        <ObjectiveChangeModal setModal={setModal} modalMessage={modalMessage} />
      )}
    </Box>
  );
};
