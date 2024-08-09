import React from "react";
import "../styles/FormularioNutricao.css";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsFillPinFill } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import ModalSalvarNutricao from "../components/ModalSalvarNutricao";
import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";
import { PDFDocument } from 'pdf-lib';

const FormularioNutricao = () => {
  const [error, setError] = useState(null);
  const [datecadastronutri, setDatecadastronutri] = useState(new Date().toISOString().substr(0, 10));
  const [id, setID] = useState('');
  const [nome, setNome] = useState(''); 
  const [data_nascimento, setNascimento] = useState('');
  const [selectsexo, setSelectsexo] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();

  /* 1- MÉTODO DE CONTAGEM DE CARBOIDRATO */
  const [metcontcarbo, setMetContCarbo] = useState('');
  const [qualAPP, setQualAPP] = useState('');

  /* FREQUÊNCIA ALIMENTAR (para mensal e semanal registar número de dias) */
  const [paomassas,setPaoMassas] = useState('');
  const [arrozcereais, setArrozCereais] = useState('');
  const [tuberculos, setTuberculos] = useState('');
  const [frutassucosnaturais, setFrutasSucosNaturais] = useState('');
  const [verduras, setVerduras] = useState('');
  const [legumes, setLegumes] = useState('');
  const [carnevermelha, setCarneVermelha] = useState('');
  const [aves, setAves] = useState('');
  const [peixes, setPeixes] = useState('');
  const [ovos, setOvos] = useState('');
  const [leitederivados, setleiteDerivados] = useState('');
  const [leguminosas, setLegumisas] = useState('');
  const [embutidos, setEmbutidos] = useState('');
  const [frituras, setFrituras] = useState(''); 
  const [lanches, setLanches] = useState('');
  const [doces, setDoces] = useState('');
  const [refrigerante, setRefrigerante] = useState('');
  const [chips, setChips] = useState('');
  const [adocantes, setAdocantes] = useState('');
  const [sucopo, setSucopo] = useState('');
  const [alimentosprontos, setAlimentosprontos] = useState('');
  const [avalinutri, setAvaliNutri] = useState('');
  const [recomendacoes, setRecomendacoes] = useState('');

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
              setNascimento(response[0].data_nascimento);
              setSelectsexo(response[0].sexo);
              setNome(response[0].nome);
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, []);

    const calcularIdade = (dataNascimento) => {
      const dataNascimentoDate = new Date(dataNascimento);
      const hoje = new Date();
      const diferencaEmMilissegundos = hoje - dataNascimentoDate;
      const anos = diferencaEmMilissegundos / (365 * 24 * 60 * 60 * 1000);
      return Math.floor(anos);
    };

    const calcularIdadeEmMeses = (dataNascimento) => {
      const dataNascimentoDate = new Date(dataNascimento);
      const hoje = new Date();
      const diferencaEmMilissegundos = hoje - dataNascimentoDate;
      const anos = diferencaEmMilissegundos / (365 * 24 * 60 * 60 * 1000);
      const meses = anos * 12;
      return Math.floor(meses);
    }; 

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
    <div>
      <div className="home">
        <Navbar />
        <div className="headerContainer">
          <div className="faixaAzulCadastro">
            <div className="faixaAzul-certa">
              <a href={`/paciente?cpf=${searchResults[0]?.cpf}`}>
                <HiArrowNarrowLeft className="seta" />
              </a>
              <h1 className="centralizando">AVALIAÇÃO DE NUTRIÇÃO</h1>
              <div className="dtexame2NovoCadastro">
                <input type={"date"} name="dateexame" className="inputDataEd" 
                value={datecadastronutri}
                onChange={(e) => setDatecadastronutri(e.target.value)}
                required
                />
              </div>
            </div>
          </div>
          <div className="div-nome-formulario-nutricao">
            <p className="p-nome-paciente-cadastro-nutricao">NOME:</p>
            <input
              className="input-nome-paciente-nutricao"
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            ></input>
          </div>
          <div className="idade-paciente-nutricao">
            <p className="p-idade-paciente-nutricao">IDADE:</p>
            <p className="p-idade-calculada">{calcularIdade(data_nascimento)}</p>
            <p className="p-anos-paciente-nutricao">&#40;ANOS&#41;</p>
            <p className="p-idade-calculada">{calcularIdadeEmMeses(data_nascimento)}</p>
            <p className="p-meses-paciente-nutricao">&#40;MESES&#41;</p>
          </div>
          {/* puxar automaticamente da ficha de medicina  
          Verificar com Eduardo a ordem do preenchimento*/}
          <div className="form-nutri-formulario">
            <h2 className="h2-percep-qualid-vida-razao-cho">Razão de CHO</h2>
          </div>
          <div className="formulario-razao-de-cho-nutricao">
            <table className="razao-cho">
              <tr>
                <th>Gramas/unidade de insulina</th>
                <th>Horário inicial</th>
                <th>Horário final</th>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho"></td>
                <td className="tr-teste-razao-cho"></td>
                <td className="tr-teste-razao-cho"></td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho"></td>
                <td className="tr-teste-razao-cho"></td>
                <td className="tr-teste-razao-cho"></td>
              </tr>
            </table>
          </div>
          {/* puxar automaticamente da ficha de medicina */}
          <div className="form-nutri-formulario">
            <h2 className="h2-percep-qualid-vida-razao-cho">
              Fator de sensibilidade &#40;FS&#41;
            </h2>
          </div>
          <div className="formulario-razao-de-cho-nutricao">
            <table className="razao-cho">
              <tr>
                <th>mg/dL por unidade de insulina</th>
                <th>Horário inicial</th>
                <th>Horário final</th>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho"></td>
                <td className="tr-teste-razao-cho"></td>
                <td className="tr-teste-razao-cho"></td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho"></td>
                <td className="tr-teste-razao-cho"></td>
                <td className="tr-teste-razao-cho"></td>
              </tr>
            </table>
          </div>
          <div>
            <p className="p-metodo-contagem-carboidrato">
              1- MÉTODO DE CONTAGEM DE CARBOIDRATO
            </p>
          </div>
          <div className="tabela-metodo-corboidrato">
            <table className="sensibilidade-tabela">
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza"
                    type={"checkbox"}
                    name="name-input-nao-realiza"
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">NÃO REALIZA</td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza"
                    type={"checkbox"}
                    name="input-aplicativo"
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">TABELAS</td>
              </tr>
              <tr>
                <td className="tr-teste-razao-cho1">
                  <input
                    className="input-nao-realiza"
                    type={"checkbox"}
                    name="input-aplicativo"
                  ></input>
                </td>
                <td className="tr-teste-razao-cho2">
                  APLICATIVOS. SE APLICATIVO, QUAL?
                  <input
                    className="input-text-aplicativo"
                    type={"text"}
                    name="aplicativo-name-text"
                  ></input>
                </td>
              </tr>
            </table>
          </div>
          <div>
            <p className="p-estimativa-texto">
              2- ESTIMATIVA da NECESSIDADE ENERGÉTICA DIÁRIA &#40;NED&#41;
              &#40;Kcal/dia&#41;:
            </p>
          </div>
          {/* Utilizar dados da antropometrica e naf da ficha de ed fisica */}
          <div className="tabela-estimativa">
            <table className="estimativa">
              <tr className="formulario-razao-de-cho-nutricao">
                <th className="td-idade-NED">IDADE/SEXO</th>
                <th className="td-idade-NED">NED &#40;Kcal/dia&#41;</th>
              </tr>
              <tr>
                <td className="td-idade-NED1"></td>
                <td className="td-idade-NED1"></td>
              </tr>
            </table>
          </div>
          <div>
            <p className="analise-frequencia">
              3- ANÁLISE DA FREQUÊNCIA ALIMENTAR
            </p>
          </div>
          <div className="tabela-analise-frequencia-alimentar">
            <div className="formulario-razao-de-cho-nutricao">
              <div className="form-nutri-formulario">
                <h2 className="h2-percep-qualid-vida-razao-cho">
                  FREQUÊNCIA ALIMENTAR &#40;para mensal e semanal registar
                  número de dias&#41;
                </h2>
              </div>
              <div className="tipos-alimento-nunca-mensal-semanal-diario">
                <p className="tipos-alimento">Tipos de alimento</p>
                <p className="nunca">Nunca</p>
                <p className="mensal">Mensal</p>
                <p className="semanal">Semanal</p>
                <p className="diario">Diário</p>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Pão e massas</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca"
                    value={"Nuca"}
                    onChange={(event) => setPaoMassas(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal"
                  value={paomassas}
                  onChange={(event) => setPaoMassas(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal"
                  value={paomassas}
                  onChange={(event) => setPaoMassas(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca"
                    value={"Diário"}
                    onChange={(event) => setPaoMassas(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Arroz e cereais</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-cereal"
                    value={"Nunca"}
                    onChange={(event) => setArrozCereais(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-cereal"
                  value={arrozcereais}
                  onChange={(event) => setArrozCereais(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-cereal"
                  value={arrozcereais}
                  onChange={(event) => setArrozCereais(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-cereal"
                    value={"Diário"}
                    onChange={(event) => setArrozCereais(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Tubérculos</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-tuberculos"
                    value={"Nunca"}
                    onChange={(event) => setTuberculos(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-tuberculos"
                  value={tuberculos}
                  onChange={(event) => setTuberculos(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-tuberculos"
                  value={tuberculos}
                  onChange={(event) => setTuberculos(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-tuberculos"
                    value={"Diária"}
                    onChange={(event) => setTuberculos(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Frutas e sucos naturais</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-frutas"
                    value={"Nunca"}
                    onChange={(event) => setFrutasSucosNaturais(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-frutas"
                  value={frutassucosnaturais}
                  onChange={(event) => setFrutasSucosNaturais(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-frutas"
                  value={frutassucosnaturais}
                  onChange={(event) => setFrutasSucosNaturais(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-frutas"
                    value={"Diário"}
                    onChange={(event) => setFrutasSucosNaturais(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Verduras</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-verduras"
                    value={"Nunca"}
                    onChange={(event) => setVerduras(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-verduras"
                  value={verduras}
                  onChange={(event) => setVerduras(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-verduras"
                  value={verduras}
                  onChange={(event) => setVerduras(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-verduras"
                    value={"Diário"}
                    onChange={(event) => setVerduras(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Legumes</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-legumes"
                    value={"Nunca"}
                    onChange={(event) => setLegumes(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-legumes"
                  value={legumes}
                  onChange={(event) => setLegumes(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-legumes"
                  value={legumes}
                  onChange={(event) => setLegumes(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-legumes"
                    value={"Diário"}
                    onChange={(event) => setLegumes(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Carne Vermelha</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-carne-vermelha"
                    value={"Nunca"}
                    onChange={(event) => setCarneVermelha(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-carne-vermelha"
                  value={carnevermelha}
                  onChange={(event) => setCarneVermelha(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-carne-vermelha"
                  value={carnevermelha}
                  onChange={(event) => setCarneVermelha(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-crane-vermelha"
                    value={"Driário"}
                    onChange={(event) => setCarneVermelha(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Aves</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-aves"
                    value={"Nunca"}
                    onChange={(event) => setAves(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-aves"
                  value={aves}
                  onChange={(event) => setAves(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-aves"
                  value={aves}
                  onChange={(event) => setAves(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-aves"
                    value={"Diário"}
                    onChange={(event) => setAves(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Peixes</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-peixes"
                    value={"Nunca"}
                    onChange={(event) => setPeixes(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-peixes"
                  value={peixes}
                  onChange={(event) => setPeixes(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-peixes"
                  value={peixes}
                  onChange={(event) => setPeixes(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-peixes"
                    value={"Diária"}
                    onChange={(event) => setPeixes(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Ovos</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-ovos"
                    value={"Nunca"}
                    onChange={(event) => setOvos(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-ovos"
                  value={ovos}
                  onChange={(event) => setOvos(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-ovos"
                  value={ovos}
                  onChange={(event) => setOvos(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-ovos"
                    value={"Diário"}
                    onChange={(event) => setOvos(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Leite e produtos lácteos</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-leite-produtos-lacteos"
                    value={"Nunca"}
                    onChange={(event) => setleiteDerivados(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-leite-produtos-lacteos"
                  value={leitederivados}
                  onChange={(event) => setleiteDerivados(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-leite-produtos-lacteos"
                  value={leitederivados}
                  onChange={(event) => setleiteDerivados(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-leite-produtos-lacteos"
                    value={"Diário"}
                    onChange={(event) => setleiteDerivados(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">
                  Leguminosas &#40;ex: feijão, soja, grão-de-bico, etc.&#41;
                </p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-leguminosas"
                    value={"Nunca"}
                    onChange={(event) => setLegumisas(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-leguminosas"
                  value={leguminosas}
                  onChange={(event) => setLegumisas(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-leguminosas"
                  value={leguminosas}
                  onChange={(event) => setLegumisas(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-leguminosas"
                    value={"Diário"}
                    onChange={(event) => setLegumisas(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">
                  Embutidos &#40;ex: salsicha, linguiça, etc.&#41;
                </p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-embutidos"
                    value={"Nunca"}
                    onChange={(event) => setEmbutidos(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-embutidos"
                  value={embutidos}
                  onChange={(event) => setEmbutidos(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-embutidos"
                  value={embutidos}
                  onChange={(event) => setEmbutidos(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-embutidos"
                    value={"Diário"}
                    onChange={(event) => setEmbutidos(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Frituras</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-frituras"
                    value={"Nunca"}
                    onChange={(event) => setFrituras(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-frituras"
                  value={frituras}
                  onChange={(event) => setFrituras(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-frituras"
                  value={frituras}
                  onChange={(event) => setFrituras(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-frituras"
                    value={"Diário"}
                  onChange={(event) => setFrituras(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Lanches</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-lanches"
                    value={"Nunca"}
                    onChange={(event) => setLanches(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-lanches"
                  value={lanches}
                  onChange={(event) => setLanches(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-lanches"
                  value={lanches}
                  onChange={(event) => setLanches(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-lanches"
                    value={"Diário"}
                    onChange={(event) => setLanches(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Doces</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-doces"
                    value={"Nunca"}
                    onChange={(event) => setDoces(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-doces"
                  value={doces}
                  onChange={(event) => setDoces(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-doces"
                  value={doces}
                  onChange={(event) => setDoces(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-doces"
                    value={"Diário"}
                  onChange={(event) => setDoces(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Refrigerante</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-refrigerante"
                    value={"Nunca"}
                    onChange={(event) => setRefrigerante(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-refrigerante"
                  value={refrigerante}
                  onChange={(event) => setRefrigerante(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-refrigerante"
                  value={refrigerante}
                  onChange={(event) => setRefrigerante(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-refrigerante"
                    value={"Diário"}
                    onChange={(event) => setRefrigerante(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Salgadinho tipo "chips"</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-salgadinho"
                    value={"Nunca"}
                    onChange={(event) => setChips(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-salgadinho"
                  value={chips}
                  onChange={(event) => setChips(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-salgadinho"
                  value={chips}
                  onChange={(event) => setChips(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-salgadinho"
                    value={"Diário"}
                    onChange={(event) => setChips(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Adoçantes</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-adocantes"
                    value={"Nunca"}
                    onChange={(event) => setAdocantes(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-adocantes"
                  value={adocantes}
                  onChange={(event) => setAdocantes(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-adocantes"
                  value={adocantes}
                  onChange={(event) => setAdocantes(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-adocantes"
                    value={"Diário"}
                    onChange={(event) => setAdocantes(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">Suco em pó</p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-suco"
                    value={"Nunca"}
                    onChange={(event) => setSucopo(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-suco"
                  value={sucopo}
                  onChange={(event) => setSucopo(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-suco"
                  value={sucopo}
                  onChange={(event) => setSucopo(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-suco"
                    value={"Diário"}
                    onChange={(event) => setSucopo(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pao-massas">
                <p className="p-pao-e-massas">
                  Alimentos prontos &#40;ex: miojo&#41;
                </p>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-nunca"
                    type={"radio"}
                    name="name-radio-nunca-miojo"
                    value={"Nunca"}
                    onChange={(event) => setAlimentosprontos(event.target.value)}
                  ></input>
                </div>
                <input
                  className="input-text-pao-massa"
                  type={"number"}
                  name="name-input-text-mensal-miojo"
                  value={alimentosprontos}
                  onChange={(event) => setAlimentosprontos(event.target.value)}
                ></input>
                <input
                  className="input-text-pao-massa-semanal"
                  type={"number"}
                  name="name-input-text-semanal-miojo"
                  value={alimentosprontos}
                  onChange={(event) => setAlimentosprontos(event.target.value)}
                ></input>
                <div className="input-dia-nunca">
                  <input
                    className="input-pao-massas-diario"
                    type={"radio"}
                    name="name-radio-nunca-miojo"
                    value={"Diário"}
                    onChange={(event) => setAlimentosprontos(event.target.value)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="dadosresponsavel">
            <div className="dadosPaciente">
              <h2>4- RECORDATÓRIO ALIMENTAR:</h2>
            </div>
          </div>
          <form className="form-flex-geral">
            <div className="anexar-exame-geral">
              <div className="anexar-exame-geral-block">
                <h2 className="tags-flex-geral-title">
                  ANEXAR ARQUIVO
                  <FaCloudUploadAlt className="icon-download-title"/>
                </h2>
                <div className="tags-flex-geral">
                  <input
                    className="input-anexar-exame-geral"
                    type={"file"}
                    name="input-anexar-exame-recordatorio"
                    accept=".pdf"
                    value={null}
                    onChange={handleFileChange}
                  />
                </div>
                {/* <div className="button-flex">
                  <button id="send-the-form">
                    <div className="download-tag">
                      <BsFillPinFill className="icon-pin" />
                      ANEXAR
                    </div>
                  </button>
                </div> */}
              </div>
            </div>
          </form>
          <div className="recordatorio-alimentar">
            <p className="p-recordatorio-alimentar">
              REGISTRAR DADOS DO RECORDATÓRIO ALIMENTAR:
            </p>
          </div>
          <div className="recordatorio-alimentar">
            <p className="p-recordatorio-alimentar1">
              RESUMO DO RECORDATÓRIO ALIMENTAR
            </p>
            <div className="recordatorio-alimentar-DISPLAY">
              <p className="p-recordatorio-alimentar1-ingerido">INGERIDO</p>
              <p className="p-recordatorio-alimentar1-ingerido1">RECOMENDADO</p>
            </div>
          </div>
          <div className="tabela-div-recordatorio-alimentar">
            {/* Calcular e mostar na tabela automáticamente */}
            <table className="tabela-recordatorio-alimentar">
              <tr>
                <th className="macronutrientes">MACRONUTRIENTES</th>
                <th className="ingerido-recomendado2">Gramas/dia</th>
                <th className="ingerido-recomendado2">Kcal/dia</th>
                <th className="ingerido-recomendado2">Total Kcal/dia</th>
                <th className="ingerido-recomendado2">
                  Gramas/dia&#40;mínimo&#41;
                </th>
                <th className="ingerido-recomendado2">
                  Gramas/dia&#40;máximo&#41;
                </th>
                <th className="ingerido-recomendado2">% do VET</th>
              </tr>
              <tr>
                <th className="macronutrientes">
                  Carboidrato {/*&#40;CHO&#41;*/}
                </th>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
              </tr>
              <tr>
                <th className="macronutrientes">Açucar {/*&#40;Ac&#41;*/}</th>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
              </tr>
              <tr>
                <th className="macronutrientes">
                  Proteína {/*&#40;PRT&#41;*/}
                </th>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
              </tr>
              <tr>
                <th className="macronutrientes">
                  Gordura Total {/*&#40;GOR&#41;*/}
                </th>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
              </tr>
              <tr>
                <th className="macronutrientes">
                  Saturada {/*&#40;SAT&#41;*/}
                </th>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
              </tr>
              <tr>
                <th className="macronutrientes">
                  Monoinsaturada {/*&#40;MON&#41*/}
                </th>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
              </tr>
              <tr>
                <th className="macronutrientes">
                  Polinsaturada {/*&#40;POL&#41;*/}
                </th>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
              </tr>
              <tr>
                <th className="macronutrientes">Fibras</th>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2"></td>
                <td className="ingerido-recomendado2">25</td>
                <td className="ingerido-recomendado2">38</td>
                <td className="ingerido-recomendado2">não se aplica</td>
              </tr>
            </table>
            <table className="tabela-ingestao">
              <tr>
                <td className="total-ingestao">
                  Total de ingestão &#40;Kcal/dia&#41; estimada pelo
                  recordatório alimentar &#40;TIC&#41;
                </td>
                <td className="resultado-total-ingestao"></td>
              </tr>
            </table>
          </div>
          <div>
            <p className="p-avaliazao-clinica">
              AVALIAÇÃO CLÍNICA E PRESCRIÇÃO DIETÉTICA NUTRIÇÃO
            </p>
          </div>
          <div className="hipotese-nutricional">
            <table className="tabela-ingestao">
              <tr>
                <td className="hipotese-diagnostica">
                  HIPÓTESE DIAGNÓSTICA NUTRICIONAL
                </td>
              </tr>
              <tr>
                <td className="hipotese-diagnostica">
                  Apresentação da avaliação nutricional em relação ao padrão
                  alimentar observado
                </td>
              </tr>
              <tr>
                <td className="hipotese-diagnostica">
                  <textarea
                    className="hipotese-diagnostica1"
                    placeholder="Apresentação:"
                    value={avalinutri}
                    onChange={(event) => setAvaliNutri(event.target.value)}
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div className="hipotese-nutricional">
            <table className="tabela-ingestao">
              <tr>
                <td className="hipotese-diagnostica">CONDUTA NUTRICIONAL</td>
              </tr>
              <tr>
                <td className="hipotese-diagnostica">
                  Descrição das recomendações dietéticas sugeridas aos pacientes
                </td>
              </tr>
              <tr>
                <td className="hipotese-diagnostica">
                  <textarea
                    className="hipotese-diagnostica1"
                    placeholder="Descreva:"
                    value={recomendacoes}
                    onChange={(event) => setRecomendacoes(event.target.value)}
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          <ModalSalvarNutricao />
        </div>
      </div>
    </div>
  );
};

export default FormularioNutricao;