import React, { useState } from "react";
import { Transition } from "react-transition-group";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../styles/Modal.css";

const animationDuration = 400;
const autoCloseDelay = 3000;

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { display: "none" },
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 10,
  p: 4,
  borderRadius: 6,
};

export default function BasicButtons() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, autoCloseDelay);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="button1">
      <Stack spacing={2} direction="row" className="processosAtendimentoBotao">
        <div className="separacaoBotoes">
          <div className="centralizar">
            <Button
              variant="contained"
              className="detalhesAberto"
              onClick={handleOpen}
              sx={{
                bgcolor: "#0E426E",
                fontFamily: "'Lexend Deca', sans-serif",
              }}
            >
              Imprimir
            </Button>
          </div>
        </div>
      </Stack>
      <Transition in={open} timeout={animationDuration}>
        {(state) => (
          <Modal
            open={state === "entered"}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{ ...style, ...transitionStyles[state] }}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center" }}
              >
                O processo será impresso!
              </Typography>
            </Box>
          </Modal>
        )}
      </Transition>
    </div>
  );
}
