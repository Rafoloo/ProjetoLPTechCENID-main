import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Modal.css";

const animationDuration = 400;
const autoCloseDelay = 3000; // Alterado para 5000ms (5 segundos)

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
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
    setRedirect(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRedirect(true);
  };

  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        navigate("/paciente");
      }, autoCloseDelay); // Alterado para autoCloseDelay
    }
  }, [redirect, navigate]);

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
                visibility: redirect ? "hidden" : "visible",
              }}
            >
              Salvar
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
                Salvo com sucesso!
              </Typography>
            </Box>
          </Modal>
        )}
      </Transition>
    </div>
  );
}
