import React from "react";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import TabelasEducacaoFisica from "../components/TabelasEducacaoFisica";
import ModalSalvarEdFisica from "../components/ModalSalvarEdFisica";
import { BsFillPinFill } from "react-icons/bs";
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useApi } from "../hooks/useApi";
import { useState, useEffect } from "react";


function FormularioEdFisica() {
    const [searchResults, setSearchResults] = useState([]);
    const { tabelaPaciente } = useApi();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const cpfParam = urlParams.get("cpf");
        const searchTerm = cpfParam;

        const fetchData = async () => {
        try {
            const response = await tabelaPaciente(searchTerm, ['nome', 'cpf']);
            setSearchResults(response);
        } catch (error) {
            console.error(error);
        }
        };

        if (searchTerm) {
        fetchData();
        }
    }, [tabelaPaciente]);


    return (
        <div className="home">
            <Navbar />
            <div className="headerContainer">
                <div className="faixaAzulCadastro">
                    <div className="faixaAzul-certa">
                        <a href={`/paciente?cpf=${searchResults[0]?.cpf}`}>
                            <HiArrowNarrowLeft className="seta" />
                        </a>
                        <h1 className="centralizando">AVALIAÇÃO EDUCAÇÃO FÍSICA</h1>
                        <div className="dtexame2NovoCadastro">
                            <input
                                type={"date"}
                                name="dateexame"
                                className="inputDataEd"
                            />
                        </div>
                    </div>
                    <div class="campo">
                        {/* Dentro do paragrafo da classe importação importar o nome do paciente, OBS: é para trocar o nome Gabriele pela importação */}
                        <h5 className="h5-tipo-de-atendimento">Nome: <p className="importacao">Gabriele Amarante</p></h5>
                        <h5 className="h5-tipo-de-atendimento">Gestante:</h5>
                        <div>
                            <input type="radio" name="devweb" id="sim" value="sim" />
                            <label for="sim" className="sim">Sim</label>
                        </div>
                        <div>
                            <input type="radio" name="devweb" id="nao" value="nao" />
                            <label for="nao" className="nao">Não</label>
                        </div>
                        <div>
                            <input type="text" name="descreva" id="descreva" placeholder="Escreva o Trimestre" />
                        </div>
                        <h5 className="h5-tipo-de-atendimento">
                            Semana de gestação:
                        </h5>
                        <input
                            type={"number"}
                            className="input-semana-gestacao-Ed"
                            name="semanagesatacao"
                            min="0"
                            max="43"
                        />
                        <h5 className="h5-tipo-de-atendimento">
                            Lactação&#40;amamentando&#41;:
                        </h5>
                        <div>
                            <input type="radio" name="devweb" id="sim" value="sim" />
                            <label for="sim" className="nao">Sim</label>
                        </div>
                        <div>
                            <input type="radio" name="devweb" id="nao" value="nao" />
                            <label for="nao" className="nao">Não</label>
                        </div>
                    </div>
                    <div class="campo">
                        <h5 className="h5-tipo-de-atendimento">
                            Semanas de lactação:
                        </h5>
                        <input
                            type={"number"}
                            className="input-semana-gestacao-Ed"
                            name="semanagesatacao"
                        />
                        <h5 className="h5-tipo-de-atendimento">Deficiência física:</h5>
                        <div>
                            <input type="radio" name="devweb" id="sim" value="sim" />
                            <label for="sim" className="sim">Sim</label>
                        </div>
                        <div>
                            <input type="radio" name="devweb" id="nao" value="nao" />
                            <label for="nao" className="nao">Não</label>
                        </div>
                        <div>
                            <input type="text" name="lactacao" id="lactacao" />
                        </div>
                    </div>
                    <TabelasEducacaoFisica />
                    {/************************  ANEXAR EXAMES ********************* */}
                    <div className="dadosresponsavel">
                        <div className='dadosPaciente'>
                            <h2>
                                ANEXAR EXAMES
                            </h2>
                        </div>
                    </div>
                    <form className="form-flex-geral">
                        <div className="anexar-exame-geral">
                            <div className="anexar-exame-geral-block">
                                <h2 className="tags-flex-geral-title">ANEXAR ARQUIVO<FaCloudUploadAlt className="icon-download-title" /></h2>
                                <div className="tags-flex-geral">
                                    <input className="input-anexar-exame-geral" type={"file"} name="input-anexar-exame-recordatorio" />
                                </div>
                                <div className="button-flex">
                                    <button id="send-the-form"><div className="download-tag"><BsFillPinFill className="icon-pin" />ANEXAR</div></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <ModalSalvarEdFisica />
                </div>
            </div>
        </div>
    );
}


export default FormularioEdFisica;