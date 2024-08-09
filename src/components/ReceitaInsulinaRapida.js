import React from "react";
// import "../styles/Processos-css/RelatorioManutencaoInsulina.css";
import "../styles/Processos-css/ReceitaInsulinaRapida.css";
import HospitalBeneficienteLogo from "../assets/hospitalbeneficientelogo.png.png";
import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";

const ReceitaInsulinaRapida = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();
  const [id, setID] = useState('');
  const [nome, setNome] = useState(''); 
  const [cpf, setCPF] = useState('');
  const [data_nascimento, setNascimento] = useState('');
  const [selectsexo, setSelectsexo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const cpfParam = urlParams.get("cpf");
        const searchTerm = cpfParam;
  
        if (searchTerm) {
          const response = await tabelaPaciente(searchTerm, ["nome", "cpf"]);
          if (response.length > 0) {
            setSearchResults(response);
            setID(response[0].id)
            setNascimento(response[0].data_nascimento);
            setSelectsexo(response[0].sexo);
            setNome(response[0].nome);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="div-relatorio-manutencao-insulina">
      <div className="div-table-relatorio-insulina">
        <table className="table-relatorio">
          <tr>
            <th colSpan={"3"} className="text-relatorio-insulina">
              <div className="texto-image">
                <p className="texto-ambulatorio">
                  ambulatório de diabetes da faculdade de medicina da unimar -
                  AME
                </p>
                <div>
                  <img src={HospitalBeneficienteLogo} width={100} />
                </div>
              </div>
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
            <div className="centro-interdiciplinar-div">
              <p>centro interdiciplinar em diabetes &#40;cenid&#41;</p>
            </div>
              <div className="div-relatorio-medico1">
                <p>receituário</p>
              </div>
              <div className="nome-relatorio-medico1">
                Nome do médico:
                <input
                  type={"text"}
                  className="input-nome-paciente-relatorio-manutencao1"
                ></input>
              </div>
              <div className="nome-relatorio-medico-crm">
                CRM:
                <input
                  type={"text"}
                  className="input-nome-paciente-relatorio-manutencao-crm"
                ></input>
              </div>
              <div className="nome-relatorio-medico">
                Nome do paciente:
                <input
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  type={"text"}
                  className="input-nome-paciente-relatorio-manutencao"
                ></input>
              </div>
              <div className="div-relatorio-medico1">
                <p>prescrição</p>
              </div>
              <div className="div-relatorio-medico-subcutaneo">
                <p>uso subcutâneo - contínuo</p>
              </div>
              <div className="tempo-diagnostico-dm1-relatorio-medico">
                <p>1 - Análogo de insulina de ação rápida:</p>
                <input
                placeholder="ex: nome da insulina &#10;Glulisina ou Lispro&#41;"
                  type={"number"}
                  className="input-tempo-diagnostico-analogo"
                ></input>
                </div>
                <div className="tempo-diagnostico-dm1-relatorio-medico">
                <p>Frascos:</p>
                <input
                  type={"number"}
                  className="input-tempo-diagnostico"
                ></input>
              </div>
              <div className="tempo-diagnostico-dm1-relatorio-medico">
                <p>2 - Estratégia de aplicação:</p>
              </div>
              <div className="div-relatorio-medico-texto">
                <p>2.1 - Prescrição médica livre:</p>
                <textarea className="text-area-insulina-rapida" placeholder="...."></textarea>
              </div>
              <div className="div-relatorio-medico-texto">
                <p>2.2 - Prescrição baseada na razão de CHO e fator de sensibilidade &#40;FS&#41;:</p>
                <div>
                  <p>Aplicar pré refeições, 1 unidade de insulina a cada <input className="input-2-2" type={"number"}></input> gramas de CHO da contagem.</p>
                </div>
                <div>
                  <p>Para corrigir glicemia considerar que 1 unidade de insulina reduz a glicemia em <input className="input-2-2" type={"number"}></input> mg/dL. Glicemia alvo de 70 a 180 mg/dL.</p>
                </div>
              </div>
              <div className="p-necessita-receber">
                <p>2.3 - Prescrição por tabela e baseada no fator de sensibilidade &#40;FS&#41; para glicemia de 100 mg/dL:</p>
              </div>
            </td>
          </tr>
          <tr>
            <th className="tamanho-table">Glicemia</th>
            <th className="tamanho-table">U de insulina pelo FS</th>
            <th className="tamanho-table">U de insulina aproximada pelo médico</th>
          </tr>
          <tr>
            <td className="central-insulina-rapida">Se menor 100mg/dL</td>
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
          </tr>
          <tr>
            <td className="central-insulina-rapida">De &gt; 100 a 150mg/dL </td>
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
          </tr>
          <tr>
            <td className="central-insulina-rapida">De 150 a 200mg/dL</td>
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
          </tr>
          <tr>
            <td className="central-insulina-rapida">De 200 a 250mg/dL</td>
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
          </tr>
          <tr>
            <td className="central-insulina-rapida">De 250 a 300mg/dL</td>
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
          </tr>
          <tr>
            <td className="central-insulina-rapida">De 300 a 400mg/dL</td>
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
          </tr>
          <tr>
            <td className="central-insulina-rapida">Se maior que 400mg/dL</td>
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
          </tr>
          <tr>
            <td colSpan={"3"}>
              <div className="p-3-agulhas">
                <p>3- AGULHAS bd ultra fine 32x4, conector Luer Lock descartável estéril --- 1 caixa ao mês</p>
              </div>
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

export default ReceitaInsulinaRapida;
