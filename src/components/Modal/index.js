import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function BasicModal(props) {
  return (
    <Box>
      <Dialog onClick={props.onConfirm} open={props.opened}>
        <DialogTitle>Sua solicitação foi enviada!!</DialogTitle>
        <DialogContent>Entraremos em contato com você em breve!</DialogContent>
        <DialogActions>
          <Button onClick={props.onConfirm}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
