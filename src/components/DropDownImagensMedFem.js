import React, { useState } from "react";
import "../styles/dropDown.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import EstagioMama1 from "../assets/EstagioMama1.jpg";
import EstagioPeloFem1 from "../assets/EstagioPeloFem1.jpg";
import EstagioPeloFem2 from "../assets/EstagioPeloFem2.jpg";
import EstagioMama2 from "../assets/EstagioMama2.jpg";
import EstagioMama3 from "../assets/EstagioMama3.jpg";
import EstagioPeloFem3 from "../assets/EstagioPeloFem3.jpg";
import EstagioMama4 from "../assets/EstagioMama4.jpg";
import EstagioPeloFem4 from "../assets/EstagioPeloFem4.jpg";
import EstagioMama5 from "../assets/EstagioMama5.jpg";
import EstagioPeloFem5 from "../assets/EstagioPeloFem5.jpg";

const DropDownTabelaSintomasMed = () => {
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(!showElement);

  return (
    <div>
      <button
        title="Imagens para verificar o desenvolvimento feminino."
        onClick={showOrHide}
        className="button-desenvolviment-masc"
      >
        <p className="p-desenvolvimento-masc">
          ESTÁGIOS DE DESENVOLVIMENTO FEMININO
          <RiArrowDropDownLine className="seta-dropdown-med" />
        </p>
      </button>
      {showElement ? (
        <table className="table-tr-td-queixas-sintomas">
          <tr>
            <td className="estagioo-desen">
              Estágio de desenvolvimento das mamas
            </td>
            <td className="estagioo-desen">
              Estágio de desenvolvimento dos pelos pubianos
            </td>
          </tr>
          <tr>
            <td className="img-estagio1">
              <img
                src={EstagioMama1}
                width={200}
                alt="Logo"
                className="image-estagio-1"
              />
              <p className="estagiomama1">Estágio 1 </p>
              <p className="display">- Mamas infantis. &#40;M1&#41;</p>
            </td>
            <td className="img-estagio-2">
              <div className="div-estagio1">
                <img
                  src={EstagioPeloFem1}
                  width={200}
                  className="image-estagio-1"
                ></img>
                <p className="estagiopelofem1">Estágio 1 </p>
                <p className="display">
                  - Ausência de pelos, ou pelugem natural. &#40;P1&#41;.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="img-estagio1">
              <img
                src={EstagioMama2}
                width={200}
                alt="Logo"
                className="image-estagio-1"
              />
              <p className="estagiomama2">Estágio 2 </p>
              <p className="display">
                - O broto mamário forma-se com uma pequena saliência com
                elevação da mama e da papila e ocorre o aumento do diâmetro
                areolar. Melhor visualizar lateralmente. &#40;M2&#41;
              </p>
            </td>
            <td className="img-estagio-2">
              <div className="div-estagio1">
                <img
                  src={EstagioPeloFem2}
                  width={200}
                  className="image-estagio-1"
                ></img>
                <p className="estagiopelofem2">Estágio 2 </p>
                <p className="display">
                  - Pelos iniciam-se com uma pelugem fina, longa, um pouco mais
                  escura, na linha central da região pubiana. &#40;P2&#41;
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="img-estagio1">
              <img
                src={EstagioMama3}
                width={200}
                alt="Logo"
                className="image-estagio-1"
              />
              <p className="estagiomama3">Estágio 3 </p>
              <p className="display">
                - Maior aumento da aréola e da papila sem separação do contorno
                da mama. &#40;M3&#41;{" "}
              </p>
            </td>
            <td className="img-estagio-2">
              <div className="div-estagio1">
                <img
                  src={EstagioPeloFem3}
                  width={200}
                  className="image-estagio-1"
                ></img>
                <p className="estagiopelofem3">Estágio 3 </p>
                <p className="display">
                  - Pelos em maior quantidade, mais escuros e mais espessos, e
                  discretamente encaracolados, com distribuição em toda a região
                  pubiana. &#40;P3&#41;
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="img-estagio1">
              <img
                src={EstagioMama4}
                width={200}
                alt="Logo"
                className="image-estagio-1"
              />
              <p className="estagiomama4">Estágio 4 </p>
              <p className="display">
                - Aumento continuado e projeção da aréola e da papila formando
                uma segunda saliência acima do nível da mama. &#40;M4&#41;{" "}
              </p>
            </td>
            <td className="img-estagio-2">
              <div className="div-estagio1">
                <img
                  src={EstagioPeloFem4}
                  width={200}
                  className="image-estagio-1"
                ></img>
                <p className="estagiopelofem4">Estágio 4 </p>
                <p className="display">
                  - Pelos do tipo adulto, encaracolados, mais distribuídos, e
                  ainda em pouca quantidade. &#40;P4&#41;
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="img-estagio1">
              <img
                src={EstagioMama5}
                width={200}
                alt="Logo"
                className="image-estagio-1"
              />
              <p className="estagiomama5">Estágio 5 </p>
              <p className="display">
                - Mama com aspecto adulto, com retração da aréola para o
                contorno da mama e projeção da papila. &#40;M5&#41;.
              </p>
            </td>
            <td className="img-estagio-2">
              <div className="div-estagio1">
                <img
                  src={EstagioPeloFem5}
                  width={200}
                  className="image-estagio-1"
                ></img>
                <p className="estagiopelofem5">Estágio 5 </p>
                <p className="display">
                  - Pelos tipo adulto, com maior distribuição na região pubiana,
                  e na raiz da coxa. &#40;P5&#41;.
                </p>
              </div>
            </td>
          </tr>
        </table>
      ) : null}
    </div>
  );
};

export default DropDownTabelaSintomasMed;
