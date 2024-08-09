import React, { useState } from 'react';
import "../styles/dropDown.css"

const DropDownSexoNC = () => {
    const [selectDropDown, setSelectDropDown] = useState("");
  return (
    <select className="select-sexo-novo-paciente" value={selectDropDown} onChange={(e) => setSelectDropDown(e.target.value)}>
        <option value={""} >Selecione:</option>
        <option value={"feminino"} >Feminino</option>
        <option value={"masculino"} >Masculino</option>
    </select>
  )
}

export default DropDownSexoNC;
