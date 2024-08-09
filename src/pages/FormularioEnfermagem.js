import React from "react";
import "../styles/FormularioEnfermagem.css";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import CorpoSelecionar from "../assets/CorpoSelecionar.jpg";
import ModalSalvarEnfermagem from "../components/ModalSalvarEnfermagem";
import { useApi } from "../hooks/useApi";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { PDFDocument } from 'pdf-lib';


const FormularioEnfermagem = () => {
  const [error, setError] = useState(null);
  const auth = useContext(AuthContext);
  const [id, setID] = useState('');
  const [nome, setNome] = useState(''); 
  const [cpf, setCPF] = useState('');
  const [data_nascimento, setNascimento] = useState('');

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
            setNascimento(response[0].data_nascimento);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [tabelaPaciente]);

  const calcularIdade = (dataNascimento) => {
    const dataNascimentoDate = new Date(dataNascimento);
    const hoje = new Date();
    const diferencaEmMilissegundos = hoje - dataNascimentoDate;
    const anos = diferencaEmMilissegundos / (365 * 24 * 60 * 60 * 1000);
    return Math.floor(anos);
  };

  const [acompanhante, setAcompanhante] = useState('');
  const [glicchegada, setGlicchegada] = useState('');

  const [dataglic01, setDataglic01] = useState('');
  const [horaglic01, setHoraglic01] = useState('');
  const [glic01, setGlic01] = useState('');

  const [dataglic02, setDataglic02] = useState('');
  const [horaglic02, setHoraglic02] = useState('');
  const [glic02, setGlic02] = useState('');

  const [dataglic03, setDataglic03] = useState('');
  const [horaglic03, setHoraglic03] = useState('');
  const [glic03, setGlic03] = useState('');

  const [usomedicamento, setUsomedicamento] = useState('NÃO');
  const [medicamento1, setMedicamento1] = useState('');
  const [medicamento2, setMedicamento2] = useState('');
  const [medicamento3, setMedicamento3] = useState('');

  const [dose1, setDose1] = useState('');
  const [dose2, setDose2] = useState('');
  const [dose3, setDose3] = useState('');

  const [finalidade1, setFinalidade1] = useState('');
  const [finalidade2, setFinalidade2] = useState('');
  const [finalidade3, setFinalidade3] = useState('');

  const [diurese, setDiurese] = useState('');

  const [evacuacao, setEvacuacao ] = useState('');

  /* Pressão arterial & frequência cardíaca de repouso (sentado após 3 minutos de repouso ) <==== Verificar esse Ponto com o Eduardo*/

  /* Padrão Neuropático: */
  const [formPerD, setFormPerD] = useState('');
  const [formPerE, setFormPerE] = useState('');
  const [formPeD, setFormPeD] = useState('');
  const [formPeE, setFormPeE] = useState('');
  const [dormenbInfe, setDormenbInfe] = useState('');
  const [edemamenbInfe, setEdemamenbInfe] = useState('');
  const [claudicacaoNeu, setClaudicacaoNeu ] = useState('');

  /* Padrão Oftalmológico: */
  const [embacamentoV, setEmbacamentoV] = useState('');
  const [usoOculos, SetUsoOculos] = useState('');
  const [pruridoOcular, setPruridoOcular] = useState('');
  const [reExFundoOlho, setReExFundoOlho] = useState('');

  /* Avaliação da Lipodistrofia: */
  const [bracodireito, setBracodireito] = useState('');
  const [bracoesquerdo, setBracoesquerdo] = useState('');
  const [abdomen, setAbdomen] = useState('');
  const [nadegaDi, setNadegaDi ] = useState('');
  const [nadegaEs, setnadegaEs ] = useState('');
  const [coxaDireita, setCoxaDireita ] = useState('');
  const [coxaEsquerda, setCoxaEsquerda ] = useState('');

  /* Alterações dos pés */
  const [anidrose, setAidros] = useState('');
  const [atrofiaInter, setAtrofiaInter] = useState('');
  const [calos, setCalos] = useState('');
  const [fissuras, setFissuras] = useState('');
  const [haluxValgo,setHaluxValgo] = useState('');
  const [hiperacetose, setHiperacetose] = useState('');
  const [hiperpigment, setHiperpigment ] = useState('');
  const [micoseInter, setMicoseInter] = useState('');
  const [onicomicose, setOnicomicose] = useState('');
  const [pecavo,setPecavo] = useState('');
  const [pecharcot, setPecharcot] = useState('');
  const [pegarra, setPegarra] = useState('');
  const [peplano, setPeplano] = useState('');
  const [proemMetatar, setProemMetatar] = useState('');
  const [acentArcoPlantar, setAcentArcoPlantar] = useState('');
  const [lesoes, setLesoes] = useState('');
  const [unhaEncr, setUnhaEncr] = useState('');
  
  /* Hipótese Diagnóstica Geral */
  const [resumo, setResumo] = useState('');

  /* Medico Responsavel */
  const [nomeMedico, setNomeMedico] = useState('');
  const [emailMedico, setEmailMedico] = useState('');
  const [crm, setCrm] = useState('');
  const [phonemedico, setPhonemedidco] = useState('')

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file.size > 1000000) {
      const fileSizeMB = file.size / 1000000;
      setError(`O tamanho do arquivo deve ser no máximo 1MB.\nO arquivo atual tem o tamanho ${fileSizeMB.toFixed(2)} MB`);
    } else {
      setError(null);
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const pdfDoc = await PDFDocument.load(uint8Array);
      const pdfBytes = await pdfDoc.save();
      setAnexar(pdfBytes);
      anexar = pdfBytes;
    }
  };

  const [anexar, setAnexar] = useState('');

  return (
    <div className="home">
      <Navbar />
      <div className="headerContainer">
        <div className="faixaAzulCadastro">
          <div className="faixaAzul-certa">
            <a href={`/paciente?cpf=${searchResults[0]?.cpf}`}>
              <HiArrowNarrowLeft className="seta" />
            </a>
            <h1 className="centralizando">AVALIAÇÃO ENFERMAGEM</h1>
            <div className="dtexame2NovoCadastro">
              <input type={"date"} name="dateEnf" className="inputDataEd" />
            </div>
          </div>
        </div>
        <div>
          <div className="form-dados-paciente-enf">
            <div className="form-dados-paciente-enfermagem">
              <form className="infor-pessoal-paciente-enf">
                <label className="p-nome-paciente-infos-enf">
                  Nome paciente:
                </label>
                <p className="nome-saida-enf" type="text">{nome}</p>
                <label className="p-idade-paciente-infos-enf">Idade:</label>
                <p className="idade-saida-enf">{calcularIdade(data_nascimento)}</p>
              </form>
            </div>
          </div>
          <div className="div-faixa-azul">PARA PREENCHER</div>
          <div className="form-enf">
            <form>
              <div className="acompanhante-enfermagem">
                <label className="acompanhante-enfermagem">
                  Acompanhante da consulta:
                </label>
                <input
                  className="input-acompanhante-enfermagem"
                  type={"text"}
                  name="acompanhanteConsultaEnfermagem"
                  value={acompanhante}
                  onChange={(event) => setAcompanhante(event.target.value)}
                ></input>
                <div className="acompanhante-enfermagem">
                  <label className="acompanhante-enfermagem">
                    Glicemia de chegada:
                  </label>
                  <input
                    className="input-glicemia-enfermagem"
                    type={"text"}
                    name="acompanhanteConsultaEnfermagem"
                    value={glicchegada}
                    onChange={(event) => setGlicchegada(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="form-registro-glicemia">
                <label className="registro-glicemia">
                  Registro da glicemia dos últimos 3 dias:
                </label>
                <table className="table-glicemia">
                  <tr>
                    <th className="date-glicemia">DATA</th>
                    <th className="date-glicemia">HORA</th>
                    <th className="date-glicemia">GLICEMIA</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-data-hora-glicemia-date"
                        type={"date"}
                        value={dataglic01}
                        onChange={(event) => setDataglic01(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-data-hora-glicemia-time"
                        type={"time"}
                        value={horaglic01}
                        onChange={(event) => setHoraglic01(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-data-hora-glicemia"
                        type={"text"}
                        value={glic01}
                        onChange={(event) => setGlic01(event.target.value)}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-data-hora-glicemia-date"
                        type={"date"}
                        value={dataglic02}
                        onChange={(event) => setDataglic02(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-data-hora-glicemia-time"
                        type={"time"}
                        value={horaglic02}
                        onChange={(event) => setHoraglic02(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-data-hora-glicemia"
                        type={"text"}
                        value={glic02}
                        onChange={(event) => setGlic02(event.target.value)}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-data-hora-glicemia-date"
                        type={"date"}
                        value={dataglic03}
                        onChange={(event) => setDataglic03(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-data-hora-glicemia-time"
                        type={"time"}
                        value={horaglic03}
                        onChange={(event) => setHoraglic03(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-data-hora-glicemia"
                        type={"text"}
                        value={glic03}
                        onChange={(event) => setGlic03(event.target.value)}
                      ></input>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="div-medicamento">
                <label className="label-uso-medicamento">
                  Está fazendo uso de algum medicamento além da insulina?
                </label>
                <table>
                  <tr>
                    <td>
                      <input
                        className="input-medicamento"
                        type={"radio"}
                        name="input-radio-medicamento"
                        value={'NÃO'}
                        onChange={(event) => setUsomedicamento(event.target.value)}
                      ></input>
                    </td>
                    <td className="input-radio-medicamento-nao-sim">Não</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-medicamento"
                        type={"radio"}
                        name="input-radio-medicamento"
                        value={'SIM'}
                        onChange={(event) => setUsomedicamento(event.target.value)}
                      ></input>
                    </td>
                    <td className="input-radio-medicamento-nao-sim">
                      Sim, se sim preencher os dados no quadro abaixo:
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th className="nome-descricao-finalidade">
                      Nome do medicamento
                    </th>
                    <th className="nome-descricao-finalidade">
                      Dose &#40;descrição&#41;
                    </th>
                    <th className="nome-descricao-finalidade">
                      Finalidade do medicamento
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-nome-dose-finalidade-medicamento"
                        type={"text"}
                        value={medicamento1}
                        onChange={(event) => setMedicamento1(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-nome-dose-finalidade-medicamento"
                        type={"text"}
                        value={dose1}
                        onChange={(event) => setDose1(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-nome-dose-finalidade-medicamento"
                        type={"text"}
                        value={finalidade1}
                        onChange={(event) => setFinalidade1(event.target.value)}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-nome-dose-finalidade-medicamento"
                        type={"text"}
                        value={medicamento2}
                        onChange={(event) => setMedicamento2(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-nome-dose-finalidade-medicamento"
                        type={"text"}
                        value={dose2}
                        onChange={(event) => setDose2(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-nome-dose-finalidade-medicamento"
                        type={"text"}
                        value={finalidade2}
                        onChange={(event) => setFinalidade2(event.target.value)}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-nome-dose-finalidade-medicamento"
                        type={"text"}
                        value={medicamento3}
                        onChange={(event) => setMedicamento3(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-nome-dose-finalidade-medicamento"
                        type={"text"}
                        value={dose3}
                        onChange={(event) => setDose3(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-nome-dose-finalidade-medicamento"
                        type={"text"}
                        value={finalidade3}
                        onChange={(event) => setFinalidade3(event.target.value)}
                      ></input>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="diurese">
                <label
                  className="label-diurese"
                  title="Marcar o item que estiver presente"
                >
                  Diurese: &#40;Urina&#41;
                </label>
                <table>
                  <tr>
                    <td>
                      <input
                        className="input-diurese-opcoes"
                        type={"radio"}
                        name="input-radio-diurese"
                        value={"Oligúria"}
                        onChange={(event) => setDiurese(event.target.value)}
                      ></input>
                    </td>
                    <td className="td-opcoes-diurese">
                      <strong>Oligúria</strong> - &#40;produção de urina entre
                      100ml a 400ml no periodo de 24 horas&#41;.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-diurese-opcoes"
                        type={"radio"}
                        name="input-radio-diurese"
                        value={"Poliúria"}
                        onChange={(event) => setDiurese(event.target.value)}
                      ></input>
                    </td>
                    <td className="td-opcoes-diurese">
                      <strong>Poliúria</strong> - aumento do volume
                      urinário&#41;
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-diurese-opcoes"
                        type={"radio"}
                        name="input-radio-diurese"
                        value={"Disúria"}
                        onChange={(event) => setDiurese(event.target.value)}
                      ></input>
                    </td>
                    <td className="td-opcoes-diurese">
                      <strong>Disúria</strong> - dificuldade para urinar que
                      pode ser acompanhada de dor
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-diurese-opcoes"
                        type={"radio"}
                        name="input-radio-diurese"
                        value={"Polaciúria"}
                        onChange={(event) => setDiurese(event.target.value)}
                      ></input>
                    </td>
                    <td className="td-opcoes-diurese">
                      <strong>Polaciúria</strong> - aumento da frequência das
                      micções, ou seja, micções com intervalos manores que o
                      habitual
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-diurese-opcoes"
                        type={"radio"}
                        name="input-radio-diurese"
                        value={"Nictúria"}
                        onChange={(event) => setDiurese(event.target.value)}
                      ></input>
                    </td>
                    <td className="td-opcoes-diurese">
                      <strong>Nictúria</strong> - são aqueles que se levantam
                      pelo menos duas vezes por noite para urinar
                    </td>
                  </tr>
                </table>
              </div>
              <div className="diurese">
                <label
                  className="label-diurese"
                  title="Marcar o item que estiver presente"
                >
                  Evacuação: &#40;Dejeção de fezes&#41;
                </label>
                <table>
                  <tr>
                    <td>
                      <input
                        className="input-diurese-opcoes"
                        type={"radio"}
                        name="input-radio-diurese"
                        value={"Diário"}
                        onChange={(event) => setEvacuacao(event.target.value)}
                      ></input>
                    </td>
                    <td className="td-opcoes-diurese">
                      <strong>Diário</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-diurese-opcoes"
                        type={"radio"}
                        name="input-radio-diurese"
                        value={"Constipação"}
                        onChange={(event) => setEvacuacao(event.target.value)}
                      ></input>
                    </td>
                    <td className="td-opcoes-diurese">
                      <strong>Constipação</strong> - menos de três evacuações
                      por semana
                    </td>
                  </tr>
                </table>
              </div>
              <div className="pressao-arterial">
                <label className="label-pressao-arterial">
                  Pressão arterial & frequência cardíaca de repouso &#40;sentado
                  após 3 minutos de repouso &#41;
                </label>
                <table>
                  <tr>
                    <th className="medida-th">Medida</th>
                    <th className="valor-th">Valor &#40;mmHg&#41;</th>
                    <th className="percentil-th">
                      Percentil para menores de 14 anos
                    </th>
                    <th className="percentil-th">
                      Classificação de acordo com tabela de referência
                    </th>
                  </tr>
                  <tr>
                    <td className="pas-pad-fc-td">PAS &#40;mmHg&#41;</td>
                    <td></td>
                    <td></td>
                    {/* Resultado */}
                    <td></td>
                  </tr>
                  <tr>
                    <td className="pas-pad-fc-td">PAD &#40;mmHg&#41;</td>
                    <td></td>
                    <td></td>
                    {/* Resultado */}
                    <td></td>
                  </tr>
                  <tr>
                    <td className="pas-pad-fc-td">FC &#40;bpm&#41;</td>
                    <td></td>
                    <td></td>
                    {/* Resultado */}
                    <td></td>
                  </tr>
                </table>
              </div>
              <div className="div-padrao-neuropatico">
                <label className="label-padrao-neuropatico">
                  Padrão Neuropático:
                </label>
                <table>
                  <tr>
                    <th className="X-td">X</th>
                    <th className="descricao-td">Descrição</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        velue={"X"}
                        onChange={(event) => setFormPerD(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Formigamento na perna direita</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        velue={"X"}
                        onChange={(event) => setFormPerE(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Formigamento na perna esquerda</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        velue={"X"}
                        onChange={(event) => setFormPeD(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Formigamento no pé direito</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        velue={"X"}
                        onChange={(event) => setFormPeE(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Formigamento no pé esquerdo</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        velue={"X"}
                        onChange={(event) => setDormenbInfe(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Dores nos membros inferiores</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        velue={"X"}
                        onChange={(event) => setEdemamenbInfe(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>
                        Edema &#40;inchaço&#41; nos membros inferiores
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        velue={"X"}
                        onChange={(event) => setClaudicacaoNeu(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Claudicação neurogênica-</strong> é caracterizada
                      por dor glútea, sensação de peso nas pernas que piora em
                      pé ou andando e tipicamento melhora sentado. Com
                      frequência é relatado fraqueza nas pernas e sensação de
                      formigamento nas plantas dos pés.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="div-padrao-neuropatico">
                <label className="label-padrao-neuropatico">
                  Padrão Oftalmológico:
                </label>
                <table>
                  <tr>
                    <th className="X-td">X</th>
                    <th className="descricao-td">Descrição</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setEmbacamentoV(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Embaçamento visual</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => SetUsoOculos(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Uso de óculos</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setPruridoOcular(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Prurido ocular - coceira em olho</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setReExFundoOlho(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Realizou exame de fundo de olho-</strong> A
                      &#40;Fundoscopia&#41; direta é um exame clínico para
                      análise do nervo óptico e mácula. Sim, anexar exame.
                    </td>
                  </tr>
                </table>
                <div className="div-anexar-exame-fundo-olho">
                  <label>Anexar exame de fundo de olho</label>
                  <input
                    className="input-exame-fundo-olho"
                    type={"file"}
                    accept=".pdf"
                    value={null}
                    onChange={handleFileChange}
                    /* Anexar PDF AQ */
                  ></input>
                </div>
              </div>
              <div className="div-padrao-neuropatico">
                <label className="label-lipodistrofia">
                  <strong>Avaliação da Lipodistrofia:</strong> A Lipodistrofia
                  causa um acúmulo de gordura na região na qual a insulina foi
                  aplicada repetidas vezes.
                </label>
                <table>
                  <tr>
                    <th className="X-td">X</th>
                    <th className="descricao-td">Região</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setBracodireito(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Braço direito</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setBracoesquerdo(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Braço esquerdo</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setAbdomen(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Abdômen</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setNadegaDi(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Nádega direita</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setnadegaEs(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Nádega esquerda</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setCoxaDireita(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Coxa direita</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input-checkbox-padrao-neuropatico"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setCoxaEsquerda(event.target.value)}
                      ></input>
                    </td>
                    <td>
                      <strong>Coxa esquerda</strong>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="alteracao-pes">
                <label className="label-alteracao-pes">
                  Alterações dos pés
                </label>
                <table>
                  <tr>
                    <th className="X-td-pes">X</th>
                    <th className="alteracao-td">Alteração</th>
                    <th className="descricao-td-pes">Descrição</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setAidros(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Anidrose</td>
                    <td>É a ausência anormal de suor</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setAtrofiaInter(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Atrofia Interossea</td>
                    <td>
                      Uma <strong>atrofia</strong> dos músculos metacarpais e
                      hipotenares ocorre em estágios avançados
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setCalos(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Calos</td>
                    <td>
                      <strong>Calo</strong> no <strong>pé</strong> é uma camada
                      espessa e dura de pele que se forma em responsta à pressão
                      ou atrito constante dos <strong>pés</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setFissuras(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Fissuras</td>
                    <td>
                      <strong>Fissuras</strong> calcâneas popularmente
                      conhecidas como <strong>pé</strong> rachado, é
                      caracterizada por lesões lineares que surgem na pele
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setHaluxValgo(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Halux Valgo</td>
                    <td>
                      É a principal patologia de antepé, acometendo a primeira
                      anticulação metatarsofalangeana. É definida como desvio
                      lateral do <strong>hálux</strong> associado ao varismo do
                      primeiro metatarso, produzindo uma saliência óssea medial
                      ao nível da primeira articulação metatarsofalangeana
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setHiperacetose(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Hiperacetose</td>
                    <td>
                      A hiperaqueratose é um espessamento da parte mais externa
                      da epiderme
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setHiperpigment(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Hiperpigmentação</td>
                    <td>
                      Quando há aumento na produção de melanina, ocorre
                      escurecimento no tom da pele ou acontece em uma pequena
                      porção da pele, uma pinta, ou partes maiores, causando as
                      manchas como no bronzeamento após banho de sol, por
                      exemplo. A esse aumento na produção de melanina dá-se o
                      nome de <strong>hiperpigmentação</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setMicoseInter(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">
                      Micose Interdigital
                    </td>
                    <td>
                      Infecção fúngica que acomete os espaços{" "}
                      <strong>interdigitais</strong> e regiões plantares. As
                      lesões podem ser intensamente puriginosas, descamativas e
                      maceradas nos espaços <strong>interdigitais</strong>,
                      podendo ocorrer fissuração
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setOnicomicose(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Onicomicose</td>
                    <td>
                      É uma infecção causada por fungos que se alimentam da
                      queratina, proteína que se forma a maior parte das unhas
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setPecavo(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Pé Cavo</td>
                    <td>
                      O <strong>pé cavo</strong> é uma alteração estrutural em
                      que o arco natural da planta do <strong>pé</strong>{" "}
                      apresenta uma curvatura excessiva
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setPecharcot(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Pé de Charcot</td>
                    <td>
                      É uma deformidade nos ossos e articulações associados a
                      perda de sensibilidade protetora e a traumas repetitivos
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setPegarra(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Pé em Garra</td>
                    <td>
                      Deformidades dos dedos menores do <strong>pé</strong>{" "}
                      &#40;dedos em <strong>garra</strong>&#41;
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setPeplano(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Pé Plano</td>
                    <td>
                      Condição em que toda a sola do pé toca no chão quando o
                      indivíduo afetado de pé
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setProemMetatar(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">
                      Proeminência Metatarsiana
                    </td>
                    <td>
                      Metatarsalgia é um termo geral que se refere a uma
                      condição dolorosa na região do metatarso do pé, na área
                      entre os dedos e o arco, ou a "bola do pé"
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setAcentArcoPlantar(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">
                      Acentuação do Arco Plantar
                    </td>
                    <td>
                      <strong>Arco Plantar</strong>, a curva que surge durante a
                      infância tem a função de distribuir o peso do corpo ajudar
                      na absorção de impactos
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setLesoes(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Lesões</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="innput-alteracao-pes"
                        type={"checkbox"}
                        value={"X"}
                        onChange={(event) => setUnhaEncr(event.target.value)}
                      ></input>
                    </td>
                    <td className="alteracao-resultados">Unha Encravada</td>
                    <td>
                      Condição na qual o canto ou lado de uma unha cresce na
                      carne
                    </td>
                  </tr>
                </table>
              </div>
              <div className="div-hipotese-geral">
                <table>
                  <tr>
                    <th className="table-hipotese-geral">
                      Hipótese Diagnóstica Geral
                    </th>
                  </tr>
                  <tr>
                    <td className="apresentacao-pes">
                      Apresentação do resumo dos achados da avaliação clínica do
                      paciente
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <textarea
                        placeholder="escreva..."
                        className="textarea-pes"
                        value={resumo}
                        onChange={(event) => setResumo(event.target.value)}
                      ></textarea>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="div-estado-glicemico">
                <table className="table-fator-sensibilidade-para-bolus-2">
                  <tr>
                    <th colSpan={"4"} className="table-responsavel-avaliacao">
                      Responsável pela avaliação &#40;estagiário&#41;
                    </th>
                  </tr>
                  <tr>
                    <td className="nome-completo-responsavel-avaliacao">
                      Nome Completo:
                    </td>
                    <td className="width-nome">
                      <p>{auth.user?.name}</p>
                    </td>
                    <td className="nome-completo-responsavel-avaliacao">
                      RA:
                    </td>
                    <td>
                      <p>{auth.user?.ra}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="nome-completo-responsavel-avaliacao">
                      Email:
                    </td>
                    <td>
                      <p>{auth.user?.email}</p>
                    </td>
                    <td className="nome-completo-responsavel-avaliacao">
                      Telefone:
                    </td>
                    <td>
                      <p>{auth.user?.phone}</p>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={"4"} className="table-responsavel-avaliacao">
                      Professor responsável
                    </th>
                  </tr>
                  <tr>
                    <td className="nome-completo-responsavel-avaliacao">
                      Nome Completo:
                    </td>
                    <td className="width-nome">
                      <p><input
                        className="input-data-hora-glicemia"
                        type={"text"}
                        value={nomeMedico}
                        onChange={(event) => setNomeMedico(event.target.value)}
                      ></input></p>
                    </td>
                    <td className="nome-completo-responsavel-avaliacao">
                      CRM:
                    </td>
                    <td>
                      <p><input
                        className="input-data-hora-glicemia"
                        type={"text"}
                        value={crm}
                        onChange={(event) => setCrm(event.target.value)}
                      ></input></p>
                    </td>
                  </tr>
                  <tr>
                    <td className="nome-completo-responsavel-avaliacao">
                      Email:
                    </td>
                    <td>
                      <p><input
                        className="input-data-hora-glicemia"
                        type={"text"}
                        value={emailMedico}
                        onChange={(event) => setEmailMedico(event.target.value)}
                      ></input></p>
                    </td>
                    <td className="nome-completo-responsavel-avaliacao">
                      Telefone:
                    </td>
                    <td>
                      <p><input
                        className="input-data-hora-glicemia"
                        type={"text"}
                        value={phonemedico}
                        onChange={(event) => setPhonemedidco(event.target.value)}
                      ></input></p>
                    </td>
                  </tr>
                </table>
              </div>
            </form>
            <ModalSalvarEnfermagem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioEnfermagem;