// src/components/Popup.js
import React from "react";
import "../styles/Popup.css"; // Importar o CSS para o Popup

const Popup = ({ type, message, onClose }) => {
    const getPopupStyle = () => {
        switch (type) {
            case "success":
                return "popup-success";
            case "error":
                return "popup-error";
            default:
                return "popup-info";
        }
    };

    return (
        <div className="popup-overlay">
            <div className={`popup ${getPopupStyle()}`}>
                <span className="popup-message">{message}</span>
                <button className="popup-close" onClick={onClose}>X</button>
            </div>
        </div>
    );
};

export default Popup;
