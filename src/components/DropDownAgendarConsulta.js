import React, { useState } from "react";
import "../styles/dropDown.css";

const DropDownAgendarConsulta = () => {
  const [selectDropDown, setSelectDropDown] = useState("");
  return (
    <select
      className="agendar-consulta-dropdown"
      value={selectDropDown}
      onChange={(e) => setSelectDropDown(e.target.value)}
    >
      <option value={""}>Selecione a especialidade:</option>
      <option value={"Medicina"}>Medicina</option>
      <option value={"enfermagem"}>Enfermagem</option>
      <option value={"psicologia"}>Psicologia</option>
      <option value={"nutricao"}>Nutrição</option>
      <option value={"educacaoFisica"}>Educação Física</option>
    </select>
  );
};

export default DropDownAgendarConsulta;
