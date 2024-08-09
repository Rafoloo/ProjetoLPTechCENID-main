import React, { useState } from "react";
import "../styles/Modal.css";
import { useContext } from 'react';
import { AuthContext } from "../contexts/Auth/AuthContext";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Sair
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="tituloSair">Sair</h2>
            <p className="desejaSair">
                Você deseja realmente sair?
            </p>
            <button className="modalSair" onClick={handleLogout}>Sim</button>
            <button className="modalFicar" onClick={toggleModal}>
              Não
            </button>
          </div>
        </div>
      )}
    </>
  );
}
