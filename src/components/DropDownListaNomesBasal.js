import React, { useState } from "react";
import "../styles/dropDown.css";

const DropDownListaNomesBasal = () => {
  const [selectDropDown, setSelectDropDown] = useState("");
  return (
    <select
      className="select-basal "
      value={selectDropDown}
      onChange={(e) => setSelectDropDown(e.target.value)}
    >
      <option value={""}>Selecione o nome:</option>
      <option value={"levemir"}>Levemir &#40;Detemir&#41;</option>
      <option value={"lantus"}>Lantus &#40;Glargina&#41;</option>
      <option value={"basaglar"}>Basaglar &#40;Glargina&#41;</option>
      <option value={"toujeo"}>Toujeo &#40;Glargina U-300&#41;</option>
      <option value={"tresiba"}>Tresiba &#40;Degludeca&#41;</option>
      <option value={"novolinN"}>Novolin N &#40;NPH&#41;</option>
      <option value={"humulinN"}>Humulin N &#40;NPH&#41;</option>
      <option value={"insunormN"}>Insunorm N &#40;NPH&#41;</option>
      <option value={"xultophy"}>Xultophy</option>
      <option value={"soliqua"}>Soliqua</option>
      <option value={"novomix30"}>Novomix 30</option>
      <option value={"humalogMix25"}>Humalog Mix 25</option>
      <option value={"humalogMix50"}>Humalog Mix 50</option>
      <option value={"humulin70/30"}>Humulin 70/30</option>
      <option value={"insulinaUltrarapidaBomba"}>
        Insulina ultrarápida em bomba
      </option>
      <option value={"glargilin"}>Glargilin</option>
    </select>
  );
};

export default DropDownListaNomesBasal;
