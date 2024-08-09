import React from "react";

function valida_campos(secao){
    const opcao = document.getElementById('valida_' + secao);
    if (opcao.checked == true) {
        const campo_texto = document.getElementById('campo_' + secao);
        campo_texto.removeAttribute('disabled');
        campo_texto.setAttribute("required", "");
    }
    else{
        const campo_texto = document.getElementById('campo_' + secao);
        campo_texto.setAttribute('disabled', '');
        campo_texto.removeAttribute("required", "");
    }
  }

export { valida_campos };