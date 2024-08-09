import { type } from "os";

export type User = {
    id: number;
    name: string;
    email: string;
    password?: string;
}

export type Users = {
    id: number;
    ra: string;
    type: string;
    phone: string;
    name: string;
    email: string;
    curso: string;
    cpf: string;
    password?: string;
}

export type AttCadastro = {
    nome: string;
    cpf: string;
    rg: string;
    sus: string;
    data_nascimento: Date;
    telefone: string;
    selectsexo: string;
    endereco: string;
    numero: string;
    nome_responsavel: string;
    cpf_responsavel: string;
    rg_responsavel: string;
    parentesco_responsavel: string;
    telefone_responsavel: string;
    ocupacao_responsavel: string;
    data_nascimento_responsavel: Date
}

export type NovoCadastro = {
    id: number;
    datecadastro: Date;
    nome: string;
    cpf: string;
    numerosus: string;
    rg: string;
    phone: string;
    date: Date;
    email: string;
    ocupacao: string;
    selectDropDown: string;
    endereco: string;
    municipio: string;
    numero: string;
    atendimentoSelecionado: string;
    diagnosticoSelecionado: string;
    outrasdmQ: string;
    datadiag: Date;
    gestantesim: string;
    semanas: Number;
    amamentando: string;
    meses: Number;
    deficiencia: string;
    qualdeficiencia: string; 
    hisdm1: string;
    parentesco: string;
    hisdm2: string;
    parentesco2: string;
    hisdm3: string;
    parentesco3: string;
    metodo_insulina: string;
    bombamode: string;
    mmg: string;
    glicmodelo: string;
    sensormodelo: string;
    uso_app_glicemia: string;
    outappqual: string;
    nomer: string;
    cpfr: string;
    rgr: string;
    parentescor: string;
    telefoner: string;
    ocupacaor: string;
    dater: Date;
    anexar: Blob;
    auxilio: string;
    outrosauxilioq: string;
    celular: string
}