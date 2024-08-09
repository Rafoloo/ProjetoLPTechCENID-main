import React from "react";
import "../styles/DadosResponsavel.css";
import { useState } from "react";
import {formatarCPF, formatarRG } from "../components/FormatarCampos"
import PhoneInput from 'react-phone-number-input';

const DadosResponsavel = ({nome_responsavel, setNome_responsavel,cpf_responsavel, setCpf_responsavel,rg_responsavel, setRg_responsavel,parentesco_responsavel, setParentesco_responsavel,telefone_responsavel, setTelefone_responsavel,ocupacao_responsavel, setOcupacao_responsavel,data_nascimento_responsavel, setData_nascimento_responsavel}) => {
  const [ager, setAger] = useState(""); 

  const calculateAger = (birthday) => {
    const ageDifferenceMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifferenceMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  const handleDateBlur = (e) => {
    const birthday = e.target.value;
    const ager = calculateAger(birthday);
    setAger(ager);
  }

  return (
    <div className="dadosresponsavel">
      <div className="dadosPaciente">
        <h2>DADOS DO RESPONSÁVEL</h2>
      </div>
      <div className="form-cadastro-novo-paciente">
        <form  className="form-novo-cadastro">
          <label>
            NOME:
            <input type="text" className="input-nome-dados-responsavel" 
                  value={nome_responsavel}
                  onChange={(e) => setNome_responsavel(e.target.value)} 
                  required></input>
          </label>
          <label className="label-ra-estagiario">
            CPF:
            <input type="text" className="input-cpf-dados-responsavel"
                  value={cpf_responsavel}
                  onChange={(e) => setCpf_responsavel(e.target.value)} 
                  onKeyUp={() => formatarCPF(cpf_responsavel, setCpf_responsavel)}
                  maxLength="14" 
                  placeholder='___.___.___-__'
                  required></input>
          </label>
          <label className="label-ra-estagiario">
            RG:
            <input type="text" className="input-rg-dados-responsavel" 
                  value={rg_responsavel}
                  onChange={(e) => setRg_responsavel(e.target.value)}
                  onKeyUp={() => formatarRG(rg_responsavel, setRg_responsavel)}
                  maxLength="12"
                  placeholder="__.___.___-_"
                  required></input>
          </label>
        </form>
        <form className="form-novo-cadastro">
          <label className="label-ra-estagiario">
            PARENTESCO:
            <input type="text" className="input-parentesco-dados-responsavel" 
                  value={parentesco_responsavel}
                  onChange={(e) => setParentesco_responsavel(e.target.value)} 
                  placeholder="ex: mãe, pai, avó..."
                  required></input>
          </label>
          <label className="label-ra-estagiario ajustephone">
            TELEFONE:
            <PhoneInput type="text" className="input-telefone-dados-responsavel"
                   international
                   value={telefone_responsavel}
                   onChange={setTelefone_responsavel}
                   defaultCountry="BR"   
                   placeholder="(11) 99999-9999"
                   required/>
          </label>
          <label className="label-ra-estagiario">
            OCUPAÇÃO:
            <input type="text" className="input-ocupacao-dados-responsavel"
                   value={ocupacao_responsavel}
                   onChange={(e) => setOcupacao_responsavel(e.target.value)}
                   required></input>
          </label>
          <label className="label-ra-estagiario">
            DATA DE NASCIMENTO:
            <input type="date" className="input-dataNasc-dados-responsavel"
                   velue={data_nascimento_responsavel}
                   onChange={(e) => setData_nascimento_responsavel(e.target.value)}
                   onBlur={handleDateBlur}
                   required></input>
          </label>
          <label className="label-ra-estagiario">
            IDADE:
            <input type="number" className="input-idade-dados-responsavel"
                   value={ager}
                   readOnly
                   required></input>
          </label>
        </form>

      </div>
    </div>
  );
};

export default DadosResponsavel;
