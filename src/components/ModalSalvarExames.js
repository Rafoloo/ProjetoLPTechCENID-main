import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../styles/Modal.css";

const autoCloseDelay = 3000; // Tempo em milissegundos para o modal fechar automaticamente

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
  let autoCloseTimer;

  useEffect(() => {
    return () => {
      clearTimeout(autoCloseTimer);
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
    autoCloseTimer = setTimeout(() => {
      handleClose();
    }, autoCloseDelay);
  };

  const handleClose = () => {
    clearTimeout(autoCloseTimer);
    setOpen(false);
  };

  return (
    <div className="button">
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
              Salvar
            </Button>
          </div>
        </div>
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Exame salvo com sucesso!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
