import React from "react";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import "../styles/Antropometria.css";
import AntropometriaResultados from "../components/AntropometriaResultados";
import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";

const Antropometria = () => {
    const [peso_corporal, setPeso_corporal] = useState();
    const [estatura_metros, setEstatura_metros] = useState();
    const [circunferencia_pescoco, setCircunferencia_pescoco] = useState();
    const [circunferencia_braco, setCircunferencia_braco] = useState();
    const [circunferencia_coxa, setCircunferencia_coxa] = useState();
    const [circunferencia_panturrilha, setCircunferencia_panturrilha] = useState();
    const [dobra_sobescapular, setDobra_sobescapular] = useState();
    const [dobra_tricipal, setDobra_tricipal] = useState();
    const [dobra_suprailica, setDobra_suprailica] = useState();
    const [dobra_abdominal, setDobra_abdominal] = useState();
    const [dobra_coxa_med, setDobra_coxa_med] = useState();
    const [dobra_panturrilha, setDobra_panturrilha] = useState();

    const [id, setID] = useState('');
    const [data_nascimento, setNascimento] = useState('');
    const [selectsexo, setSelectsexo] = useState('');
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
                setNascimento(response[0].data_nascimento);
                setSelectsexo(response[0].sexo);
              }
            }
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);

    return (
        <div className="AnexarExame">
            <Navbar />
            <div className="headerContainer">
                <div className="faixaAzul-certa">
                    <a href={`/paciente?cpf=${searchResults[0]?.cpf}`}>
                        <HiArrowNarrowLeft className="seta" />
                    </a>
                    <h1 className="centralizando">CALCULADORA ANTROPOMÉTRICA</h1>
                    <div className="dtexame2NovoCadastro">
                        <input
                            type={"date"}
                            name="dateexame"
                            className="inputDataEd"
                        />
                    </div>
                </div>
                <div className="form-edfisica-secao-1">
                    <h2 className="h2-percep-qualid-vida">AVALIAÇÃO ANTROPOMÉTRICA E DE COMPOSIÇÃO CORPORAL</h2>
                </div>
                <table className="edFisica13">
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                PESO CORPORAL &#40;KG&#41;
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={peso_corporal}
                                    onChange={(e) => setPeso_corporal(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                ESTATURA &#40;METROS&#41;
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={estatura_metros}
                                    onChange={(e) => setEstatura_metros(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                CIRCUNFERÊNCIA DO PESCOÇO
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={circunferencia_pescoco}
                                    onChange={(e) => setCircunferencia_pescoco(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                CIRCUNFERÊNCIA DO BRAÇO
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={circunferencia_braco}
                                    onChange={(e) => setCircunferencia_braco(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                CIRCUNFERÊNCIA DA COXA
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={circunferencia_coxa}
                                    onChange={(e) => setCircunferencia_coxa(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                CIRCUNFERÊNCIA DA PANTURRILHA
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={circunferencia_panturrilha}
                                    onChange={(e) => setCircunferencia_panturrilha(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                DOBRA SOBESCAPULAR
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={dobra_sobescapular}
                                    onChange={(e) => setDobra_sobescapular(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                DOBRA TRICIPITAL
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={dobra_tricipal}
                                    onChange={(e) => setDobra_tricipal(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                DOBRA SUPRAILÍCA
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={dobra_suprailica}
                                    onChange={(e) => setDobra_suprailica(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                DOBRA ABDOMINAL
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={dobra_abdominal}
                                    onChange={(e) => setDobra_abdominal(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                DOBRA DA COXA MEDIEVAL
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={dobra_coxa_med}
                                    onChange={(e) => setDobra_coxa_med(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo-antropometria">
                                DOBRA DA PANTURRILHA
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resumo">
                                    <input type={"number"} className="input-questao-resumo" name="input-questao1" min='1' max={"7"} 
                                    value={dobra_panturrilha}
                                    onChange={(e) => setDobra_panturrilha(e.target.value)}/>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
                {/* Termino da primeira tabela */}
                <div className="form-edfisica-secao-1">
                    <h2 className="h2-percep-qualid-vida">RESULTADO</h2>
                </div>
                <div className="formulario-razao-de-cho-nutricao">
                    <table className="table-protocolo">
                        <tr>
                            <th>MEDIDA</th>
                            <th>ESCORE Z</th>
                            <th className="classificacao-antropometria">CLASSIFICAÇÃO</th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">PESO</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">ESTATURA</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao">IMC</td>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                    </table>
                </div>

                {/* CLASSIFICAÇÃO CORPORAL POR MEDIDAS ANTROPOMÉTRICAS */}

                <div className="form-edfisica-secao-1">
                    <h2 className="h2-percep-qualid-vida">CLASSIFICAÇÃO CORPORAL POR MEDIDAS ANTROPOMÉTRICAS</h2>
                </div>
                <div className="formulario-razao-de-cho-nutricao">
                    <table className="table-protocolo">
                        <tr>
                            <th>MEDIDA</th>
                            <th>VALORES</th>
                            <th>PERCENTIL</th>
                            <th>z-ESCORE</th>
                            <th className="classificacao-antropometria">CLASSIFICAÇÃO</th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">ÁREA MUSCULAR DO BRAÇO &#40;cm²&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">AMB - ÁREA MUSCULAR DO BRAÇO &#40;cm²&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">AB - ÁREA DO BRAÇO &#40;cm²&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">AGB - ÁREA DE GORDURA DO BRAÇO &#40;cm²&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">%GB GORDURA DO BRAÇO &#40;%&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">AMC - ÁREA MUSCULAR DA COXA &#40;cm²&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">AC - ÁREA DA COXA &#40;cm²&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">AGC - ÁREA DE GORDURA DA COXA &#40;cm²&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">%GC - % GORDURA DA COXA &#40;%&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">IMC &#40;kg/m²&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">IC - &#40;cm²&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">% GORDURA CORPORAL - DOBRAS &#40;%&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">MASSA MAGRA &#40;%&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">GORDURA CORPORAL &#40;KG&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao-antropometria">MASSA MAGRA &#40;cm²&#41;</td>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    <input type={"number"} className="input-questao-condicionamento-antropometria-protocolo" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta-antropometria">
                                <div className="inp-teste-condicionamento-antropometria">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                    </table>
                </div>
                <AntropometriaResultados />
            </div>
        </div>
    );
};

export default Antropometria;
