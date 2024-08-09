import React from "react";
// import "../styles/NovoCadastro.css";
import "../styles/EditarCadastro.css";
import Navbar from "../components/Navbar";
import ModalAlterarCadastro from "../components/ModalAlterarCadastro";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";

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

  const [age, setAge] = useState(""); // calculo idade não armazena

  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();

  
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
            setID(response[0].id)
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
  }, []);

  const formatarData = (data) => {
    const date = new Date(data);
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const ano = date.getFullYear().toString();
    return `${ano}-${mes}-${dia}`;
  };

  const calculateAge = (birthday) => {
    const ageDifferenceMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifferenceMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  useEffect(() => {
    if (data_nascimento_responsavel) {
      const age = calculateAge(data_nascimento_responsavel);
      setAge(age);
    }
  }, [data_nascimento_responsavel]);
  
  /* console.log("searchResults:", searchResults); */

  
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
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  />
                </label>
                 
              <label className="label-ra-estagiario">
                CPF:
                <input 
                  className="input-cpf-editar-cadastro" 
                  type="text" 
                  placeholder="___.___.___-__"
                  value={cpf}
                  onChange={(event) => setCPF(event.target.value)}
                  />
              </label>
              <label className="label-ra-estagiario">
                RG:
                <input 
                  className="input-rg-editar-cadastro" 
                  type="text" 
                  placeholder="__.___.___-_"
                  value={rg}
                  onChange={(event) => setRG(event.target.value)}
                  />
              </label>
            </form>
            <form className="form-novo-cadastro">
              <label className="label-ra-estagiario">
                CARTÃO SUS:
                <input 
                  className="input-cartaoSUS-editar-cadastro" 
                  type="text" 
                  placeholder="___ ____ ____ ____"
                  value={sus}
                  onChange={(event) => setSus(event.target.value)}
                  />
              </label>
              <label className="label-ra-estagiario">
                DATA DE NASCIMENTO:
                <input 
                  className="input-cartaoSUS-editar-cadastro" 
                  type="date" 
                  value={formatarData(data_nascimento)}
                  onChange={(event) => setNascimento(event.target.value)}
                  />
              </label>
              <label className="label-ra-estagiario">
                TELEFONE:
                <input 
                  className="input-cartaoSUS-editar-cadastro" 
                  type="text" 
                  placeholder="&#40;__&#41; _____-____"
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                  />
              </label>
              <label className="label-ra-estagiario">
                SEXO:
                <select className="select-sexo-novo-paciente" value={selectsexo} onChange={(e) => setSelectsexo(e.target.value)}>
                    <option value={""} >Selecione:</option>
                    <option value={"feminino"} >Feminino</option>
                    <option value={"masculino"} >Masculino</option>
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
                  value={endereco}
                  onChange={(event) => setEndereco(event.target.value)}
                  />
              </label>
              <label className="label-ra-estagiario">
                N°:
                <input 
                  className="input-numero-editar-cadastro" 
                  type="text" 
                  value={numero}
                  onChange={(event) => setNumero(event.target.value)}
                  />
              </label>
            </form>
          </div>
          
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
                  <input 
                    className="input-nome-dados-responsavel" 
                    type="text" 
                    value={nome_responsavel}
                    onChange={(event) => setNome_responsavel(event.target.value)}
                  />
                </label>
                <label className="label-ra-estagiario">
                  CPF:
                  <input 
                      type="text" 
                      className="input-cpf-dados-responsavel" 
                      placeholder='___.___.___-__'
                      value={cpf_responsavel}
                      onChange={(event) => setCpf_responsavel(event.target.value)}
                    />
                </label>
                <label className="label-ra-estagiario">
                  RG:
                  <input 
                      type="text" 
                      className="input-rg-dados-responsavel" 
                      placeholder='__.___.___-_'
                      value={rg_responsavel}
                      onChange={(event) => setRg_responsavel(event.target.value)}
                    />
                </label>
              </form>
              <form className="form-novo-cadastro">
                <label className="label-ra-estagiario">
                  PARENTESCO:
                  <input 
                    type="text" 
                    className="input-parentesco-dados-responsavel" 
                    placeholder='ex: mãe, pai, avó...'
                    value={parentesco_responsavel}
                    onChange={(event) => setParentesco_responsavel(event.target.value)}
                    />
                </label>
                <label className="label-ra-estagiario">
                  TELEFONE:
                  <input 
                    type="text" 
                    className="input-telefone-dados-responsavel" 
                    placeholder='&#40;__&#41; _____-____'
                    value={telefone_responsavel}
                    onChange={(event) => setTelefone_responsavel(event.target.value)}
                    />
                </label>
                <label className="label-ra-estagiario">
                  OCUPAÇÃO:
                  <input 
                    type="text" 
                    className="input-ocupacao-dados-responsavel"
                    value={ocupacao_responsavel}
                    onChange={(event) => setOcupacao_responsavel(event.target.value)}
                    />
                </label>
                <label className="label-ra-estagiario">
                  DATA DE NASCIMENTO:
                  <input 
                    type="date" 
                    className="input-dataNasc-dados-responsavel"
                    value={formatarData(data_nascimento_responsavel)}
                    onChange={(event) => setData_nascimento_responsavel(event.target.value)}
                    />
                </label>
                <label className="label-ra-estagiario">
                  IDADE:
                  <input 
                    type="number" 
                    className="input-idade-dados-responsavel"
                    value={age}
                    readOnly
                    />
                </label>
              </form>
            </div>
                <ModalAlterarCadastro id={id}
                  nome={nome} cpf={cpf} rg={rg} sus={sus} data_nascimento={data_nascimento} 
                  telefone={telefone} selectsexo={selectsexo} endereco={endereco} numero={numero}
                  nome_responsavel={nome_responsavel} cpf_responsavel={cpf_responsavel} rg_responsavel={rg_responsavel}
                  parentesco_responsavel={parentesco_responsavel} ocupacao_responsavel={ocupacao_responsavel} 
                  data_nascimento_responsavel={data_nascimento_responsavel}
                />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarCadastro;
