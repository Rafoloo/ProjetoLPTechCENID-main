import React, { useState } from 'react';
import '../styles/calculos.css';

const HandPressureCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState('');
  const [dominantHandPressure, setDominantHandPressure] = useState('');
  const [nonDominantHandPressure, setNonDominantHandPressure] = useState('');

  const calculatePressure = () => {
    let domPressure = 0;
    let nonDomPressure = 0;

    if (sex === 'female') {
      domPressure = -7.95 + 2.04 * age + 0.20 * weight;
      nonDomPressure = -7.15 + 1.97 * age + 0.17 * weight;
    } else if (sex === 'male') {
      domPressure = -2.73 + 1.44 * age + 0.14 * weight;
      nonDomPressure = -2.18 + 1.34 * age + 0.13 * weight;
    }

    setDominantHandPressure(domPressure.toFixed(2));
    setNonDominantHandPressure(nonDomPressure.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h2>Calculadora de Pressão Manual</h2>
      <form>
        <div>
          <label>Idade</label>
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Peso (KG)</label>
          <input
            type="number"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Sexo</label>
          <select value={sex} onChange={e => setSex(e.target.value)}>
            <option value="">Escolha seu sexo</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
        </div>
        <button type="button" onClick={calculatePressure}>
          Calcular Pressão
        </button>
      </form>
      {dominantHandPressure && nonDominantHandPressure && (
        <div className="result-section">
          <p>Pressão da Mão Dominante: {dominantHandPressure} Kgf/cm²</p>
          <p>Pressão da Mão Não Dominante: {nonDominantHandPressure} Kgf/cm²</p>
        </div>
      )}
    </div>
  );
};

export default HandPressureCalculator;
