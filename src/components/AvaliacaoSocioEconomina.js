import "../styles/AvaliacaoSocioEconomica.css";
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useState } from "react";
import { PDFDocument } from 'pdf-lib';

const AvaliacaoSocioEconomina = ({ anexar, setAnexar }) => {
  const [error, setError] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file.size > 1000000) {
      const fileSizeMB = file.size / 1000000;
      setError(`O tamanho do arquivo deve ser no máximo 1MB.\nO arquivo atual tem o tamanho ${fileSizeMB.toFixed(2)} MB`);
    } else {
      setError(null);
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const pdfDoc = await PDFDocument.load(uint8Array);
      const pdfBytes = await pdfDoc.save();
      setAnexar(pdfBytes);
      anexar = pdfBytes;
    }
  };

  return (
    <div className="dadosresponsavel">
      <div className="dadosPaciente">
        <h2>AVALIAÇÃO SOCIO ECONÔMICA</h2>
      </div>
      <form className="formNovoCadastro">
        <h5 className="h4-Diagnostico-texto">
          Introduzir instrumento da ABEP &#40;arquivo em anexo&#41;
        </h5>
      </form>
      <form className="form-flex-geral" enctype="multipart/form-data">
        <div className="anexar-exame-geral">
          <div className="anexar-exame-geral-block">
            <h2 className="tags-flex-geral-title">
              ANEXAR ARQUIVO<FaCloudUploadAlt className="icon-download-title" />
            </h2>
            <div className="tags-flex-geral">
              <input
                className="input-anexar-exame-geral"
                type="file"
                accept=".pdf"
                value={null}
                onChange={handleFileChange}
                name="input-anexar-exame-recordatorio"
              />
            </div>
            {error && <div>{error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AvaliacaoSocioEconomina;