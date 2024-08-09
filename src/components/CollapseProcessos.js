import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckListRapidaProcessos from "./CheckListRapidaProcessos.js";
import ControleGlicemia from "./ControleGlicemia";
import TermoConflitos from "./TermoConflitos.js";
import ReceitaInsulinaBasal from "./ReceitaInsulinaBasal.js";
import ReceitaInsulinaRapida from "./ReceitaInsulinaRapida";
import RelatorioManutencaoInsulina from "./RelatorioManutencaoInsulina";
import RelatorioPrescricaoInicialInsulina from "./RelatorioPrescricaoInicialInsulina";
import ButtonSalvar from "./ButtonSalvarProcessos";
import "../styles/Collapse.css";

export default function SimpleAccordion() {
  return (
    <div className="collapse-collapse">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Controle Glicemia</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ControleGlicemia />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="accordion">Receita Insulina Basal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReceitaInsulinaBasal />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Check List Rápida</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckListRapidaProcessos />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Receita Insulina Rápida</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReceitaInsulinaRapida />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Relatório Manutenção de Insulina</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RelatorioManutencaoInsulina />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Relatório Prescrição Inicial Insulina</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RelatorioPrescricaoInicialInsulina />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Termo de Conflito</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TermoConflitos />
          <ButtonSalvar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Processo Insulina Lenta</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <a
              href="https://acesse.one/ProcessoInsulinaLenta"
              target="_blank"
              className="link-processo-lenta"
            >
              Processo Insulina Lenta - clique aqui!
            </a>
          </div>
          {/* <ButtonSalvar /> */}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>LME 6 Meses</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <a
              href="https://l1nk.dev/LME6Meses"
              target="_blank"
              className="link-processo-lenta"
            >
              LME 6 Meses - clique aqui!
            </a>
          </div>
          {/* <ButtonSalvar /> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
