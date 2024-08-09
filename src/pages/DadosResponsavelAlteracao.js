import React from 'react';
import ModalAlterarCadastro from "../components/ModalAlterarCadastro";

const DadosResponsavel = () => {
  return (
    <div className='dadosresponsavel'>
        <div className='dadosPaciente'>
            <h2>
              DADOS DO RESPONSÁVEL
            </h2>
        </div>
        <div className="form-cadastro-novo-paciente">
        <form  className="form-novo-cadastro">
          <label>
            NOME:
            <input className="input-nome-dados-responsavel" type="text" />
          </label>
          <label className="label-ra-estagiario">
            CPF:
            <input type="number" className="input-cpf-dados-responsavel" placeholder='___.___.___-__'></input>
          </label>
          <label className="label-ra-estagiario">
            RG:
            <input type="number" className="input-rg-dados-responsavel" placeholder='__.___.___-_'></input>
          </label>
        </form>
        <form className="form-novo-cadastro">
          <label className="label-ra-estagiario">
            PARENTESCO:
            <input type="text" className="input-parentesco-dados-responsavel" placeholder='ex: mãe, pai, avó...'></input>
          </label>
          <label className="label-ra-estagiario">
            TELEFONE:
            <input type="number" className="input-telefone-dados-responsavel" placeholder='&#40;__&#41; _____-____'></input>
          </label>
          <label className="label-ra-estagiario">
            OCUPAÇÃO:
            <input type="text" className="input-ocupacao-dados-responsavel"></input>
          </label>
          <label className="label-ra-estagiario">
            DATA DE NASCIMENTO:
            <input type="date" className="input-dataNasc-dados-responsavel"></input>
          </label>
          <label className="label-ra-estagiario">
            IDADE:
            <input type="number" className="input-idade-dados-responsavel"></input>
          </label>
        </form>
      </div>
          <ModalAlterarCadastro />
    </div>
  )
}

export default DadosResponsavel