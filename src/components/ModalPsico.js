import React, { useState } from "react";
import "../styles/Modal.css";
import { MdClose } from "react-icons/md";
import { MdOutlinePsychology } from 'react-icons/md'

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
      <div className="psiCo">
        <MdOutlinePsychology onClick={toggleModal} className="iconPsico" />
        <button className="psico2" onClick={toggleModal}>
          <p className="Ppsico">Psicologia</p>
        </button>
      </div>
      {modal && (
        <div className="modalEnfPaciente">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content2">
            <a href="/" className="aObesidade">
              <h2 className="Obesidade">
                Obesidade
              </h2>
            </a>
            <a href="/" className="aPercepQualidade">
              <h2 className="percepsaoQualidade1">Percepção da qualidade de vida 1</h2>
            </a>
            <a href="/" className="aPercepQualidade2">
              <h2 className="percepsaoQualidade2">Percepção da qualidade de vida 1</h2>
            </a>
            <a href="/consulta">
              <MdClose className="iconCloseModalMed" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
