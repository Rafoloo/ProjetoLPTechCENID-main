import React, { useState } from "react";
import "../styles/Modal.css";
import { FaFilter } from "react-icons/fa";


export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="iconFiltro">
                <FaFilter />
            </button>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content-filter">
                        <input type="date" id="birthday" name="birthday"></input>
                        <button onClick={toggleModal} href="/paciente" className="modalFiltrar">Filtrar</button>
                    </div>
                </div>
            )}
        </>
    );
}
