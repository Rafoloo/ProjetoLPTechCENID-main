import React from "react";
import "../styles/Paciente.css";
import { MdOutlineAttachment } from "react-icons/md";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import Navbar from '../components/Navbar';
import { HiCheckCircle } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { GiPlainCircle } from "react-icons/gi";
import ModalEnfPaciente from "../components/ModalEnfPaciente";
import ModalNutriPaciente from "../components/ModalNutriPaciente";
import ModalEdFisicaPaciente from "../components/ModalEdFisicaPaciente";
import ModalPsicoPaciente from "../components/ModalPsicoPaciente";
import ModalMedicinaPaciente from "../components/ModalMedicinaPaciente";
import ModalExamesPaciente from "../components/ModalExamesPaciente";
import ModalAntropologiaPaciente from "../components/ModalAntropologiaPaciente";
import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { formatarCPFp } from "../components/FormatarCampos"
import { Link } from "react-router-dom";
import { format } from 'date-fns';


const Paciente = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();
  const [idpaciente, setPacienteID] = useState('');

  const calculateAge = (birthday) => {
    const ageDifferenceMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifferenceMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cpfParam = urlParams.get("cpf");
    const searchTerm = cpfParam;

    const fetchData = async () => {
      try {
        const response = await tabelaPaciente(searchTerm, ['nome', 'cpf']);
        setSearchResults(response);
        setPacienteID(response[0].id)
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [tabelaPaciente]);

  const api = useApi();

  const [data, setData] = useState([]);

  const handleAgendar = () => {
    api
      .agendamentos()
      .then((tabelaDataJson) => {
        setData(tabelaDataJson); // Atribua diretamente os dados ao estado 'data'
        console.log(tabelaDataJson); // Se você quiser ver os dados no console
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleAgendar();
  }, []);



  function verificarStatusAgendamento(agendamento) {
    const dataAtual = new Date();
    const dataAgendamento = new Date(agendamento.data_agendamento);
    const status = agendamento.status_agendamento;

    if (status === 1) {
      return "concluido";
    } else if (status === 0) {
      return "em-andamento";
    } else if (dataAtual > dataAgendamento) {
      return "fora-do-prazo";
    } else {
      return "status-desconhecido";
    }
  }

  function IconeStatusAgendamento({ agendamento }) {
    const status = verificarStatusAgendamento(agendamento);
  
    let className = "iconyellow";
  
    if (status === "concluido") {
      className = "icongreen";
      return <GiPlainCircle className={className} />;
    } else if (status === "em-andamento") {
      className = "iconyellow";
      return <GiPlainCircle className={className} />;
    } else if (status === "fora-do-prazo") {
      className = "iconred";
      return <GiPlainCircle className={className} />;
    }
    return <GiPlainCircle className={className} />;
  }


  return (
    <div className='paciente'>
      <Navbar />
      <div className="headerContainer">
        <div className="faixaAzul">
          <a href="/home">
            <HiArrowNarrowLeft title="Voltar" className="seta" />
          </a>
          <div className="faixaAzul">
            <h1 className="h1BuscarPaciente1">PACIENTE</h1>
          </div>
          <Link to={`/editarcadastro?cpf=${searchResults[0]?.cpf}`}>
            <FaEye title="Editar Cadastro" className="eye" />
          </Link>
        </div>
        <div className="infos">
          <form className="infos">
            <label className="label-paciente">
              CPF:
            </label>
            {searchResults.map(result => (<p key={result.id} className="input-CPF-paciente">{formatarCPFp(result.cpf)}</p>))}
            <label className="label-paciente">
              NOME:
            </label>
            {searchResults.map(result => (<p key={result.id} className="input-nome-paciente">{result.nome}</p>))}
            <label className="label-paciente">
              CARTÃO SUS:
            </label>
            {searchResults.map(result => (<p key={result.id} className="input-cartaoSUS-paciente">{result.cartao_sus}</p>))}
            <label className="label-paciente">
              IDADE:
            </label>
            {searchResults.map(result => (<p key={result.id} className="input-idade-paciente">{calculateAge(result.data_nascimento)}</p>))}
          </form>
        </div>
        <div className="dadosPaciente">
          <h2>RELATÓRIO DE CONSULTAS</h2>
        </div>
        <table className='tableProcessos'>
          <tr>
            <th className='tableTitle'>
              <ModalAntropologiaPaciente />
            </th>
            <th className='tableTitle'>
              <ModalEnfPaciente data={data} />

            </th>
            <th className='tableTitle'>
              <ModalNutriPaciente />
            </th>
            <th className='tableTitle'>
              <ModalEdFisicaPaciente />
            </th>
            <th className='tableTitle'>
              <ModalPsicoPaciente />
            </th>
            <th className='tableTitle'>
              <ModalMedicinaPaciente />
            </th>
            <th className='tableTitle'>
              <ModalExamesPaciente />
            </th>
          </tr>
          <tr>
            <td>
              {Object.values(data).map((user) => (
                user.paciente_id === idpaciente && (
                  user.especialidade_med === 'antroprometria' && (
                    <span className='tr-enf' key={user.id}>
                      <a href={`/consulta?cpf=${user.id}`} className='caminhoConsulta'>
                        {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
                      </a>
                      {user.status_agendamento !== undefined ? (
                        <IconeStatusAgendamento agendamento={user} />
                      ) : (
                        <div className="icon-check-relatorio-default">
                          {/* Defina um estilo padrão para o ícone se o status for indefinido */}
                        </div>
                      )}
                    </span>
                  )
                )
              ))}
            </td>
            <td>
              {Object.values(data).map((user) => (
                user.paciente_id === idpaciente && (
                  user.especialidade_med === 'enfermagem' && (
                    <span className='tr-enf' key={user.id}>
                      <a href={`/consulta?id=${user.id}`} className='caminhoConsulta'>
                        {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
                      </a>
                      {user.status_agendamento !== undefined ? (
                        <div className="icon">
                          <IconeStatusAgendamento agendamento={user} />
                        </div>
                      ) : (
                        <div className="icon-check-relatorio-default">
                          {/* Defina um estilo padrão para o ícone se o status for indefinido */}
                        </div>
                      )}
                    </span>
                  )
                )
              ))}
            </td>
            <td>
              {Object.values(data).map((user) => (
                user.paciente_id === idpaciente && (
                  user.especialidade_med === 'nutricao' && (
                    <span className='tr-enf' key={user.id}>
                      <a href='/consulta' className='caminhoConsulta'>
                        {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
                      </a>
                      {user.status_agendamento !== undefined ? (
                        <IconeStatusAgendamento agendamento={user} />
                      ) : (
                        <div className="icon-check-relatorio-default">
                          {/* Defina um estilo padrão para o ícone se o status for indefinido */}
                        </div>
                      )}
                    </span>
                  )
                )
              ))}
            </td>
            <td>
              {Object.values(data).map((user) => (
                user.paciente_id === idpaciente && (
                  user.especialidade_med === 'educacaoFisica' && (
                    <span className='tr-enf' key={user.id}>
                      <a href='/consulta' className='caminhoConsulta'>
                        {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
                      </a>
                      {user.status_agendamento !== undefined ? (
                        <IconeStatusAgendamento agendamento={user} />
                      ) : (
                        <div className="icon-check-relatorio-default">
                          {/* Defina um estilo padrão para o ícone se o status for indefinido */}
                        </div>
                      )}
                    </span>
                  )
                )
              ))}
            </td>
            <td>
              {Object.values(data).map((user) => (
                user.paciente_id === idpaciente && (
                  user.especialidade_med === 'psicologia' && (
                    <span className='tr-enf' key={user.id}>
                      <a href='/consulta' className='caminhoConsulta'>
                        {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
                      </a>
                      {user.status_agendamento !== undefined ? (
                        <IconeStatusAgendamento agendamento={user} />
                      ) : (
                        <div className="icon-check-relatorio-default">
                          {/* Defina um estilo padrão para o ícone se o status for indefinido */}
                        </div>
                      )}
                    </span>
                  )
                )
              ))}
            </td>
            <td>
              {Object.values(data).map((user) => (
                user.paciente_id === idpaciente && (
                  user.especialidade_med === 'medicina' && (
                    <span className='tr-enf' key={user.id}>
                      <a href='/consulta' className='caminhoConsulta'>
                        {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
                      </a>
                      {user.status_agendamento !== undefined ? (
                        <IconeStatusAgendamento agendamento={user} />
                      ) : (
                        <div className="icon-check-relatorio-default">
                          {/* Defina um estilo padrão para o ícone se o status for indefinido */}
                        </div>
                      )}
                    </span>
                  )
                )
              ))}
            </td>

            <td>
              {Object.values(data).map((user) => (
                user.paciente_id === idpaciente && (
                  user.especialidade_med === 'nt' && (
                    <span className='tr-enf' key={user.id}>
                      <a href='/consulta' className='caminhoConsulta'>
                        {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
                      </a>
                      {user.status_agendamento !== undefined ? (
                        <IconeStatusAgendamento agendamento={user} />
                      ) : (
                        <div className="icon-check-relatorio-default">
                          {/* Defina um estilo padrão para o ícone se o status for indefinido */}
                        </div>
                      )}
                    </span>
                  )
                )
              ))}
            </td>
          </tr>
        </table>
      </div>
      <a href="/anexarexame">
        <MdOutlineAttachment title="Anexar Exame" className="iconAttach" />
      </a>
    </div>
  )
}

export default Paciente