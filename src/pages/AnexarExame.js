import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/AnexarExame.css";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FaCloudUploadAlt } from 'react-icons/fa';
import Popup from "../components/Popup";

function AnexarExame() {
    const [selectedOptions, setSelectedOptions] = useState({
        medicina: false,
        enfermagem: false,
        educacaoFisica: false,
        nutricao: false,
        psicologia: false,
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [date, setDate] = useState("");
    const [popup, setPopup] = useState(null);
    const [isFileAttached, setIsFileAttached] = useState(false);

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setDate(today);
    }, []);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedOptions(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFileAttached(true);
    };

    const handleSave = async () => {
        const isAnyOptionSelected = Object.values(selectedOptions).some(value => value);

        if (!isAnyOptionSelected || !isFileAttached) {
            setPopup({ type: "error", message: "Selecione pelo menos uma opção e anexe um arquivo." });
            return;
        }

        const formData = new FormData();
        formData.append("date", date);
        formData.append("file", selectedFile);
        Object.keys(selectedOptions).forEach(option => {
            if (selectedOptions[option]) {
                formData.append(option, selectedOptions[option]);
            }
        });

        try {
            const response = await fetch("https://example.com/api/save", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Erro ao salvar o exame");
            }

            setPopup({ type: "success", message: "Exame salvo com sucesso!" });
            setSelectedOptions({
                medicina: false,
                enfermagem: false,
                educacaoFisica: false,
                nutricao: false,
                psicologia: false,
            });
            setSelectedFile(null);
            setIsFileAttached(false);
        } catch (error) {
            console.error("Erro ao salvar o exame:", error);
            setPopup({ type: "error", message: "Ocorreu um erro ao tentar salvar o exame." });
        }
    };

    const handlePopupClose = () => {
        setPopup(null);
    };

    return (
        <div className="AnexarExame">
            <Navbar />
            <div className="headerContainer">
                <div className="faixaAzul-certa">
                    <a href="/paciente">
                        <HiArrowNarrowLeft className="seta" />
                    </a>
                    <h1 className="centralizando">ANEXAR EXAME</h1>
                    <div className="dtexame2NovoCadastro">
                        <input
                            type="date"
                            name="dateexame"
                            className="inputDataEd"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="DivCheck">
                    <div className="checkDiv">
                        <label className="check">
                            <input type="checkbox" className="CheckMed" name="medicina" checked={selectedOptions.medicina} onChange={handleCheckboxChange} />
                            <span className="checkbox"></span>
                            <p className="PcheckMed">Medicina</p>
                        </label>
                    </div>
                    <div className="checkDiv">
                        <label className="check">
                            <input type="checkbox" className="CheckEnf" name="enfermagem" checked={selectedOptions.enfermagem} onChange={handleCheckboxChange} />
                            <span className="checkbox1"></span>
                            <p className="PcheckEnf">Enfermagem</p>
                        </label>
                    </div>
                    <div className="checkDiv">
                        <label className="check">
                            <input type="checkbox" className="CheckEdFisica" name="educacaoFisica" checked={selectedOptions.educacaoFisica} onChange={handleCheckboxChange} />
                            <span className="checkbox2"></span>
                            <p className="PcheckedFisica">Educação Física</p>
                        </label>
                    </div>
                    <div className="checkDiv">
                        <label className="check">
                            <input type="checkbox" className="CheckNutri" name="nutricao" checked={selectedOptions.nutricao} onChange={handleCheckboxChange} />
                            <span className="checkbox3"></span>
                            <p className="PcheckNutricao">Nutrição</p>
                        </label>
                    </div>
                    <div className="checkDiv">
                        <label className="check">
                            <input type="checkbox" className="CheckPsico" name="psicologia" checked={selectedOptions.psicologia} onChange={handleCheckboxChange} />
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
                                <input className="input-anexar-exame-geral" type="file" name="input-anexar-exame-recordatorio" onChange={handleFileChange} />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="button-flex">
                    <button type="button" onClick={handleSave} id="send-the-form2"><div className="download-tag">SALVAR</div></button>
                </div>
            </div>
            {popup && (
                <Popup type={popup.type} message={popup.message} onClose={handlePopupClose} />
            )}
        </div>
    );
}

export default AnexarExame;
