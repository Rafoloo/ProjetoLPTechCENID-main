// import React, { useState } from "react";

// const Home = () => {
//   const [gender, setGender] = useState("");
//   const [weight, setWeight] = useState(0);
//   const [age, setAge] = useState(0);
//   const [dominantPressure, setDominantPressure] = useState(0);
//   const [nonDominantPressure, setNonDominantPressure] = useState(0);

//   const calculatePressure = () => {
//     let dominantResult;
//     let nonDominantResult;

//     if (gender === "male") {
//       nonDominantResult = -7.15 + 1.97 * (age) + 0.17 * (weight);
//       dominantResult = -7.95 + 2.04 * (age) + 0.20 * (weight);
//     } else if (gender === "female") {
//       nonDominantResult = -2.18 + 1.34 * (age) + 0.13 * (weight);
//       dominantResult = -2.73 + 1.44 * (age) + 0.14 * (weight);
//     }

//     setDominantPressure(dominantResult);
//     setNonDominantPressure(nonDominantResult);
//   };

//   return (
//     <div>
//       <div>
//         <label>Gender:</label>
//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         >
//           <option value="">Select</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </div>
//       <div>
//         <label>Weight (in kg):</label>
//         <input
//           type="number"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Age (in years):</label>
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//       </div>
//       <button onClick={calculatePressure}>Calculate Pressure</button>
//       <div>
//         <p>Mão Dominante: {dominantPressure}</p>
//         <p>Mão Não Dominante: {nonDominantPressure}</p>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React, { useState } from 'react';
// const Home = () => {
//   const [sexo, setSexo] = useState('');
//   const [idade, setIdade] = useState('');
//   const [kg, setKg] = useState('');
//   const [message, setMessage] = useState('');
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let percentil;
//     // Calculate percentil
//     if (sexo === 'masculino') {
//       if (idade < 17) {
//         percentil = (kg - 30) * 100 / (50 - 30);
//       } else if (idade < 30) {
//         percentil = (kg - 35) * 100 / (60 - 35);
//       } else if (idade < 40) {
//         percentil = (kg - 40) * 100 / (65 - 40);
//       } else if (idade < 50) {
//         percentil = (kg - 45) * 100 / (70 - 45);
//       } else if (idade < 60) {
//         percentil = (kg - 50) * 100 / (75 - 50);
//       } else if (idade < 70) {
//         percentil = (kg - 55) * 100 / (80 - 55);
//       } else if (idade < 80) {
//         percentil = (kg - 60) * 100 / (85 - 60);
//       }
//     } else if (sexo === 'feminino') {
//       if (idade < 17) {
//         percentil = (kg - 20) * 100 / (40 - 20);
//       } else if (idade < 30) {
//         percentil = (kg - 25) * 100 / (45 - 25);
//       } else if (idade < 40) {
//         percentil = (kg - 30) * 100 / (50 - 30);
//       } else if (idade < 50) {
//         percentil = (kg - 35) * 100 / (55 - 35);
//       } else if (idade < 60) {
//         percentil = (kg - 40) * 100 / (60 - 40);
//       } else if (idade < 70) {
//         percentil = (kg - 45) * 100 / (65 - 45);
//       } else if (idade < 80) {
//         percentil = (kg - 50) * 100 / (70 - 50);
//       }
//     }
//     // Calculate message
//     if (percentil < 25) {
//       setMessage('Pressão Manual Baixa');
//     } else if (percentil >= 25 && percentil < 75) {
//       setMessage('Pressão Manual Normal');
//     } else {
//       setMessage('Pressão Manual Elevada');
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <legend>Calculadora de Pressão Manual</legend>
//           <label>
//             Selecione seu sexo:
//             <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
//               <option value="masculino">Masculino</option>
//               <option value="feminino">Feminino</option>
//             </select>
//           </label>
//           <br />
//           <label>
//             Selecione sua idade:
//             <input
//               type="number"
//               value={idade}
//               onChange={(e) => setIdade(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Digite sua pressão manual (em kg):
//             <input
//               type="number"
//               value={kg}
//               onChange={(e) => setKg(e.target.value)}
//             />
//           </label>
//           <br />
//           <button type="submit">Calcular</button>
//         </fieldset>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };      
// export default Home;

// import React, { useState } from 'react';

// const HandGripCalculator = () => {
//   const [kg, setKg] = useState('');
//   const [classification, setClassification] = useState('');

//   const calculateClassification = (kg) => {
//     if (kg < 25) {
//       setClassification('Baixo');
//     } else if (kg >= 25 && kg <= 35) {
//       setClassification('Normal');
//     } else {
//       setClassification('Elevado');
//     }
//   };

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setKg(value);
//     calculateClassification(value);
//   };

//   return (
//     <div>
//       <h1>Calcular Prensão Manual</h1>
//       <input
//         type="number"
//         name="kg"
//         value={kg}
//         onChange={handleChange}
//         placeholder="kg"
//       />
//       <h2>Classificação: {classification}</h2>
//     </div>
//   );
// };

// export default HandGripCalculator;


// PEGA AS REFÊNCIAS AQUIII *******************************************************************
// import React, { useState } from 'react';

// function CompareInputs(){
//   const [valor1, setValor1] = useState(0);
//   const [valor2, setValor2] = useState(0);

//   function compararValores(){
//     if(valor1 < valor2){
//       return "Baixo";
//     } else if (valor1 > valor2){
//       return "Elevado";
//     } else {
//       return "Normal";
//     }
//   }

//   return (
//     <div>
//       <input
//         type="number"
//         value={valor1}
//         onChange={e => setValor1(e.target.value)}
//       />
//       <input
//         type="number"
//         value={valor2}
//         onChange={e => setValor2(e.target.value)}
//       />
//       <h3>{compararValores()}</h3>
//     </div>
//   );
// }

// export default CompareInputs;







// import React, { useState } from "react";

// const PressaoCalculator = () => {
//   const [kg, setKg] = useState(0);
//   const [percentil, setPercentil] = useState(0);
//   const [manPressure, setManPressure] = useState(0);
//   const [womanPressure, setWomanPressure] = useState(0);

//   const handleKgChange = (event) => {
//     setKg(event.target.value);
//   };

//   const handlePercentilChange = (event) => {
//     setPercentil(event.target.value);
//   };

//   const handleCalculate = () => {
//     let manPressure = calcManPressure(kg, percentil);
//     let womanPressure = calcWomanPressure(kg, percentil);
//     setManPressure(manPressure);
//     setWomanPressure(womanPressure);
//   };

//   const calcManPressure = (kg, percentil) => {
//     return (kg * (1.09 + (percentil * 0.04))).toFixed(2);
//   };

//   const calcWomanPressure = (kg, percentil) => {
//     return (kg * (1.10 + (percentil * 0.05))).toFixed(2);
//   };

//   return (
//     <>
//       <label>
//         Kg:
//         <input
//           type="number"
//           value={kg}
//           onChange={handleKgChange}
//         />
//       </label>
//       <label>
//         Percentil:
//         <input
//           type="number"
//           value={percentil}
//           onChange={handlePercentilChange}
//         />
//       </label>
//       <button onClick={handleCalculate}>Calcular</button>
//       <p>
//         Pressão Manual Masculina: {manPressure}
//       </p>
//       <p>
//         Pressão Manual Feminina: {womanPressure}
//       </p>
//     </>
//   );
// };

// export default PressaoCalculator;








// import React, { useState } from 'react';

// const Home = () => {
//   const [weight, setWeight] = useState(0);
//   const [sex, setSex] = useState('');
//   const [dominantHandPressure, setDominantHandPressure] = useState(0);
//   const [nonDominantHandPressure, setNonDominantHandPressure] = useState(0);

//   //Calculate Pressure
//   const calculatePressure = (weight, sex) => {
//     let malePressure;
//     let femalePressure;
//     if (sex === 'male') {
//       malePressure = (weight * 0.9) + 18;
//       femalePressure = (weight * 0.75) + 13;
//     } else if (sex === 'female') {
//       malePressure = (weight * 0.9) + 20;
//       femalePressure = (weight * 0.75) + 15;
//     }
//     setDominantHandPressure(malePressure);
//     setNonDominantHandPressure(femalePressure);
//   };

//   return (
//     <div>
//       <h2>Hand Pressure Calculator</h2>
//       <form>
//         <div>
//           <label>Weight (KG)</label>
//           <input
//             type="number"
//             onChange={e => setWeight(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Sex</label>
//           <select onChange={e => setSex(e.target.value)}>
//             <option value="">Choose your gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         <button
//           type="button"
//           onClick={() => calculatePressure(weight, sex)}
//         >
//           Calculate Pressure
//         </button>
//       </form>
//       {dominantHandPressure && nonDominantHandPressure && (
//         <div>
//           <p>
//             Dominant Hand Pressure: {dominantHandPressure} Kgf/cm²
//           </p>
//           <p>
//             Non Dominant Hand Pressure: {nonDominantHandPressure} Kgf/cm²
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;











// +/- Certo
// import React, { useState } from 'react';

// function Home() {
//   const [sex, setSex] = useState("");
//   const [weight, setWeight] = useState("");
//   const [dominantHand, setDominantHand] = useState("");
//   const [pressure, setPressure] = useState("");

//   function calculatePressure() {
//     let pressureValue;

//     if (sex === "male") {
//       pressureValue = (weight * 0.3) + 20;
//     } else if (sex === "female") {
//       pressureValue = (weight * 0.25) + 20;
//     }

//     if (dominantHand === "left") {
//       pressureValue += 10;
//     }

//     setPressure(pressureValue);
//   }

//   return (
//     <>
//       <div className="input-section">
//         <label>
//           Sex:
//           <select value={sex} onChange={e => setSex(e.target.value)}>
//             <option value="">-- Please choose an option --</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </label>
//         <label>
//           Weight:
//           <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
//         </label>
//         <label>
//           Dominant Hand:
//           <select value={dominantHand} onChange={e => setDominantHand(e.target.value)}>
//             <option value="">-- Please choose an option --</option>
//             <option value="left">Left</option>
//             <option value="right">Right</option>
//           </select>
//         </label>
//         <button onClick={calculatePressure}>Calculate Pressure</button>
//       </div>
//       {pressure && (
//         <div className="result-section">
//           <h3>Pressure: {pressure.toFixed(2)}</h3>
//         </div>
//       )}
//     </>
//   );
// }

// export default Home;






// import React, { useState } from "react";

// const Home = () => {
//   const [gender, setGender] = useState("");
//   const [weight, setWeight] = useState(0);
//   const [age, setAge] = useState(0);
//   const [dominantPressure, setDominantPressure] = useState(0);
//   const [nonDominantPressure, setNonDominantPressure] = useState(0);
//   const [classification, setClassification] = useState('');
//   const [ClassificationNaoDominante, setClassificationNaoDominante] = useState('');

//   const calculatePressure = () => {
//     let dominantResult;
//     let nonDominantResult;

//     if (gender === "male") {
//       nonDominantResult = -7.15 + 1.97 * (age) + 0.17 * (weight);
//       dominantResult = -7.95 + 2.04 * (age) + 0.20 * (weight);
//     } else if (gender === "female") {
//       nonDominantResult = -2.18 + 1.34 * (age) + 0.13 * (weight);
//       dominantResult = -2.73 + 1.44 * (age) + 0.14 * (weight);
//     }

//     const calculateClassification = (dominantResult) => {
//       if (dominantResult < 25) {
//         setClassification('Baixo');
//       } else if (dominantResult >= 25 && dominantResult <= 75) {
//         setClassification('Normal');
//       } else {
//         setClassification('Elevado');
//       }
//       const handleChange2 = (e) => {
//         const { value } = e.target;
//         dominantResult(value);
//         calculateClassification(value);

//         const calcularClassificacaoNaoDominante = (nonDominantResult) => {
//           if (nonDominantResult < 25) {
//             setClassificationNaoDominante('Baixo');
//           } else if (nonDominantResult >= 25 && nonDominantResult <= 75) {
//             setClassificationNaoDominante('Normal');
//           } else {
//             setClassificationNaoDominante('Elevado');
//           }
//         };
//         const handleChange = (e) => {
//           const { value } = e.target;
//           nonDominantResult(value);
//           calcularClassificacaoNaoDominante(value);

//           setDominantPressure(dominantResult);
//           setNonDominantPressure(nonDominantResult);
//         };
//       }
//     };


//     return (
//       <div>
//         <div>
//           <label>Gender:</label>
//           <select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//           >
//             <option value="">Select</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         <div>
//           <label>Weight (in kg):</label>
//           <input
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Age (in years):</label>
//           <input
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//           <input
//             type="number"
//             name="kg"
//             value={nonDominantResult}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             name="kg"
//             value={dominantResult}
//             onChange={handleChange2}
//           />
//         </div>
//         <button onClick={calculatePressure}>Calculate Pressure</button>
//         <div>
//           <p>Mão Dominante: {dominantPressure}</p>
//           <p>Mão Não Dominante: {nonDominantPressure}</p>
//           <p>{classification}</p>
//           <p>{ClassificationNaoDominante}</p>
//         </div>
//       </div>
//     );
//   };

//   export default Home;






// import React, { useState } from "react";

// const Home = () => {
//   const [gender, setGender] = useState("");
//   const [weight, setWeight] = useState(0);
//   const [age, setAge] = useState(0);
//   const [dominantPressure, setDominantPressure] = useState(0);
//   const [nonDominantPressure, setnonDominantPressure] = useState(0);
//   const [classification, setClassification] = useState('');
//   const [ClassificationNaoDominante, setClassificationNaoDominante] = useState('');

//   const calculatePressure = () => {
//     let dominantPressure;
//     let nonDominantResult;

//     if (gender === "male") {
//       nonDominantResult = -7.15 + 1.97 * (age) + 0.17 * (weight);
//       dominantPressure = -7.95 + 2.04 * (age) + 0.20 * (weight);
//     } else if (gender === "female") {
//       nonDominantResult = -2.18 + 1.34 * (age) + 0.13 * (weight);
//       dominantPressure = -2.73 + 1.44 * (age) + 0.14 * (weight);
//     }
//   };
//     const calculateClassification = (dominantPressure) => {
//       if (dominantPressure < 25) {
//         setClassification('Baixo');
//       } else if (dominantPressure >= 25 && dominantPressure <= 75) {
//         setClassification('Normal');
//       } else {
//         setClassification('Elevado');
//       }
//     };

//     const handleChange2 = (e) => {
//       const { value } = e.target;
//       dominantPressure(value);
//       calculateClassification(value);
//     };
//     const calcularClassificacaoNaoDominante = (nonDominantResult) => {
//       if (nonDominantResult < 25) {
//         setClassificationNaoDominante('Baixo');
//       } else if (nonDominantResult >= 25 && nonDominantResult <= 75) {
//         setClassificationNaoDominante('Normal');
//       } else {
//         setClassificationNaoDominante('Elevado');
//       }
//     };

//     const handleChange = (e) => {
//       const { value } = e.target;
//       nonDominantPressure(value);
//       calcularClassificacaoNaoDominante(value);

//     setDominantPressure(dominantPressure);
//     setnonDominantPressure(nonDominantPressure);
//   };


//   return (
//     <div>
//       <div>
//         <label>Gender:</label>
//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         >
//           <option value="">Select</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </div>
//       <div>
//         <label>Weight (in kg):</label>
//         <input
//           type="number"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Age (in years):</label>
//         <input
//           type="number"
//           value={age}
//           onChange={handleChange2}
//           // onChange={(e) => setAge(e.target.value)}
//         />
//         <input         
//           type="number"
//           name="kg"
//           value={nonDominantPressure}
//           onChange={handleChange} 
//           />
//         <input         
//           type="number"
//           name="kg"
//           value={dominantPressure}
//           onChange={handleChange2} 
//           />
//       </div>
//       <button onClick={calculatePressure}>Calculate Pressure</button>
//       <div>
//         <p>Mão Dominante: {dominantPressure}</p>
//         <p>Mão Não Dominante: {nonDominantPressure}</p>
//         <p>{classification}</p>
//         <p>{ClassificationNaoDominante}</p>
//       </div>
//     </div>
//   );
// };

// export default Home;




// Faça um código em reactjs que calcule a pressão manual feminino e masculino com relação a idade peso e retorne o resultado da mão dominante e da mão não dominante.

import React, { useState } from 'react';

function Home() {
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);

  //Calculate female pressure
  let femalePressureDominantHand = 0;
  let femalePressureNonDominantHand = 0;

  if(age <= 200){
    femalePressureDominantHand = -7.95 + 2.04 * (age) + 0.20 * (weight);
    femalePressureNonDominantHand = -7.15 + 1.97 * (age) + 0.17 * (weight);
  }

  //Calculate male pressure
  let malePressureDominantHand = 0;
  let malePressureNonDominantHand = 0;


  if(age <= 200){
    malePressureDominantHand = -2.73 + 1.44 * (age) + 0.14 * (weight);
    malePressureNonDominantHand = -2.18 + 1.34 * (age) + 0.13 * (weight);
  }

  function compararValoresDominanteFeminino(){
    if(femalePressureDominantHand <= 25){
      return "Baixo";
    } else if (femalePressureDominantHand > 25 && femalePressureDominantHand < 75){
      return "Normal";
    } else {
      return "Elevado";
    }
  }

  function compararValoresNaoDominanteFeminino(){
    if(femalePressureNonDominantHand <= 25){
      return "Baixo";
    } else if (femalePressureNonDominantHand > 25 && femalePressureNonDominantHand < 75){
      return "Normal";
    } else {
      return "Elevado";
    }
  }

  function compararValoresDominanteMasculino(){
    if(malePressureDominantHand <= 25){
      return "Baixo";
    } else if (malePressureDominantHand > 25 && malePressureDominantHand < 75){
      return "Normal";
    } else {
      return "Elevado";
    }
  }

  function compararValoresNaoDominanteMasculino(){
    if(malePressureNonDominantHand <= 25){
      return "Baixo";
    } else if (malePressureNonDominantHand > 25 && malePressureNonDominantHand < 75){
      return "Normal";
    } else {
      return "Elevado";
    }
  }

  return (
    <div>
      <h1>Pressão Manual</h1>
      <label>Idade:</label>
      <input type="number" onChange={e => setAge(e.target.value)} />
      <label>Peso:</label>
      <input type="number" onChange={e => setWeight(e.target.value)} />
      <h2>Resultado</h2>
      {/* <p>
        Pressão Manual Feminina (Mão Dominante): {femalePressureDominantHand}
      </p>
      <p>
        Pressão Manual Feminina (Mão Não Dominante): {femalePressureNonDominantHand}
      </p>
      <p>
        Pressão Manual Masculina (Mão Dominante): {malePressureDominantHand}
      </p>
      <p>
        Pressão Manual Masculina (Mão Não Dominante): {malePressureNonDominantHand}
      </p> */}
      <b>{compararValoresDominanteFeminino()}</b><br></br>
      <b>{compararValoresNaoDominanteFeminino()}</b><br></br>
      <b>{compararValoresDominanteMasculino()}</b><br></br>
      <b>{compararValoresNaoDominanteMasculino()}</b>
    </div>
  );
}

export default Home;












// import React, { useState } from 'react';
// const Home = () => {
//   const [sexo, setSexo] = useState('');
//   const [idade, setIdade] = useState('');
//   const [kg, setKg] = useState('');
//   const [message, setMessage] = useState('');
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let percentil;
//     // Calculate percentil
//     if (sexo === 'masculino') {
//       if (idade < 17) {
//         percentil = (kg - 30) * 100 / (50 - 30);
//       } else if (idade < 30) {
//         percentil = (kg - 35) * 100 / (60 - 35);
//       } else if (idade < 40) {
//         percentil = (kg - 40) * 100 / (65 - 40);
//       } else if (idade < 50) {
//         percentil = (kg - 45) * 100 / (70 - 45);
//       } else if (idade < 60) {
//         percentil = (kg - 50) * 100 / (75 - 50);
//       } else if (idade < 70) {
//         percentil = (kg - 55) * 100 / (80 - 55);
//       } else if (idade < 80) {
//         percentil = (kg - 60) * 100 / (85 - 60);
//       }
//     } else if (sexo === 'feminino') {
//       if (idade < 17) {
//         percentil = (kg - 20) * 100 / (40 - 20);
//       } else if (idade < 30) {
//         percentil = (kg - 25) * 100 / (45 - 25);
//       } else if (idade < 40) {
//         percentil = (kg - 30) * 100 / (50 - 30);
//       } else if (idade < 50) {
//         percentil = (kg - 35) * 100 / (55 - 35);
//       } else if (idade < 60) {
//         percentil = (kg - 40) * 100 / (60 - 40);
//       } else if (idade < 70) {
//         percentil = (kg - 45) * 100 / (65 - 45);
//       } else if (idade < 80) {
//         percentil = (kg - 50) * 100 / (70 - 50);
//       }
//     }
//     // Calculate message
//     if (percentil < 25) {
//       setMessage('Pressão Manual Baixa');
//     } else if (percentil >= 25 && percentil < 75) {
//       setMessage('Pressão Manual Normal');
//     } else {
//       setMessage('Pressão Manual Elevada');
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <legend>Calculadora de Pressão Manual</legend>
//           <label>
//             Selecione seu sexo:
//             <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
//               <option value="masculino">Masculino</option>
//               <option value="feminino">Feminino</option>
//             </select>
//           </label>
//           <br />
//           <label>
//             Selecione sua idade:
//             <input
//               type="number"
//               value={idade}
//               onChange={(e) => setIdade(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Digite sua pressão manual (em kg):
//             <input
//               type="number"
//               value={kg}
//               onChange={(e) => setKg(e.target.value)}
//             />
//           </label>
//           <br />
//           <button type="submit">Calcular</button>
//         </fieldset>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };      
// export default Home;












