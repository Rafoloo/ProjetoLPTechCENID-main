import React from "react";
import "../styles/FormularioMedicina.css";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import DropDownModeloGlicometro from "../components/DropDownModeloGlicometro";
import DropDownTabelaSintomasMed from "../components/DropDownTabelaSintomasMed";
import DropDownTabelaImagensMedMasc from "../components/DropDownImagensMedMasc";
import DropDownTabelaImagensMedFem from "../components/DropDownImagensMedFem";
import DropDownListaNomesBasal from "../components/DropDownListaNomesBasal";
import DropDownListaNomesBolus from "../components/DropDownListaNomesBolus";
import CollapseProcessos from '../components/CollapseProcessos';
import ButtonSalvarMed from '../components/ButtonSalvarMed';
import { useState, useEffect, useContext } from "react";
import { useApi } from "../hooks/useApi";
import { AuthContext } from "../contexts/Auth/AuthContext";

const FormularioMedicina = () => {
  const auth = useContext(AuthContext);
  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();
  const [id, setID] = useState('');
  const [nome, setNome] = useState(''); 
  const [cpf, setCPF] = useState('');
  const [data_nascimento, setNascimento] = useState('');
  const [selectsexo, setSelectsexo] = useState('');

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

  const [peso,setPeso] = useState('');
  const [diagnostico,setDiagnostico] = useState('');
  const [outrasdm, setOutrasdm] = useState('');
  const [estatura, setEstatura] = useState('');
  const [datadiag, setDataDiag] = useState('');
  const [classtempdiag, setClasstempdiag] = useState('');
  const [metmoniglic, setMetmoniglic] = useState('');
  const [marcamodeloglic, setMarcamodeloglic] = useState('');
  const [estcontroleglic, setEstControleGlic] = useState('');
  const [metodoadminsulina, setMetodoAdmInsulina] = useState('');

  /* 1- Outras morbidades (doenças) */
  const [doenca1, setDoenca1] = useState("");
  const [medicamento1, setMedicamento1] = useState("");
  const [dose1,setDose1] = useState("");

  const [doenca2, setDoenca2] = useState("");
  const [medicamento2, setMedicamento2] = useState("");
  const [dose2,setDose2] = useState("");

  const [doenca3, setDoenca3] = useState("");
  const [medicamento3, setMedicamento3] = useState("");
  const [dose3,setDose3] = useState("");

  const [doenca4, setDoenca4] = useState("");
  const [medicamento4, setMedicamento4] = useState("");
  const [dose4,setDose4] = useState("");

  const [doenca5, setDoenca5] = useState("");
  const [medicamento5, setMedicamento5] = useState("");
  const [dose5,setDose5] = useState("");

  const [sintomas, setSintomas] = useState("");

  /* 3- Estágio maturacional: Escala de TANNER: */
  const [maturacional, setMaturacional] = useState("");

  /* 4- Estado glicêmico baseado na HbA1c: 
    Verificar com Eduardo como funciona.
  */

  /* 5- Administração de insulina atual: 
    Verificar com Eduardo como funciona.
  */
  const [basalnome, setBasalNome] = useState("");
  const [basalDose1, setBasalDose1] = useState("");
  const [basalDose2, setBasalDose2] = useState("");
  const [bolusnome, setBolusNome] = useState("");
  const [bolusDose1, setBolusDose1] = useState("");
  const [bolusDose2, setBolusDose2] = useState("");

  /* 6- Fator de sensibilidade a insulina (FS) para BOLUS de insulina: 
    Verificar com Eduardo
  */
  const [fsbolus, setFsBolus] = useState("");
  const [fhorafsbolus, setFHoraFsBolus] = useState("");

  /* 7- Razão de carboidrato insulina (rCHOi): 
    Verificar com Eduardo
  */
  const [Carbobolus, setCarboBolus] = useState("");
  const [fhoraCarbobolus, setFHoraCarboBolus] = useState("");

  /* PRESCRIÇÃO MÉDICA
 */

  /* 1- Terapêutica de insulina: 
    perguntar para o Eduardo
  */

  /* 2- Fator de sensibilidade a insulina (FS) para BOLUS de insulina baseado na prescição de insulina e ajustes por período: 
    perguntar para Eduardo
  */
  const [fsajustadohora, setfsajustadohora] = useState("");
  const [inicioFs, setInicioFs] = useState("");
  const [finalFs, setFinalFs] = useState("");

  /* 3- Razão de carboidrato insulina (rCHOi) para BOLUS de insulina baseado na prescrição de insulina e justes por período:
   */
  const [rchoiajustadohora, setrchoiajustadohora] = useState("");
  const [iniciorchoi, setIniciorchoi] = useState("");
  const [finalrchoi, setFinalrchoi] = useState("");
  /* 4- Outras prescrições médicas: */
  const [outprescr, setOutprescr] = useState("");
  
  /* Tabela Controle Glicemia */
  /* Dia 1 */
  /* Cafe da Manhã */
  const [jejumdia1,setJejumdia1] = useState("");
  const [duashrdepoisdia1,setDuashrdepoisdia1] = useState("");
  const [uiInsulinadia1,setuiInsulinadia1] = useState("");
  /* Almoço */
  const [jejumAdia1,setJejumAdia1] = useState("");
  const [duashrdepoisAdia1,setDuashrdepoisAdia1] = useState("");
  const [uiInsulinaAdia1,setuiInsulinaAdia1] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia1,setJejumTdia1] = useState("");
  const [duashrdepoisTdia1,setDuashrdepoisTdia1] = useState("");
  const [uiInsulinaTdia1,setuiInsulinaTdia1] = useState("");
  /* Janta */
  const [jejumJdia1,setJejumJdia1] = useState("");
  const [duashrdepoisJdia1,setDuashrdepoisJdia1] = useState("");
  const [uiInsulinaJdia1,setuiInsulinaJdia1] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia1,setObservacaodia1] = useState("");

  /* Dia 2 */
  /* Cafe da Manhã */
  const [jejumdia2,setJejumdia2] = useState("");
  const [duashrdepoisdia2,setDuashrdepoisdia2] = useState("");
  const [uiInsulinadia2,setuiInsulinadia2] = useState("");
  /* Almoço */
  const [jejumAdia2,setJejumAdia2] = useState("");
  const [duashrdepoisAdia2,setDuashrdepoisAdia2] = useState("");
  const [uiInsulinaAdia2,setuiInsulinaAdia2] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia2,setJejumTdia2] = useState("");
  const [duashrdepoisTdia2,setDuashrdepoisTdia2] = useState("");
  const [uiInsulinaTdia2,setuiInsulinaTdia2] = useState("");
  /* Janta */
  const [jejumJdia2,setJejumJdia2] = useState("");
  const [duashrdepoisJdia2,setDuashrdepoisJdia2] = useState("");
  const [uiInsulinaJdia2,setuiInsulinaJdia2] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia2,setObservacaodia2] = useState("");

  /* Dia 3 */
  /* Cafe da Manhã */
  const [jejumdia3,setJejumdia3] = useState("");
  const [duashrdepoisdia3,setDuashrdepoisdia3] = useState("");
  const [uiInsulinadia3,setuiInsulinadia3] = useState("");
  /* Almoço */
  const [jejumAdia3,setJejumAdia3] = useState("");
  const [duashrdepoisAdia3,setDuashrdepoisAdia3] = useState("");
  const [uiInsulinaAdia3,setuiInsulinaAdia3] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia3,setJejumTdia3] = useState("");
  const [duashrdepoisTdia3,setDuashrdepoisTdia3] = useState("");
  const [uiInsulinaTdia3,setuiInsulinaTdia3] = useState("");
  /* Janta */
  const [jejumJdia3,setJejumJdia3] = useState("");
  const [duashrdepoisJdia3,setDuashrdepoisJdia3] = useState("");
  const [uiInsulinaJdia3,setuiInsulinaJdia3] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia3,setObservacaodia3] = useState("");

  /* Dia 4 */
  /* Cafe da Manhã */
  const [jejumdia4,setJejumdia4] = useState("");
  const [duashrdepoisdia4,setDuashrdepoisdia4] = useState("");
  const [uiInsulinadia4,setuiInsulinadia4] = useState("");
  /* Almoço */
  const [jejumAdia4,setJejumAdia4] = useState("");
  const [duashrdepoisAdia4,setDuashrdepoisAdia4] = useState("");
  const [uiInsulinaAdia4,setuiInsulinaAdia4] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia4,setJejumTdia4] = useState("");
  const [duashrdepoisTdia4,setDuashrdepoisTdia4] = useState("");
  const [uiInsulinaTdia4,setuiInsulinaTdia4] = useState("");
  /* Janta */
  const [jejumJdia4,setJejumJdia4] = useState("");
  const [duashrdepoisJdia4,setDuashrdepoisJdia4] = useState("");
  const [uiInsulinaJdia4,setuiInsulinaJdia4] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia4,setObservacaodia4] = useState("");

  /* Dia 5 */
  /* Cafe da Manhã */
  const [jejumdia5,setJejumdia5] = useState("");
  const [duashrdepoisdia5,setDuashrdepoisdia5] = useState("");
  const [uiInsulinadia5,setuiInsulinadia5] = useState("");
  /* Almoço */
  const [jejumAdia5,setJejumAdia5] = useState("");
  const [duashrdepoisAdia5,setDuashrdepoisAdia5] = useState("");
  const [uiInsulinaAdia5,setuiInsulinaAdia5] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia5,setJejumTdia5] = useState("");
  const [duashrdepoisTdia5,setDuashrdepoisTdia5] = useState("");
  const [uiInsulinaTdia5,setuiInsulinaTdia5] = useState("");
  /* Janta */
  const [jejumJdia5,setJejumJdia5] = useState("");
  const [duashrdepoisJdia5,setDuashrdepoisJdia5] = useState("");
  const [uiInsulinaJdia5,setuiInsulinaJdia5] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia5,setObservacaodia5] = useState("");

  /* Dia 6 */
  /* Cafe da Manhã */
  const [jejumdia6,setJejumdia6] = useState("");
  const [duashrdepoisdia6,setDuashrdepoisdia6] = useState("");
  const [uiInsulinadia6,setuiInsulinadia6] = useState("");
  /* Almoço */
  const [jejumAdia6,setJejumAdia6] = useState("");
  const [duashrdepoisAdia6,setDuashrdepoisAdia6] = useState("");
  const [uiInsulinaAdia6,setuiInsulinaAdia6] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia6,setJejumTdia6] = useState("");
  const [duashrdepoisTdia6,setDuashrdepoisTdia6] = useState("");
  const [uiInsulinaTdia6,setuiInsulinaTdia6] = useState("");
  /* Janta */
  const [jejumJdia6,setJejumJdia6] = useState("");
  const [duashrdepoisJdia6,setDuashrdepoisJdia6] = useState("");
  const [uiInsulinaJdia6,setuiInsulinaJdia6] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia6,setObservacaodia6] = useState("");

  /* Dia 7 */
  /* Cafe da Manhã */
  const [jejumdia7,setJejumdia7] = useState("");
  const [duashrdepoisdia7,setDuashrdepoisdia7] = useState("");
  const [uiInsulinadia7,setuiInsulinadia7] = useState("");
  /* Almoço */
  const [jejumAdia7,setJejumAdia7] = useState("");
  const [duashrdepoisAdia7,setDuashrdepoisAdia7] = useState("");
  const [uiInsulinaAdia7,setuiInsulinaAdia7] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia7,setJejumTdia7] = useState("");
  const [duashrdepoisTdia7,setDuashrdepoisTdia7] = useState("");
  const [uiInsulinaTdia7,setuiInsulinaTdia7] = useState("");
  /* Janta */
  const [jejumJdia7,setJejumJdia7] = useState("");
  const [duashrdepoisJdia7,setDuashrdepoisJdia7] = useState("");
  const [uiInsulinaJdia7,setuiInsulinaJdia7] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia7,setObservacaodia7] = useState("");

  /* Dia 8 */
  /* Cafe da Manhã */
  const [jejumdia8,setJejumdia8] = useState("");
  const [duashrdepoisdia8,setDuashrdepoisdia8] = useState("");
  const [uiInsulinadia8,setuiInsulinadia8] = useState("");
  /* Almoço */
  const [jejumAdia8,setJejumAdia8] = useState("");
  const [duashrdepoisAdia8,setDuashrdepoisAdia8] = useState("");
  const [uiInsulinaAdia8,setuiInsulinaAdia8] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia8,setJejumTdia8] = useState("");
  const [duashrdepoisTdia8,setDuashrdepoisTdia8] = useState("");
  const [uiInsulinaTdia8,setuiInsulinaTdia8] = useState("");
  /* Janta */
  const [jejumJdia8,setJejumJdia8] = useState("");
  const [duashrdepoisJdia8,setDuashrdepoisJdia8] = useState("");
  const [uiInsulinaJdia8,setuiInsulinaJdia8] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia8,setObservacaodia8] = useState("");

  /* Dia 9 */
  /* Cafe da Manhã */
  const [jejumdia9,setJejumdia9] = useState("");
  const [duashrdepoisdia9,setDuashrdepoisdia9] = useState("");
  const [uiInsulinadia9,setuiInsulinadia9] = useState("");
  /* Almoço */
  const [jejumAdia9,setJejumAdia9] = useState("");
  const [duashrdepoisAdia9,setDuashrdepoisAdia9] = useState("");
  const [uiInsulinaAdia9,setuiInsulinaAdia9] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia9,setJejumTdia9] = useState("");
  const [duashrdepoisTdia9,setDuashrdepoisTdia9] = useState("");
  const [uiInsulinaTdia9,setuiInsulinaTdia9] = useState("");
  /* Janta */
  const [jejumJdia9,setJejumJdia9] = useState("");
  const [duashrdepoisJdia9,setDuashrdepoisJdia9] = useState("");
  const [uiInsulinaJdia9,setuiInsulinaJdia9] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia9,setObservacaodia9] = useState("");

  /* Dia 10 */
  /* Cafe da Manhã */
  const [jejumdia10,setJejumdia10] = useState("");
  const [duashrdepoisdia10,setDuashrdepoisdia10] = useState("");
  const [uiInsulinadia10,setuiInsulinadia10] = useState("");
  /* Almoço */
  const [jejumAdia10,setJejumAdia10] = useState("");
  const [duashrdepoisAdia10,setDuashrdepoisAdia10] = useState("");
  const [uiInsulinaAdia10,setuiInsulinaAdia10] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia10,setJejumTdia10] = useState("");
  const [duashrdepoisTdia10,setDuashrdepoisTdia10] = useState("");
  const [uiInsulinaTdia10,setuiInsulinaTdia10] = useState("");
  /* Janta */
  const [jejumJdia10,setJejumJdia10] = useState("");
  const [duashrdepoisJdia10,setDuashrdepoisJdia10] = useState("");
  const [uiInsulinaJdia10,setuiInsulinaJdia10] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia10,setObservacaodia10] = useState("");

  /* Dia 11 */
  /* Cafe da Manhã */
  const [jejumdia11,setJejumdia11] = useState("");
  const [duashrdepoisdia11,setDuashrdepoisdia11] = useState("");
  const [uiInsulinadia11,setuiInsulinadia11] = useState("");
  /* Almoço */
  const [jejumAdia11,setJejumAdia11] = useState("");
  const [duashrdepoisAdia11,setDuashrdepoisAdia11] = useState("");
  const [uiInsulinaAdia11,setuiInsulinaAdia11] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia11,setJejumTdia11] = useState("");
  const [duashrdepoisTdia11,setDuashrdepoisTdia11] = useState("");
  const [uiInsulinaTdia11,setuiInsulinaTdia11] = useState("");
  /* Janta */
  const [jejumJdia11,setJejumJdia11] = useState("");
  const [duashrdepoisJdia11,setDuashrdepoisJdia11] = useState("");
  const [uiInsulinaJdia11,setuiInsulinaJdia11] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia11,setObservacaodia11] = useState("");

  /* Dia 12 */
  /* Cafe da Manhã */
  const [jejumdia12,setJejumdia12] = useState("");
  const [duashrdepoisdia12,setDuashrdepoisdia12] = useState("");
  const [uiInsulinadia12,setuiInsulinadia12] = useState("");
  /* Almoço */
  const [jejumAdia12,setJejumAdia12] = useState("");
  const [duashrdepoisAdia12,setDuashrdepoisAdia12] = useState("");
  const [uiInsulinaAdia12,setuiInsulinaAdia12] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia12,setJejumTdia12] = useState("");
  const [duashrdepoisTdia12,setDuashrdepoisTdia12] = useState("");
  const [uiInsulinaTdia12,setuiInsulinaTdia12] = useState("");
  /* Janta */
  const [jejumJdia12,setJejumJdia12] = useState("");
  const [duashrdepoisJdia12,setDuashrdepoisJdia12] = useState("");
  const [uiInsulinaJdia12,setuiInsulinaJdia12] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia12,setObservacaodia12] = useState("");

  /* Dia 13 */
  /* Cafe da Manhã */
  const [jejumdia13,setJejumdia13] = useState("");
  const [duashrdepoisdia13,setDuashrdepoisdia13] = useState("");
  const [uiInsulinadia13,setuiInsulinadia13] = useState("");
  /* Almoço */
  const [jejumAdia13,setJejumAdia13] = useState("");
  const [duashrdepoisAdia13,setDuashrdepoisAdia13] = useState("");
  const [uiInsulinaAdia13,setuiInsulinaAdia13] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia13,setJejumTdia13] = useState("");
  const [duashrdepoisTdia13,setDuashrdepoisTdia13] = useState("");
  const [uiInsulinaTdia13,setuiInsulinaTdia13] = useState("");
  /* Janta */
  const [jejumJdia13,setJejumJdia13] = useState("");
  const [duashrdepoisJdia13,setDuashrdepoisJdia13] = useState("");
  const [uiInsulinaJdia13,setuiInsulinaJdia13] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia13,setObservacaodia13] = useState("");

  /* Dia 14 */
  /* Cafe da Manhã */
  const [jejumdia14,setJejumdia14] = useState("");
  const [duashrdepoisdia14,setDuashrdepoisdia14] = useState("");
  const [uiInsulinadia14,setuiInsulinadia14] = useState("");
  /* Almoço */
  const [jejumAdia14,setJejumAdia14] = useState("");
  const [duashrdepoisAdia14,setDuashrdepoisAdia14] = useState("");
  const [uiInsulinaAdia14,setuiInsulinaAdia14] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia14,setJejumTdia14] = useState("");
  const [duashrdepoisTdia14,setDuashrdepoisTdia14] = useState("");
  const [uiInsulinaTdia14,setuiInsulinaTdia14] = useState("");
  /* Janta */
  const [jejumJdia14,setJejumJdia14] = useState("");
  const [duashrdepoisJdia14,setDuashrdepoisJdia14] = useState("");
  const [uiInsulinaJdia14,setuiInsulinaJdia14] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia14,setObservacaodia14] = useState("");

  /* Dia 15 */
  /* Cafe da Manhã */
  const [jejumdia15,setJejumdia15] = useState("");
  const [duashrdepoisdia15,setDuashrdepoisdia15] = useState("");
  const [uiInsulinadia15,setuiInsulinadia15] = useState("");
  /* Almoço */
  const [jejumAdia15,setJejumAdia15] = useState("");
  const [duashrdepoisAdia15,setDuashrdepoisAdia15] = useState("");
  const [uiInsulinaAdia15,setuiInsulinaAdia15] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia15,setJejumTdia15] = useState("");
  const [duashrdepoisTdia15,setDuashrdepoisTdia15] = useState("");
  const [uiInsulinaTdia15,setuiInsulinaTdia15] = useState("");
  /* Janta */
  const [jejumJdia15,setJejumJdia15] = useState("");
  const [duashrdepoisJdia15,setDuashrdepoisJdia15] = useState("");
  const [uiInsulinaJdia15,setuiInsulinaJdia15] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia15,setObservacaodia15] = useState("");

  /* Dia 16 */
  /* Cafe da Manhã */
  const [jejumdia16,setJejumdia16] = useState("");
  const [duashrdepoisdia16,setDuashrdepoisdia16] = useState("");
  const [uiInsulinadia16,setuiInsulinadia16] = useState("");
  /* Almoço */
  const [jejumAdia16,setJejumAdia16] = useState("");
  const [duashrdepoisAdia16,setDuashrdepoisAdia16] = useState("");
  const [uiInsulinaAdia16,setuiInsulinaAdia16] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia16,setJejumTdia16] = useState("");
  const [duashrdepoisTdia16,setDuashrdepoisTdia16] = useState("");
  const [uiInsulinaTdia16,setuiInsulinaTdia16] = useState("");
  /* Janta */
  const [jejumJdia16,setJejumJdia16] = useState("");
  const [duashrdepoisJdia16,setDuashrdepoisJdia16] = useState("");
  const [uiInsulinaJdia16,setuiInsulinaJdia16] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia16,setObservacaodia16] = useState("");

  /* Dia 17 */
  /* Cafe da Manhã */
  const [jejumdia17,setJejumdia17] = useState("");
  const [duashrdepoisdia17,setDuashrdepoisdia17] = useState("");
  const [uiInsulinadia17,setuiInsulinadia17] = useState("");
  /* Almoço */
  const [jejumAdia17,setJejumAdia17] = useState("");
  const [duashrdepoisAdia17,setDuashrdepoisAdia17] = useState("");
  const [uiInsulinaAdia17,setuiInsulinaAdia17] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia17,setJejumTdia17] = useState("");
  const [duashrdepoisTdia17,setDuashrdepoisTdia17] = useState("");
  const [uiInsulinaTdia17,setuiInsulinaTdia17] = useState("");
  /* Janta */
  const [jejumJdia17,setJejumJdia17] = useState("");
  const [duashrdepoisJdia17,setDuashrdepoisJdia17] = useState("");
  const [uiInsulinaJdia17,setuiInsulinaJdia17] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia17,setObservacaodia17] = useState("");

  /* Dia 18 */
  /* Cafe da Manhã */
  const [jejumdia18,setJejumdia18] = useState("");
  const [duashrdepoisdia18,setDuashrdepoisdia18] = useState("");
  const [uiInsulinadia18,setuiInsulinadia18] = useState("");
  /* Almoço */
  const [jejumAdia18,setJejumAdia18] = useState("");
  const [duashrdepoisAdia18,setDuashrdepoisAdia18] = useState("");
  const [uiInsulinaAdia18,setuiInsulinaAdia18] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia18,setJejumTdia18] = useState("");
  const [duashrdepoisTdia18,setDuashrdepoisTdia18] = useState("");
  const [uiInsulinaTdia18,setuiInsulinaTdia18] = useState("");
  /* Janta */
  const [jejumJdia18,setJejumJdia18] = useState("");
  const [duashrdepoisJdia18,setDuashrdepoisJdia18] = useState("");
  const [uiInsulinaJdia18,setuiInsulinaJdia18] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia18,setObservacaodia18] = useState("");

  /* Dia 19 */
  /* Cafe da Manhã */
  const [jejumdia19,setJejumdia19] = useState("");
  const [duashrdepoisdia19,setDuashrdepoisdia19] = useState("");
  const [uiInsulinadia19,setuiInsulinadia19] = useState("");
  /* Almoço */
  const [jejumAdia19,setJejumAdia19] = useState("");
  const [duashrdepoisAdia19,setDuashrdepoisAdia19] = useState("");
  const [uiInsulinaAdia19,setuiInsulinaAdia19] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia19,setJejumTdia19] = useState("");
  const [duashrdepoisTdia19,setDuashrdepoisTdia19] = useState("");
  const [uiInsulinaTdia19,setuiInsulinaTdia19] = useState("");
  /* Janta */
  const [jejumJdia19,setJejumJdia19] = useState("");
  const [duashrdepoisJdia19,setDuashrdepoisJdia19] = useState("");
  const [uiInsulinaJdia19,setuiInsulinaJdia19] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia19,setObservacaodia19] = useState("");

  /* Dia 20 */
  /* Cafe da Manhã */
  const [jejumdia20,setJejumdia20] = useState("");
  const [duashrdepoisdia20,setDuashrdepoisdia20] = useState("");
  const [uiInsulinadia20,setuiInsulinadia20] = useState("");
  /* Almoço */
  const [jejumAdia20,setJejumAdia20] = useState("");
  const [duashrdepoisAdia20,setDuashrdepoisAdia20] = useState("");
  const [uiInsulinaAdia20,setuiInsulinaAdia20] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia20,setJejumTdia20] = useState("");
  const [duashrdepoisTdia20,setDuashrdepoisTdia20] = useState("");
  const [uiInsulinaTdia20,setuiInsulinaTdia20] = useState("");
  /* Janta */
  const [jejumJdia20,setJejumJdia20] = useState("");
  const [duashrdepoisJdia20,setDuashrdepoisJdia20] = useState("");
  const [uiInsulinaJdia20,setuiInsulinaJdia20] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia20,setObservacaodia20] = useState("");

  /* Dia 21 */
  /* Cafe da Manhã */
  const [jejumdia21,setJejumdia21] = useState("");
  const [duashrdepoisdia21,setDuashrdepoisdia21] = useState("");
  const [uiInsulinadia21,setuiInsulinadia21] = useState("");
  /* Almoço */
  const [jejumAdia21,setJejumAdia21] = useState("");
  const [duashrdepoisAdia21,setDuashrdepoisAdia21] = useState("");
  const [uiInsulinaAdia21,setuiInsulinaAdia21] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia21,setJejumTdia21] = useState("");
  const [duashrdepoisTdia21,setDuashrdepoisTdia21] = useState("");
  const [uiInsulinaTdia21,setuiInsulinaTdia21] = useState("");
  /* Janta */
  const [jejumJdia21,setJejumJdia21] = useState("");
  const [duashrdepoisJdia21,setDuashrdepoisJdia21] = useState("");
  const [uiInsulinaJdia21,setuiInsulinaJdia21] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia21,setObservacaodia21] = useState("");

  /* Dia 22 */
  /* Cafe da Manhã */
  const [jejumdia22,setJejumdia22] = useState("");
  const [duashrdepoisdia22,setDuashrdepoisdia22] = useState("");
  const [uiInsulinadia22,setuiInsulinadia22] = useState("");
  /* Almoço */
  const [jejumAdia22,setJejumAdia22] = useState("");
  const [duashrdepoisAdia22,setDuashrdepoisAdia22] = useState("");
  const [uiInsulinaAdia22,setuiInsulinaAdia22] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia22,setJejumTdia22] = useState("");
  const [duashrdepoisTdia22,setDuashrdepoisTdia22] = useState("");
  const [uiInsulinaTdia22,setuiInsulinaTdia22] = useState("");
  /* Janta */
  const [jejumJdia22,setJejumJdia22] = useState("");
  const [duashrdepoisJdia22,setDuashrdepoisJdia22] = useState("");
  const [uiInsulinaJdia22,setuiInsulinaJdia22] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia22,setObservacaodia22] = useState("");

  /* Dia 23 */
  /* Cafe da Manhã */
  const [jejumdia23,setJejumdia23] = useState("");
  const [duashrdepoisdia23,setDuashrdepoisdia23] = useState("");
  const [uiInsulinadia23,setuiInsulinadia23] = useState("");
  /* Almoço */
  const [jejumAdia23,setJejumAdia23] = useState("");
  const [duashrdepoisAdia23,setDuashrdepoisAdia23] = useState("");
  const [uiInsulinaAdia23,setuiInsulinaAdia23] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia23,setJejumTdia23] = useState("");
  const [duashrdepoisTdia23,setDuashrdepoisTdia23] = useState("");
  const [uiInsulinaTdia23,setuiInsulinaTdia23] = useState("");
  /* Janta */
  const [jejumJdia23,setJejumJdia23] = useState("");
  const [duashrdepoisJdia23,setDuashrdepoisJdia23] = useState("");
  const [uiInsulinaJdia23,setuiInsulinaJdia23] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia23,setObservacaodia23] = useState("");

  /* Dia 24 */
  /* Cafe da Manhã */
  const [jejumdia24,setJejumdia24] = useState("");
  const [duashrdepoisdia24,setDuashrdepoisdia24] = useState("");
  const [uiInsulinadia24,setuiInsulinadia24] = useState("");
  /* Almoço */
  const [jejumAdia24,setJejumAdia24] = useState("");
  const [duashrdepoisAdia24,setDuashrdepoisAdia24] = useState("");
  const [uiInsulinaAdia24,setuiInsulinaAdia24] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia24,setJejumTdia24] = useState("");
  const [duashrdepoisTdia24,setDuashrdepoisTdia24] = useState("");
  const [uiInsulinaTdia24,setuiInsulinaTdia24] = useState("");
  /* Janta */
  const [jejumJdia24,setJejumJdia24] = useState("");
  const [duashrdepoisJdia24,setDuashrdepoisJdia24] = useState("");
  const [uiInsulinaJdia24,setuiInsulinaJdia24] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia24,setObservacaodia24] = useState("");
  
  /* Dia 25 */
  /* Cafe da Manhã */
  const [jejumdia25,setJejumdia25] = useState("");
  const [duashrdepoisdia25,setDuashrdepoisdia25] = useState("");
  const [uiInsulinadia25,setuiInsulinadia25] = useState("");
  /* Almoço */
  const [jejumAdia25,setJejumAdia25] = useState("");
  const [duashrdepoisAdia25,setDuashrdepoisAdia25] = useState("");
  const [uiInsulinaAdia25,setuiInsulinaAdia25] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia25,setJejumTdia25] = useState("");
  const [duashrdepoisTdia25,setDuashrdepoisTdia25] = useState("");
  const [uiInsulinaTdia25,setuiInsulinaTdia25] = useState("");
  /* Janta */
  const [jejumJdia25,setJejumJdia25] = useState("");
  const [duashrdepoisJdia25,setDuashrdepoisJdia25] = useState("");
  const [uiInsulinaJdia25,setuiInsulinaJdia25] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia25,setObservacaodia25] = useState("");

  /* Dia 26 */
  /* Cafe da Manhã */
  const [jejumdia26,setJejumdia26] = useState("");
  const [duashrdepoisdia26,setDuashrdepoisdia26] = useState("");
  const [uiInsulinadia26,setuiInsulinadia26] = useState("");
  /* Almoço */
  const [jejumAdia26,setJejumAdia26] = useState("");
  const [duashrdepoisAdia26,setDuashrdepoisAdia26] = useState("");
  const [uiInsulinaAdia26,setuiInsulinaAdia26] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia26,setJejumTdia26] = useState("");
  const [duashrdepoisTdia26,setDuashrdepoisTdia26] = useState("");
  const [uiInsulinaTdia26,setuiInsulinaTdia26] = useState("");
  /* Janta */
  const [jejumJdia26,setJejumJdia26] = useState("");
  const [duashrdepoisJdia26,setDuashrdepoisJdia26] = useState("");
  const [uiInsulinaJdia26,setuiInsulinaJdia26] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia26,setObservacaodia26] = useState("");

  /* Dia 27 */
  /* Cafe da Manhã */
  const [jejumdia27,setJejumdia27] = useState("");
  const [duashrdepoisdia27,setDuashrdepoisdia27] = useState("");
  const [uiInsulinadia27,setuiInsulinadia27] = useState("");
  /* Almoço */
  const [jejumAdia27,setJejumAdia27] = useState("");
  const [duashrdepoisAdia27,setDuashrdepoisAdia27] = useState("");
  const [uiInsulinaAdia27,setuiInsulinaAdia27] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia27,setJejumTdia27] = useState("");
  const [duashrdepoisTdia27,setDuashrdepoisTdia27] = useState("");
  const [uiInsulinaTdia27,setuiInsulinaTdia27] = useState("");
  /* Janta */
  const [jejumJdia27,setJejumJdia27] = useState("");
  const [duashrdepoisJdia27,setDuashrdepoisJdia27] = useState("");
  const [uiInsulinaJdia27,setuiInsulinaJdia27] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia27,setObservacaodia27] = useState("");

  /* Dia 28 */
  /* Cafe da Manhã */
  const [jejumdia28,setJejumdia28] = useState("");
  const [duashrdepoisdia28,setDuashrdepoisdia28] = useState("");
  const [uiInsulinadia28,setuiInsulinadia28] = useState("");
  /* Almoço */
  const [jejumAdia28,setJejumAdia28] = useState("");
  const [duashrdepoisAdia28,setDuashrdepoisAdia28] = useState("");
  const [uiInsulinaAdia28,setuiInsulinaAdia28] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia28,setJejumTdia28] = useState("");
  const [duashrdepoisTdia28,setDuashrdepoisTdia28] = useState("");
  const [uiInsulinaTdia28,setuiInsulinaTdia28] = useState("");
  /* Janta */
  const [jejumJdia28,setJejumJdia28] = useState("");
  const [duashrdepoisJdia28,setDuashrdepoisJdia28] = useState("");
  const [uiInsulinaJdia28,setuiInsulinaJdia28] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia28,setObservacaodia28] = useState("");

  /* Dia 29 */
  /* Cafe da Manhã */
  const [jejumdia29,setJejumdia29] = useState("");
  const [duashrdepoisdia29,setDuashrdepoisdia29] = useState("");
  const [uiInsulinadia29,setuiInsulinadia29] = useState("");
  /* Almoço */
  const [jejumAdia29,setJejumAdia29] = useState("");
  const [duashrdepoisAdia29,setDuashrdepoisAdia29] = useState("");
  const [uiInsulinaAdia29,setuiInsulinaAdia29] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia29,setJejumTdia29] = useState("");
  const [duashrdepoisTdia29,setDuashrdepoisTdia29] = useState("");
  const [uiInsulinaTdia29,setuiInsulinaTdia29] = useState("");
  /* Janta */
  const [jejumJdia29,setJejumJdia29] = useState("");
  const [duashrdepoisJdia29,setDuashrdepoisJdia29] = useState("");
  const [uiInsulinaJdia29,setuiInsulinaJdia29] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia29,setObservacaodia29] = useState("");

  /* Dia 30 */
  /* Cafe da Manhã */
  const [jejumdia30,setJejumdia30] = useState("");
  const [duashrdepoisdia30,setDuashrdepoisdia30] = useState("");
  const [uiInsulinadia30,setuiInsulinadia30] = useState("");
  /* Almoço */
  const [jejumAdia30,setJejumAdia30] = useState("");
  const [duashrdepoisAdia30,setDuashrdepoisAdia30] = useState("");
  const [uiInsulinaAdia30,setuiInsulinaAdia30] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia30,setJejumTdia30] = useState("");
  const [duashrdepoisTdia30,setDuashrdepoisTdia30] = useState("");
  const [uiInsulinaTdia30,setuiInsulinaTdia30] = useState("");
  /* Janta */
  const [jejumJdia30,setJejumJdia30] = useState("");
  const [duashrdepoisJdia30,setDuashrdepoisJdia30] = useState("");
  const [uiInsulinaJdia30,setuiInsulinaJdia30] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia30,setObservacaodia30] = useState("");

  /* Dia 31 */
  /* Cafe da Manhã */
  const [jejumdia31,setJejumdia31] = useState("");
  const [duashrdepoisdia31,setDuashrdepoisdia31] = useState("");
  const [uiInsulinadia31,setuiInsulinadia31] = useState("");
  /* Almoço */
  const [jejumAdia31,setJejumAdia31] = useState("");
  const [duashrdepoisAdia31,setDuashrdepoisAdia31] = useState("");
  const [uiInsulinaAdia31,setuiInsulinaAdia31] = useState("");
  /* Cafe da Tarde */
  const [jejumTdia31,setJejumTdia31] = useState("");
  const [duashrdepoisTdia31,setDuashrdepoisTdia31] = useState("");
  const [uiInsulinaTdia31,setuiInsulinaTdia31] = useState("");
  /* Janta */
  const [jejumJdia31,setJejumJdia31] = useState("");
  const [duashrdepoisJdia31,setDuashrdepoisJdia31] = useState("");
  const [uiInsulinaJdia31,setuiInsulinaJdia31] = useState("");
  /*OBSERVAÇÕES*/
  const [Observacaodia31,setObservacaodia31] = useState("");

  /* Receita insulinal basal */

  /* Medico Responsavel */
  const [nomeMedico, setNomeMedico] = useState('');
  const [emailMedico, setEmailMedico] = useState('');
  const [crm, setCrm] = useState('');
  const [phonemedico, setPhonemedidco] = useState('')

  return (
    <div className="home">
      <Navbar />
      <div className="headerContainer">
        <div className="faixaAzulCadastro">
          <div className="faixaAzul-certa">
            <a href={`/paciente?cpf=${searchResults[0]?.cpf}`}>
              <HiArrowNarrowLeft className="seta" />
            </a>
            <h1 className="centralizando">AVALIAÇÃO MEDICINA</h1>
            <div className="dtexame2NovoCadastro">
              <input type={"date"} name="dateMED" className="inputDataEd" />
            </div>
          </div>
        </div>
        <div className="form-dados-paciente-med">
          <div>
            <form className="infor-pessoal-paciente-med">
              <p className="p-nome-paciente-infos-med">NOME:</p>
              <input
                className="nome-saida"
                type={"text"}
                name="name-input-nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              ></input>
              <p className="p-idade-paciente-infos-med">IDADE:</p>
              <input
                className="idade-saida"
                type={"number"}
                name="name-input-idade"
                value={calcularIdade(data_nascimento)}
              ></input>
              <p className="p-peso-paciente-infos-med">PESO &#40;KG&#41;:</p>
              <input
                className="peso-saida"
                type={"number"}
                name="name-input-peso"
              ></input>
            </form>
            <form className="infor-pessoal-paciente-med">
              <p className="p-estatura-paciente-infos-med">
                ESTATURA &#40;METROS&#41;:
              </p>
              <input
                className="estatura-saida"
                type={"number"}
                name="name-input-estatura"
              ></input>
              <p className="p-estatura-paciente-infos-med">DIAGNÓSTICO:</p>
              <input
                className="diagnostico-saida"
                type={"radio"}
                name="name-input-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-DM1">DM1</p>
              <input
                className="diagnostico-saida"
                type={"radio"}
                name="name-input-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-DM2">DM2</p>
              <input
                className="diagnostico-saida"
                type={"radio"}
                name="name-input-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-DMG">DMG</p>
              <input
                className="diagnostico-saida"
                type={"radio"}
                name="name-input-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-SEM-DIAG">
                Sem Diagnóstico
              </p>
              <input
                className="diagnostico-saida"
                type={"radio"}
                name="name-input-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-OUTRAS-FORMS">
                Outras formas de DM:
              </p>
              <input
                className="diagnostico-saida-input"
                type={"text"}
                name="name-input-diagnostico"
              ></input>
            </form>
            <form className="infor-pessoal-paciente-med">
              <p className="p-estatura-paciente-infos-med-date-med">
                DATA DO DIAGNÓSTICO:
              </p>
              <input
                className="date-diagnostico-saida-input"
                type={"date"}
                name="name-input-date-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-date-tempo-med">
                TEMPO DE DIAGNÓSTICO EM MESES :
              </p>
              <input
                className="date-tempo-diagnostico-saida-input"
                type={"number"}
                name="name-input-date-tempo-diagnostico"
                title="Tempo baseado na data de diagnóstico e data da consulta!"
              ></input>
            </form>
            <div className="classificacao-diagnostico2">
              <div className="classificacao-diagnostico">
                <p>PREENCHIMENTO OBRIGATÓRIO</p>
              </div>
              <form className="infor-pessoal-paciente-med">
                <p className="p-estatura-paciente-infos-med-DM2-22">
                  CLASSIFICAÇÃO DO TEMPO DE DIAGNÓSTICO:
                </p>
                <input
                  className="diagnostico-saida"
                  type={"radio"}
                  name="name-input-classificacao"
                ></input>
                <p className="p-estatura-paciente-infos-med-DM1">
                  Recente até 100 dias
                </p>
                <input
                  className="diagnostico-saida"
                  type={"radio"}
                  name="name-input-classificacao"
                ></input>
                <p className="p-estatura-paciente-infos-med-DM2-2">
                  Lua de mel &#40;remissão&#41;
                </p>
                <input
                  className="diagnostico-saida"
                  type={"radio"}
                  name="name-input-classificacao"
                ></input>
                <p className="p-estatura-paciente-infos-med-DM2-2">
                  Esgotamento de reserva pancreática de insulina
                </p>
              </form>
            </div>
          </div>
          <form className="infor-pessoal-paciente-med">
            <p className="p-estatura-paciente-infos-med">
              MÉTODO DE MONITORAMENTO DE GLICEMIA:
            </p>
            <input
              className="metodo-monitoramento-glicemia1"
              type={"radio"}
              name="monitoramento-glicometro"
            ></input>
            <p className="p-medoto-monitoramento-glicosimetro">Glicosimetro</p>
            <input
              className="metodo-monitoramento-glicemia2"
              type={"radio"}
              name="monitoramento-glicometro"
            ></input>
            <p className="p-medoto-monitoramento-glicosimetro">
              Sensor Medtronic
            </p>
            <input
              className="metodo-monitoramento-glicemia3"
              type={"radio"}
              name="monitoramento-glicometro"
            ></input>
            <p className="p-medoto-monitoramento-glicosimetro">
              Freestyle Libre
            </p>
            <p className="p-medoto-monitoramento-glicosimetro-marca-modelo">
              Marca/modelo se glicômetro:
            </p>
            <DropDownModeloGlicometro />
          </form>
          <form className="infor-pessoal-paciente-med">
            <p className="p-estado-controle-glicemico">
              ESTADO DE CONTROLE GLICÊMICO:
            </p>
            <input
              className="input-estado-controle-glicemico"
              type={"text"}
              name="estado-controle-glicemico"
            ></input>
            <p className="p-estado-controle-glicemico">
              MÉTODO DE ADMINISTRAÇÃO DE INSULINA:
            </p>
            <input
              className="input-estado-controle-glicemico"
              type={"radio"}
              name="estado-controle-glicemico"
            ></input>
            <p className="p-estado-controle-glicemico2">
              Não faz uso de insulina
            </p>
            <input
              className="input-estado-controle-glicemico"
              type={"radio"}
              name="estado-controle-glicemico"
            ></input>
            <p className="p-estado-controle-glicemico2">
              Caneta/seringa &#40;MDI&#41;
            </p>
            <input
              className="input-estado-controle-glicemico"
              type={"radio"}
              name="estado-controle-glicemico"
            ></input>
            <p className="p-estado-controle-glicemico2">Bomba &#40;SICI&#41;</p>
          </form>
          <div className="preenchimento-med-1">
            <div className="preenchimento-med">
              <p className="p-preenchimento-med">PARA PREENCHIMENTO</p>
            </div>
            <p className="p-outras-morbidades">
              1- Outras morbidades &#40;doenças&#41;
            </p>
            <div className="outras-morbidades">
              <table className="table-outras-morbidades">
                <tr>
                  <th className="th-doenca">Doença</th>
                  <th className="th-doenca">Medicamento</th>
                  <th className="th-doenca">Dose</th>
                </tr>
                <tr>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                </tr>
              </table>
            </div>
            <p
              className="p-outras-morbidades"
              title="Registro de queixas do paciente em relação ao estado de saúde e controle do diabetes."
            >
              2- Sintomas
            </p>
            <div className="textarea-sintomas">
              <textarea
                className="text-area-sintomas"
                placeholder="Registro de queixas do paciente em relação ao estado de saúde e controle do diabetes."
              ></textarea>
            </div>
            <div className="dropdown-med-tabela">
              {/* Verificar com o Eduardo a Tabela de Sintomas*/}
              <DropDownTabelaSintomasMed />
            </div>
            <p className="p-outras-morbidades">
              3- Estágio maturacional: Escala de TANNER:
            </p>
            <div className="estagio-maturacional">
              <div className="display-estagio-pubere">
                <input
                  className="input-estagio-maturacional"
                  type={"radio"}
                  name="name-estagio-maturacional"
                ></input>
                <p className="p-estagio-maturacional">Pré-púbere</p>
                <input
                  className="input-estagio-maturacional"
                  type={"radio"}
                  name="name-estagio-maturacional"
                ></input>
                <p className="p-estagio-maturacional">Púbere</p>
                <input
                  className="input-estagio-maturacional"
                  type={"radio"}
                  name="name-estagio-maturacional"
                ></input>
                <p className="p-estagio-maturacional">Pós-púrebe</p>
              </div>
            </div>
            <div className="centralizar-imagens">
              {/* Verificar com o Eduardo a Tabela */}
              <DropDownTabelaImagensMedMasc />
            </div>
            <div className="centralizar-imagens">
              {/* Verificar com o Eduardo a Tabela */}
              <DropDownTabelaImagensMedFem />
            </div>
            <p className="p-outras-morbidades">
              4- Estado glicêmico baseado na HbA1c:
            </p>
            {/* Registrar a data do exame nos campos de ficha de registro, trazer os dados dos exames mas também permitir o registro manual*/}
            <div>
              <div className="div-estado-glicemico">
                <table className="table-estado-glicemico">
                  <tr>
                    <th className="vazio"></th>
                    <th className="th-date">Data</th>
                    <th className="th-date">Data</th>
                    <th className="th-date">Data</th>
                    <th className="th-date">Data</th>
                    <th className="th-date">Data</th>
                    <th className="th-date">Data</th>
                  </tr>
                  <tr>
                    <td className="ficha-registo">
                      Ficha de registro de exame laboratoriais
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td className="hba1c-css">HbA1c &#40;%&#41;</td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td className="classificacao-form-med">Classificação</td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <p className="p-outras-morbidades">
              5- Administração de insulina atual:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-administracao-insulina">
                <tr>
                  <th className="tipo-admin-insulina">Tipo</th>
                  <th className="name-admin-insulina">Nome</th>
                  <th className="dose-admin-insulina">
                    Dose diária &#40;U/dia&#41;
                  </th>
                  <th className="dose-admin-insulina">
                    Dose diária &#40;U/kg/dia&#41;
                  </th>
                  <th className="porcentagem-admin-insulina">%</th>
                </tr>
                <tr>
                  <td className="basal-bolus">BASAL</td>
                  <td>
                    <DropDownListaNomesBasal />
                  </td>
                  <td>
                    <input
                      type={"text"}
                      className="input-dosediaria-u-dia"
                    ></input>
                  </td>
                  <td>
                    <input type={"text"} className="input-dosediaria-u-dia" />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="basal-bolus">BOLUS</td>
                  <td>
                    <DropDownListaNomesBolus />
                  </td>
                  <td>
                    <input type={"text"} className="input-dosediaria-u-dia" />
                  </td>
                  <td>
                    <input type={"text"} className="input-dosediaria-u-dia" />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="total-admin-insulina" colSpan={"2"}>
                    Total
                  </td>
                  <td className="dose-admin-insulina2"></td>
                  <td className="dose-admin-insulina2"></td>
                  <td className="porcentagem-admin-insulina1"></td>
                </tr>
              </table>
            </div>
            <p className="p-outras-morbidades">
              6- Fator de sensibilidade a insulina &#40;FS&#41; para BOLUS de
              insulina:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th className="th-FS">FS &#40;mg/dl/U&#41;</th>
                  <th className="th-FS" colSpan={"2"}>
                    Faixa de horário
                  </th>
                </tr>
                <tr>
                  <td>
                    <input type={"number"} className="input-fs-bolus"></input>
                  </td>
                  {/* horário, se não completar 24hrs, deverá adicionar outra linha abaixo */}
                  <td className="td-input-time">
                    <input
                      type={"time"}
                      className="input-time-fs-bolus"
                    ></input>
                  </td>
                  <td className="td-input-time">
                    <input
                      type={"time"}
                      className="input-time-fs-bolus"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"number"} className="input-fs-bolus"></input>
                  </td>
                  {/* FS médio */}
                  <td colSpan={"2"}>.</td>
                </tr>
                <tr>
                  {/* Calculo de idade e total de insulina */}
                  <td></td>
                  {/* FS calculado pelo total de insulina */}
                  <td colSpan={"2"}>.</td>
                </tr>
              </table>
            </div>
            <p className="p-outras-morbidades">
              7- Razão de carboidrato insulina &#40;rCHOi&#41;:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th className="th-FS">rCHOi &#40;gramas/U&#41;</th>
                  <th className="th-FS" colSpan={"2"}>
                    Faixa de horário
                  </th>
                </tr>
                <tr>
                  <td>
                    <input type={"number"} className="input-fs-bolus"></input>
                  </td>
                  {/* horário, se não completar 24hrs, deverá adicionar outra linha abaixo */}
                  <td className="td-input-time">
                    <input
                      type={"time"}
                      className="input-time-fs-bolus"
                    ></input>
                  </td>
                  <td className="td-input-time">
                    <input
                      type={"time"}
                      className="input-time-fs-bolus"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"number"} className="input-fs-bolus"></input>
                  </td>
                  {/* rCHOi médio */}
                  <td colSpan={"2"}>.</td>
                </tr>
                <tr>
                  {/* Calculo de idade e total de insulina diária*/}
                  <td></td>
                  {/* rCHOi calculado pelo total de insulina (gramas/U)*/}
                  <td colSpan={"2"}>.</td>
                </tr>
              </table>
            </div>
            <div className="preenchimento-med-1">
              <div className="classificacao-diagnostico">
                <p>PRESCRIÇÃO MÉDICA</p>
                {/* Deverá ser impresso para o paciente */}
              </div>
              <div className="prescricao-medica">
                <p className="p-nome-prescricao-medica">Nome:</p>
                <p className="p-resultado-nome-prescricao-medica"></p>
                <p className="p-nome-prescricao-medica">Idade:</p>
                <p className="p-resultado-idade-prescricao-medica"></p>
                <p className="p-nome-prescricao-medica">Data da prescrição:</p>
                <input
                  type={"date"}
                  classNamedate-prescricao-medica
                  className="input-date-prescricao-medica"
                  title="Data da prescrição"
                ></input>
              </div>
              {/* Deverá apresentar resumos de diagnóticos e condutas clínicas de outras áreas e antopometria */}
            </div>
            <p className="p-outras-morbidades">1- Terapêutica de insulina:</p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th rowSpan={"3"} className="tipo-terapeutica-insulina">
                    Tipo
                  </th>
                  <th rowSpan={"3"} className="tipo-terapeutica-insulina">
                    Nome
                  </th>
                  <th
                    colSpan={"2"}
                    rowSpan={"2"}
                    className="prescricao-terapeutica-insulina"
                  >
                    Prescrição Médica
                  </th>
                  <th
                    colSpan={"4"}
                    className="recomendacoes-terapeutica-insulina2"
                  >
                    Recomendações diretrizes
                  </th>
                </tr>
                <tr>
                  <td className="recomendacoes-terapeutica-insulina">mínimo</td>
                  <td className="recomendacoes-terapeutica-insulina">máximo</td>
                  <td className="recomendacoes-terapeutica-insulina">mínimo</td>
                  <td className="recomendacoes-terapeutica-insulina">máximo</td>
                </tr>
                <tr>
                  <td className="u-dia-kg">U/dia</td>
                  <td className="u-dia-kg">U/kg/dia</td>
                  <td className="u-dia-kg">U/kg/dia</td>
                  <td className="u-dia-kg">U/kg/dia</td>
                  <td className="u-dia-kg">U/dia</td>
                  <td className="u-dia-kg">U/dia</td>
                </tr>
                <tr>
                  <td className="table-basal-bolus-insulina">Basal</td>
                  <td>lista</td>
                  {/* Contas */}
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="table-basal-bolus-insulina">Bolus</td>
                  <td>lista</td>
                  {/* Contas */}
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={"2"} className="total-terapeutica-insulina">
                    Total
                  </td>
                  {/* Contas */}
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
            <p className="p-outras-morbidades">
              2- Fator de sensibilidade a insulina &#40;FS&#41; para BOLUS de
              insulina baseado na prescição de insulina e ajustes por período:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th className="fator-sensibilidade-fs">
                    FS &#40;mg/dL/U&#41;
                  </th>
                  <th colSpan={"2"} className="valor-estimado">
                    Valor estimado que 1 unidade de insulina &#40;U&#41; reduz
                    na glicemia em mg/dL
                  </th>
                </tr>
                <tr>
                  {/* Contas */}
                  <td>.</td>
                  <td colSpan={"2"}>.</td>
                </tr>
                <tr>
                  <td className="centralizar-fs-inicial-final">
                    FS &#40;mg/dL/U&#41; ajustado por horários
                  </td>
                  <td className="centralizar-fs-inicial-final">Inicial</td>
                  <td className="centralizar-fs-inicial-final">Final</td>
                </tr>
                <tr>
                  <td className="centralizar-fs-inicial-final2">
                    <input
                      type={"text"}
                      className="text-inserir-manualmente"
                    ></input>
                  </td>
                  <td className="centralizar-fs-inicial-final2">
                    <input type={"time"} className="time-inicial-final"></input>
                  </td>
                  <td className="centralizar-fs-inicial-final2">
                    <input type={"time"} className="time-inicial-final"></input>
                  </td>
                </tr>
              </table>
            </div>
            <p className="p-outras-morbidades">
              3- Razão de carboidrato insulina &#40;rCHOi&#41; para BOLUS de
              insulina baseado na prescrição de insulina e justes por período:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th className="fator-sensibilidade-fs">
                    rCHOi &#40;gramas/U&#41;
                  </th>
                  <th colSpan={"2"} className="valor-estimado">
                    Razão da quantidade de carboidrato &#40;CHO&#41; em gramas
                    coberto por 1 unidade de insulina &#40;U&#41;
                  </th>
                </tr>
                <tr>
                  {/* Contas */}
                  <td>.</td>
                  <td colSpan={"2"}>.</td>
                </tr>
                <tr>
                  <td className="centralizar-fs-inicial-final">
                    rCHOi &#40;gramas/U&#41; ajustado por horários
                  </td>
                  <td className="centralizar-fs-inicial-final">Inicial</td>
                  <td className="centralizar-fs-inicial-final">Final</td>
                </tr>
                <tr>
                  <td className="centralizar-fs-inicial-final2">
                    <input
                      type={"text"}
                      className="text-inserir-manualmente"
                    ></input>
                  </td>
                  <td className="centralizar-fs-inicial-final2">
                    <input type={"time"} className="time-inicial-final"></input>
                  </td>
                  <td className="centralizar-fs-inicial-final2">
                    <input type={"time"} className="time-inicial-final"></input>
                  </td>
                </tr>
              </table>
            </div>
            <p className="p-outras-morbidades">
              4- Outras prescrições médicas:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th className="conduta-clinica">CONDUTA CLÍNICA</th>
                </tr>
                <tr>
                  <td className="conduta-clinica2">
                    Descrição de conduta clínica e cuidados necessários para o
                    tratamento do diabetes ou outras morbidades:
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea
                      placeholder="descreva: "
                      className="textares-conduta-clinica"
                    ></textarea>
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <p className="p-collapse">PROCESSOS MÉDICOS</p>
            </div>
            <div className="collapse">
              <CollapseProcessos />
            </div>
            <div>
              <p></p>
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
                    <p></p>
                  </td>
                  <td className="nome-completo-responsavel-avaliacao">
                    CRM:<p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td className="nome-completo-responsavel-avaliacao">
                    Email:
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td className="nome-completo-responsavel-avaliacao">
                    Telefone:
                  </td>
                  <td>
                    <p></p>
                  </td>
                </tr>
              </table>
            </div>
            <ButtonSalvarMed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioMedicina;