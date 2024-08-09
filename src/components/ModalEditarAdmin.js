import React, { useState } from "react";
import "../styles/Modal.css";
import { MdClose } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Modal({id}) {
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
            <FaRegEdit title="Excluir" className="icon-exlucir-admin"/>
        </button>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content3">
            <div>
                <p className="p-deseja-excluir"><strong>Deseja Alterar?</strong></p>
            </div>
            <div className="ModalEnfPaginaPaciente1">
              <Link /* href="/alteracaoestagiario" */ to={`/alteracaoestagiario?id=${id}`} className="aAgendarConsultaEnf">
                <h2 className="linkAgendarConsulaPaciente">Sim</h2>
              </Link>
              <a href="/admin" className="aNovaConsultaEnfPaciente">
                <h2 className="linkNovaConsultaEnfPaciente">Cancelar</h2>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
