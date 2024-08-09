import React, { useState } from 'react';
import axios from 'axios';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import '../styles/LinkBusca.css';

const filter = createFilterOptions();

const LinkBusca = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCPF, setSelectedCPF] = useState('');

  const fetchSuggestions = async (searchTerm) => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    try {
      // Consulta a API para buscar pacientes por nome ou CPF
      const response = await axios.post('http://localhost:3005/tabelaPaciente', {
        searchTerm,
        columns: ['nome', 'cpf'], // Colunas para buscar (nome ou cpf)
      });

      // Verifica se há resultados e atualiza as sugestões
      if (response.data && Array.isArray(response.data)) {
        const patientData = response.data.map((patient) => ({
          title: `${patient.nome} - CPF: ${patient.cpf}`, // Exibe nome e CPF na sugestão
          cpf: patient.cpf,   // Salve o CPF para uso posterior, se necessário
        }));
        setSuggestions(patientData);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    fetchSuggestions(newValue);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    if (selectedCPF) {
      // Execute o redirecionamento usando selectedCPF
      window.location.href = `/paciente?cpf=${selectedCPF}`;
    }
  };

  return (
    <div className="search-bar">
      <form className='formBuscaInicial'>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // Atualize selectedCPF quando uma sugestão válida for selecionada
          if (newValue && newValue.cpf) {
            setSelectedCPF(newValue.cpf);
          } else {
            setSelectedCPF(''); // Limpa o selectedCPF se nenhuma sugestão válida estiver selecionada
          }
        }}
        options={suggestions}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          const isExisting = options.some((option) => inputValue === option.title);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              title: inputValue,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        getOptionLabel={(option) => option.title || option}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            className="custom-input"
            label="Search for a Patient (Name or CPF)"
            onChange={(e) => handleChange(e, e.target.value)}
          />
        )}
      />
      {isLoading && <div className="loading">Loading suggestions...</div>}
      <div className='botaoBuscar'>
        <button className='botaoBuscarInicial'  type="button" onClick={handleSearchFormSubmit}>
          Search
        </button>
      </div>
      <a href='/novocadastro' className='novoPaciente'>Novo Cadastro</a>
      </form>
    </div>
  );
};

export default LinkBusca;
