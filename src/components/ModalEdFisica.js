import React, { useState } from "react";
import "../styles/Modal.css";
import { MdSportsHandball } from "react-icons/md";
import { MdClose } from "react-icons/md";

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
      <div className="edfis">
        <MdSportsHandball className="iconedFisica" onClick={toggleModal}/>
        <button className="edFisica2" onClick={toggleModal}>
          <p className="Pedfis">Educação Física</p>
        </button>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content2">
            <a href="/" className="aNivelAtFisica">
              <h2 className="nivelAtividadeFisica">
                Nível de atividade física
              </h2>
            </a>
            <a href="/" className="aControleInsulina">
              <h2 className="controleInsulina">Controle Glicêmico e adm da insulina</h2>
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
