import React from "react";
import "../styles/Processos-css/RelatorioPrescricaoInicialInsulina.css";

const RelatorioPrescricaoInicialInsulina = () => {
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
                  Paciente portador de Diabetes Mellitus tipo &#40;DM1&#41;,
                  necessita receber análogo de insulina de ação lenta e rápida,
                  para otimizar o tratamento e alcançar resultados necessários
                  como diminuir hupoglicemias e melhor do tempo no alvo e queda
                  de hemoglobina glicada. Com tais insulinas terá melhora na
                  qualidade de vida.
                </p>
              </div>
              <div className="div-relatorio-medico-texto">
                <p>
                  Solicito iniciar sistema de insulinização com as insulinas:{" "}
                  <input
                    type={"text"}
                    className="input-receita-medica-insulina2"
                    placeholder="nome da insulina: &#40;ex: Glargina&#41;"
                  ></input>{" "}
                  e{" "}
                  <input
                    type={"text"}
                    placeholder="nome da insulina: &#40;ex: Glulisina ou Lipro&#41;"
                    className="input-receita-medica-insulina2"
                  ></input>
                </p>
              </div>
              <div className="p-necessidade-receber-medicamento2">
                <p>
                  Necessita mensalmente receber - 2 frascos de 3ml de insulina
                  degludeca e 3 frascos de 3ml de insulina ultrarrápida
                  &#40;asparte ou lispro&#41; ao mês.
                </p>
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

export default RelatorioPrescricaoInicialInsulina;
