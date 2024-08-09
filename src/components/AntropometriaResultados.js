import React from "react";
import { BsFillPinFill } from "react-icons/bs";
import { FaCloudUploadAlt } from 'react-icons/fa';
import ModalSalvarAntropometria from "../components/ModalSalvarAntropometria";

const AntropometriaResultados = () => {
    return (
        <div>
            <div className="dadosresponsavel">
                <div className='dadosPaciente'>
                    <h2>
                        DESINTOMETRIA ÓSSEA DE DUPLA ENERGIA
                    </h2>
                </div>
            </div>
            <form className="form-flex-geral">
                <div className="anexar-exame-geral">
                    <div className="anexar-exame-geral-block">
                    <h2 className="tags-flex-geral-title">ANEXAR ARQUIVO<FaCloudUploadAlt className="icon-download-title"/></h2>
                        <div className="tags-flex-geral">
                            <input className="input-anexar-exame-geral" type={"file"} name="input-anexar-exame-recordatorio" />
                        </div>
                        <div className="button-flex">
                            <button id="send-the-form"><div className="download-tag"><BsFillPinFill className="icon-pin" />ANEXAR</div></button>
                        </div>
                    </div>
                </div>
            </form>
            <ModalSalvarAntropometria />
        </div>

    );
};

export default AntropometriaResultados;