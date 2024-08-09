import React from 'react';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import Home from "./pages/Home";
import NovoCadastro from "./pages/NovoCadastro";
import Paciente from "./pages/Paciente";
import EditarCadastro from "./pages/EditarCadastro";
import Processos from "./pages/Processos";
import AnexarExame from './pages/AnexarExame';
import Antropometria from './pages/Antropometria';
import FormularioPsicologia from './pages/FormularioPsicologia';
import FormularioEdFisica from './pages/FormularioEdFisica';
import FormularioNutricao from './pages/FormularioNutricao';
import Admin from './pages/Admin';
import Calculos from './calculos/calculos';
import DropDownGeral from './components/DropDownGeral';
import ClassificacaoFlexibilidade from './calculos/ClassificacaoFlexibilidade';
import ClassificacaoForcaTronco from './calculos/ClassificacaoForcaTronco';
import SaltoHorizontal from './calculos/SaltoHorizontal';
import FormularioMedicina from './pages/FormularioMedicina';
import NAF from './calculos/NAF';
import FormularioEnfermagem from './pages/FormularioEnfermagem';
import ProcessoInsulinaLenta from './components/ProcessoInsulinaLenta';
import CheckListRapidaProcessos from './components/CheckListRapidaProcessos';
import RelatorioManutencaoInsulina from './components/RelatorioManutencaoInsulina';
import RelatorioPrescricaoInicialInsulina from './components/RelatorioPrescricaoInicialInsulina';
import TermoConflitos from './components/TermoConflitos';
import ReceitaInsulinaBasal from './components/ReceitaInsulinaBasal';
import ControleGlicemia from './components/ControleGlicemia';
import ReceitaInsulinaRapida from './components/ReceitaInsulinaRapida';
import BancoExames from './pages/BancoExames';
import AgendarConsulta from './pages/AgendarConsulta';
import CollapseProcessos from './components/CollapseProcessos';
import AlteraçãoEstagiario from './components/AlteraçãoEstagiario';
import Consulta from './pages/Consulta';

function App() {
    return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/novocadastro" element={<RequireAuth><NovoCadastro/></RequireAuth>} />
            <Route path="/paciente" element={<RequireAuth><Paciente/></RequireAuth>} />
            <Route path="/editarcadastro" element={<RequireAuth><EditarCadastro/></RequireAuth>} />
            <Route path="/processos" element={<RequireAuth><Processos/></RequireAuth>} />
            <Route path="/anexarexame" element={<RequireAuth><AnexarExame/></RequireAuth>} />
            <Route path="/antropometria" element={<RequireAuth><Antropometria/></RequireAuth>} />
            <Route path="/formulariopsicologia" element={<RequireAuth><FormularioPsicologia/></RequireAuth>} />
            <Route path="/formularioedfisica" element={<RequireAuth><FormularioEdFisica/></RequireAuth>} />
            <Route path="/calculos" element={<RequireAuth><Calculos/></RequireAuth>} />
            <Route path="/formularionutricao" element={<RequireAuth><FormularioNutricao/></RequireAuth>} />
            <Route path="/admin" element={<RequireAuth><Admin/></RequireAuth>} />
            <Route path="/dropdowngeral" element={<RequireAuth><DropDownGeral/></RequireAuth>} />
            <Route path="/classificacaoflexibilidade" element={<RequireAuth><ClassificacaoFlexibilidade/></RequireAuth>} />
            <Route path="/classificacaoforcatronco" element={<RequireAuth><ClassificacaoForcaTronco/></RequireAuth>} />
            <Route path="/saltohorizontal" element={<RequireAuth><SaltoHorizontal/></RequireAuth>} />
            <Route path="/formulariomedicina" element={<RequireAuth><FormularioMedicina/></RequireAuth>} />
            <Route path="/naf" element={<RequireAuth><NAF/></RequireAuth>} />
            <Route path="/formularioenfermagem" element={<RequireAuth><FormularioEnfermagem/></RequireAuth>} />
            <Route path="/processoinsulinalenta" element={<RequireAuth><ProcessoInsulinaLenta/></RequireAuth>} />
            <Route path="/checklistrapidaprocessos" element={<RequireAuth><CheckListRapidaProcessos/></RequireAuth>} />
            <Route path="/relatoriomanutencaoinsulina" element={<RequireAuth><RelatorioManutencaoInsulina/></RequireAuth>} />
            <Route path="/relatorioprescricaoinicialinsulina" element={<RequireAuth><RelatorioPrescricaoInicialInsulina/></RequireAuth>} />
            <Route path="/termoconflitos" element={<RequireAuth><TermoConflitos/></RequireAuth>} />
            <Route path="/receitainsulinabasal" element={<RequireAuth><ReceitaInsulinaBasal/></RequireAuth>} />
            <Route path="/controleglicemia" element={<RequireAuth><ControleGlicemia/></RequireAuth>} />
            <Route path="/receitainsulinarapida" element={<RequireAuth><ReceitaInsulinaRapida/></RequireAuth>} />
            <Route path="/bancoexames" element={<RequireAuth><BancoExames/></RequireAuth>} />
            <Route path="/agendarconsulta" element={<RequireAuth><AgendarConsulta/></RequireAuth>} />
            <Route path="/consulta" element={<RequireAuth><Consulta/></RequireAuth>} />
            <Route path="/collapseprocessos" element={<RequireAuth><CollapseProcessos/></RequireAuth>} />
            <Route path="/alteracaoestagiario" element={<RequireAuth><AlteraçãoEstagiario/></RequireAuth>} />
        </Routes>
    </div>
    );
  }

export default App;