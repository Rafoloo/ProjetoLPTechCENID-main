import React, { useState } from "react";
import "../styles/dropDown.css";

const DropDownGeral = () => {
  const [selectDropDown, setSelectDropDown] = useState("");
  return (
    <select
      className="curso-estagiario"
      value={selectDropDown}
      onChange={(e) => setSelectDropDown(e.target.value)}
    >
      <option value={""}>Selecione o curso:</option>
      <option value={"Medicina"}>Medicina</option>
      <option value={"enfermagem"}>Enfermagem</option>
      <option value={"psicologia"}>Psicologia</option>
      <option value={"nutricao"}>Nutrição</option>
      <option value={"educacaoFisica"}>Educação Física</option>
    </select>
  );
};

export default DropDownGeral;
