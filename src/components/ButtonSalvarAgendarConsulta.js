import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { sx } from "@mui/system";
import "../styles/Modal.css";

const animationDuration = 300;
const autoCloseDelay = 3000; // Tempo em milissegundos para o modal fechar automaticamente

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

const closeButtonStyle = {
  position: "absolute",
  top: 8,
  right: 8,
  cursor: "pointer",
  transition: "transform 0.3s",
};

const closeButtonHoverStyle = {
  "&:hover": {
    color: "red",
    transform: "translateX(1px)",
  },
};

export default function ButtonSalvar({ handleRegister, dataconsulta, hora, espmed, searchResults }) {
  const [open, setOpen] = useState(false);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  let autoCloseTimer;

  const handleOpen = () => {
    // Verifica se todos os campos necessários estão preenchidos
    if (dataconsulta && hora && espmed) {
      if (!isRegistrationSuccess) {
        console.log('Agendando consulta...');
        handleRegister(); // Chama a função handleRegister do componente pai
        setIsRegistrationSuccess(true); // Define como verdadeira quando o agendamento for bem-sucedido
        autoCloseTimer = setTimeout(() => {
          handleClose();
        }, autoCloseDelay);
      }
    } else {
      alert('Todos os campos são obrigatórios');
    }
  };

  const handleClose = () => {
    clearTimeout(autoCloseTimer);
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
              Salvar
            </Button>
          </div>
        </div>
      </Stack>
      <Transition in={isRegistrationSuccess} timeout={animationDuration}>
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
                {"Consulta agendada com sucesso!"}
              </Typography>
              <Button onClick={() => window.location.href = `/paciente?cpf=${searchResults[0]?.cpf}`}>Fechar</Button>
            </Box>
          </Modal>
        )}
      </Transition>
    </div>
  );
}
