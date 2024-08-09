import { createContext } from 'react';
import { User } from '../../types/User';

type Time = {
  hours: number;
  minutes: number;
};

export type AuthContextType = {
    user: User | null;
    atualizar: (id: number,nome: string, cpf: string, rg: string, sus: string, DataNascimento: Date, telefone: string, selectsexo: string, endereco: string, numero: string, 
      nome_responsavel: string, cpf_responsavel: string, rg_responsavel: string, parentesco_responsavel: string, telefone_responsavel: string, ocupacao_responsavel: string,
      DataNascimentoResponsavel: Date) => Promise<boolean>;
    registernovo: (datecadastro: Date, nome: string, cpfForm: string, cartao_sus: string, rg: string, telefone: string, data_nascimento: Date, email: string, ocupacao: string, 
        sexo: string, endereco: string, municipio: string, numero: string, tipo_atendimento: string, diagnostico: string,
        outras_formas_dm: string, data_diagnostico: Date, gestante: string, semanas_gestacao: Number, amamentando: string, tempo_pos_parto: Number, deficiencia: string, tipo_deficiencia: string, 
        historico_dm1: string, parentesco_dm1: string, historico_dm2: string, parentesco_dm2: string, historico_outras_formas_dm: string, parentesco_outras_formas_dm: string, metodo_insulina: string, marca_modelo_bomba: string, 
        metodo_monitoramento_glicemia: string, marca_modelo_glicometro_sensor: string, uso_app_glicemia: string, outros_apps: string, nome_responsavel: string, cpf_responsavel: string, rg_responsavel: string, parentesco_responsavel: string, 
        telefone_responsavel: string, ocupacao_responsavel: string, data_nascimento_responsavel: Date, anexar: Blob, auxilio: string, outros_auxilios: string, possui_celular_com_acesso_a_internet: string, idLogin:Number) => Promise<boolean>;
    register: (email: string, password: string, name: string, ra: string, type: string, phone: string, curso: string, cpf: string) => Promise<boolean>;
    update: (id: Int32Array, email: string, password: string, name: string, ra: string, type: string, phone: string, curso: string, cpf: string) => Promise<boolean>;
    agendar: (idpaciente: number, userid: number, dataconsulta: Date, hora: Time, espmed: string, obser: string, status_agendamento: string) => Promise<boolean>;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);