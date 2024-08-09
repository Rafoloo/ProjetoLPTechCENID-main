import React, { useState } from "react";
import "../styles/Modal.css";
import { BsPersonCircle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";

export default function Modal() {
  const auth = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Perfil
      </button>

      {modal && (
        <div className="modalPerfil">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <BsPersonCircle className="visualizarPerfil" />
            <div className='textoPerfil'>
                <p className='textPerfil'>
                  ID: {auth.user?.id} <p></p>
                </p>
                <p className='textPerfil'>
                  NOME: {auth.user?.name} <p></p>
                </p>
                <p className='textPerfil'>
                  TIPO: {auth.user?.type}<p></p>
                </p> 
                <p className='textPerfil'>
                  RA: {auth.user?.ra}<p></p>
                </p>
                <p className='textPerfil'>
                  TELEFONE: {auth.user?.phone}<p></p>
                </p>
                <p className='textPerfil'>
                  E-MAIL: {auth.user?.email}<p></p>
                </p>
            </div>
            <button className="modalFechar" onClick={toggleModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
