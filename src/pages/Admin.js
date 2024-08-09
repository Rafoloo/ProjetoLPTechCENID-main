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
import { formatarCPF } from "../components/FormatarCampos";
import ModalExluirAdmin from "../components/ModalExcluirAdmin";
// import Modal from "../components/ModalPerfil";
import ModalEditarAdmin from "../components/ModalEditarAdmin";

export const Admin = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [name, setName] = useState("");
  const [ra, setRa] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [curso, setCurso] = useState("");
  const [cpf, setCpf] = useState("");

  const handleRegister = async () => {
    if (password === confPassword) {
      if (email && password && name && ra && type && phone && curso && cpf) {
        await auth.register(email, password, name, ra, type, phone, curso, cpf);
        window.location.reload();
      } else {
        alert("Todos os campos são obrigatorios");
      }
    } else {
      alert("Senha não corresponde");
    }
  };

  const api = useApi();

  const [data, setData] = useState([]);

  const handleTabela = () => {
    api
      .tabela()
      .then((tabelaDataJson) => {
        setData(tabelaDataJson.records);
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
          <a href="/home">
            <HiArrowNarrowLeft title="Voltar" className="seta" />
          </a>
          <div className="faixaAzul">
            <h1 className="h1BuscarPaciente1">ADMINISTRADOR</h1>
          </div>
        </div>
        <div className="informacoes-admin">
          <h3 className="h3-nome-admin">Nome:</h3>
          <p className="p-input-nome-admin"></p>
          <h3 className="h3-nome-admin">Email:</h3>
          <p className="p-input-nome-admin"></p>
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
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite o nome completo"
                />
              </label>
              <label className="label-ra-estagiario">
                RA:
                <input
                  className="ra-estagiario"
                  type="text"
                  value={ra}
                  onChange={(e) => setRa(e.target.value)}
                  placeholder="_______"
                ></input>
              </label>
              <label className="label-ra-estagiario">
                CPF:
                <input
                  className="cpf-estagiario"
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite o e-mail"
                ></input>
              </label>
              <label className="label-ra-estagiario">
                CURSO:
                <DropDownCursoAdmin
                  selectDropDown={curso}
                  setSelectDropDown={setCurso}
                />
              </label>
            </form>
            <form>
              <label className="label-ra-estagiario">
                TIPO:
                <DropDownTipoAdmin
                  selectDropDown1={type}
                  setSelectDropDown1={setType}
                />
              </label>
              <label>
                SENHA:
                <input
                  className="senha-estagiario"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite a senha"
                ></input>
              </label>
              <label className="label-ra-estagiario">
                CONFIRMAR SENHA:
                <input
                  className="confirmar-senha-estagiario"
                  type="password"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  placeholder="Confirme a senha"
                ></input>
              </label>
              <label className="label-ra-estagiario">
                TELEFONE:
                <input
                  className="telefone-estagiario"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="&#40;__&#41; _____-____"
                ></input>
              </label>
            </form>
          </div>
          <div className="botao-salvar-estagiario">
            <button
              className="button-salvar-estagiario"
              type="submit"
              onClick={handleRegister}
            >
              Salvar
            </button>
          </div>
        </div>
        <div className="tabela-estagiarios-cadastrados">
          <table className="tableAdmin">
            <tr className="tabela-resultado-estagiarios">
              <th className="id-estagiario2 thAdmin" id="id-estagiario2">
                ID
              </th>
              <th className="nome-estagiario2 thAdmin" id="estagiario2">
                NOME
              </th>
              <th className="cpf-estagiario2 thAdmin" id="cpf-estagiario2">
                CPF
              </th>
              <th className="ra-estagiario2 thAdmin" id="ra-estagiario2">
                RA
              </th>
              <th className="senha-estagiario2 thAdmin" id="senha-estagiario2">
                TIPO
              </th>
              <th className="tipo-estagiario2 thAdmin" id="tipo-estagiario2">
                CURSO
              </th>
              <th className="curso-estagiario2 thAdmin" id="curso-estagiario2">
                TELEFONE
              </th>
              <th className="icons-estagiario thAdmin" id="icons-estagiario">
                E-MAIL
                {/* <button type="search" className="botao-lupa" onClick={handleTabela} >
                  <MdSearch title="Pesquisar" />
                </button> */}
              </th>
            </tr>
            <tbody>
              {Object.values(data).map((user) => (
                <tr key={user.id}>
                  <td className="centralizado tdAdmin">{user.id}</td>
                  <td className="centralizado tdAdmin">{user.name}</td>
                  <td className="centralizado tdAdmin">{user.cpf}</td>
                  <td className="centralizado tdAdmin">{user.ra}</td>
                  <td className="centralizado tdAdmin">{user.type}</td>
                  <td className="centralizado tdAdmin">{user.curso}</td>
                  <td className="centralizado tdAdmin">{user.phone}</td>
                  <td className="centralizado tdAdmin">{user.email}</td>
                  <td className="centralizado tdAdmin">
                    <button className="icon-excluir">
                      <ModalExluirAdmin
                        title="Excluir"
                        className="icon-modal-excluir"
                      />
                    </button>
                    <button className="icon-excluir">
                      <ModalEditarAdmin title="Editar" id={user.id}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
