import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function BasicModal(props) {
  return (
    <Box>
      <Modal
        onClick={props.onConfirm}
        open={props.opened}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          xs={10} md={8} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
           

            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sua solicitação foi enviada!!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Entraremos em contato com você em breve!
          </Typography>
          <Button onClick={props.onConfirm}>OK</Button>
        </Box>
      </Modal>
    </Box>
  );
}
