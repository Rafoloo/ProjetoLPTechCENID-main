import React from "react";
import Logo from "../assets/cenid.png";
import "../styles/Navbar.css";
import ModalPerfil from "../components/ModalPerfil";
import Modal from "./Modal";
import { BsPersonCircle } from "react-icons/bs";
import LogoUnimar from "../assets/unimar.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";

function Navbar() {
  const auth = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="leftSide">
        <a href="/home">
          <img src={Logo} alt="Logo Cenid" />
        </a>
        <a href="/home">
          <img src={LogoUnimar} alt="Logo Unimar" className="logoUnimar" />
        </a>
      </div>
      <div className="saudacoes">
        <BsPersonCircle className="person" />
        <p className="testee"><p className="nomeEstagiario">{auth.user?.name}</p></p>
      </div>
      <div class="nav">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <div class="menu">
          <li>
            <a href="/home" className="colorNav"> Home </a>
          </li>
          <li>
            <a href="/processos" className="colorNav"> Processos </a>
          </li>
          <li>
            <ModalPerfil />
          </li>
          <li>
            <Modal />
          </li>
          
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
