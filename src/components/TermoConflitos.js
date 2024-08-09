import React from "react";
import "../styles/Processos-css/TermoConflitos.css";

const TermoConflitos = () => {
  return (
    <div className="div-termo-conflito">
      <div className="declaracao">
        <div className="div-declaracao">
          <p>Declaração</p>
        </div>
        <div className="texto-div-declaracao">
          <p>
            Eu <input type={"text"} className="input-name-declaracao"></input>,
            inscrito no CRM n°{" "}
            <input type={"number"} className="number-crm-declaracao"></input>,
            declaro a inesistência de conflito de interesses em relação á
            industria farmacêutica e/ou pesquisa Clínica.
          </p>
        </div>
        <div className="div-sem-mais">
          <p>Sem mais,</p>
        </div>
        <div className="div-sem-mais">
          <p>
            Marília, <input type={"number"} className="dia-input-termo"></input>{" "}
            de <input type={"text"} className="mes-input-termo"></input> de 202
            <input type={"number"} className="ano-input-termo"></input>
          </p>
        </div>
        <div className="div-sem-mais-assinatura">
          <p className="assinatura-termo">Assinatura:</p>
          <div>
            <p className="p-input-assinatura"></p>
          </div>
          <div className="div-centraç-termo">
            <input
              type={"text"}
              className="input-assinatura"
              placeholder="nome"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermoConflitos;
