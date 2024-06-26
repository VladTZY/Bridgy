import { useState } from "react";
import getExtension from "../../utils/getExtension";

import { styled } from "@mui/material/styles";
import { Box, Typography, Button, Stack } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import TableChartIcon from "@mui/icons-material/TableChart";
import axiosInstance from "../../utils/axiosInstance";
import { MultipleStudentsModal } from "./MultipleStudentsModal";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const AddMultipleStudentsCard = () => {
  const [file, setFile] = useState(null);
  const [colors, setColors] = useState({
    color: "blue.light",
    hoverColor: "blue.main",
  });
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    title: "",
    body: "",
  });

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `BridgySampleTable.xlsx`;
    link.href = "../../BridgySampleTable.xlsx";
    link.click();
  };

  const addFile = (e) => {
    const filename = e.target.files[0].name;
    const extension = getExtension(filename);

    if (extension != "xlsx" && extension != "csv") {
      setColors({ color: "red.light", hoverColor: "red.main" });
      return;
    }

    setFile(e.target.files[0]);
    setColors({ color: "green.light", hoverColor: "green.main" });
  };

  const submitTable = () => {
    if (!file) {
      setModal(true);
      setModalMessage({
        title: "Ops.. something went wrong",
        body: "Please add a table",
      });
    }

    const formData = new FormData();
    formData.append("file", file);

    axiosInstance
      .post("/school/create_multiple_students", formData)
      .then((res) => {
        console.log("success");
        setFile(null);
        setColors({
          color: "blue.light",
          hoverColor: "blue.main",
        });
        setModal(true);
        setModalMessage({
          title: "Students created",
          body: "You successfully created the students in the table",
        });
      })
      .catch((error) => {
        console.log(error);
        setModal(true);
        setModalMessage({
          title: "Ops.. something went wrong",
          body: error.response.data,
        });
      });
  };

  return (
    <Stack
      sx={{
        p: 2,
        bgcolor: "white.main",
        borderRadius: 5,
        height: 1,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight="700"
          sx={{
            fontSize: {
              xs: "22px",
              lg: "26px",
              xl: "30px",
            },
          }}
        >
          Create multiple students
        </Typography>
      </Box>

      <Stack sx={{ mt: 3, flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ ml: 1 }}>
            Please respect the sample table format and only .xlsx and .csv files
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "blue.light",
              color: "blue.contrastText",
              mt: 1,
              ml: 1,
              px: 2,
              py: 1,
              fontSize: "12px",
              borderRadius: 8,
              textTransform: "none",
              ":hover": {
                bgcolor: "blue.main",
              },
            }}
            startIcon={<CloudDownloadIcon />}
            onClick={onDownload}
          >
            Download sample table
          </Button>
        </Box>

        <Box sx={{ mt: 3, width: 1 }}>
          <Button
            component="label"
            variant="contained"
            sx={{
              bgcolor: colors.color,
              color: "blue.contrastText",
              px: 4,
              py: 2,
              width: 1,
              fontSize: "18px",
              borderRadius: 8,
              textTransform: "none",
              ":hover": {
                bgcolor: colors.hover,
              },
            }}
            startIcon={<TableChartIcon />}
          >
            Upload your table
            <VisuallyHiddenInput type="file" onChange={addFile} />
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "blue.light",
              color: "blue.contrastText",
              mt: 1,
              px: 4,
              py: 2,
              width: 1,
              fontSize: "18px",
              borderRadius: 8,
              textTransform: "none",
              ":hover": {
                bgcolor: "blue.main",
              },
            }}
            onClick={submitTable}
          >
            Submit table
          </Button>
        </Box>
      </Stack>
      {modal && (
        <MultipleStudentsModal
          setModal={setModal}
          title={modalMessage.title}
          body={modalMessage.body}
        />
      )}
    </Stack>
  );
};
