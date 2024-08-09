import React from "react";
import "../styles/Processos-css/ControleGlicemia.css";
import CENID from "../assets/cenid.png";
import UNIMAR from "../assets/unimar.png";

const ControleGlicemia = () => {
  return (
    <div>
      <div className="div-1-basal">
        <img src={CENID} width={100} className="left-image"/>
        <img src={UNIMAR} width={150} className="right-image"/>
      </div>
      <form>
        <div className="div-table-controle-glicemia">
          <table className="table-controle-glicemia">
            <tr>
              <th rowSpan={"2"} className="data-controle-glicemia">DATA</th>
              <th colSpan={"3"}>CAFÉ DA MANHÃ</th>
              <th colSpan={"3"}>ALMOÇO</th>
              <th colSpan={"3"}>CAFÉ DA TARDE</th>
              <th colSpan={"3"}>JANTA</th>
              <th>OBSERVAÇÕES</th>
            </tr>
            <tr>
              <td className="cafe-manha-controle-glicemia">Jejum</td>
              <td className="cafe-manha-controle-glicemia">2 HR Depois</td>
              <td className="cafe-manha-controle-glicemia">UI Insulina</td>
              <td className="cafe-manha-controle-glicemia">Antes</td>
              <td className="cafe-manha-controle-glicemia">2 HR Depois</td>
              <td className="cafe-manha-controle-glicemia">UI Insulina</td>
              <td className="cafe-manha-controle-glicemia">Antes</td>
              <td className="cafe-manha-controle-glicemia">2 HR Depois</td>
              <td className="cafe-manha-controle-glicemia">UI Insulina</td>
              <td className="cafe-manha-controle-glicemia">Antes</td>
              <td className="cafe-manha-controle-glicemia">2 HR Depois</td>
              <td className="cafe-manha-controle-glicemia">UI Insulina</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <p className="central">1</p>
              </td>
              <td>
                <input type={"text"} className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"} className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"} className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"} className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">2</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">3</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">4</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">5</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">6</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">7</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">8</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">9</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">10</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">11</p>
            </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">12</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">13</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">14</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">15</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">16</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">17</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">18</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">19</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">20</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">21</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">22</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">23</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">24</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">25</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">26</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">27</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">28</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">29</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">30</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="central">31</p>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia"></input>
              </td>
              <td>
                <input type={"text"}className="input-controle-glicemia1"></input>
              </td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  );
};

export default ControleGlicemia;
