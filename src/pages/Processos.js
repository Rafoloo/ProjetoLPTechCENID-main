import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/Processos.css";
// import { HiArrowNarrowLeft } from "react-icons/hi";
import ModalFiltro from "../components/ModalFiltro";


const Processos = () => {
  return (
    <div className='processosPage'>
      <Navbar />
      <div className="headerContainer">
        <div className="faixaAzul">
          <h1 className="h1BuscarPaciente">Processos Gerais</h1>
          <ModalFiltro />
        </div>
        <table className='tableProcessos'>
          <tr>
            <th className='tableTitle'>N° de atendimento</th>
            <th className='tableTitle'>CPF</th>
            <th className='tableTitle'>Nome do paciente</th>
            <th className='tableTitle'>Hora da consulta</th>
            <th className='tableTitle'>Data da consulta</th>
          </tr>
          <tr>
            <td className='testeP'>
              <a href='/consulta' className='caminhoConsulta'>
                001
              </a>  
            </td>
            <td className='testeP'>
              <a href='/consulta' className='caminhoConsulta'>
                002.555.999-88
              </a>
              </td>
            <td className='testeP'>
              <a href='/consulta' className='caminhoConsulta'>
                Clarke Griffing
              </a>
            </td>
            <td className='testeP'>
              <a href='/consulta' className='caminhoConsulta'>
                20:07
              </a>
            </td>
            <td className='testeP'>
              <a href='/consulta' className='caminhoConsulta'>
                20/08/2020
              </a>
            </td>
          </tr>
          <tr>
            <td className='testeP'>
              <a href='/consulta' className='caminhoConsulta'>
                002
              </a>
            </td>
            <td className='testeP'>
              <a href='/consulta' className='caminhoConsulta'>
                002.111.888-88  
              </a>
            </td>
            <td className='testeP'>
              <a href='/consulta' className='caminhoConsulta'>
                Jake 
              </a>
            </td>
            <td className='testeP'>
              <a href='/consulta' className='caminhoConsulta'>
                13:09
              </a>
            </td>
            <td className='testeP'>
              <a href='/consulta' className='caminhoConsulta'>
                16/05/2020  
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Processos;