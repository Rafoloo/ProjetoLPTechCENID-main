import React from "react";

function formatarCPF(cpf, setCPF) {
    let cpfAtual = cpf.replace(/\D/g, ""); // remove todos os caracteres não numéricos
    cpfAtual = cpfAtual.replace(/(\d{3})(\d)/, "$1.$2"); // adiciona o primeiro ponto
    cpfAtual = cpfAtual.replace(/(\d{3})(\d)/, "$1.$2"); // adiciona o segundo ponto
    cpfAtual = cpfAtual.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // adiciona o traço
    setCPF(cpfAtual);
  }

function formatarCPFp(cpf) {
  let cpfAtual = cpf.replace(/\D/g, ""); // remove all non-digit characters
  cpfAtual = cpfAtual.replace(/(\d{3})(\d)/, "$1.$2"); // add the first dot
  cpfAtual = cpfAtual.replace(/(\d{3})(\d)/, "$1.$2"); // add the second dot
  cpfAtual = cpfAtual.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // add the hyphen
  return cpfAtual;
}
  
function formatarRG(rg, setRG) {
    let rgAtual = rg.replace(/\D/g, ""); // remove todos os caracteres não numéricos
    rgAtual = rgAtual.replace(/(\d{2})(\d)/, "$1.$2"); // adiciona o primeiro ponto
    rgAtual = rgAtual.replace(/(\d{3})(\d)/, "$1.$2"); // adiciona o segundo ponto
    rgAtual = rgAtual.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // adiciona o traço
    setRG(rgAtual);
  }

function formatarCartaoSus(numeroSus) {
  let cartaoSus = numeroSus.replace(/\D/g, ""); // remove todos os caracteres não numéricos
  cartaoSus = cartaoSus.replace(/(\d{3})(\d)/, "$1 $2"); // adiciona o primeiro espaço
  cartaoSus = cartaoSus.replace(/(\d{4})(\d)/, "$1 $2"); // adiciona o segundo espaço
  cartaoSus = cartaoSus.replace(/(\d{4})(\d)/, "$1 $2"); // adiciona o terceiro espaço
  return cartaoSus;
}
  
export { formatarCPF, formatarRG, formatarCartaoSus, formatarCPFp};