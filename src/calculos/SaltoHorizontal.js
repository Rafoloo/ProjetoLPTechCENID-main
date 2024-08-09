import React, { useState, useEffect } from 'react';

const SaltoHorizontal = () => {
    const [sex, setSex] = useState('');
    const [forcaTronco, setForcaTronco] = useState('');
    const [age, setAge] = useState('');
    const [score, setScore] = useState('');


    useEffect(() => {
        if (sex === 'feminino') {
            // 07 ANOS
            if (age === 7 && forcaTronco < 86) {
                setScore('Muito Baixo');
            } else if (age >= 7 && forcaTronco >= 86 && forcaTronco <= 95) {
                setScore('Baixo');
            } else if (age >= 7 && forcaTronco >= 96 && forcaTronco <= 115) {
                setScore('Mediano');
            } else if (age >= 7 && forcaTronco >= 116 && forcaTronco <= 125) {
                setScore('Bom');
            } else if (age >= 7 && forcaTronco > 125) {
                setScore('Excelente');
                // 08 ANOS 
            } else if (age === 8 && forcaTronco < 95) {
                setScore('Muito Baixo');
            } else if (age === 8 && forcaTronco >= 95 && forcaTronco <= 105) {
                setScore('Baixo');
            } else if (age === 8 && forcaTronco >= 106 && forcaTronco <= 125) {
                setScore('Mediano');
            } else if (age === 8 && forcaTronco >= 126 && forcaTronco <= 136) {
                setScore('Bom');
            } else if (age === 8 && forcaTronco > 136) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 09 ANOS
            else if (age === 9 && forcaTronco < 103) {
                setScore('Muito Baixo');
            } else if (age === 9 && forcaTronco >= 103 && forcaTronco <= 113) {
                setScore('Baixo');
            } else if (age === 9 && forcaTronco >= 114 && forcaTronco <= 134) {
                setScore('Mediano');
            } else if (age === 9 && forcaTronco >= 135 && forcaTronco <= 146) {
                setScore('Bom');
            } else if (age === 9 && forcaTronco > 146) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 10 ANOS
            if (age === 10 && forcaTronco < 110) {
                setScore('Muito Baixo');
            } else if (age === 10 && forcaTronco >= 110 && forcaTronco <= 121) {
                setScore('Baixo');
            } else if (age === 10 && forcaTronco >= 122 && forcaTronco <= 142) {
                setScore('Mediano');
            } else if (age === 10 && forcaTronco >= 143 && forcaTronco <= 154) {
                setScore('Bom');
            } else if (age === 10 && forcaTronco > 154) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 11 ANOS
            if (age === 11 && forcaTronco < 115) {
              setScore('Muito Baixo');
          } else if (age === 11 && forcaTronco >= 115 && forcaTronco <= 127) {
              setScore('Baixo');
          } else if (age === 11 && forcaTronco >= 128 && forcaTronco <= 148) {
              setScore('Mediano');
          } else if (age === 11 && forcaTronco >= 149 && forcaTronco <= 161) {
              setScore('Bom');
          } else if (age === 11 && forcaTronco > 161) {
              setScore('Excelente');
          }
            // COMPARAÇÃO 12 ANOS 
            if (age === 12 && forcaTronco < 120) {
                setScore('Muito Baixo');
            } else if (age === 12 && forcaTronco >= 120 && forcaTronco <= 131) {
                setScore('Baixo');
            } else if (age === 12 && forcaTronco >= 132 && forcaTronco <= 154) {
                setScore('Mediano');
            } else if (age === 12 && forcaTronco >= 155 && forcaTronco <= 166) {
                setScore('Bom');
            } else if (age === 12 && forcaTronco > 166) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 13 ANOS
            if (age === 13 && forcaTronco < 123) {
                setScore('Muito Baixo');
            } else if (age === 13 && forcaTronco >= 123 && forcaTronco <= 135) {
                setScore('Baixo');
            } else if (age === 13 && forcaTronco >= 136 && forcaTronco <= 158) {
                setScore('Mediano');
            } else if (age === 13 && forcaTronco >= 159 && forcaTronco <= 170) {
                setScore('Bom');
            } else if (age === 13 && forcaTronco > 170) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 14 ANOS
            if (age === 14 && forcaTronco < 124) {
                setScore('Muito Baixo');
            } else if (age === 14 && forcaTronco >= 18 && forcaTronco <= 136) {
                setScore('Baixo');
            } else if (age === 14 && forcaTronco >= 137 && forcaTronco <= 160) {
                setScore('Mediano');
            } else if (age === 14 && forcaTronco >= 161 && forcaTronco <= 173) {
                setScore('Bom');
            } else if (age === 14 && forcaTronco > 173) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 15 ANOS
            if (age === 15 && forcaTronco < 17) {
                setScore('Muito Baixo');
            } else if (age === 15 && forcaTronco >= 17 && forcaTronco <= 22) {
                setScore('Baixo');
            } else if (age === 15 && forcaTronco >= 23 && forcaTronco <= 30) {
                setScore('Mediano');
            } else if (age === 15 && forcaTronco >= 31 && forcaTronco <= 36) {
                setScore('Bom');
            } else if (age === 15 && forcaTronco > 36) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 16 ANOS
            if (age === 16 && forcaTronco < 16) {
                setScore('Muito Baixo');
            } else if (age === 16 && forcaTronco >= 16 && forcaTronco <= 20) {
                setScore('Baixo');
            } else if (age === 16 && forcaTronco >= 21 && forcaTronco <= 29) {
                setScore('Mediano');
            } else if (age === 16 && forcaTronco >= 30 && forcaTronco <= 34) {
                setScore('Bom');
            } else if (age === 16 && forcaTronco > 34) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 17 ANOS
            if (age === 17 && forcaTronco < 15) {
                setScore('Muito Baixo');
            } else if (age === 17 && forcaTronco >= 15 && forcaTronco <= 19) {
                setScore('Baixo');
            } else if (age === 17 && forcaTronco >= 20 && forcaTronco <= 27) {
                setScore('Mediano');
            } else if (age === 17 && forcaTronco >= 28 && forcaTronco <= 33) {
                setScore('Bom');
            } else if (age === 17 && forcaTronco > 33) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 18 E 19 ANOS
            if (age >= 18 && age <= 19 && forcaTronco <= 26) {
                setScore('Fraco');
            } else if (age >= 18 && age <= 19 && forcaTronco >= 27 && forcaTronco <= 31) {
                setScore('Abaixo da Média');
            } else if (age >= 18 && age <= 19 && forcaTronco >= 32 && forcaTronco <= 35) {
                setScore('Média');
            } else if (age >= 18 && age <= 19 && forcaTronco >= 36 && forcaTronco <= 41) {
                setScore('Acima da Média');
            } else if (age >= 18 && age <= 19 && forcaTronco > 41) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 20 A 29 ANOS
            if (age >= 20 && age <= 29 && forcaTronco < 21) {
                setScore('Fraco');
            } else if (age >= 20 && age <= 29 && forcaTronco >= 21 && forcaTronco <= 24) {
                setScore('Abaixo da Média');
            } else if (age >= 20 && age <= 29 && forcaTronco >= 25 && forcaTronco <= 30) {
                setScore('Média');
            } else if (age >= 20 && age <= 29 && forcaTronco >= 31 && forcaTronco <= 35) {
                setScore('Acima da Média');
            } else if (age >= 20 && age <= 29 && forcaTronco > 35) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 30 A 39 ANOS
            if (age >= 30 && age <= 39 && forcaTronco < 15) {
                setScore('Fraco');
            } else if (age >= 30 && age <= 39 && forcaTronco >= 15 && forcaTronco <= 19) {
                setScore('Abaixo da Média');
            } else if (age >= 30 && age <= 39 && forcaTronco >= 20 && forcaTronco <= 23) {
                setScore('Média');
            } else if (age >= 30 && age <= 39 && forcaTronco >= 24 && forcaTronco <= 28) {
                setScore('Acima da Média');
            } else if (age >= 30 && age <= 39 && forcaTronco > 28) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 40 A 49 ANOS
            if (age >= 40 && age <= 49 && forcaTronco < 7) {
                setScore('Fraco');
            } else if (age >= 40 && age <= 49 && forcaTronco >= 7 && forcaTronco <= 14) {
                setScore('Abaixo da Média');
            } else if (age >= 40 && age <= 49 && forcaTronco >= 15 && forcaTronco <= 19) {
                setScore('Média');
            } else if (age >= 40 && age <= 49 && forcaTronco >= 20 && forcaTronco <= 24) {
                setScore('Acima da Média');
            } else if (age >= 40 && age <= 49 && forcaTronco > 24) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 50 A 59 ANOS
            if (age >= 50 && age <= 59 && forcaTronco < 3) {
                setScore('Fraco');
            } else if (age >= 50 && age <= 59 && forcaTronco >= 3 && forcaTronco <= 4) {
                setScore('Abaixo da Média');
            } else if (age >= 50 && age <= 59 && forcaTronco >= 5 && forcaTronco <= 11) {
                setScore('Média');
            } else if (age >= 50 && age <= 59 && forcaTronco >= 12 && forcaTronco <= 18) {
                setScore('Acima da Média');
            } else if (age >= 50 && age <= 59 && forcaTronco > 18) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 60 A 69 ANOS
            if (age >= 60 && age <= 69 && forcaTronco < 2) {
                setScore('Fraco');
            } else if (age >= 60 && age <= 69 && forcaTronco >= 2 && forcaTronco <= 3) {
                setScore('Abaixo da Média');
            } else if (age >= 60 && age <= 69 && forcaTronco >= 4 && forcaTronco <= 11) {
                setScore('Média');
            } else if (age >= 60 && age <= 69 && forcaTronco >= 12 && forcaTronco <= 15) {
                setScore('Acima da Média');
            } else if (age >= 60 && age <= 69 && forcaTronco > 15) {
                setScore('Excelente');
            }
        };

        // FAZER APARTIR DAQUI O CÁLCULO DOS HOMENS
        if (sex === 'masculino') {
            // 07 ANOS
            if (age === 7 && forcaTronco < 17) {
                setScore('Muito Baixo');
            } else if (age >= 7 && forcaTronco >= 17 && forcaTronco <= 22) {
                setScore('Baixo');
            } else if (age >= 7 && forcaTronco >= 23 && forcaTronco <= 31) {
                setScore('Mediano');
            } else if (age >= 7 && forcaTronco >= 32 && forcaTronco <= 36) {
                setScore('Bom');
            } else if (age >= 7 && forcaTronco > 36) {
                setScore('Excelente');
                // 08 ANOS 
            } else if (age === 8 && forcaTronco < 20) {
                setScore('Muito Baixo');
            } else if (age === 8 && forcaTronco >= 20 && forcaTronco <= 24) {
                setScore('Baixo');
            } else if (age === 8 && forcaTronco >= 25 && forcaTronco <= 33) {
                setScore('Mediano');
            } else if (age === 8 && forcaTronco >= 34 && forcaTronco <= 38) {
                setScore('Bom');
            } else if (age === 8 && forcaTronco > 38) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 09 ANOS
            else if (age === 9 && forcaTronco < 22) {
                setScore('Muito Baixo');
            } else if (age === 9 && forcaTronco >= 22 && forcaTronco <= 26) {
                setScore('Baixo');
            } else if (age === 9 && forcaTronco >= 27 && forcaTronco <= 34) {
                setScore('Mediano');
            } else if (age === 9 && forcaTronco >= 35 && forcaTronco <= 48) {
                setScore('Bom');
            } else if (age === 9 && forcaTronco > 48) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 10 ANOS
            else if (age === 10 && forcaTronco < 24) {
                setScore('Muito Baixo');
            } else if (age === 10 && forcaTronco >= 24 && forcaTronco <= 28) {
                setScore('Baixo');
            } else if (age === 10 && forcaTronco >= 29 && forcaTronco <= 36) {
                setScore('Mediano');
            } else if (age === 10 && forcaTronco >= 37 && forcaTronco <= 40) {
                setScore('Bom');
            } else if (age === 10 && forcaTronco > 40) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 11 ANOS
            else if (age === 11 && forcaTronco < 26) {
                setScore('Muito Baixo');
            } else if (age === 11 && forcaTronco >= 26 && forcaTronco <= 29) {
                setScore('Baixo');
            } else if (age === 11 && forcaTronco >= 30 && forcaTronco <= 37) {
                setScore('Mediano');
            } else if (age === 11 && forcaTronco >= 38 && forcaTronco <= 42) {
                setScore('Bom');
            } else if (age === 11 && forcaTronco > 42) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 12 ANOS 
            if (age === 12 && forcaTronco < 27) {
                setScore('Muito Baixo');
            } else if (age === 12 && forcaTronco >= 27 && forcaTronco <= 30) {
                setScore('Baixo');
            } else if (age === 12 && forcaTronco >= 31 && forcaTronco <= 38) {
                setScore('Mediano');
            } else if (age === 12 && forcaTronco >= 39 && forcaTronco <= 43) {
                setScore('Bom');
            } else if (age === 12 && forcaTronco > 43) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 13 ANOS
            if (age === 13 && forcaTronco < 28) {
                setScore('Muito Baixo');
            } else if (age === 13 && forcaTronco >= 28 && forcaTronco <= 31) {
                setScore('Baixo');
            } else if (age === 13 && forcaTronco >= 32 && forcaTronco <= 40) {
                setScore('Mediano');
            } else if (age === 13 && forcaTronco >= 41 && forcaTronco <= 44) {
                setScore('Bom');
            } else if (age === 13 && forcaTronco > 44) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 14 ANOS
            if (age === 14 && forcaTronco < 28) {
                setScore('Muito Baixo');
            } else if (age === 14 && forcaTronco >= 28 && forcaTronco <= 32) {
                setScore('Baixo');
            } else if (age === 14 && forcaTronco >= 33 && forcaTronco <= 41) {
                setScore('Mediano');
            } else if (age === 14 && forcaTronco >= 42 && forcaTronco <= 46) {
                setScore('Bom');
            } else if (age === 14 && forcaTronco > 46) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 15 ANOS
            if (age === 15 && forcaTronco < 29) {
                setScore('Muito Baixo');
            } else if (age === 15 && forcaTronco >= 29 && forcaTronco <= 33) {
                setScore('Baixo');
            } else if (age === 15 && forcaTronco >= 34 && forcaTronco <= 42) {
                setScore('Mediano');
            } else if (age === 15 && forcaTronco >= 43 && forcaTronco <= 47) {
                setScore('Bom');
            } else if (age === 15 && forcaTronco > 47) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 16 ANOS
            if (age === 16 && forcaTronco < 28) {
                setScore('Muito Baixo');
            } else if (age === 16 && forcaTronco >= 28 && forcaTronco <= 33) {
                setScore('Baixo');
            } else if (age === 16 && forcaTronco >= 34 && forcaTronco <= 43) {
                setScore('Mediano');
            } else if (age === 16 && forcaTronco >= 44 && forcaTronco <= 48) {
                setScore('Bom');
            } else if (age === 16 && forcaTronco > 48) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 17 ANOS
            if (age === 17 && forcaTronco < 28) {
                setScore('Muito Baixo');
            } else if (age === 17 && forcaTronco >= 28 && forcaTronco <= 33) {
                setScore('Baixo');
            } else if (age === 17 && forcaTronco >= 34 && forcaTronco <= 43) {
                setScore('Mediano');
            } else if (age === 17 && forcaTronco >= 44 && forcaTronco <= 49) {
                setScore('Bom');
            } else if (age === 17 && forcaTronco > 49) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 18 E 19 ANOS
            if (age >= 18 && age <= 19 && forcaTronco < 33) {
                setScore('Fraco');
            } else if (age >= 18 && age <= 19 && forcaTronco >= 33 && forcaTronco <= 37) {
                setScore('Abaixo da Média');
            } else if (age >= 18 && age <= 19 && forcaTronco >= 38 && forcaTronco <= 41) {
                setScore('Média');
            } else if (age >= 18 && age <= 19 && forcaTronco >= 42 && forcaTronco <= 47) {
                setScore('Acima da Média');
            } else if (age >= 18 && age <= 19 && forcaTronco > 47) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 20 A 29 ANOS
            if (age >= 20 && age <= 29 && forcaTronco < 29) {
                setScore('Fraco');
            } else if (age >= 20 && age <= 29 && forcaTronco >= 29 && forcaTronco <= 32) {
                setScore('Abaixo da Média');
            } else if (age >= 20 && age <= 29 && forcaTronco >= 33 && forcaTronco <= 36) {
                setScore('Média');
            } else if (age >= 20 && age <= 29 && forcaTronco >= 37 && forcaTronco <= 42) {
                setScore('Acima da Média');
            } else if (age >= 20 && age <= 29 && forcaTronco > 42) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 30 A 39 ANOS
            if (age >= 30 && age <= 39 && forcaTronco < 22) {
                setScore('Fraco');
            } else if (age >= 30 && age <= 39 && forcaTronco >= 22 && forcaTronco <= 26) {
                setScore('Abaixo da Média');
            } else if (age >= 30 && age <= 39 && forcaTronco >= 27 && forcaTronco <= 30) {
                setScore('Média');
            } else if (age >= 30 && age <= 39 && forcaTronco >= 31 && forcaTronco <= 35) {
                setScore('Acima da Média');
            } else if (age >= 30 && age <= 39 && forcaTronco > 35) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 40 A 49 ANOS
            if (age >= 40 && age <= 49 && forcaTronco < 17) {
                setScore('Fraco');
            } else if (age >= 40 && age <= 49 && forcaTronco >= 17 && forcaTronco <= 21) {
                setScore('Abaixo da Média');
            } else if (age >= 40 && age <= 49 && forcaTronco >= 22 && forcaTronco <= 25) {
                setScore('Média');
            } else if (age >= 40 && age <= 49 && forcaTronco >= 26 && forcaTronco <= 30) {
                setScore('Acima da Média');
            } else if (age >= 40 && age <= 49 && forcaTronco > 30) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 50 A 59 ANOS
            if (age >= 50 && age <= 59 && forcaTronco < 13) {
                setScore('Fraco');
            } else if (age >= 50 && age <= 59 && forcaTronco >= 13 && forcaTronco <= 17) {
                setScore('Abaixo da Média');
            } else if (age >= 50 && age <= 59 && forcaTronco >= 18 && forcaTronco <= 21) {
                setScore('Média');
            } else if (age >= 50 && age <= 59 && forcaTronco >= 22 && forcaTronco <= 25) {
                setScore('Acima da Média');
            } else if (age >= 50 && age <= 59 && forcaTronco > 25) {
                setScore('Excelente');
            }
            // COMPARAÇÃO 60 A 69 ANOS
            if (age >= 60 && age <= 69 && forcaTronco < 7) {
                setScore('Fraco');
            } else if (age >= 60 && age <= 69 && forcaTronco >= 7 && forcaTronco <= 11) {
                setScore('Abaixo da Média');
            } else if (age >= 60 && age <= 69 && forcaTronco >= 12 && forcaTronco <= 16) {
                setScore('Média');
            } else if (age >= 60 && age <= 69 && forcaTronco >= 17 && forcaTronco <= 22) {
                setScore('Acima da Média');
            } else if (age >= 60 && age <= 69 && forcaTronco > 22) {
                setScore('Excelente');
            }
        };
    }, [sex, forcaTronco, age]);

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
                                    value={forcaTronco}
                                    className="input-questao-flexibilidade"
                                    name="input-questao1"
                                    onChange={e => setForcaTronco(e.target.value)}
                                />
                            </div>
                        </th>
                        <th className="colunas-corpo-resposta">
                            <div className="inp-teste-flexibilidade-paragrafo">

                                <p className='score-forcaTronco'>{score}</p>
                            </div>
                        </th>
                    </tr>
                </table>
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
        </div>
    );
};


export default SaltoHorizontal;