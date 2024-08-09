import React, { useState } from "react";
import "../styles/dropDown.css";
import { RiArrowDropDownLine } from "react-icons/ri"
import Estagio1 from "../assets/Estagio1.jpg";
import Estagio2 from "../assets/Estagio2.jpg";
import Estagio3 from "../assets/Estagio3.jpg";
import Estagio4 from "../assets/Estagio4.jpg";
import Estagio5 from "../assets/Estagio5.jpg";


const DropDownTabelaSintomasMed = () => {
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(!showElement);

  return (
    <div>
      <button title="Imagens para verificar o desenvolvimento masculino." onClick={showOrHide} className="button-desenvolviment-masc"><p className="p-desenvolvimento-masc">ESTÁGIOS DE DESENVOLVIMENTO MASCULINO<RiArrowDropDownLine className="seta-dropdown-med"/></p></button>
      { showElement ? 
      <table className="table-tr-td-queixas-sintomas">
        <tr>
            <td className="estagioo-desen">Estágio de desenvolvimento da genitália</td>
            <td className="estagioo-desen">Estágio de desenvolvimento dos pelos pubianos</td>
        </tr>
        <tr>
            <td className="img-estagio1"><img src={Estagio1} width={200} alt="Logo" className="image-estagio-1"/><p className="estagio1">Estágio 1 </p><p className="display">- Genitália pré-puberal ou infantil.</p></td>
            <td className="img-estagio-2"><div className="div-estagio1"><img src={Estagio1} width={200} className="image-estagio-1"></img><p className="estagio1">Estágio 1 </p><p className="display">- Pelugem pré-puberal ou infantil, nenhum pelo pubiano &#40;P1&#41;.</p></div></td>
        </tr>
        <tr>
          <td className="img-estagio1"><img src={Estagio2} width={200} alt="Logo" className="image-estagio-1"/><p className="estagio2">Estágio 2 </p><p className="display">- Aparece um afinamento e hipervascularização da bolsa escrotal, e aumento do volume testicular sem aumento do tamanho do pênis &#40;G2&#41;.</p></td>
          <td className="img-estagio-2"><div className="div-estagio1"><img src={Estagio2} width={200} className="image-estagio-1"></img><p className="estagio2-2">Estágio 2 </p><p className="display">- Ocorre o início do crescimento de alguns pelos finos, longos, escuros e lisos na linha medial ou na base do pênis &#40;P2&#41;.</p></div></td>
        </tr>
        <tr>
          <td className="img-estagio1"><img src={Estagio3} width={200} alt="Logo" className="image-estagio-1"/><p className="estagio3">Estágio 3 </p><p className="display">- Ocorre aumento da bolsa escrotal e do volume testicular, com o aumento do comprimento do pênis &#40;G3&#41;. </p></td>
          <td className="img-estagio-2"><div className="div-estagio1"><img src={Estagio3} width={200} className="image-estagio-1"></img><p className="estagio3-3">Estágio 3 </p><p className="display">- Aparecimento de maior quantidade de pelos, mais escuros e mais espessos, e discretamente encaracolados, com distribuição em toda a região pubiana &#40;P3&#41;.</p></div></td>
        </tr>
        <tr>
        <td className="img-estagio1"><img src={Estagio4} width={200} alt="Logo" className="image-estagio-1"/><p className="estagio4">Estágio 4 </p><p className="display">- Maior aumento e hiperpigmentação da bolsa escrotal, maior volume testicular com aumento do pênis em comprimento e diâmetro, e desenvolvimento da glande &#40;G4&#41;. </p></td>
        <td className="img-estagio-2"><div className="div-estagio1"><img src={Estagio4} width={200} className="image-estagio-1"></img><p className="estagio4-4">Estágio 4 </p><p className="display">- Pelos escuros, espessos, encaracolados, do tipo adulto, mas ainda em menor quantidade na sua distribuição na região pubiana &#40;P4&#41;.</p></div></td>
        </tr>
        <tr>
        <td className="img-estagio1"><img src={Estagio5} width={200} alt="Logo" className="image-estagio-1"/><p className="estagio1">Estágio 5 </p><p className="display">- Genitália adulta em tamanho e forma e volume testicular &#40;G5&#41;.</p></td>
        <td className="img-estagio-2"><div className="div-estagio1"><img src={Estagio5} width={200} className="image-estagio-1"></img><p className="estagio4-4">Estágio 5 </p><p className="display">- Pelos do tipo adulto, em maior quantidade, cobrindo toda a região pubiana, e estendendo-se até a superficie interna das coxas &#40;P5&#41;.</p></div></td>
        </tr>
        </table> : null }
    </div>
  );
};

export default DropDownTabelaSintomasMed;