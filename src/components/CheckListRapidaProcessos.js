import React from "react";
import "../styles/Processos-css/CheckListRapidoProcessos.css";
import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";

const CheckListRapidaProcessos = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();
  const [id, setID] = useState('');
  const [nome, setNome] = useState(''); 
  const [cpf, setCPF] = useState('');
  const [data_nascimento, setNascimento] = useState('');
  const [selectsexo, setSelectsexo] = useState('');
  const [telefone, setTelefone] = useState('');

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
            setTelefone(response[0].telefone);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="div-check-list-rapida">
      <div className="div-table-check-list-rapida">
        <form>
          <table className="table-check-list">
            <th className="table-conteudo">
              secretaria de estado da saúde de são paulo coordenadoria
              assistência farmacêutica<br></br>
              <br></br>Relatório médico para solicitação inicial de tratamento
              com insulina análoga de ação rápida<br></br>
              para pacientes com diabetes mellitus tipo 1
            </th>
            <tr>
              <td>
                <p className="p-identificacao-paciente-check-list">
                  identificação do paciente
                </p>
                <div className="test-list">
                  <p>Nome:</p>
                  <input
                    type={"text"}
                    className="input-nome-paciente-check-list"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                  ></input>
                </div>
                <div className="cns-telefone-check-list">
                  <p>CNS:</p> {/* Verificar com Eduardo */}
                  <input type={"number"} className="cns-input"></input>
                  <p>Telefone:</p>
                  <input type={"text"} className="cns-input" placeholder="&#40;__&#41;_____-____" 
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                  ></input>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="nome-crm-telefone-email-check-list">
                  <p>Nome do endocrinologista:</p>
                  <input
                    type={"text"}
                    className="input-nome-endocrinologista"
                  ></input>
                </div>
                <div className="nome-crm-telefone-email-check-list">
                  <p>CRM:</p>
                  <input
                    type={"number"}
                    className="crm-endocrinologista"
                  ></input>
                </div>
                <div className="nome-crm-telefone-email-check-list">
                  <p>Telefone:</p>
                  <input
                    type={"number"}
                    className="telefone-endocrino"
                    placeholder="&#40;__&#41;_____-____"
                  ></input>
                </div>
                <div className="nome-crm-telefone-email-check-list">
                  <p>Email &#40;opcional&#41;:</p>
                  <input
                    type={"email"}
                    className="input-nome-endocrinologista"
                  ></input>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="nome-crm-telefone-email-check-list"><p>1. Histórico de utilização de insulina dos Santos Haber</p></div>
                <div className="nome-crm-telefone-email-check-list"><input type={"radio"}></input>Insulina Humana Regular - Tempo de
                Uso:<input type={"number"} className="tempo-uso-check-list"></input></div>
                <div className="nome-crm-telefone-email-check-list"><input type={"radio"}></input>Insulina análogas de ação rápida -
                Tempo de Uso:<input type={"number"} className="tempo-uso-check-list"></input></div>
              </td>
            </tr>
            <tr>
              <td>
              <div className="nome-crm-telefone-email-check-list"><p>2. Quais dos eventos abaixo justificam o uso de insulina análoga
                de ação rápida?</p></div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"} className="input"></input>Poliúria</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"} className="input"></input>Polidipsia</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"} className="input"></input>Polifagia</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"}className="input"></input>Emagrecimento sem outra causa
                aparente<input type={"radio"}></input>Cetoacidose deabética
                prévia</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"} className="input"></input>Glicemia aleatória maior do que
                200 mg/dL na presença de sintomas clássicos de hiperglicemia
                &#40;polidipsia, poliúria e perda inexplicada de peso&#41;</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"} className="input"></input>Glicemia em jejum de 8h &#8805;
                126 mg/dL em duas ocasiões</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"} className="input"></input>Glicemia de 2 horas pós-sobrecarga
                &#8805; 200 mg/dL em duas ocasiões</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"} className="input"></input>HbA1c &#8805; 6,5% em duas
                ocasiões</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"} className="input"></input>Hipoglicemia grave* &#40;definida
                pela necessidade de auxilio de um terceiro para sua
                resolução&#41;</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"} className="input"></input>Hipoglicemias não graves
                repetidas* &#40;definidas como dois epsódios ou mais por
                semana&#41; caracterizadas por epsódios de glicemia capilar
                &#60; 54 mg/dL com ou sem sintomas ou &#60; 70 mg/dL<br></br>
                acompanhado de sintomas&#40;tremores, sudorese fria, palpitações
                e sensação de desmaio&#41;</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"} className="input"></input>Hipoglicemias noturnas repetidas*
                &#40;definidas como mais de um epsódio por semana&#41;</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"checkbox"} className="input"></input>Outros</div><p className="outros">Excluídos fatores
                causais, como redução de alimentação e/ou exercício físico sem
                redução da dose de insulina, revisão dos locais de aplicação de
                insulina, uso de doses exessivas de insulina, uso
                excessivo de álcool.</p>
              </td>
            </tr>
            <tr>
              <td>
              <div className="nome-crm-telefone-email-check-list">3. O paciente está apto a realizar a automonitorização da
                glicemia capilar &#40;AMG&#41; no mínimo três vezes ao dia?</div>
                <div className="nome-crm-telefone-email-check-list"><input type={"radio"} className="input-sim-nao-check-list"></input>Sim<input type={"radio"} className="input-sim-nao-check-list"></input>
                Não</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="div-crm-data-check-list">
                  <div>Data:<input type={"date"} className="crm-check-list"></input></div><div className="crm-input-check-list">CRM:
                  <input type={"number"} className="input-crm-escrita"></input></div>
                </div>
                <div className="final-check-list">
                  <p className="p-assinatura-check-list2">Assinatura:</p>
                  <p className="p-assinatura-check-list"></p>
                </div>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default CheckListRapidaProcessos;
