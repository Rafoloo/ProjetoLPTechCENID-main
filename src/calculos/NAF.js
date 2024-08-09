
import React, { useState, useEffect } from 'react'

const NAF = () => {
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [resultadoNAF, setResultadoNAF] = useState('');
  const [naf, setNaf] = useState('');
  useEffect(() => {
    if (sexo === 'feminino') {
      if (idade >= 3 && idade <= 18 && naf == 1) {
        setResultadoNAF('INATIVO (SEDENTÁRIO)');
      }
    }

  }, [sexo, idade, resultadoNAF]);
  return (
    <>
      <table className="edFisica13">

        <thead classname="thead-ed">
          <tr>
            <th scope="col" className="colunas-corpo-paragrafo">Nível de atividade física &#40;classificação&#41;:

            </th>
            <th className="colunas-corpo-resposta">
              {/* AQUI TEM CÁCULO */}
              <p className="input-questao-resumo"></p>
            </th>
          </tr>
        </thead>
        <tbody classname="tbody-ed">
          <tr>
            <th className="colunas-corpo-paragrafo">
              NAF &#40;escore&#41;:
            </th>
            <th className="colunas-corpo-resposta">
              {/* AQUI TEM CÁCULO */}
              <p className="input-questao-resumo">{resultadoNAF}</p>
            </th>
          </tr>
        </tbody>
      </table>
      <form>
      <label>
          Sexo:
          <input
            type="text"
            value={sexo}
            onChange={e => setSexo(e.target.value)}
          />
        </label>
        <label>
          Idade:
          <input
            type="text"
            value={idade}
            onChange={e => setIdade(e.target.value)}
          />
        </label>
        <label>
          Naf:
          <input
            type="text"
            value={naf}
            onChange={e => setNaf(e.target.value)}
          />
        </label>
      </form>
    </>
  )
}

export default NAF
