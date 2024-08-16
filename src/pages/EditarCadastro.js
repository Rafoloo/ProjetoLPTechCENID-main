import React, { useState, useEffect, useContext } from "react";
import "../styles/EditarCadastro.css";
import Navbar from "../components/Navbar";
import ModalAlterarCadastro from "../components/ModalAlterarCadastro";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useApi } from "../hooks/useApi";
import InputMask from "react-input-mask";
import BasicButtons from "../components/BasicButtons";
import { AuthContext } from "../contexts/Auth/AuthContext";

const EditarCadastro = () => {
  const [id, setID] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');
  const [sus, setSus] = useState('');
  const [data_nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [selectsexo, setSelectsexo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [nome_responsavel, setNome_responsavel] = useState('');
  const [cpf_responsavel, setCpf_responsavel] = useState('');
  const [rg_responsavel, setRg_responsavel] = useState('');
  const [parentesco_responsavel, setParentesco_responsavel] = useState('');
  const [telefone_responsavel, setTelefone_responsavel] = useState('');
  const [ocupacao_responsavel, setOcupacao_responsavel] = useState('');
  const [data_nascimento_responsavel, setData_nascimento_responsavel] = useState('');
  const [age, setAge] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const cpfParam = urlParams.get("cpf");
        const searchTerm = cpfParam;

        if (searchTerm) {
          const response = await tabelaPaciente(searchTerm, ["nome", "cpf"]);
          if (response.length > 0) {
            setSearchResults(response);
            setID(response[0].id);
            setNome(response[0].nome);
            setCPF(response[0].cpf);
            setRG(response[0].rg);
            setSus(response[0].cartao_sus);
            setNascimento(response[0].data_nascimento);
            setTelefone(response[0].telefone);
            setSelectsexo(response[0].sexo);
            setEndereco(response[0].endereco);
            setNumero(response[0].numero);
            setNome_responsavel(response[0].nome_responsavel);
            setCpf_responsavel(response[0].cpf_responsavel);
            setRg_responsavel(response[0].rg_responsavel);
            setOcupacao_responsavel(response[0].ocupacao_responsavel);
            setParentesco_responsavel(response[0].parentesco_responsavel);
            setTelefone_responsavel(response[0].telefone_responsavel);
            setData_nascimento_responsavel(response[0].data_nascimento_responsavel);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [tabelaPaciente]);

  const formatarData = (data) => {
    if (!data) return '';
    const date = new Date(data);
    if (isNaN(date.getTime())) return '';
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const ano = date.getFullYear().toString();
    return `${ano}-${mes}-${dia}`;
  };

  const calculateAge = (birthday) => {
    const ageDifferenceMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifferenceMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    if (data_nascimento_responsavel) {
      const age = calculateAge(data_nascimento_responsavel);
      setAge(age);
    }
  }, [data_nascimento_responsavel]);

  return (
    <div className="novocadastro">
      <Navbar />
      <h1 className="h1NovoCadastro">EDITAR CADASTRO</h1>
      <div className="headerContainer">
        <div className="faixaAzulCadastro">
          <div className="faixaAzul">
            <a href={`/paciente?cpf=${searchResults[0]?.cpf}`}>
              <HiArrowNarrowLeft className="seta" />
            </a>
            <h2 className="h1BuscarPaciente1">DADOS DO PACIENTE</h2>
          </div>
          <div className="form-cadastro-novo-paciente">
            <form className="form-novo-cadastro">
              <label className="label-ra-estagiario">
                NOME:
                <input
                  className="input-nome-editar-cadastro"
                  type="text"
                  value={nome || ''}
                  onChange={(event) => setNome(event.target.value)}
                />
              </label>
              <label className="label-ra-estagiario">
                CPF:
                <InputMask
                  mask="999.999.999-99"
                  className="input-cpf-editar-cadastro"
                  type="text"
                  value={cpf || ''}
                  onChange={(event) => setCPF(event.target.value)}
                />
              </label>
              <label className="label-ra-estagiario">
                RG:
                <InputMask
                  mask="99.999.999-9"
                  className="input-rg-editar-cadastro"
                  type="text"
                  value={rg || ''}
                  onChange={(event) => setRG(event.target.value)}
                />
              </label>
            </form>
            <form className="form-novo-cadastro">
              <label className="label-ra-estagiario">
                CARTÃO SUS:
                <InputMask
                  mask="999 9999 9999 9999"
                  className="input-cartaoSUS-editar-cadastro"
                  type="text"
                  value={sus || ''}
                  onChange={(event) => setSus(event.target.value)}
                />
              </label>
              <label className="label-ra-estagiario">
                DATA DE NASCIMENTO:
                <input
                  className="input-cartaoSUS-editar-cadastro"
                  type="date"
                  value={formatarData(data_nascimento) || ''}
                  onChange={(event) => setNascimento(event.target.value)}
                />
              </label>
              <label className="label-ra-estagiario">
                TELEFONE:
                <InputMask
                  mask="(99) 99999-9999"
                  className="input-cartaoSUS-editar-cadastro"
                  type="text"
                  value={telefone || ''}
                  onChange={(event) => setTelefone(event.target.value)}
                />
              </label>
              <label className="label-ra-estagiario">
                SEXO:
                <select
                  className="select-sexo-novo-paciente1"
                  value={selectsexo || ''}
                  onChange={(e) => setSelectsexo(e.target.value)}
                >
                  <option value={""}>Selecione:</option>
                  <option value={"feminino"}>Feminino</option>
                  <option value={"masculino"}>Masculino</option>
                </select>
              </label>
            </form>
            <form className="form-novo-cadastro">
              <label className="label-ra-estagiario">
                ENDEREÇO:
                <input
                  className="input-endereco-editar-cadastro"
                  type="text"
                  placeholder="ex: R ..., Bairro ..."
                  value={endereco || ''}
                  onChange={(event) => setEndereco(event.target.value)}
                />
              </label>
              <label className="label-ra-estagiario">
                N°:
                <input
                  className="input-numero-editar-cadastro"
                  type="text"
                  value={numero || ''}
                  onChange={(event) => setNumero(event.target.value)}
                />
              </label>
            </form>
          </div>

          <div className="dadosresponsavel">
            <div className="dadosPaciente">
              <h2>DADOS DO RESPONSÁVEL</h2>
            </div>
            <div className="form-cadastro-novo-paciente">
              <form className="form-novo-cadastro">
                <label>
                  NOME:
                  <input
                    className="input-nome-dados-responsavel"
                    type="text"
                    value={nome_responsavel || ''}
                    onChange={(event) => setNome_responsavel(event.target.value)}
                  />
                </label>
                <label>
                  CPF:
                  <InputMask
                    mask="999.999.999-99"
                    className="input-cpf-dados-responsavel"
                    type="text"
                    value={cpf_responsavel || ''}
                    onChange={(event) => setCpf_responsavel(event.target.value)}
                  />
                </label>
                <label>
                  RG:
                  <InputMask
                    mask="99.999.999-9"
                    className="input-rg-dados-responsavel"
                    type="text"
                    value={rg_responsavel || ''}
                    onChange={(event) => setRg_responsavel(event.target.value)}
                  />
                </label>
                <label>
                  PARENTESCO:
                  <input
                    className="input-parentesco-dados-responsavel"
                    type="text"
                    value={parentesco_responsavel || ''}
                    onChange={(event) => setParentesco_responsavel(event.target.value)}
                  />
                </label>
              </form>
              <form className="form-novo-cadastro">
                <label>
                  TELEFONE:
                  <InputMask
                    mask="(99) 99999-9999"
                    className="input-telefone-dados-responsavel"
                    type="text"
                    value={telefone_responsavel || ''}
                    onChange={(event) => setTelefone_responsavel(event.target.value)}
                  />
                </label>
                <label>
                  OCUPAÇÃO:
                  <input
                    className="input-ocupacao-dados-responsavel"
                    type="text"
                    value={ocupacao_responsavel || ''}
                    onChange={(event) => setOcupacao_responsavel(event.target.value)}
                  />
                </label>
                <label>
                  DATA DE NASCIMENTO:
                  <input
                    className="input-datanasc-dados-responsavel"
                    type="date"
                    value={formatarData(data_nascimento_responsavel) || ''}
                    onChange={(event) => setData_nascimento_responsavel(event.target.value)}
                  />
                </label>
              </form>
              <div className="form-novo-cadastro">
                <label>
                  IDADE:
                  <input
                    className="input-idade-dados-responsavel"
                    type="text"
                    readOnly
                    value={age || ''}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BasicButtons />
    </div>
  );
};

export default EditarCadastro;
