import React, { useState } from "react";
import "../styles/dropDown.css";

const DropDownListaNomesBolus = () => {
  const [selectDropDown, setSelectDropDown] = useState("");
  return (
    <select
      className="select-basal "
      value={selectDropDown}
      onChange={(e) => setSelectDropDown(e.target.value)}
    >
      <option value={""}>Selecione o nome:</option>
      <option value={"fiasp"}>FIASP &#40;arparte&#41;</option>
      <option value={"novorapid"}>Novorapid &#40;asparte&#41;</option>
      <option value={"humalog"}>Humalog &#40;lispro&#41;</option>
      <option value={"apidra"}>Apidra &#40;Glulisina&#41;</option>
      <option value={"novolinR"}>Novolin R &#40;regular&#41;</option>
      <option value={"humulinR"}>Humulin R &#40;regular&#41;</option>
      <option value={"insunorm"}>Insunorm &#40;regular&#41;</option>
    </select>
  );
};

export default DropDownListaNomesBolus;
