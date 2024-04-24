import { Modal, Box, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white.main",
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
};

export const CreationModal = ({ id, setModal, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setModal(false);
    navigate(`/opportunity/${id}`);
  };

  return (
    <Modal
      open={true}
      onClose={handleClick}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box>
        <Box sx={{ ...style, width: 400 }}>
          {" "}
          <Typography fontWeight="bold" variant="h5">
            {title}
          </Typography>
          <Divider color="black" sx={{ mt: 2 }} />
          <Typography sx={{ mt: 2 }} variant="h6">
            The event was created successfully!
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};
