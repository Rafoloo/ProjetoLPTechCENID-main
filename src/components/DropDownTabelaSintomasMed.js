import React, { useState } from "react";
import "../styles/dropDown.css";
import { RiArrowDropDownLine } from "react-icons/ri"

const DropDownTabelaSintomasMed = () => {
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(!showElement);

  return (
    <div>
      <button onClick={showOrHide} className="button-queixas-sintomas"><p className="p-queixas-sintomas">QUEIXAS E SINTOMAS<RiArrowDropDownLine className="seta-dropdown-med"/></p></button>
      { showElement ? 
      <table className="table-tr-td-queixas-sintomas">
        <tr>
          <td className="table-queixas-sintomas">Polidipsia</td>
          <td className="table-queixas-sintomas">Dor abdominal</td>
          <td className="table-queixas-sintomas">Perda de apetite</td>
        </tr>
        <tr>
          <td>Poliúria</td>
          <td>Rubor facial</td>
          <td>Ansiedade ou depressão</td>
        </tr>
        <tr>
          <td>Polifagia</td>
          <td>Fadiga/prostração</td>
          <td>Irritação</td>
        </tr>
        <tr>
          <td>Hálito cetônico</td>
          <td>Sonolência</td>
          <td>Tontura</td>
        </tr>
        <tr>
          <td>Naúseas, vômitos</td>
          <td>Tremores</td>
          <td>Fala confusa</td>
        </tr>
        <tr>
          <td>Respiração rápida</td>
          <td>Fraqueza</td>
          <td>Esquecimento, confusão</td>
        </tr>
        <tr>
          <td>Cefaléia</td>
          <td>Sudorese</td>
          <td>Falta de concentração</td>
        </tr>
        <tr>
          <td>Visão turva</td>
          <td>Palpitação</td>
          <td>Convulsão</td>
        </tr>
        <tr>
          <td>Visão dupla</td>
          <td>Fome</td>
          <td>Perda da consciência</td>
        </tr>
        </table> : null }
    </div>
  );
};

export default DropDownTabelaSintomasMed;