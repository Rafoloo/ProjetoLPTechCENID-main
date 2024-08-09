import React from "react";
import "../styles/Processos-css/RelatorioManutencaoInsulina.css";

const RelatorioManutencaoInsulina = () => {
  return (
    <div className="div-relatorio-manutencao-insulina">
      <div className="div-table-relatorio-insulina">
        <table className="table-relatorio">
          <tr>
            <th colSpan={"3"} className="text-relatorio-insulina">
              Ambulatório de diabetes da faculdade de medicina unimar - AME
              <br></br>
              <br></br>Centro interdisciplinar em diabetes &#40;CENID&#41;
            </th>
          </tr>
          <tr>
            <td colSpan={"3"} className="endereco-relatorio-insulina">
              ENDEREÇO: Rua: Dr. Próspero Cecílio Coimbra, 80 - Jardim São
              Gabriel &#40;Cidade Universitária&#41; - Marília - SP, CEP:
              17525-160 FONE: &#40;14&#41; 2105-4500
            </td>
          </tr>
          <tr>
            <td colSpan={"3"} className="td-relatorio-medico">
              <div className="div-relatorio-medico">
                <p>relatório médico</p>
              </div>
              <div className="nome-relatorio-medico">
                Nome do paciente:
                <input
                  type={"text"}
                  className="input-nome-paciente-relatorio-manutencao"
                ></input>
              </div>
              <div className="div-paciente-dm1-relatorio-medico">
                <strong>PACIENTE PORTADOR DE DM1</strong>
              </div>
              <div className="tempo-diagnostico-dm1-relatorio-medico">
                <p>Tempo de diagnóstico &#40;anos&#41;:</p>
                <input
                  type={"number"}
                  className="input-tempo-diagnostico"
                ></input>
              </div>
              <div className="div-texto-relatorio-insulina">
                <p>
                  Paciente em uso de Insulina
                  <input
                    type={"text"}
                    placeholder="nome da insulina: &#40;ex: Glargina&#41;"
                    className="tipo-insulina-relatorio-medico"
                  ></input>{" "}
                  e insulina ultrarápida
                  <input
                    type={"text"}
                    placeholder="nome da insulina: &#40;ex: Glulisina ou Lipro&#41;"
                    className="inpur-insulina-relatorio-medico"
                  ></input>{" "}
                  no esquema basal bolus com boa resposta. Diminuíram
                  hipoglicemias, sem complicações e sem cetoacidose.
                </p>
              </div>
              <div className="div-relatorio-medico-texto">
                <p>
                  Solicito menutenção do atual sistema de insulinização com as
                  mesmas insulinas autalmente em uso:{" "}
                  <input
                    type={"text"}
                    className="input-receita-medica-insulina"
                    placeholder="nome da insulina: &#40;ex: Glargina&#41;"
                  ></input>{" "}
                  e{" "}
                  <input
                    type={"text"}
                    placeholder="nome da insulina: &#40;ex: Glulisina ou Lipro&#41;"
                    className="input-receita-medica-insulina"
                  ></input>
                </p>
              </div>
              <div className="p-necessidade-receber-medicamento">
                <p>Necessita mensalmente receber:</p>
              </div>
            </td>
          </tr>
          <tr>
            <th className="tamanho-table">N° frascos</th>
            <th className="tamanho-table">ml por frasco</th>
            <th className="tamanho-table">Nome e tipo de Insulina</th>
          </tr>
          <tr>
            <td>
              <input
                type={"number"}
                className="input-n-frascos-ml-nome-tipo"
              ></input>
            </td>
            <td>
              <input
                type={"number"}
                className="input-n-frascos-ml-nome-tipo"
              ></input>
            </td>
            <td>
              <input
                type={"text"}
                className="input-n-frascos-ml-nome-tipo"
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type={"number"}
                className="input-n-frascos-ml-nome-tipo"
              ></input>
            </td>
            <td>
              <input
                type={"number"}
                className="input-n-frascos-ml-nome-tipo"
              ></input>
            </td>
            <td>
              <input
                type={"text"}
                className="input-n-frascos-ml-nome-tipo"
              ></input>
            </td>
          </tr>
          <tr>
            <td colSpan={"3"}>
              <div className="date-relatorio-manutencao">
                <div>
                  Data: <input type={"date"} className="date-date"></input>
                </div>
                <div>
                  CRM:
                  <input
                    type={"number"}
                    className="crm-relatorio-manutencao"
                  ></input>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={"3"}>
              <div className="central-assinatura">
                <div className="teste-assinatura">
                  <p>Assinatura:</p>
                </div>
                <div>
                  <p className="line-relatorio"></p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default RelatorioManutencaoInsulina;
