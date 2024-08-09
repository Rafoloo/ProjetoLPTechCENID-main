import React, { useState } from "react";
import "../styles/Modal.css";
import NovoCadastro from "../pages/NovoCadastro";

export default function Modal(modal, toggleModal) {

  /* const [modal, setModal] = useState(false); */
  
  /* const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  } */

  return (
    <>
        <div className='botaoSalvarCadastro'>
            <button onClick={toggleModal} className="salvarCadastro"> Salvar </button>      
        </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="tituloContinuar">Cadastro feito com sucesso!</h2>
            <a href="/paciente" className="modalContinuar">Continuar</a>
          </div>
        </div>
      )}
    </>
  );
}
