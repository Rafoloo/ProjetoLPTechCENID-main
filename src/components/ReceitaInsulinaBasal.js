import React from "react";
import "../styles/Processos-css/ReceitaInsulinaBasal.css";
import HospitalBeneficienteLogo from "../assets/hospitalbeneficientelogo.png.png";
import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";


const ReceitaInsulinaBasal = () => {
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

  /* Verificar com eduardo se precisa armazenar a receita */

  return (
    <div className="div-1-basal">
      <div className="div-receita-basal">
        <div className="texto-image">
          <p className="texto-ambulatorio">
            ambulatório de diabetes da faculdade de medicina da unimar - AME
          </p>
          <div>
            <img src={HospitalBeneficienteLogo} width={100} />
          </div>
        </div>
        <div className="div-p-informaocoes">
          <p className="p-informacoes">
            ENDEREÇO: Rua: Dr. Próspero Cecílio Coimbra, 80 - Jardim São Gabriel
            &#40;Cidade Universitária&#41; - Marília - SP, CEP 17525-160 Fone:
            &#40;14&#41; 2105-4500
          </p>
        </div>
        <p className="p-line"></p>
      {/* <div className="div-receita-basal"> */}
        <div className="centro-interdiciplinar-div">
          <p>centro interdiciplinar em diabetes &#40;cenid&#41;</p>
        </div>
        <form>
          <div className="label-nome-insulina-basal">
            <label>
              Nome:{" "}
              <input
                type={"text"}
                className="input-nome-paciente-insulina-basal"
                placeholder="nome completo do paciente"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              ></input>
            </label>
          </div>
          <div className="centro-interdiciplinar-div">
            <p>uso subcutâneo</p>
          </div>
          <div className="label-nome-insulina-basal">
            <p>
              1-{" "}
              <input
                type={"text"}
                placeholder="Nome da insulina"
                className="input-nome-insulina-basal"
              ></input>{" "}
              - frascos:{" "}
              <input
                type={"number"}
                className="quantidade-frascos-insulina-basal"
              ></input>
              {/* Fazer conta para uma prescrição de 30 dias */}
            </p>
          </div>
          <div className="label-nome-insulina-basal">
            <p>2- Estratégia de aplicação:</p>
            <div className="table-insulina-basal">
              <table>
                <tr>
                  <th className="conteudo-table-insulina-basal">
                    Horário/período
                  </th>
                  <th className="conteudo-table-insulina-basal">
                    Dose&#40;U&#41;
                  </th>
                </tr>
                <tr>
                  <td>
                    <input type={"time"} className="time-insulna-basal"></input>
                  </td>
                  <td>
                    <input
                      type={"number"}
                      className="dose-insulina-basal"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"time"} className="time-insulna-basal"></input>
                  </td>
                  <td>
                    <input
                      type={"number"}
                      className="dose-insulina-basal"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"time"} className="time-insulna-basal"></input>
                  </td>
                  <td>
                    <input
                      type={"number"}
                      className="dose-insulina-basal"
                    ></input>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="label-date-insulina-basal">
            <div className="div-block">
              <label>
                Data:{" "}
                <input type={"date"} className="date-insulina-basal"></input>
              </label>
            </div>
            <div className="div-block">
              <p className="p-assinatura"></p>
              {/* Puxar o nome do médico que fez a receita */}
              <input
                type={"text"}
                className="nome-medico-insulina-basal"
              ></input>
              <br></br>
              <label>
                CRM:{" "}
                <input type={"number"} className="crm-insulina-basal"></input>
              </label>
            </div>
          </div>
        </form>
      </div>
      </div>
    // </div>
  );
};

export default ReceitaInsulinaBasal;
