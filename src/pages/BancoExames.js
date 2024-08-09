import React from "react";
import "../styles/BancoExames.css";
import { useApi } from "../hooks/useApi";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

const BancoExames = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cpfParam = urlParams.get("cpf");
    const searchTerm = cpfParam;

    const fetchData = async () => {
      try {
        const response = await tabelaPaciente(searchTerm, ['nome', 'cpf']);
        setSearchResults(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [tabelaPaciente]);



  function createData(
    idExame,
    descricao,
    dataExame,
    dataVencimento,
    nomeMedico
  ) {
    return { idExame, descricao, dataExame, dataVencimento, nomeMedico };
  }

  const rows = [
    createData("."),
    createData("."),
    createData("."),
    createData("."),
    createData("."),
    createData("."),
    createData("."),
    createData("."),
  ];

  return (
    <div className="home">
      <Navbar />
      <div className="headerContainer">
        <div className="faixaAzulCadastro">
          <div className="faixaAzul-certa1">
            <a href={`/paciente?cpf=${searchResults[0]?.cpf}`}>
              <HiArrowNarrowLeft className="seta" />
            </a>
            <div className="div-text-exame">
              <h2 className="centralizando1">BANCO DE EXAMES</h2>
            </div>
          </div>
        </div>
        <div className="nome-paciente-banco-exames">
          <div className="infos-banco-paciente">
            <p className="p-nome-paciente-banco-exames">Nome do paciente:</p>
            <p className="p-infos-banco-exames"></p>
          </div>
        </div>
        <div className="lina-azul-banco-exames">
          <p className="informacoes-linha-azul">Informações</p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="table-exame">ID exame</th>
              <th className="table-exame">Descrição</th>
              <th className="table-exame">Data Realização</th>
              <th className="table-exame">Data Vencimento</th>
              <th className="table-exame">Médico Responsável</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.idExame}</td>
                <td>{row.descricao}</td>
                <td>{row.dataExame}</td>
                <td>{row.dataVencimento}</td>
                <td>{row.nomeMedico}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-new-exame" title="Adicionar novo exame">
          <a href="/anexarexame">
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Box>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BancoExames;
