import React, { useState, useEffect } from "react";
import "../styles/Modal.css";
import { MdClose } from "react-icons/md";
import { useApi } from "../hooks/useApi";

export default function Modal() {
  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cpfParam = urlParams.get("cpf");
    const searchTerm = cpfParam;

    const fetchData = async () => {
      try {
        const response = await tabelaPaciente(searchTerm, ['nome', 'cpf']);
        setSearchResults(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [tabelaPaciente]);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="enfPacienteRelatorioConsulta">
        <button onClick={toggleModal} className="css-botao-relatorio-consulta">
        Nutrição
        </button>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content3">
            <div className="ModalEnfPaginaPaciente">
              <a href={`/agendarconsulta?cpf=${searchResults[0]?.cpf}`} className="aAgendarConsultaEnf">
                <h2 className="linkAgendarConsulaPaciente">Agendar Consulta</h2>
              </a>
              <a href={`/formularionutricao?cpf=${searchResults[0]?.cpf}`} className="aNovaConsultaEnfPaciente">
                <h2 className="linkNovaConsultaEnfPaciente">Nova Consulta</h2>
              </a>
              <a href={`/paciente?cpf=${searchResults[0]?.cpf}`}>
              <MdClose className="iconCloseModalEnfPaciente" />
            </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
