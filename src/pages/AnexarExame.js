import React from "react";
import Navbar from "../components/Navbar";
import "../styles/AnexarExame.css";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsFillPinFill } from "react-icons/bs";
import { FaCloudUploadAlt } from 'react-icons/fa';
import ModalSalvarExame from "../components/ModalSalvarExames";

function AnexarExame() {
    return (
        <div className="AnexarExame">
            <Navbar />
            {/* Retângulo azul */}
            <div className="headerContainer">
                <div className="faixaAzul-certa">
                    <a href="/paciente">
                        <HiArrowNarrowLeft className="seta" />
                    </a>
                    <h1 className="centralizando">ANEXAR EXAME</h1>
                    <div className="dtexame2NovoCadastro">
                        <input
                            type={"date"}
                            name="dateexame"
                            className="inputDataEd"
                        />
                    </div>
                </div>
                <div className="DivCheck">
                    <div className="checkDiv">
                        <label className="check">
                            <input type={"checkbox"} className="CheckMed" name="checkmed"></input>
                            <span className="checkbox"></span>
                            <p className="PcheckMed">Medicina</p>
                        </label>
                    </div>
                    <div className="checkDiv">
                        <label className="check">
                            <input type={"checkbox"} className="CheckEnf" name="checkenf"></input>
                            <span className="checkbox1"></span>
                            <p className="PcheckEnf">Enfermagem</p>
                        </label>
                    </div>
                    <div className="checkDiv">
                        <label className="check">
                            <input type={"checkbox"} className="CheckEdFisica" name="checkedfisica"></input>
                            <span className="checkbox2"></span>
                            <p className="PcheckedFisica">Educação Física</p>
                        </label>
                    </div>
                    <div className="checkDiv">
                        <label className="check">
                            <input type={"checkbox"} className="CheckNutri" name="checknutri"></input>
                            <span className="checkbox3"></span>
                            <p className="PcheckNutricao">Nutrição</p>
                        </label>
                    </div>
                    <div className="checkDiv">
                        <label className="check">
                            <input type={"checkbox"} className="CheckPsico" name="checkpsico"></input>
                            <span className="checkbox4"></span>
                            <p className="PcheckPsicologia">Psicologia</p>
                        </label>
                    </div>
                </div>
                <form className="form-flex-geral-exames">
                    <div className="anexar-exame-geral">
                        <div className="anexar-exame-geral-block">
                            <h2 className="tags-flex-geral-title">ANEXAR<FaCloudUploadAlt className="icon-download-title" /></h2>
                            <div className="tags-flex-geral">
                                <input className="input-anexar-exame-geral" type={"file"} name="input-anexar-exame-recordatorio" />
                            </div>
                            <div className="button-flex">
                                <button id="send-the-form"><div className="download-tag"><BsFillPinFill className="icon-pin" />ANEXAR</div></button>
                            </div>
                        </div>
                    </div>
                </form>
                <ModalSalvarExame />
            </div>
        </div>
    );
}

export default AnexarExame;