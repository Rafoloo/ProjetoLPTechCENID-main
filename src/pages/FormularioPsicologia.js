import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import "../styles/FormularioPsicologia.css";
import ModalSalvarPsicologia from "../components/ModalSalvarPsicologia";
import { useApi } from "../hooks/useApi";
import { useState, useEffect } from "react";

const FormularioPsicologia = () => {
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
            <h2 className="centralizando">AVALIAÇÃO DE PSICOLOGIA</h2>
            <div className="dtexame2NovoCadastro">
              <input type={"date"} name="dateexame" className="inputDataEd" />
            </div>
          </div>
        </div>
        <div className="avaliacao-dos-questionarios">
          <h3 className="h3-avaliacao-psicologica">
            A avaliação dos questinários de "Ansiedade e Depressão" e da análise
            da "Qualidade de Vida" deverá ser realizada com intervalo mínimo de
            4 meses e máximo de 12 meses.
          </h3>
        </div>
        <div className="nome-paciente-formulario-psico">
          <h3 className="h3-nome-paciente-form-psico">NOME DO PACIENTE:</h3>
          <input
            className="input-nome-paciente-form-psico"
            type={"text"}
          ></input>
        </div>
        <div className="form-nutri-formulario">
          <h2 className="h2-percep-qualid-vida">
            PERCEPÇÃO DE QUALIDADE DE VIDA
          </h2>
          <h2 className="h2-percep-qualid-vida2">
            Para as questões abaixo responda como você se sente considerando a
            escala de 1 a 5
          </h2>
        </div>
        <div className="form-perc-vida-psico-escala1">
          <h2 className="h2-percep-qualid-vida2">
            1 - discordo totalmente; 2 - discordo; 3 - não concordo nem
            discordo; 4 - concordo; 5 - concordo totalmente
          </h2>
        </div>
        <div className="form-perc-vida-psico-escala1-cor-diferente">
          <h2 className="h2-percep-qualid-vida2">
            Os itens 12, 23 e 27 são invertidos para uma interpretação correta,
            como segue abaixo
          </h2>
        </div>
        <div className="form-perc-vida-psico-escala1">
          <h2 className="h2-percep-qualid-vida2">
            1 - concordo totalmente; 2 - concordo; 3 - não concordo e nem
            discordo; 4 - discordo; 5 - discordo totalmente
          </h2>
        </div>
        <div className="div-tabela-percp">
          <table className="tabela-percp-qualidade-vida">
            <tr>
              <th className="th-questao">QUESTÃO</th>
              <th className="th-resposta">RESPOSTA</th>
            </tr>
            <tr>
              <td className="th-questao1">
                1. Ter diabetes dificulta minhas relações sociais &#40;amigos,
                colegas, parceiros, etc&#41;.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao1"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                {" "}
                2. Sinto-me diferente por ter diabetes.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao2"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                3. Ter que aplicar insulina é um problema diário para mim.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao3"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                4. Ter diabetes limita minha vida social e de lazer &#40;comer
                fora de casa, comemorações, viagens, etc&#41;.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao4"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                5. Minha vida mudou por eu ter diabetes.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao5"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                6. Ter diabetes dificulta as relações com minha família.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao6"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1-color">
                7. Sinto-me limitado&#40;a&#41; no trabalho ou escola por ter
                diabetes.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao7"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                {" "}
                8. Tenho alguma&#40;s&#41; complicação&#40;ções&#41; do diabetes
                que piora&#40;m&#41; a minha qualidade de vida porque me
                limita&#40;m&#41; fisicamente.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao8"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                9. O dia a dia com diabetes me representa um estresse a mais.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao9"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                10. Fico preocupado&#40;a&#41; que os outros saibam que tenho
                diabetes.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao10"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1-color">
                11. Minha vida sexual está limitada por eu ter diabetes.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao11"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1-color-back">
                12. Tendo diabetes posso levar uma vida normal.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao12"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                13. Estou satisfeito&#40;a&#41; com o envolvimento que tenho no
                dia a dia no autocuidado do meu diabetes.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao13"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                14. O nível de formação/conhecimento que tenho sobre meu
                diabetes me ajuda a ter um bom controle.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao14"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                15. O conhecimento que tenho em contagem de carboidratos
                proporciona flexibilidade na minha alimentação.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao15"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                16. Estou satisfeito&#40;a&#41; com a forma que levo meu
                diabetes.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao16"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                17. Estou motivado&#40;a&#41; no autocuidado do meu diabetes.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao17"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                18. Ajusto a dose de insulina de acordo com a minha alimentação
                para ter um bom controle.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao18"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                {" "}
                19. Estou satisfeito&#40;a&#41; com o tratamento
                farmacológico/insulina que sigo, porque me facilita o controle
                do diabetes.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao19"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                20. Estou satistfeito&#40;a&#41; com meu atual controle
                glicêmico &#40;hemoglobina glicada/tempo no alvo&#41;.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao20"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                21. O controle do meu diabetes está integrado em minha vida
                cotidiana com normalidade.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao21"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                22. Considero que tenho flexibilidade e liberdade na minha
                alimentação embora eu tenha diabetes.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao22"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1-color-back">
                23. É muito difícil fazer os controles &#40;glicemias&#41;
                diariamente.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao23"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                24. Descanso bem e meu sono noturno é bom.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao24"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">25. Estou bem fisicamente.</td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao25"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">26. Estou bem psicologicamente.</td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao26"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1-color-back">
                27. Tenho outra&#40;s&#41; doença&#40;s&#41; em consequência do
                diabetes que piora&#40;m&#41; minha qualidade de vida.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao27"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                28. Estou satisfeito&#40;a&#41; com o tempo que dedico para
                fazer atividade física.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao28"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                29. Considero que, em geral, minha qualidade de vida é boa.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao29"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                30. Tenho medo de ter hipoglicemias &#40;baixas de açucar no
                sangue&#41;.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao30"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                31. Com frequência me preocupa ter uma hipoglicemia.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao31"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                32. Fico preocupado&#40;a&#41; quando tenho glicemia alta.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao32"
                ></input>
              </td>
            </tr>
            <tr>
              <td className="th-questao1">
                33. Com frequência fico preocupado&#40;a&#41; em ter futuras
                complicações pelo diabetes.
              </td>
              <td className="th-resposta1">
                <input
                  type={"number"}
                  className="input-questao1"
                  name="input-questao33"
                ></input>
              </td>
            </tr>
          </table>
        </div>
        <div className="form-nutri-formulario">
          <h2 className="h2-percep-qualid-vida-razao-cho">
            PERCEPÇÃO DE QUALIDADE DE VIDA - RESULTADOS
          </h2>
        </div>
        <div className="formulario-razao-de-cho-nutricao">
          <table className="razao-cho">
            <tr>
              <th className="dominio-escore-pontu">DOMÍNIO</th>
              <th className="dominio-escore-pontu">ESCORE</th>
              <th className="dominio-escore-pontu">VARIAÇÃO DA PONTUAÇÃO</th>
            </tr>
            <tr>
              <td className="tr-teste-razao-cho">
                Interferência com a vida &#40;menor melhor&#41;
              </td>
              <td className="tr-teste-razao-cho"></td>
              <td className="tr-teste-razao-cho">12 a 50 pontos</td>
            </tr>
            <tr>
              <td className="tr-teste-razao-cho">
                Autocuidado &#40;maior melhor&#41;
              </td>
              <td className="tr-teste-razao-cho"></td>
              <td className="tr-teste-razao-cho">11 a 45 pontos</td>
            </tr>
            <tr>
              <td className="tr-teste-razao-cho">
                Bem estar &#40;maior melhor&#41;
              </td>
              <td className="tr-teste-razao-cho"></td>
              <td className="tr-teste-razao-cho">6 a 30 pontos</td>
            </tr>
            <tr>
              <td className="tr-teste-razao-cho">
                Preocupação com a doença &#40;menor melhor&#41;
              </td>
              <td className="tr-teste-razao-cho"></td>
              <td className="tr-teste-razao-cho">5 a 25 pontos</td>
            </tr>
            <tr>
              <td className="tr-teste-razao-cho">
                Domínios positivos &#40;autocuidado e bem estar&#41; &#40;maior
                melhor&#41;
              </td>
              <td className="tr-teste-razao-cho"></td>
              <td className="tr-teste-razao-cho">17 a 75 pontos</td>
            </tr>
            <tr>
              <td className="tr-teste-razao-cho">
                Domínios negativos &#40;interferência com a vida e preocupação
                com a doença&#41; &#40;maior melhor&#41;
              </td>
              <td className="tr-teste-razao-cho"></td>
              <td className="tr-teste-razao-cho">17 a 75 pontos</td>
            </tr>
          </table>
        </div>

        <div className="escala-tudo">
          <div className="escala-ansiedade-depressao">
            <h4 className="h4-Diagnostico-texto">
              Escala de Ansiedade e Depressão &#40;HADS&#41;
            </h4>
          </div>
          <div className="texto-escala">
            <p className="p-texto-escala">
              Este questionário pretende aferir o seu nível de ansiedade e
              depressão, avaliando como se tem sentido na última semana. Tenha
              em consideração que não há respostas certas ou erradas. Por favor,
              responda todas as perguntas assinalando as respostas com{" "}
              <strong>X</strong>. Não demore muito tempo a pensar nas respostas,
              a sua reação imediata a cada questão será provavelmente mais
              correta do que uma resposta ponderada.
            </p>
          </div>
          <div className="div-tabela-dms-familia">
            <table className="table-dms-familia">
              <tr>
                <th className="th-dms-questao">Questão</th>
                <th className="th-dms-questao">Opção</th>
                <th className="th-dms-questao">Pontuação equivalente</th>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  1. Sinto-me tenso&#40;a&#41; ou nervoso&#40;a&#41;
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-1"
                    ></input>
                    <p className="p-nao-dms">Quase sempre</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-1"
                    ></input>
                    <p className="p-nao-dms">Muitas vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-1"
                    ></input>
                    <p className="p-nao-dms">Por vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-1"
                    ></input>
                    <p className="p-nao-dms">Nunca</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  2. Ainda sinto prazer nas coisas de que cosmutava gostar
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-2"
                    ></input>
                    <p className="p-nao-dms">Tanto como antes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-2"
                    ></input>
                    <p className="p-nao-dms">Não tanto como agora</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-2"
                    ></input>
                    <p className="p-nao-dms">Só um pouco</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-2"
                    ></input>
                    <p className="p-nao-dms">Quase nada</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  3. Tenho uma sensação de medo, como se algo terrível estivesse
                  para acontecer
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-3"
                    ></input>
                    <p className="p-nao-dms">Sim e muito forte</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-3"
                    ></input>
                    <p className="p-nao-dms">Sim, mas não muito forte</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-3"
                    ></input>
                    <p className="p-nao-dms">Um pouco, mas não me aflige</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-3"
                    ></input>
                    <p className="p-nao-dms">De modo algum</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  4. Sou capaz de rir e ver o lado divertido das coisas
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-4"
                    ></input>
                    <p className="p-nao-dms">Tanto como antes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-4"
                    ></input>
                    <p className="p-nao-dms">Não tanto como antes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-4"
                    ></input>
                    <p className="p-nao-dms">Muito menos agora</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-4"
                    ></input>
                    <p className="p-nao-dms">Nunca</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  5. Tenho a cabeça cheia de preocupações
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-5"
                    ></input>
                    <p className="p-nao-dms">A maior parte do tempo</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-5"
                    ></input>
                    <p className="p-nao-dms">Muitas vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-5"
                    ></input>
                    <p className="p-nao-dms">Por vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-5"
                    ></input>
                    <p className="p-nao-dms">Quase nunca</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  6. Sinto-me animado&#40;a&#41;
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-6"
                    ></input>
                    <p className="p-nao-dms">Nunca</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-6"
                    ></input>
                    <p className="p-nao-dms">Poucas vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-6"
                    ></input>
                    <p className="p-nao-dms">De vez em quanto</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-6"
                    ></input>
                    <p className="p-nao-dms">Quase sempre</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  7. Sou capaz de estar descontraidamente sentado&#40;a&#41; e
                  sentir-me relaxado&#40;a&#41;
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-7"
                    ></input>
                    <p className="p-nao-dms">Quase sempre</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-7"
                    ></input>
                    <p className="p-nao-dms">Muitas vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-7"
                    ></input>
                    <p className="p-nao-dms">Por vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-7"
                    ></input>
                    <p className="p-nao-dms">Nunca</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  8. Sinto-me mais lento&#40;a&#41;, como se fizesse as coisas
                  mais devagar
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-8"
                    ></input>
                    <p className="p-nao-dms">Quase sempre</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-8"
                    ></input>
                    <p className="p-nao-dms">Muitas vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-8"
                    ></input>
                    <p className="p-nao-dms">Por vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-8"
                    ></input>
                    <p className="p-nao-dms">Nunca</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  9. Fico de tal forma apreensivo&#40;a&#41;/com medo, que até
                  sinto um aperto no estômago
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-9"
                    ></input>
                    <p className="p-nao-dms">Nunca</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-9"
                    ></input>
                    <p className="p-nao-dms">Por vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-9"
                    ></input>
                    <p className="p-nao-dms">Muitas vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-9"
                    ></input>
                    <p className="p-nao-dms">Quase sempre</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  10. Perdi o interesse em cuidar do meu aspecto físico
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-10"
                    ></input>
                    <p className="p-nao-dms">Completamente</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-10"
                    ></input>
                    <p className="p-nao-dms">Não dou a atenção que devia</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-10"
                    ></input>
                    <p className="p-nao-dms">Talvez cuide menos que antes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-10"
                    ></input>
                    <p className="p-nao-dms">
                      Tenho o mesmo interesse de sempre
                    </p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  11. Sinto-me de tal forma inquieto&#40;a&#41; que não consigo
                  estar parado&#40;a&#41;
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-11"
                    ></input>
                    <p className="p-nao-dms">Muito</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-11"
                    ></input>
                    <p className="p-nao-dms">Bastante</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-11"
                    ></input>
                    <p className="p-nao-dms">Não muito</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-11"
                    ></input>
                    <p className="p-nao-dms">Nada</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  12. Penso com prazer nas coisas que podem acontecer no futuro
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-12"
                    ></input>
                    <p className="p-nao-dms">Tanto como antes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-12"
                    ></input>
                    <p className="p-nao-dms">Não tanto como antes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-12"
                    ></input>
                    <p className="p-nao-dms">Bastante menos agora</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-12"
                    ></input>
                    <p className="p-nao-dms">Quase nunca</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  13. De repente, tenho sensações de pânico
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-13"
                    ></input>
                    <p className="p-nao-dms">Muitas vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-13"
                    ></input>
                    <p className="p-nao-dms">Bastante vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-13"
                    ></input>
                    <p className="p-nao-dms">Por vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-13"
                    ></input>
                    <p className="p-nao-dms">Nunca</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
              <tr>
                <td className="td-sim-nao-dms">
                  14. Sou capaz de apreciar um bom livro ou um programa de rádio
                  ou televisão
                </td>
                <td className="td-sim-nao-dms">
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-14"
                    ></input>
                    <p className="p-nao-dms">Muitas vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-14"
                    ></input>
                    <p className="p-nao-dms">De vez em quando</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-14"
                    ></input>
                    <p className="p-nao-dms">Poucas vezes</p>
                  </div>
                  <div className="teste-parentesco">
                    <input
                      className="input-dms"
                      type={"radio"}
                      name="name-input-dms-questao-14"
                    ></input>
                    <p className="p-nao-dms">Quase nunca</p>
                  </div>
                </td>
                <td className="td-sim-nao-dms"></td>
              </tr>
            </table>
          </div>
        </div>
        <div className="form-nutri-formulario">
          <h2 className="h2-percep-qualid-vida-razao-cho">
            Análise dos resultados do Escala de Ansiedade e Depressão
            &#40;HADS&#41;
          </h2>
        </div>
        <div className="formulario-razao-de-cho-nutricao">
          <table className="razao-cho">
            <tr>
              <th>Sintomas</th>
              <th>Pontuação</th>
              <th>Sugestão diagnóstica</th>
            </tr>
            <tr>
              <td className="tr-teste-razao-cho">Ansiedade</td>
              <td className="tr-teste-razao-cho"></td>
              <td className="tr-teste-razao-cho">
                0-7 pontos: improvável<br></br>8-11 pontos: possível -
                &#40;questionável ou duvidosa&#41;<br></br>12-21 pontos:
                provável
              </td>
            </tr>
            <tr>
              <td className="tr-teste-razao-cho">Depressão</td>
              <td className="tr-teste-razao-cho"></td>
              <td className="tr-teste-razao-cho">
                0-7 pontos: improvável<br></br>8-11 pontos: possível -
                &#40;questionável ou duvidosa&#41;<br></br>12-21 pontos:
                provável
              </td>
            </tr>
          </table>
        </div>
        <div className="hipotese-nutricional">
          <table className="tabela-ingestao">
            <tr>
              <td className="hipotese-diagnostica">
                HIPÓTESE DIAGNÓSTICA GERAL
              </td>
            </tr>
            <tr>
              <td className="hipotese-diagnostica">
                Apresentação da avaliação clínica em conjunto com a análise da
                percepção de qualidade de vida e escala de ansiedade e
                depressão.
              </td>
            </tr>
            <tr>
              <td className="hipotese-diagnostica">
                <textarea
                  className="hipotese-diagnostica1"
                  placeholder="Apresentação:"
                ></textarea>
              </td>
            </tr>
          </table>
        </div>
        <div className="hipotese-nutricional">
          <table className="tabela-ingestao">
            <tr>
              <td className="hipotese-diagnostica">CONDUTA CLÍNICA</td>
            </tr>
            <tr>
              <td className="hipotese-diagnostica">
                Descrição da conduta clínica e cuidados necessários para o
                tratamento.
              </td>
            </tr>
            <tr>
              <td className="hipotese-diagnostica">
                <textarea
                  className="hipotese-diagnostica1"
                  placeholder="Descreva:"
                ></textarea>
              </td>
            </tr>
          </table>
        </div>
        <ModalSalvarPsicologia />
      </div>
    </div>
  );
};

export default FormularioPsicologia;
