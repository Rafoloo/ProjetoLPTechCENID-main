import React, { useState, useEffect } from 'react';

const ClassificacaoFlexibilidade = () => {
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [flex, setFlex] = useState('');
  const [score, setScore] = useState('');


  useEffect(() => {
    if (sex === 'masculino') {
      // COMPARAÇÃO ENTRE 07 A 09 ANOS MASCULINO
      if (age >= 7 && age <= 9 && flex < 25) {
        setScore('Muito Fraco');
      } else if (age >= 7 && age <= 9 && flex >= 25 && flex <= 28) {
        setScore('Fraco');
      } else if (age >= 7 && age <= 9 && flex >= 29 && flex <= 33) {
        setScore('Razoável');
      } else if (age >= 7 && age <= 9 && flex >= 34 && flex <= 37) {
        setScore('Bom');
      } else if (age >= 7 && age <= 9 && flex >= 38 && flex <= 49) {
        setScore('Muito Bom');
      } else if (age >= 7 && age <= 9 && flex >= 50) {
        setScore('Excelência');
        // COMPARAÇÃO 10 ANOS 
      } else if (age === 10 && flex < 25) {
        setScore('Muito Fraco');
      } else if (age === 10 && flex >= 25 && flex <= 28) {
        setScore('Fraco');
      } else if (age === 10 && flex >= 29 && flex <= 33) {
        setScore('Razoável');
      } else if (age === 10 && flex >= 34 && flex <= 38) {
        setScore('Bom');
      } else if (age === 10 && flex >= 39 && flex <= 49) {
        setScore('Muito Bom');
      } else if (age === 10 && flex >= 50) {
        setScore('Excelência');
      }
      // COMPARAÇÃO 11 ANOS
      else if (age === 11 && flex < 25) {
        setScore('Muito Fraco');
      } else if (age === 11 && flex >= 25 && flex <= 29) {
        setScore('Fraco');
      } else if (age === 11 && flex >= 30 && flex <= 33) {
        setScore('Razoável');
      } else if (age === 11 && flex >= 34 && flex <= 38) {
        setScore('Bom');
      } else if (age === 11 && flex >= 39 && flex <= 49) {
        setScore('Muito Bom');
      } else if (age === 11 && flex >= 50) {
        setScore('Excelência');
      }
      // COMPARAÇÃO 12 E 13 ANOS
      if (age >= 12 && age <= 13 && flex < 25) {
        setScore('Muito Fraco');
      } else if (age === 12 && age === 13 && flex >= 25 && flex <= 29) {
        setScore('Fraco');
      } else if (age === 12 && age === 13 && flex >= 30 && flex <= 34) {
        setScore('Razoável');
      } else if (age === 12 && age === 13 && flex >= 35 && flex <= 38) {
        setScore('Bom');
      } else if (age === 12 && age === 13 && flex >= 39 && flex <= 49) {
        setScore('Muito Bom');
      } else if (age === 12 && age === 13 && flex >= 50) {
        setScore('Excelência');
      }
      // COMPARAÇÃO 14 E 15 ANOS 
      if (age >= 14 && age <= 15 && flex < 25) {
        setScore('Muito Fraco');
      } else if (age >= 14 && age <= 15 && flex >= 25 && flex <= 29) {
        setScore('Fraco');
      } else if (age >= 14 && age <= 15 && flex >= 30 && flex <= 34) {
        setScore('Razoável');
      } else if (age >= 14 && age <= 15 && flex >= 35 && flex <= 39) {
        setScore('Bom');
      } else if (age >= 14 && age <= 15 && flex >= 40 && flex <= 49) {
        setScore('Muito Bom');
      } else if (age >= 14 && age <= 15 && flex >= 50) {
        setScore('Excelência');
      }
      // COMPARAÇÃO 16 E 17 ANOS
      if (age >= 16 && age <= 17 && flex < 25) {
        setScore('Muito Fraco');
      } else if (age >= 16 && age <= 17 && flex >= 25 && flex <= 29) {
        setScore('Fraco');
      } else if (age >= 16 && age <= 17 && flex >= 30 && flex <= 35) {
        setScore('Razoável');
      } else if (age >= 16 && age <= 17 && flex >= 36 && flex <= 40) {
        setScore('Bom');
      } else if (age >= 16 && age <= 17 && flex >= 41 && flex <= 49) {
        setScore('Muito Bom');
      } else if (age >= 16 && age <= 17 && flex >= 50) {
        setScore('Excelência');
      }
      // COMPARAÇÃO 18 E 29 ANOS
      if (age >= 18 && age <= 29 && flex <= 13) {
        setScore('Muito baixa');
      } else if (age >= 18 && age <= 29 && flex >= 14 && flex <= 18) {
        setScore('Baixa');
      } else if (age >= 18 && age <= 29 && flex >= 19 && flex <= 22) {
        setScore('Bom');
      } else if (age >= 18 && age <= 29 && flex >= 23 && flex <= 28) {
        setScore('Muito Bom');
      } else if (age >= 18 && age <= 29 && flex >= 29) {
        setScore('Excelência');
      }
      // COMPARAÇÃO ENTRE 30 A 39 ANOS
      if (age >= 30 && age <= 39 && flex <= 11) {
        setScore('Muito baixa');
      } else if (age >= 30 && age <= 39 && flex >= 12 && flex <= 16) {
        setScore('Baixa');
      } else if (age >= 30 && age <= 39 && flex >= 17 && flex <= 21) {
        setScore('Bom');
      } else if (age >= 30 && age <= 39 && flex >= 22 && flex <= 26) {
        setScore('Muito Bom');
      } else if (age >= 30 && age <= 39 && flex >= 27) {
        setScore('Excelência');
      }
      // COMPARAÇÃO ENTRE 40 A 49 ANOS
      if (age >= 40 && age <= 49 && flex <= 6) {
        setScore('Muito baixa');
      } else if (age >= 40 && age <= 49 && flex >= 7 && flex <= 12) {
        setScore('Baixa');
      } else if (age >= 40 && age <= 49 && flex >= 13 && flex <= 17) {
        setScore('Bom');
      } else if (age >= 40 && age <= 49 && flex >= 18 && flex <= 23) {
        setScore('Muito Bom');
      } else if (age >= 40 && age <= 49 && flex >= 24) {
        setScore('Excelência');
      }
      // COMPARAÇÃO ENTRE 50 A 59 ANOS
      if (age >= 50 && age <= 59 && flex <= 4) {
        setScore('Muito baixa');
      } else if (age >= 50 && age <= 59 && flex >= 5 && flex <= 12) {
        setScore('Baixa');
      } else if (age >= 50 && age <= 59 && flex >= 13 && flex <= 16) {
        setScore('Bom');
      } else if (age >= 50 && age <= 59 && flex >= 17 && flex <= 23) {
        setScore('Muito Bom');
      } else if (age >= 50 && age <= 59 && flex >= 24) {
        setScore('Excelência');
      }
      // COMPARAÇÃO ENTRE 50 A 59 ANOS
      if (age >= 60 && age <= 69 && flex <= 3) {
        setScore('Muito baixa');
      } else if (age >= 60 && age <= 69 && flex >= 4 && flex <= 8) {
        setScore('Baixa');
      } else if (age >= 60 && age <= 69 && flex >= 9 && flex <= 13) {
        setScore('Bom');
      } else if (age >= 60 && age <= 69 && flex >= 14 && flex <= 21) {
        setScore('Muito Bom');
      } else if (age >= 60 && age <= 69 && flex >= 22) {
        setScore('Excelência');
      }
    };

    // FAZER APARTIR DAQUI O CÁLCULO DAS MULHERES
    if (sex === 'feminino') {
      // COMPARAÇÃO 7 ANOS FEMININO
      if (age === 7 && flex < 26) {
        setScore('Muito Fraco');
      } else if (age === 7 && flex >= 26 && flex <= 29) {
        setScore('Fraco');
      } else if (age === 7 && flex >= 30 && flex <= 33) {
        setScore('Razoável');
      } else if (age === 7 && flex >= 34 && flex <= 37) {
        setScore('Bom');
      } else if (age === 7 && flex >= 38 && flex <= 49) {
        setScore('Muito Bom');
      } else if (age === 7 && flex >= 50) {
        setScore('Excelência');
      }
      // COMPARAÇÃO ENTRE 08 E 09 ANOS FEMININO
      if (age >= 8 && age <= 9 && flex < 26) {
        setScore('Muito Fraco');
      } else if (age >= 8 && age <= 9 && flex >= 26 && flex <= 29) {
        setScore('Fraco');
      } else if (age >= 8 && age <= 9 && flex >= 30 && flex <= 34) {
        setScore('Razoável');
      } else if (age >= 8 && age <= 9 && flex >= 35 && flex <= 38) {
        setScore('Bom');
      } else if (age >= 8 && age <= 9 && flex >= 39 && flex <= 49) {
        setScore('Muito Bom');
      } else if (age >= 8 && age <= 9 && flex >= 50) {
        setScore('Excelência');
      }
      // COMPARAÇÃO ENTRE 10 E 11 ANOS FEMININO
      if (age >= 10 && age <= 11 && flex < 26) {
        setScore('Muito Fraco');
      } else if (age >= 10 && age <= 11 && flex >= 26 && flex <= 30) {
        setScore('Fraco');
      } else if (age >= 10 && age <= 11 && flex >= 31 && flex <= 35) {
        setScore('Razoável');
      } else if (age >= 10 && age <= 11 && flex >= 36 && flex <= 39) {
        setScore('Bom');
      } else if (age >= 10 && age <= 11 && flex >= 40 && flex <= 49) {
        setScore('Muito Bom');
      } else if (age >= 10 && age <= 11 && flex >= 50) {
        setScore('Excelência');
      }
      // COMPARAÇÃO 12 E 13 ANOS
      if (age >= 12 && age <= 13 && flex < 26) {
        setScore('Muito Fraco');
      } else if (age >= 12 && age <= 13 && flex >= 26 && flex <= 30) {
        setScore('Fraco');
      } else if (age >= 12 && age <= 13 && flex >= 31 && flex <= 36) {
        setScore('Razoável');
      } else if (age >= 12 && age <= 13 && flex >= 37 && flex <= 41) {
        setScore('Bom');
      } else if (age >= 12 && age <= 13 && flex >= 42 && flex <= 49) {
        setScore('Muito Bom');
      } else if (age >= 12 && age <= 13 && flex >= 50) {
        setScore('Excelência');
      }
      // COMPARAÇÃO 14 A 17 ANOS 
      if (age >= 14 && age <= 17 && flex < 26) {
        setScore('Muito Fraco');
      } else if (age >= 14 && age <= 17 && flex >= 26 && flex <= 30) {
        setScore('Fraco');
      } else if (age >= 14 && age <= 17 && flex >= 31 && flex <= 36) {
        setScore('Razoável');
      } else if (age >= 14 && age <= 17 && flex >= 37 && flex <= 42) {
        setScore('Bom');
      } else if (age >= 14 && age <= 17 && flex >= 43 && flex <= 49) {
        setScore('Muito Bom');
      } else if (age >= 14 && age <= 17 && flex >= 50) {
        setScore('Excelência');
      }
      // COMPARAÇÃO 18 E 29 ANOS
      if (age >= 18 && age <= 29 && flex <= 16) {
        setScore('Muito baixa');
      } else if (age >= 18 && age <= 29 && flex >= 17 && flex <= 21) {
        setScore('Baixa');
      } else if (age >= 18 && age <= 29 && flex >= 22 && flex <= 25) {
        setScore('Bom');
      } else if (age >= 18 && age <= 29 && flex >= 26 && flex <= 29) {
        setScore('Muito Bom');
      } else if (age >= 18 && age <= 29 && flex >= 30) {
        setScore('Excelência');
      }
      // COMPARAÇÃO ENTRE 30 A 39 ANOS
      if (age >= 30 && age <= 39 && flex <= 15) {
        setScore('Muito baixa');
      } else if (age >= 30 && age <= 39 && flex >= 16 && flex <= 20) {
        setScore('Baixa');
      } else if (age >= 30 && age <= 39 && flex >= 21 && flex <= 24) {
        setScore('Bom');
      } else if (age >= 30 && age <= 39 && flex >= 25 && flex <= 29) {
        setScore('Muito Bom');
      } else if (age >= 30 && age <= 39 && flex >= 30) {
        setScore('Excelência');
      }
      // COMPARAÇÃO ENTRE 40 A 49 ANOS
      if (age >= 40 && age <= 49 && flex <= 13) {
        setScore('Muito baixa');
      } else if (age >= 40 && age <= 49 && flex >= 14 && flex <= 18) {
        setScore('Baixa');
      } else if (age >= 40 && age <= 49 && flex >= 19 && flex <= 22) {
        setScore('Bom');
      } else if (age >= 40 && age <= 49 && flex >= 23 && flex <= 26) {
        setScore('Muito Bom');
      } else if (age >= 40 && age <= 49 && flex >= 27) {
        setScore('Excelência');
      }
      // COMPARAÇÃO ENTRE 50 A 59 ANOS
      if (age >= 50 && age <= 59 && flex <= 13) {
        setScore('Muito baixa');
      } else if (age >= 50 && age <= 59 && flex >= 14 && flex <= 18) {
        setScore('Baixa');
      } else if (age >= 50 && age <= 59 && flex >= 19 && flex <= 21) {
        setScore('Bom');
      } else if (age >= 50 && age <= 59 && flex >= 22 && flex <= 27) {
        setScore('Muito Bom');
      } else if (age >= 50 && age <= 59 && flex >= 28) {
        setScore('Excelência');
      }
      // COMPARAÇÃO ENTRE 60 A 69 ANOS
      if (age >= 60 && age <= 69 && flex <= 11) {
        setScore('Muito baixa');
      } else if (age >= 60 && age <= 69 && flex >= 12 && flex <= 15) {
        setScore('Baixa');
      } else if (age >= 60 && age <= 69 && flex >= 16 && flex <= 19) {
        setScore('Bom');
      } else if (age >= 60 && age <= 69 && flex >= 20 && flex <= 23) {
        setScore('Muito Bom');
      } else if (age >= 60 && age <= 69 && flex >= 24) {
        setScore('Excelência');
      }
    };
  }, [sex, age, flex]);

  return (
    <div>
      <div className="formulario-razao-de-cho-nutricao">
        <table className="table-flexibilidade">
          <tr>
            <th>Distância &#40;cm&#41;</th>
            <th>Classificação</th>
          </tr>
          <tr>
            <th className="colunas-corpo-resposta">
              <div className="inp-teste-flexibilidade">
                <input
                  type="number"
                  value={flex}
                  className="input-questao-flexibilidade"
                  name="input-questao1"
                  onChange={e => setFlex(e.target.value)}
                />
              </div>
            </th>
            <th className="colunas-corpo-resposta">
              <div className="inp-teste-flexibilidade-paragrafo">
                {/* CÁLCULO */}
                <p className='score-flex'>{score}</p>
              </div>
            </th>
          </tr>
        </table>
      </div>
      <form>
        <label>
          Sexo:
          <input
            type="text"
            value={sex}
            onChange={e => setSex(e.target.value)}
          />
        </label>
        <label>
          Idade:
          <input
            type="text"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};


export default ClassificacaoFlexibilidade;