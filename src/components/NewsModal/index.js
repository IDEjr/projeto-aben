/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function NewsModal(props) {
  return (
    <Box>
      <Dialog onClick={props.onConfirm} open={props.opened}>
        <DialogTitle>{props.newsTitle}</DialogTitle>
        <DialogContent>{props.newsContent}</DialogContent>
        <DialogActions>
          <Button onClick={props.onConfirm}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
