import React from "react";
import "../styles/Home.css";
import LinkBusca from "../components/LinkBusca";
import Navbar from "../components/Navbar";


function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="headerContainer">
          <div className="faixaAzul">
            <h1 className="h1BuscarPaciente-home">BUSCAR PACIENTE</h1>
          </div>
          {<LinkBusca />}
      </div>
    </div>
  );
}

export default Home;