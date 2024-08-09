import React, {useState} from "react";
import "../styles/Modal.css";
import { AiOutlineMedicineBox } from "react-icons/ai";
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
      <div className="med">
          <AiOutlineMedicineBox onClick={toggleModal} className="iconMed" />
          <button onClick={toggleModal} className="medicine2">
            <p className="Pmed">Medicina</p>
          </button>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content2">
          <a href="/" className="aMoniGlicemia"> 
            <h2 className="monitoramentoGlicemia">Monitoramento da Glicemia</h2>
          </a>
          <a href="/" className="aDiagDM1">
            <h2 className="diagnosticoDM1">Diagnóstico DM1</h2>
          </a>
          <a href="/consulta">
            <MdClose className="iconCloseModalMed"/>
          </a>
          </div>
        </div>
      )}
    </>
  );
}
