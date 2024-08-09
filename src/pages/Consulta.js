import React from "react";
import "../styles/AgendarConsulta.css";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import ButtonSalvar from "../components/ButtonSalvarAgendarConsulta";
import { useState, useEffect, useContext } from "react";
import { useApi } from "../hooks/useApi";
import { AuthContext } from "../contexts/Auth/AuthContext";

const AgendarConsulta = () => {
  const auth = useContext(AuthContext);
  const [userid, setUserID] = useState(auth.user?.id);
  const [idpaciente, setPacienteID] = useState('');
  const [nome, setNome] = useState(''); 
  const [cpf, setCPF] = useState('');
  const [sus, setSus] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const [searchResults, setSearchResults] = useState([]);
  const { agendamentos } = useApi();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get("id");
  
        if (idParam) {
          const response = await agendamentos();
          const idParamNumber = parseInt(idParam, 10);
          const filteredResults = response.filter(item => item.id === idParamNumber);
  
          if (filteredResults.length > 0) {
            setSearchResults(filteredResults);
            console.log(filteredResults)
            // Restante do seu código...
          } else {
            console.log("Nenhum resultado encontrado para o ID fornecido.");
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []); 
  

  const [dataconsulta, setDataconsulta] = useState("");
  const [hora, setHora] = useState("");
  const [espmed, setEspmed] = useState("");
  const [obser, setObser] = useState("");
  const [status_agendamento, setStatus_agendamento] = useState("0");

  const handleRegister = async () => {
    if (dataconsulta && hora && espmed) {
      await auth.agendar(idpaciente, userid, dataconsulta, hora, espmed, obser, status_agendamento);
    } else {
      alert('Todos os campos são obrigatórios');
    }
  }

  return (
    <div className="home">
      <Navbar />
      <div className="headerContainer">
        <div className="faixaAzulCadastro">
          <div className="faixaAzul-certa1">
            <a href={`/paciente?cpf=${searchResults[0]?.cpf}`}>
              <HiArrowNarrowLeft className="seta" />
            </a>
            <div className="div-text-exame">
              <h2 className="centralizando1">AGENDAR CONSULTA</h2>
            </div>
          </div>
        </div>
        <form className="form-agendar-consulta">
          <div className="agendar-consulta">
            <div>
              <p className="p-nome-agendar-consulta">Nome:</p>
              <input
                className="input-nome-agendar-consulta"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              ></input>
            </div>
            <div className="centralizar-agendar-consulta">
              <div>
                <p className="p-nome-agendar-consulta">CPF:</p>
                <input
                  className="input-cpf-agendar-consulta"
                  type="text" 
                  placeholder="___.___.___-__"
                  value={cpf}
                  onChange={(event) => setCPF(event.target.value)}
                ></input>
              </div>
              <div>
                <p className="p-nome-agendar-consulta">Cartão SUS:</p>
                <input
                  className="input-cpf-agendar-consulta"
                  type="text" 
                  placeholder="___ ____ ____ ____"
                  value={sus}
                  onChange={(event) => setSus(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="p-nome-agendar-consulta">
              <p>Email:</p>
              <input
                type={"email"}
                className="p-email-agendar-consulta"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div>
              <p className="p-nome-agendar-consulta">Telefone:</p>
              <input
                type={"text"}
                className="input-cpf-agendar-consulta"
                placeholder="&#40;__&#41; _____-____"
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
              ></input>
            </div>
            <div className="centralizar-agendar-consulta">
              <div>
                <p className="p-nome-agendar-consulta">Data:</p>
                <input type={"date"} 
                className="data-agendar-consulta" 
                value={dataconsulta}
                onChange={(event) => setDataconsulta(event.target.value)}></input>
              </div>
              <div>
                <p className="p-nome-agendar-consulta">Horário:</p>
                <input type={"time"} 
                className="horario-agendar-consulta"
                value={hora}
                onChange={(event) => setHora(event.target.value)}
                ></input>
              </div>
            </div>
            <div>
              <p className="p-nome-agendar-consulta">Especialidade médica:</p>
              <select
                className="agendar-consulta-dropdown"
                value={espmed}
                onChange={(e) => setEspmed(e.target.value)}
              >
                <option value={""}>Selecione a especialidade:</option>
                <option value={"medicina"}>Medicina</option>
                <option value={"enfermagem"}>Enfermagem</option>
                <option value={"psicologia"}>Psicologia</option>
                <option value={"nutricao"}>Nutrição</option>
                <option value={"educacaoFisica"}>Educação Física</option>
              </select>
            </div>
            <div>
              <p className="p-nome-agendar-consulta">Observações:</p>
              <textarea 
              className="textarea-agendar-consulta" 
              placeholder="Observações..."
              value={obser}
              onChange={(event) => setObser(event.target.value)}></textarea>
            </div>
          </div>
        </form>
        <div className="modal-print">
        <ButtonSalvar
          handleRegister={handleRegister} // Passe a função handleRegister como propriedade
          dataconsulta={dataconsulta}
          hora={hora}
          espmed={espmed}
          searchResults={searchResults}
        />
      </div>
      </div>
    </div>
  );
};

export default AgendarConsulta;
