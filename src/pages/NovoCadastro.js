import React from "react";
import "../styles/NovoCadastro.css";
import Navbar from "../components/Navbar";
/* import ModalContinuar from "../components/ModalContinuar"; */
import DadosResponsavel from "../components/DadosResponsavel";
import { HiArrowNarrowLeft } from "react-icons/hi";
import AvalicaoSocioEconomico from "../components/AvaliacaoSocioEconomina";
import { useState, useContext } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {formatarCPF, formatarRG, formatarCartaoSus} from "../components/FormatarCampos"
import { AuthContext } from "../contexts/Auth/AuthContext";
import { valida_campos } from "../contexts/Auth/ValidaCampos";


const NovoCadastro = () => {
  const [datecadastro, setDatecadastro] = useState(new Date().toISOString().substr(0, 10));
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  function removerPontosTracosEspacos(texto) {
    return texto.replace(/[.\-\s]/g, '');
  };
  const cpfForm = removerPontosTracosEspacos(cpf);

  const [cartao_sus, setCartao_sus] = useState("");
  const [rg, setRG] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data_nascimento, setData_nascimento] = useState(""); // data de nascimento 
  const [age, setAge] = useState(""); // calculo idade não armazena
  const [email, setEmail] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [sexo, setSexo] = useState(""); // sexo
  const [endereco, setEndereco] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [numero, setNumero] = useState("");
  const [tipo_atendimento, setTipo_atendimento] = useState("SUS");

  const [diagnostico, setDiagnostico] = useState("SEM DIAGNÓSTICO");
  var [outras_formas_dm, setOutras_formas_dm] = useState(""); /// Esse pode ser um valor Null <<
  const [data_diagnostico, setData_diagnostico] = useState(""); /// continuar alterando

  const [gestante, setGestante] = useState("SIM");
  var [semanas_gestacao, setSemanas_gestacao] = useState(""); /// Esse pode ser um valor Null

  const [amamentando, setAmamentando] = useState("SIM");
  var [tempo_pos_parto, setTempo_pos_parto] = useState(""); /// Esse pode ser um valor Null <<

  const [deficiencia, setDeficiencia] = useState("Sim");
  var [tipo_deficiencia, setTipo_deficiencia] = useState(""); /// Esse pode ser um valor Null <<

  const [historico_dm1, setHistorico_dm1] = useState("SIM");
  var [parentesco_dm1 , setParentesco_dm1] = useState(""); /// Esse pode ser um valor Null <<

  const [historico_dm2, sitHistorico_dm2] = useState("SIM");
  var [parentesco_dm2, setParentesco_dm2] = useState(""); /// Esse pode ser um valor Null <<

  const [historico_outras_formas_dm, setHistorico_outras] = useState("SIM");
  var [parentesco_outras_formas_dm , setParentesci_outros ] = useState(""); /// Esse pode ser um valor Null <<

  const [metodo_insulina, setMetodo_insulina] = useState("Bomba");
  var [marca_modelo_bomba, setModelo_bomba] = useState(""); /// Esse pode ser um valor Null <<

  const [metodo_monitoramento_glicemia, setMmg] = useState("Sensor");
  var [marca_modelo_glicometro_sensor, setModelo_glicometro] = useState(""); /// Esse pode ser um valor Null << 
  /* const [marca_modelo_glicometro_sensor, setModelo_glicometro] = useState(""); */

  const [uso_app_glicemia, setUso_app_glicemia] = useState("NaoFaz") 
  var [outros_apps, setOutros_apps] = useState(""); /// Esse pode ser um valor Null << 

  const [nome_responsavel, setNome_responsavel] = useState("");
  const [cpf_responsavel, setCpf_responsavel] = useState("");
  const [rg_responsavel, setRg_responsavel] = useState("");
  const [parentesco_responsavel , setParentesco_responsavel ] = useState("");
  const [telefone_responsavel, setTelefone_responsavel] = useState("");
  const [ocupacao_responsavel, setOcupacao_responsavel] = useState("");
  const [data_nascimento_responsavel , setData_nascimento_responsavel ] = useState("");

  const [anexar, setAnexar] = useState(null);
  const [auxilio, setAuxilio] = useState("Nenhum");
  var [outros_auxilios, setOutros_auxilios] = useState(""); /// Esse pode ser um valor Null << 
  const [possui_celular_com_acesso_a_internet, setCelular_internet] = useState("");

  function converterParaNull(valor) {
    if (valor === '' || valor === undefined || isNaN(valor) || valor === 0) {
      return null;
    } else {
      return valor;
    }
  }

  outras_formas_dm = converterParaNull(outras_formas_dm);
  semanas_gestacao = converterParaNull(semanas_gestacao);
  tempo_pos_parto = converterParaNull(tempo_pos_parto);
  tipo_deficiencia = converterParaNull(tipo_deficiencia);
  parentesco_dm1 = converterParaNull(parentesco_dm1);
  parentesco_dm2 = converterParaNull(parentesco_dm2);
  parentesco_outras_formas_dm = converterParaNull(parentesco_outras_formas_dm);
  marca_modelo_bomba = converterParaNull(marca_modelo_bomba);
  marca_modelo_glicometro_sensor = converterParaNull(marca_modelo_glicometro_sensor);
  outros_apps = converterParaNull(outros_apps);
  outros_auxilios = converterParaNull(outros_auxilios);

  const [modal, setModal] = useState(false);
  const auth = useContext(AuthContext);

  const [idLogin] = useState(auth.user?.id);

  const toggleModal = async () => {
    let formIsValid = true;
    const formElements = document.querySelectorAll('form input[type="text"], form input[type="radio"], form select');

    formElements.forEach(element => {
      if (element.hasAttribute('required')) {
        if (element.type === 'select-one' && element.value === '') {
          alert(`Por favor, selecione uma opção para ${element.id}`);
          element.focus();
          formIsValid = false;
        }
        else if ((element.type === 'text' || element.type === 'radio') && !element.value) {
          alert(`Por favor, preencha o campo ${element.id}`);
          element.focus();
          formIsValid = false;
        }
      }
    });

    if (formIsValid) {
        await auth.registernovo(datecadastro, nome, cpfForm, cartao_sus, rg, telefone, data_nascimento, email, ocupacao, sexo, endereco, municipio, numero, tipo_atendimento,
        diagnostico, outras_formas_dm, data_diagnostico, gestante, semanas_gestacao, amamentando, tempo_pos_parto, deficiencia, tipo_deficiencia, historico_dm1, parentesco_dm1, historico_dm2, parentesco_dm2, historico_outras_formas_dm, parentesco_outras_formas_dm , metodo_insulina, 
        marca_modelo_bomba, metodo_monitoramento_glicemia, marca_modelo_glicometro_sensor, uso_app_glicemia, outros_apps, nome_responsavel, cpf_responsavel, rg_responsavel, parentesco_responsavel , telefone_responsavel, ocupacao_responsavel, data_nascimento_responsavel , anexar, auxilio, outros_auxilios, possui_celular_com_acesso_a_internet, idLogin);
      setModal(!modal);
    }

    return formIsValid;
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    setCartao_sus(formatarCartaoSus(value));
  };

  const calculateAge = (birthday) => {
    const ageDifferenceMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifferenceMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  const handleDateBlur = (e) => {
    const birthday = e.target.value;
    const age = calculateAge(birthday);
    setAge(age);
  }

  return (
    <div className="novocadastro">
      <Navbar />
      <h1 className="h1NovoCadastro">Novo Cadastro</h1>
      <div className="headerContainer">
        <div className="faixaAzulCadastro">
          <div className="faixaAzul-certa">
            <a href="/home">
              <HiArrowNarrowLeft className="seta" />
            </a>
            <h1 className="centralizando">DADOS DO PACIENTE</h1>
            <div className="dtexame2NovoCadastro">
              <input 
                type={"date"} 
                name="dateexame" 
                className="inputDataEd" 
                value={datecadastro}
                onChange={(e) => setDatecadastro(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-cadastro-novo-paciente">
            <form className="form-novo-cadastro">
              <label>
                NOME:
                <input
                  className="input-nome-novo-paciente"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </label>
              <label className="label-ra-estagiario">
                CPF:
                <input
                  type="text"
                  value={cpf}
                  onChange={(e) => setCPF(e.target.value)}
                  onKeyUp={() => formatarCPF(cpf, setCPF)}
                  maxLength="14"
                  placeholder="___.___.___-__"
                />
              </label>
            </form>
            <form className="form-novo-cadastro">
            <label>
                CARTÃO SUS:
                <input
                  type="text"
                  value={cartao_sus}
                  onChange={handleInputChange}
                  maxLength="18"
                  className="input-cartaoSus-novo-cadastro"
                  placeholder="___ ____ ____ ____"
                ></input>
            </label>
              <label className="label-ra-estagiario">
                RG:
                  <input
                    type="text"
                    value={rg}
                    onChange={(e) => setRG(e.target.value)}
                    onKeyUp={() => formatarRG(rg, setRG)}
                    maxLength="12"
                    placeholder="__.___.___-_"
                  />
              </label>
              <label className="label-ra-estagiario label-phone">
                  TELEFONE:
                  <PhoneInput
                    international
                    value={telefone}
                    onChange={setTelefone}
                    defaultCountry="BR"
                    className="input-telefone-novo-cadastro"
                    placeholder="(11) 99999-9999"
                  />
              </label>
              <label className="label-ra-estagiario">
                DATA DE NASCIMENTO:
                <input
                  type="date"
                  velue={data_nascimento}
                  onChange={(e) => setData_nascimento(e.target.value)}
                  onBlur={handleDateBlur}
                  className="input-dataNasc-novo-cadastro"
                ></input>
              </label>
              <label className="label-ra-estagiario">
                IDADE:
                <input
                  type="number"
                  className="input-idade-novo-cadastro"
                  value={age}
                  readOnly    
                ></input>
              </label>
            </form>
            <form className="form-novo-cadastro">
              <label>
                EMAIL:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-email-novo-cadastro"
                  placeholder="EX: seuemail@email.com"
                ></input>
              </label>
              <label className="label-ra-estagiario">
                OCUPAÇÃO:
                <input
                  type="text"
                  value={ocupacao}
                  onChange={(e) => setOcupacao(e.target.value)}
                  className="input-ocupacao-novo-cadastro"
                ></input>
              </label>
            </form>
            <form className="form-novo-cadastro">
              <label>
                SEXO:
                <select className="select-sexo-novo-paciente" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                    <option value={""} >Selecione:</option>
                    <option value={"feminino"} >Feminino</option>
                    <option value={"masculino"} >Masculino</option>
                </select>
              </label>
              <label className="label-ra-estagiario">
                ENDEREÇO:
                <input
                  type="text"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  className="input-endereco-novo-cadastro"
                  placeholder="EX: R: .., Bairro: ..."
                ></input>
              </label>
              <label className="label-ra-estagiario">
                MUNICÍPIO:
                <input
                  type="text"
                  value={municipio}
                  onChange={(e) => setMunicipio(e.target.value)}
                  className="input-municipio-novo-cadastro"
                  placeholder="ex: cidade..."
                ></input>
              </label>
              <label className="label-ra-estagiario">
                N°:
                <input
                  type="text"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  className="input-numero-novo-cadastro"
                ></input>
              </label>
            </form>
          </div>
          <form className="formNovoCadastro">
            <span className="span-tipo-paciente">
              <h5 className="h5-tipo-de-atendimento">Tipo de Atendimento:</h5>
              <div className="input-checkbox-novo-paciente">
                <label className="check-sus-novo-paciente">
                  <input
                    type={"radio"}
                    value={"SUS"}
                    onChange={(e) => setTipo_atendimento(e.target.value)}
                    className="input-tipo-atendimento-novo-cadastro"
                    name="inputNovoCadastro"
                    checked={tipo_atendimento === "SUS"}
                  ></input>
                  <h5 className="h5-sus-novo-cadastro">SUS</h5>
                </label>
                <label className="check-convenioe-novo-pacient">
                  <input
                    type={"radio"}
                    value={"CONVENIO"}
                    onChange={(e) => setTipo_atendimento(e.target.value) }
                    className="input-tipo-atendimento-novo-cadastro"
                    name="inputNovoCadastro"
                    checked={tipo_atendimento === "CONVENIO"}
                  ></input>
                  <h5 className="h5-sus-novo-cadastro">CONVÊNIO</h5>
                </label>
                <label className="check-particular-novo-paciente">
                  <input
                    type={"radio"}
                    value={"PARTICULAR"}
                    onChange={(e) => setTipo_atendimento(e.target.value) }
                    className="input-tipo-atendimento-novo-cadastro"
                    name="inputNovoCadastro"
                    checked={tipo_atendimento === "PARTICULAR"}
                  ></input>
                  <h5 className="h5-sus-novo-cadastro">PARTICULAR</h5>
                </label>
                <label className="check-projeto-pesquisa-novo-cadastro">
                  <input
                    type={"radio"}
                    value={"PROJETO"}
                    onChange={(e) => setTipo_atendimento(e.target.value) }
                    className="input-tipo-atendimento-novo-cadastro"
                    name="inputNovoCadastro"
                    checked={tipo_atendimento === "PROJETO"}
                  ></input>
                  <h5 className="h5-sus-novo-cadastro">PROJETO DE PESQUISA</h5>
                </label>
              </div>
            </span>
          </form>
          <form className="formNovoCadastro" name="diagnostico">
            <h4 className="h4-Diagnostico-texto">DIAGNÓSTICO:</h4>
            <div className="div-tabela-dms">
              <table className="tabela-dms">
                <tr>
                  <td className="tr-teste-razao-cho1">
                    <input
                      className="input-nao-realiza1"
                      id="dm1"
                      value={"DM1"}
                      onChange={(e) => {
                        setDiagnostico(e.target.value);
                        valida_campos('diagnostico');
                      }}
                      type={"radio"}
                      name="input-aplicativo"
                      checked={diagnostico === "DM1"}
                    ></input>
                  </td>
                  <td className="tr-teste-razao-cho2">DM1</td>
                </tr>
                <tr>
                  <td className="tr-teste-razao-cho1">
                    <input
                      className="input-nao-realiza1"
                      id="dm2"
                      value={"DM2"}
                      onChange={(e) => {
                        setDiagnostico(e.target.value);
                        valida_campos('diagnostico');
                      }}
                      type={"radio"}
                      name="input-aplicativo"
                      checked={diagnostico === "DM2"}
                    ></input>
                  </td>
                  <td className="tr-teste-razao-cho2">DM2</td>
                </tr>
                <tr>
                  <td className="tr-teste-razao-cho1">
                    <input
                      className="input-nao-realiza1"
                      id="dmg"
                      value={"DMG"}
                      onChange={(e) => {
                        setDiagnostico(e.target.value);
                        valida_campos('diagnostico');
                      }}
                      type={"radio"}
                      name="input-aplicativo"
                      checked={diagnostico === "DMG"}
                    ></input>
                  </td>
                  <td className="tr-teste-razao-cho2">DMG</td>
                </tr>
                <tr>
                  <td className="tr-teste-razao-cho1">
                    <input
                      className="input-nao-realiza1"
                      id="sdiagnostico"
                      value={"SEM DIAGNÓSTICO"}
                      onChange={(e) => {
                        setDiagnostico(e.target.value);
                        valida_campos('diagnostico');
                      }}
                      type={"radio"}
                      name="input-aplicativo"
                      checked={diagnostico === "SEM DIAGNÓSTICO"}
                    ></input>
                  </td>
                  <td className="tr-teste-razao-cho2">SEM DIAGNÓSTICO</td>
                </tr>
                <tr>
                  <td className="tr-teste-razao-cho1">
                    <input
                      className="input-nao-realiza1"
                      id="valida_diagnostico"
                      value={"OUTRAS FORMAS DE DM"}
                      onChange={(e) => {
                        setDiagnostico(e.target.value);
                        valida_campos('diagnostico');
                      }}
                      type={"radio"}
                      name="input-aplicativo"
                      checked={diagnostico === "OUTRAS FORMAS DE DM"}
                    ></input>
                  </td>
                  <td className="tr-teste-razao-cho2">
                    OUTRAS FORMAS DE DM{" "}
                    <input
                      className="input-outras-formas-de-dm"
                      id="campo_diagnostico"
                      value={outras_formas_dm}
                      onChange={(e) => setOutras_formas_dm(e.target.value)}
                      type={"text"}
                      name="input-name-dm"
                      required
                    ></input>
                  </td>
                </tr>
              </table>
              <table className="tabela-dms">
                <tr>
                  <td className="tr-teste-razao-cho3">
                    Data do diagnóstico:
                    <input
                      className="input-modelo-data"
                      id="data_diagnostico"
                      value={data_diagnostico}
                      onChange={(e) => setData_diagnostico(e.target.value)}
                      type={"date"}
                      name="name-input-modelo-bomba-date"
                    ></input>
                  </td>
                </tr>
              </table>
            </div>
          </form>
          <form className="formNovoCadastro" name="gestante">
            <h5 className="h4-Diagnostico-texto">GESTAÇÃO:</h5>
            <div className="div-tabela-dms">
              <table className="tabela-dms">
                <tr>
                  <td className="tr-teste-razao-cho2">GESTANTE</td>
                  <td className="tr-teste-razao-cho1-GESTACAO">
                    <input
                      className="input-nao-realiza12"
                      type={"radio"}
                      id="valida_gestante"
                      name="input-aplicativo2"
                      value={"SIM"}
                      onChange={(e) => {
                        setGestante(e.target.value)
                        valida_campos('gestante')
                      }}
                      checked={gestante === "SIM"}
                    ></input>
                    <p className="p-sim-gestacao">SIM</p>
                    <input
                      className="input-nao-realiza12"
                      id="nao"
                      type="radio"
                      name="input-aplicativo2"
                      value={"NAO"}
                      onChange={(e) => {
                        setGestante(e.target.value)
                        valida_campos('gestante')
                      }}
                      checked={gestante === "NAO"}
                    ></input>
                    <p className="p-sim-gestacao">NÃO</p>
                  </td>
                </tr>
                <tr>
                  <td className="tr-teste-razao-cho2">Se gestante</td>
                  <td>
                    <input
                      type={"text"}
                      className="input-semana-gestacao"
                      id="campo_gestante" // Usando Valida Campo
                      name="semanagesatacao"
                      placeholder="semana gestação"
                      value={semanas_gestacao}
                      onChange={(e) => setSemanas_gestacao(e.target.value)}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td className="tr-teste-razao-cho2">
                    LACTAÇÃO &#40;amamentando&#41;
                  </td>
                  <td className="tr-teste-razao-cho1-GESTACAO">
                    <input
                        className="input-nao-realiza12"
                        type={"radio"}
                        id="valida_amamentando"
                        name="input-aplicativo02"
                        value={"SIM"}
                        onChange={(e) => {
                          setAmamentando(e.target.value)
                          valida_campos('amamentando')
                        }}
                        checked={amamentando === "SIM"}
                      />
                    <p className="p-sim-gestacao">SIM</p>
                    <input
                        className="input-nao-realiza12"
                        id="nao"
                        type="radio"
                        name="input-aplicativo02"
                        value="NAO"
                        onChange={(e) => {
                          setAmamentando(e.target.value)
                          valida_campos('amamentando')
                        }}
                        checked={amamentando === "NAO"}
                      />
                    <p className="p-sim-gestacao">NÃO</p>
                  </td>
                </tr>
                <tr>
                  <td className="tr-teste-razao-cho2">Se amamentando</td>
                  <td className="tr-teste-razao-cho1-GESTACAO">
                  <label>        
                    <select className="select-sexo-novo-paciente" id="campo_amamentando" value={tempo_pos_parto} onChange={(e) => setTempo_pos_parto(e.target.value)}>
                        <option value={""}>Selecione:</option>
                        <option value={"0-6 meses pós parto"} >0-6 meses pós parto</option>
                        <option value={"7-12 meses pós parto"} >7-12 meses pós parto</option>
                    </select>
                  </label>     
                  </td>
                </tr>
              </table>
            </div>
          </form>
          <form className="formNovoCadastro">
            <h5 className="h4-Diagnostico-texto">DEFICIÊNCIA:</h5>
          <div className="div-tabela-dms">
            <table className="tabela-dms">
              <tr>
                <td className="tr-teste-razao-cho2">Deficiência física</td>
                <td className="tr-teste-razao-cho1-GESTACAO">
                  <input
                    className="input-nao-realiza12"
                    type={"radio"}
                    id="valida_deficiencia"
                    name="input-aplicativo0"
                    value={"SIM"}
                    onChange={(e) => {setDeficiencia(e.target.value);valida_campos('deficiencia')}}
                    checked={deficiencia === "SIM"}
                  ></input>
                  <p className="p-sim-gestacao">SIM</p>
                  <input
                    className="input-nao-realiza12"
                    id="nao"
                    type={"radio"}
                    name="input-aplicativo0"
                    value={"NAO"}
                    onChange={(e) => {setDeficiencia(e.target.value);valida_campos('deficiencia')}}
                    checked={deficiencia === "NAO"}
                  ></input>
                  <p className="p-sim-gestacao">NÃO</p>
                </td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho2">
                  Se possui deficiencia física, qual?
                </td>
                <td>
                  <input
                    type={"text"}
                    id="campo_deficiencia"
                    className="input-deficiencia"
                    name="semanagesatacao"
                    value={tipo_deficiencia}
                    onChange={(e) => setTipo_deficiencia(e.target.value)}
                    placeholder="qual deficiência?"
                    required
                  ></input>
                </td>
              </tr>
            </table>
          </div>
          </form>
          <form className="formNovoCadastro">
            <h5 className="h4-Diagnostico-texto">
              HISTÓRICO FAMILIAR DE DIABETES:
            </h5>
          <div className="div-tabela-dms-familia">
            <table className="table-dms-familia">
              <tr>
                <th className="th-dms">DM1</th>
                <th className="th-dms">DM2</th>
                <th className="th-dms">OUTRAS FORMAS DE DM</th>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      id="nao"
                      type={"radio"}
                      name="name-input-dms"
                      value={"NAO"}
                      onChange={(e) => {setHistorico_dm1(e.target.value);valida_campos('dm1')}}
                      checked={historico_dm1 === "NAO"}
                    />
                    <p className="p-nao-dms">NÃO</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      id="valida_dm1"
                      type={"radio"}
                      onChange={(e) => {setHistorico_dm1(e.target.value);valida_campos('dm1')}}
                      value={"SIM"}
                      name="name-input-dms"
                      checked={historico_dm1 === "SIM"}
                    />
                    <p className="p-nao-dms">SIM. se sim, qual o parentesco?</p>
                    <input
                      className="input-qual-parentesco"
                      id="campo_dm1"
                      type={"text"}
                      value={parentesco_dm1}
                      onChange={(e) => setParentesco_dm1(e.target.value)}
                      name="name-text-parentesco"
                      required
                    />
                  </div>
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      id="nao"
                      type={"radio"}
                      value={"NAO"}
                      onChange={(e) => {sitHistorico_dm2(e.target.value);valida_campos("dm2")}}
                      name="name-input-dms2"
                      checked={historico_dm2 === "NAO"}
                    ></input>
                    <p className="p-nao-dms">NÃO</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      id="valida_dm2"
                      type={"radio"}
                      value={"SIM"}
                      onChange={(e) => {sitHistorico_dm2(e.target.value);valida_campos("dm2")}}
                      name="name-input-dms2"
                      checked={historico_dm2 === "SIM"}
                    ></input>
                    <p className="p-nao-dms">SIM. se sim, qual o parentesco?</p>
                    <input
                      className="input-qual-parentesco"
                      type={"text"}
                      id="campo_dm2"
                      value={parentesco_dm2}
                      onChange={(e) => setParentesco_dm2(e.target.value)}
                      name="name-text-parentesco2"
                      required
                    ></input>
                  </div>
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      id="nao"
                      type={"radio"}
                      value={"NAO"}
                      onChange={(e) => {setHistorico_outras(e.target.value);valida_campos('dm3')}}
                      name="name-input-dms3"
                      checked={historico_outras_formas_dm === "NAO"}
                    ></input>
                    <p className="p-nao-dms">NÃO</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      id="valida_dm3"
                      type={"radio"}
                      onChange={(e) => {setHistorico_outras(e.target.value);valida_campos('dm3')}}
                      value={"SIM"}
                      name="name-input-dms3"
                      checked={historico_outras_formas_dm === "SIM"}
                    ></input>
                    <p className="p-nao-dms">SIM. se sim, qual o parentesco?</p>
                    <input
                      className="input-qual-parentesco"
                      id="campo_dm3"
                      type={"text"}
                      value={parentesco_outras_formas_dm }
                      onChange={(e) => setParentesci_outros (e.target.value)}
                      name="name-text-parentesco3"
                      required
                    ></input>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          </form>
          <form className="formNovoCadastro">
            <h5 className="h4-Diagnostico-texto">
              MÉTODO DE ADMINISTRAÇÃO DE INSULINA:
            </h5>
          <div className="div-tabela-dms">
            <table className="tabela-dms">
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza1"
                    type={"radio"}
                    id="nao"
                    value={"Nao faz uso de insulina"}
                    onChange={(e) => {setMetodo_insulina(e.target.value);valida_campos('mai')}}
                    name="input-aplicativo03"
                    checked={metodo_insulina === "Nao faz uso de insulina"}
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">Não faz uso de insulina</td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza1"
                    id="canetaouseringa"
                    type={"radio"}
                    value={"Caneta/seringa"}
                    onChange={(e) => {setMetodo_insulina(e.target.value);valida_campos('mai')}}
                    name="input-aplicativo03"
                    checked={metodo_insulina === "Caneta/seringa"}
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">Caneta/seringa</td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza1"
                    id="valida_mai"
                    type={"radio"}
                    value={"Bomba"}
                    onChange={(e) => {setMetodo_insulina(e.target.value);valida_campos('mai')}}
                    name="input-aplicativo03"
                    checked={metodo_insulina === "Bomba"}
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">Bomba</td>
              </tr>
            </table>
            <table className="tabela-dms">
              <tr>
                <td className="tr-teste-razao-cho3">
                  Se faz uso de Bomba anotar marca e modelo:
                  <input
                    className="input-modelo-bomba"
                    type={"text"}
                    id="campo_mai"
                    value={marca_modelo_bomba}
                    onChange={(e) => setModelo_bomba(e.target.value)}
                    name="name-input-modelo-bomba"
                    required
                  ></input>
                </td>
              </tr>
            </table>
          </div>
          </form>
          <form className="formNovoCadastro">
            <h5 className="h4-Diagnostico-texto">
              MÉTODO DE MONITORAMENTO DE GLICEMIA:
            </h5>
          <div className="div-tabela-dms">
            <table className="tabela-dms">
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza1"
                    id="nao"
                    type={"radio"}
                    value={"NaoFaz"}
                    onChange={(e) => {setMmg(e.target.value);valida_campos('mmg');valida_campos('mmg2')}}
                    name="input-aplicativo4"
                    checked={metodo_monitoramento_glicemia === "NaoFaz"}
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">Não faz</td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza1"
                    id="valida_mmg"
                    type={"radio"}
                    value={"Glicometro"}
                    onChange={(e) => {setMmg(e.target.value);valida_campos('mmg');valida_campos('mmg2')}}
                    name="input-aplicativo4"
                    checked={metodo_monitoramento_glicemia === "Glicometro"}
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">
                  Glicômetro. Marca e modelo:{" "}
                  <input
                    className="input-modelo-bomba2"
                    id="campo_mmg"
                    type={"text"}
                    name="name-input-modelo-bomba2"
                    value={marca_modelo_glicometro_sensor}
                    onChange={(e) => setModelo_glicometro(e.target.value)}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza1"
                    id="valida_mmg2"
                    type={"radio"}
                    value={"Sensor"}
                    onChange={(e) => {setMmg(e.target.value);valida_campos('mmg');valida_campos('mmg2')}}
                    name="input-aplicativo4"
                    checked={metodo_monitoramento_glicemia === "Sensor"}
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">
                  Sensor de monitoramento contínuo. Marca e modelo:
                  <input
                    className="input-modelo-bomba2"
                    id="campo_mmg2"
                    value={marca_modelo_glicometro_sensor}
                    onChange={(e) => setModelo_glicometro(e.target.value)}
                    type={"text"}
                    name="name-input-modelo-bomba3"
                  ></input>
                </td>
              </tr>
            </table>
          </div>
          </form>
          <form className="formNovoCadastro">
            <h5 className="h4-Diagnostico-texto">
              FAZ O USO DE APP PARA REGISTRO DE GLICEMIA E CONTAGEM DE CHO:
            </h5>
          <div className="div-tabela-dms">
            <table className="tabela-dms">
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza1"                  
                    type={"radio"}
                    id="nao"
                    value={"NaoFaz"}
                    onChange={(e) => {setUso_app_glicemia(e.target.value);valida_campos('app')}}
                    name="input-aplicativo5"
                    checked={uso_app_glicemia === "NaoFaz"}
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">Não faz</td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza1"
                    type={"radio"}
                    id="iglicho"
                    value={"iGlico"}
                    onChange={(e) => {setUso_app_glicemia(e.target.value);valida_campos('app')}}
                    name="input-aplicativo5"
                    checked={uso_app_glicemia === "iGlico"}
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">iGlicho</td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza1"
                    id="glic"
                    value={"Glic"}
                    onChange={(e) => {setUso_app_glicemia(e.target.value);valida_campos('app')}}
                    type={"radio"}
                    name="input-aplicativo5"
                    checked={uso_app_glicemia === "Glic"}
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">Glic</td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza1"
                    id="valida_app"
                    value={"OutroAPP"}
                    onChange={(e) => {setUso_app_glicemia(e.target.value);valida_campos('app')}}
                    type={"radio"}
                    name="input-aplicativo5"
                    checked={uso_app_glicemia === "OutroAPP"}
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">
                  Outro:
                  <input
                    className="input-modelo-bomba2"
                    id="campo_app"
                    value={outros_apps}
                    onChange={(e) => setOutros_apps(e.target.value)}
                    type={"text"}
                    name="name-input-modelo-bomba5"
                    required
                  ></input>
                </td>
              </tr>
            </table>
          </div>
          </form>
          <DadosResponsavel nome_responsavel={nome_responsavel} setNome_responsavel={setNome_responsavel} 
          cpf_responsavel={cpf_responsavel} setCpf_responsavel={setCpf_responsavel} 
          rg_responsavel={rg_responsavel} setRg_responsavel={setRg_responsavel} 
          parentesco_responsavel ={parentesco_responsavel } setParentesco_responsavel ={setParentesco_responsavel }
          telefone_responsavel={telefone_responsavel} setTelefone_responsavel={setTelefone_responsavel}
          ocupacao_responsavel={ocupacao_responsavel} setOcupacao_responsavel={setOcupacao_responsavel}
          data_nascimento_responsavel ={data_nascimento_responsavel } setData_nascimento_responsavel ={setData_nascimento_responsavel }/>
          <AvalicaoSocioEconomico anexar={anexar} setAnexar={setAnexar}/><>
        <form className="formNovoCadastro">
      <h5 className="h4-Diagnostico-texto">
        RECEBE ALGUM TIPO DE AUXÍLIO DO GOVERNO?
      </h5>
      <div className="div-tabela-dms">
        <table className="tabela-dms">
          <tr>
            <td className="tr-teste-razao-cho1">
              <input
                className="input-nao-realiza1"
                id="valegaz"
                value={"Valegaz"}
                onChange={(e) => {setAuxilio("Valegaz");valida_campos('auxilio')}}
                type={"radio"}
                name="input-aplicativo6"
                checked={auxilio === "Valegaz"}
              ></input>
            </td>
            <td className="tr-teste-razao-cho2">Vale gás</td>
          </tr>
          <tr>
            <td className="tr-teste-razao-cho1">
              <input
                className="input-nao-realiza1"
                id="auxiliobr"
                value={"AuxilioBrasil"}
                onChange={(e) => {setAuxilio("AuxilioBrasil");valida_campos('auxilio')}}
                type={"radio"}
                name="input-aplicativo6"
                checked={auxilio === "AuxilioBrasil"}
              ></input>
            </td>
            <td className="tr-teste-razao-cho2">Auxílio Brasil</td>
          </tr>
          <tr>
            <td className="tr-teste-razao-cho1">
              <input
                className="input-nao-realiza1"
                id="valida_auxilio"
                value={"OutroAuxilio"}
                onChange={(e) => {setAuxilio("OutroAuxilio");valida_campos('auxilio')}}
                type={"radio"}
                name="input-aplicativo6"
                checked={auxilio === "OutroAuxilio"}
              ></input>
            </td>
            <td className="tr-teste-razao-cho2">
              Outros:
              <input
                className="input-modelo-bomba2"
                id="campo_auxilio"
                value={outros_auxilios}
                onChange={(e) => setOutros_auxilios(e.target.value)}
                type={"text"}
                name="name-input-modelo-bomba6"
                required
              ></input>
            </td>
          </tr>
          <tr>
              <select className="input-outros-tipo-de-auxilio6" value={possui_celular_com_acesso_a_internet} onChange={(e) => setCelular_internet(e.target.value)} required>
                  <option value={""} >Selecione:</option>
                  <option value={"Sim"} >Sim</option>
                  <option value={"Não"} >Não</option>
              </select>
              <td className="tr-teste-razao-cho2">
             Possui telefone celular com acesso a internet?</td> 
        </tr>
        </table>
      </div> 
      </form>
              <div className='botaoSalvarCadastro'>
                  <button onClick={toggleModal} className="salvarCadastro"> Salvar </button>      
              </div>
            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <h2 className="tituloContinuar">Cadastro feito com sucesso!</h2>
                  <a href="/paciente" className="modalContinuar">Continuar</a>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default NovoCadastro;
