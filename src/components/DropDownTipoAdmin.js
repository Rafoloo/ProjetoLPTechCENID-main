import React, { useState } from 'react';
import "../styles/dropDown.css";

const DropDownTipoAdmin = ({selectDropDown1, setSelectDropDown1}) => {
    return (
      <select className="tipo-estagiario" value={selectDropDown1} onChange={(e) => setSelectDropDown1(e.target.value)}>
          <option value={""} >Selecione o tipo:</option>
          <option value={"estagiario"} >Estagiário</option>
          <option value={"professor"} >Professor</option>
      </select>
    )
}

export default DropDownTipoAdmin
