import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import "../styles/Admin.css";
// import { TbTrashX } from "react-icons/tb";
// import { FaRegEdit } from "react-icons/fa";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { useApi } from "../hooks/useApi";
import DropDownCursoAdmin from "../components/DropDownCursoAdmin";
import DropDownTipoAdmin from "../components/DropDownTipoAdmin";
import {formatarCPF} from "../components/FormatarCampos"
// import ModalExluirAdmin from '../components/ModalExcluirAdmin';
// import Modal from "../components/ModalPerfil";
// import ModalEditarAdmin from '../components/ModalEditarAdmin';

export const Admin = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [name, setName] = useState("")
  const [ra, setRa] = useState("")
  const [type, setType] = useState("")
  const [phone, setPhone] = useState("")
  const [curso, setCurso] = useState("")
  const [cpf, setCpf] = useState("")

  const handleRegister = async () => {
    if (password === confPassword) {
      if (email && password && name && ra && type && phone && curso && cpf) {
        await auth.update(id, email, password, name, ra, type, phone, curso, cpf);
        window.location.reload();
      } else {
      alert('Todos os campos são obrigatorios')
      }
    } else {
      alert('Senha não corresponde');
    }    
  }
  
  const api = useApi();

  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [id, setID] = useState("");

  
  const handleTabela = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get("id");
    const searchTerm = idParam;

    api.tabela()
      .then((tabelaDataJson) => {
        setData(tabelaDataJson.records);
        const jsonData = tabelaDataJson.records;
        if (idParam in jsonData) {
          setSearchResults(jsonData[idParam])
          setName(jsonData[idParam].name)
          setEmail(jsonData[idParam].email)
          setRa(jsonData[idParam].ra)
          setCpf(jsonData[idParam].cpf)
          setCurso(jsonData[idParam].curso)
          setType(jsonData[idParam].type)
          setPhone(jsonData[idParam].phone)
          setID(jsonData[idParam].id)
          console.log("ID: ", jsonData[idParam].id)
          return jsonData[idParam];
        } else {
            return null;
        }  
      })
      
      .catch((error) => {
        console.log(error);
    });
  };

  useEffect(() => {
    handleTabela();
  }, []);

  return (
    <div className="Admin">
      <Navbar />
      <div className="headerContainer">
        <div className="faixaAzul">
          <a href="/admin">
            <HiArrowNarrowLeft title="Voltar" className="seta" />
          </a>
          <div className="faixaAzul">
            <h1 className="h1BuscarPaciente1">ALTERAR CADASTRO</h1>
          </div>
        </div>
        <div className="informacoes-admin">
          <h3 className="h3-nome-admin">Nome:</h3>
          <p className="p-input-nome-admin">{searchResults.name}</p>
          <h3 className="h3-nome-admin">Email:</h3>
          <p className="p-input-nome-admin">{searchResults.email}</p>
        </div>
        <div className="cadastro-novo-estagiario">
          <p className="p-recordatorio-alimentar1">CADASTRAR NOVO ESTAGIÁRIO</p>
          <div className="form-estagiario">
            <form>
              <label>
                NOME:
                <input
                  className="input-nome-estagiario"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Digite o nome completo"
                />
              </label>
              <label className="label-ra-estagiario">
                RA:
                <input
                  className="ra-estagiario"
                  type="text"
                  value={ra}
                  onChange={e => setRa(e.target.value)}
                  placeholder="_______"
                ></input>
              </label>
              <label className="label-ra-estagiario">
                CPF:
                <input
                  className="cpf-estagiario"
                  type="text"
                  value={cpf}
                  onChange={e => setCpf(e.target.value)}
                  onKeyUp={() => formatarCPF(cpf, setCpf)}
                  maxLength="14"
                  placeholder="___-___-___-__"
                ></input>
              </label>
            </form>
            <form>
              <label>
                EMAIL:
                <input
                  className="email-estagiario"
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Digite o e-mail"
                ></input>
              </label>
              <label className="label-ra-estagiario">
                CURSO:
                <DropDownCursoAdmin selectDropDown={curso} setSelectDropDown={setCurso}/>
              </label>
            </form>
            <form>
              <label className="label-ra-estagiario">
                TIPO:
                <DropDownTipoAdmin selectDropDown1={type} setSelectDropDown1={setType}/>
              </label>
              <label>
                SENHA:
                <input
                  className="senha-estagiario"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Digite a senha"
                ></input>
              </label>
              <label className="label-ra-estagiario">
                CONFIRMAR SENHA:
                <input
                  className="confirmar-senha-estagiario"
                  type="text"
                  value={confPassword}
                  onChange={e => setConfPassword(e.target.value)}
                  placeholder="Confirme a senha"
                ></input>
              </label>
              <label className="label-ra-estagiario">
                TELEFONE:
                <input
                  className="telefone-estagiario"
                  type="text"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="&#40;__&#41; _____-____"
                ></input>
              </label>
            </form>
          </div>
          <div className="botao-salvar-estagiario">
            <button className="button-salvar-estagiario" type="submit" onClick={handleRegister}>Salvar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;