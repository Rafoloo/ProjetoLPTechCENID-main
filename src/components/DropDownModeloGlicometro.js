import React, { useState } from 'react';
import "../styles/dropDown.css"

const DropDownModeloGlicometro = () => {
    const [selectDropDown, setSelectDropDown] = useState("");
  return (
    <select className="marca-modelo-glicometro" value={selectDropDown} onChange={(e) => setSelectDropDown(e.target.value)}>
        <option value={""} >Selecione o modelo:</option>
        <option value={"accuCheckActive"} >Accu-Check Active</option>
        <option value={"accuCheckGuide"} >Accu-Check Guide</option>
        <option value={"onCallPlus"} >On Call Plus</option>
        <option value={"oneTouch"} >One Touch</option>
        <option value={"accuCheckPerforma"} >Accu-Check Performa</option>
        <option value={"gTech"} >G-Tech</option>
        <option value={"freestyleOptium"} >FreeStyle Optium</option>
        <option value={"freestyleLite"} >FreeStyle Lite</option>
        <option value={"injex"} >Injex</option>
        <option value={"contourPlus"} >Contour Plus</option>
        <option value={"outros"} >Outros</option>
    </select>
  )
}

export default DropDownModeloGlicometro;
