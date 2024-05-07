import { Modal, Box, Typography, Divider, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white.main",
  borderRadius: 6,
  boxShadow: 24,
  px: 4,
  pt: 4,
  pb: 2,
};

export const ObjectiveChangeModal = ({ setModal, modalMessage }) => {
  return (
    <Modal
      open={true}
      onClose={() => setModal(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box>
        <Box sx={{ ...style, width: 400 }}>
          <Typography fontWeight="bold" variant="h5">
            Objective change
          </Typography>
          <Divider color="black" sx={{ mt: 2 }} />
          <Typography sx={{ mt: 2 }} variant="h6">
            {modalMessage}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Button
              sx={{
                color: "blue.light",
                borderRadius: 8,
                textTransform: "none",
              }}
              onClick={() => setModal(false)}
            >
              Ok
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
