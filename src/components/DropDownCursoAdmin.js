import React, { useState } from 'react';
import "../styles/dropDown.css";

const DropDownCursoAdmin = ({ selectDropDown, setSelectDropDown }) => {
  return (
    <select className="curso-estagiario" value={selectDropDown} onChange={(e) => setSelectDropDown(e.target.value)}>
      <option value={""} >Selecione o curso:</option>
      <option value={"medicina"} >Medicina</option>
      <option value={"enfermagem"} >Enfermagem</option>
      <option value={"educacaofisica"} >Educação Física</option>
      <option value={"psicologia"} >Psicologia</option>
      <option value={"nutricao"} >Nutrição</option>
    </select>
  );
};

export default DropDownCursoAdmin;
