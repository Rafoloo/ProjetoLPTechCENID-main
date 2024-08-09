import { useState , useContext} from "react";
import { Transition } from "react-transition-group";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../styles/Modal.css";
import { AuthContext } from "../contexts/Auth/AuthContext";

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

export default function BasicButtons({id, nome, cpf, rg, sus, data_nascimento, telefone, selectsexo, endereco, numero, 
  nome_responsavel, cpf_responsavel, rg_responsavel, parentesco_responsavel, telefone_responsavel, ocupacao_responsavel,
  data_nascimento_responsavel}) {
  const [open, setOpen] = useState(false);
  const auth = useContext(AuthContext);

  const handleOpen = async () => {
    const DataNascimento = new Date(data_nascimento).toISOString().split('T')[0];
    const DataNascimentoResponsavel = new Date(data_nascimento_responsavel).toISOString().split('T')[0];
    await auth.atualizar(id, nome, cpf, rg, sus, DataNascimento, telefone, selectsexo, endereco, numero, 
      nome_responsavel, cpf_responsavel, rg_responsavel, parentesco_responsavel, telefone_responsavel, ocupacao_responsavel,
      DataNascimentoResponsavel);
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
                Alteração feita com sucesso!
              </Typography>
            </Box>
          </Modal>
        )}
      </Transition>
    </div>
  );
}
