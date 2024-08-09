import React, { useState } from "react";
import "../styles/Modal.css";
import { MdClose } from "react-icons/md";
import { TbTrashX } from "react-icons/tb";

export default function Modal() {
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
            <TbTrashX title="Excluir" className="icon-exlucir-admin"/>
        </button>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content3">
            <div>
                <p className="p-deseja-excluir"><strong>Deseja excluir?</strong></p>
            </div>
            <div className="ModalEnfPaginaPaciente1">
              <a href="/admin" className="aAgendarConsultaEnf">
                <h2 className="linkAgendarConsulaPaciente">Sim</h2>
              </a>
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
