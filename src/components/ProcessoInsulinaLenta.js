import React from "react";
import "../styles/Processos-css/ProcessosMedicos.css";
import LogoSaoPaulo from "../assets/LogoSaoPaulo.png";

const ProcessoInsulinaLenta = () => {
  return (
    <div className="div">
      <div className="processo-insulina-lenta-on-line">
        <div className="img-sp">
          <img src={LogoSaoPaulo} width="30%"></img>
        </div>
        <div className="div-label-p">
          <label className="label-secretaria-estado">
            Secretaria de Estado da Saúde de São Paulo
          </label>
          <p className="p-formulario-avaliacao">
            Formulário para Avaliação de Solicitação de Medicamento por Paciente
            de Instituição Pública ou Privada
          </p>
        </div>
      </div>
      <div className="div-identificacao-paciente">
        <p className="div-identificação">1. IDENTIFICAÇÃO DO PACIENTE</p>
        <div className="div-form-identificacao">
          <form>
            <div className="div-nome-completo-identificacao">
              <label className="label-nome-completo-identificacao">
                Nome completo:
              </label>
              <input
                className="input-name-identificacao"
                type={"text"}
                name="input-name-identificacao"
              ></input>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label className="label-sexo-identificacao-paciente">
                  Sexo:
                </label>
                <input
                  type={"radio"}
                  className="input-sexo-processo-insulina-lenta"
                ></input>
                <label className="label-masculino-feminino-insulina-lenta">
                  Masculino
                </label>
                <input
                  type={"radio"}
                  className="input-sexo-processo-insulina-lenta"
                ></input>
                <label className="label-masculino-feminino-insulina-lenta">
                  Feminino
                </label>
              </div>
              <div>
                <label>Data de Nascimento:</label>
                <input
                  type={"date"}
                  name="date-insulina-lenta"
                  className="input-date-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>CPF:</label>
                <input
                  type={"number"}
                  className="input-cpf-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>RG:</label>
                <input
                  type={"number"}
                  className="input-cpf-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>CNS:</label>
                <input
                  type={"text"}
                  className="input-CNS-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Endereço:</label>
                <input
                  type={"text"}
                  className="endereco-input-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>N°:</label>
                <input
                  type={"number"}
                  className="numero-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Complemento:</label>
                <input
                  type={"text"}
                  className="complemento-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Bairro:</label>
                <input
                  type={"text"}
                  className="bairro-input-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>Município:</label>
                <input
                  type={"text"}
                  className="bairro-input-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>UF:</label>
                <input
                  type={"text"}
                  className="UF-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>CEP:</label>
                <input
                  type={"number"}
                  className="CEP-input-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>DDD:</label>
                <input
                  type={"number"}
                  className="DDD-input-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>Telefone&#40;s&#41;</label>
                <input
                  type={"number"}
                  className="numero-telefone-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Email:</label>
                <input
                  type={"email"}
                  className="email-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Possui Plano de Saúde:</label>
                <input
                  type={"radio"}
                  name="radio-plano-saude-insulina-lenta"
                  className="input-sexo-processo-insulina-lenta"
                ></input>
                <label>Não</label>
                <input
                  type={"radio"}
                  name="radio-plano-saude-insulina-lenta"
                  className="input-sexo-processo-insulina-lenta"
                ></input>
                <label>Sim</label>
                <label className="n">Qual:</label>
                <input
                  type={"text"}
                  className="input-qual-plano-saude-insulina-lenta"
                ></input>
              </div>
            </div>
            <p className="div-identificação">2. INFORMAÇÕES SOBRE A DOENÇA</p>
            <div className="div-form-identificação-paciente">
              <div>
                <label>2.1 Doença Principal:</label>
                <input
                  type={"text"}
                  className="doenca-principal-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>CID:</label>
                <input
                  type={"text"}
                  className="CID-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label className="tempo">Há quanto tempo:</label>
                <input
                  type={"text"}
                  className="quanto-tempo-insulina-lenta"
                ></input>
              </div>
            </div>
            <div>
              <div>
                <label>Outro&#40;s&#41; Diagnósticos&#40;s&#41;:</label>
              </div>
              <div>
                <textarea className="text-area-outros-diagnostico"></textarea>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>
                  2.2 Casos Oncológicos: Anexar cópia do anatomopatológico e,
                  quando aplicável, PSA ou imunohistoquímica.
                </label>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Informar o estadiamento clínico TNM aplicável:</label>
                <input type={"text"} className="TNM-insulina-lenta"></input>
              </div>
            </div>
            <div>
              <div>
                <label>
                  2.3 Informar datas e resultados dos exames complementares
                  relevantes &#40;anexar cópia&#41;:
                </label>
              </div>
              <div>
                <textarea className="text-area-outros-diagnostico"></textarea>
              </div>
            </div>
            <p className="div-identificação">3. AVALIAÇÃO DO TRATAMENTO</p>
            <div>
              <div>
                <label>
                  3.1 Informar os tratamentos já realizados em ordem
                  cronológica:
                </label>
              </div>
              <div>
                <textarea className="text-area-outros-diagnostico"></textarea>
              </div>
            </div>
            <div>
              <div>
                <label>3.2 Descrever o atual planejamento terapêutico:</label>
              </div>
              <div>
                <textarea className="text-area-outros-diagnostico"></textarea>
              </div>
            </div>
            <div>
              <div>
                <label>3.3 Informar a meta terapêutica proposta:</label>
              </div>
              <div>
                <textarea className="text-area-outros-diagnostico"></textarea>
              </div>
            </div>
            <div>
              <div>
                <label>
                  3.4 Informar como se dará o acompanhamento da resposta
                  terapêutica e a frequência da avaliação:
                </label>
              </div>
              <div>
                <textarea className="text-area-outros-diagnostico"></textarea>
              </div>
            </div>
            <p className="div-identificação">4. MEDICAMENTO SOLICITADO</p>
            <div>
              <div>
                <label>Denominação genérica / Dosagem:</label>
              </div>
              <div>
                <textarea className="text-area-outros-diagnostico"></textarea>
              </div>
            </div>
            <div>
              <div>
                <label>
                  Via da administração / Posologia / Duração do tratamento:
                </label>
              </div>
              <div>
                <textarea className="text-area-outros-diagnostico"></textarea>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Peso:</label>
                <input type={"number"} className="peso-insulina-lenta"></input>
                <label>Kg</label>
              </div>
              <div>
                <label>Altura:</label>
                <input
                  type={"number"}
                  className="altura-insulina-lenta"
                ></input>
                <label className="cm">cm</label>
              </div>
            </div>
            <p className="div-identificação">
              5. IDENTIFICAÇÃO DA INSTITUIÇÃO E MÉDICO SOLICITANTE
            </p>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Nome da instituição de saúde:</label>
                <input
                  type={"text"}
                  className="nome-instituicao-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>CNES:</label>
                <input type={"number"} className="CNES-insulina-lenta"></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Endereço:</label>
                <input
                  type={"text"}
                  className="endereco-input-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>N°:</label>
                <input
                  type={"number"}
                  className="numero-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Complemento:</label>
                <input
                  type={"text"}
                  className="complemento-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Bairro:</label>
                <input
                  type={"text"}
                  className="bairro-input-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>Município:</label>
                <input
                  type={"text"}
                  className="bairro-input-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>UF:</label>
                <input
                  type={"text"}
                  className="UF-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>CEP:</label>
                <input
                  type={"number"}
                  className="CEP-input-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>DDD:</label>
                <input
                  type={"number"}
                  className="DDD-input-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>Telefone&#40;s&#41;</label>
                <input
                  type={"number"}
                  className="numero-telefone-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Nome do médico solicitante:</label>
                <input
                  type={"text"}
                  className="nome-medico-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>CPF:</label>
                <input
                  type={"number"}
                  className="input-cpf-medico-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>CRM N°:</label>
                <input
                  type={"number"}
                  className="input-cpf-medico-insulina-lenta"
                ></input>
              </div>
              <div>
                <label>UF:</label>
                <input
                  type={"number"}
                  className="UF-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Email:</label>
                <input
                  type={"email"}
                  className="email-input-insulina-lenta"
                ></input>
              </div>
            </div>
            <div className="div-form-identificação-paciente">
              <div>
                <label>Data:</label>
                <input
                  type={"date"}
                  className="data-medico-insulina-lenta"
                ></input>
              </div>
              {/* ASSINATURAS */}
            </div>
            <p className="div-identificação">6. USO RESTRITO DA SES/SP</p>
            <div>
              <textarea className="text-area-outros-diagnostico"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProcessoInsulinaLenta;
