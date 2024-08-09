import axios from 'axios';
import internal from 'stream';

type Time = {
    hours: number;
    minutes: number;
  };
  
type DateConsulta = Date; 

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
         /* return {
            user: { id: 3, name: 'Kauê', email: 'jose@gmail.com', type: 'Estagiário', phone: '14 99999-9999', 
                    ra: '1999999'}
        };  */
        let response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
          /* return {
            user: { id: 3, name: 'Kauê', email: 'jose@gmail.com' },
            token: '123456789'
        };   */
        var md5 = require('md5');
        password = md5(password);
        const response = await api.post('/signin', { email, password });
        console.log(response);
        return response.data;
    },
    logout: async () => {
         /* return { status: true };  */
        const response = await api.post('/logout');
        return response.data;
    },
    register: async (email: string, password: string, name: string, ra: string, type: string, phone: string, curso: string, cpf: string) => {
        var md5 = require('md5');
        password = md5(password);
        const response = await api.post('/register', { email, password, name, ra, type, phone, curso, cpf });
        return response.data;
    },

    update: async (id: Int32Array, email: string, password: string, name: string, ra: string, type: string, phone: string, curso: string, cpf: string) => {
        var md5 = require('md5');
        password = md5(password);
        const url = `/update/${id}`;
        const response = await api.put(url, { email, password, name, ra, type, phone, curso, cpf });
        return response.data;
      },
      
    agendar: async (
    idpaciente: number,
    userid: number,
    dataconsulta: DateConsulta,
    hora: Time,
    espmed: string,
    obser: string,
    status_agendamento: string
    ) => {
    console.log(espmed);
    const response = await api.post('/agendar', {
        idpaciente,
        userid,
        dataconsulta,
        hora,
        espmed,
        status_agendamento,
        obser,
    });
    return response.data;
    },

    agendamentos: async () => {
        const response = await api.get('/agendamentos');
        return response.data;
      },

    registernovo: async (datecadastro: Date, nome: string, cpfForm: string, cartao_sus: string, rg: string, telefone: string, data_nascimento: Date, email: string, ocupacao: string, 
        sexo: string, endereco: string, municipio: string, numero: string, tipo_atendimento: string, diagnostico: string,
        outras_formas_dm: string, data_diagnostico: Date, gestante: string, semanas_gestacao: Number, amamentando: string, tempo_pos_parto: Number, deficiencia: string, tipo_deficiencia: string, 
        historico_dm1: string, parentesco_dm1: string, historico_dm2: string, parentesco_dm2: string, historico_outras_formas_dm: string, parentesco_outras_formas_dm: string, metodo_insulina: string, marca_modelo_bomba: string, 
        metodo_monitoramento_glicemia: string, marca_modelo_glicometro_sensor: string, uso_app_glicemia: string, outros_apps: string, nome_responsavel: string, cpf_responsavel: string, rg_responsavel: string, parentesco_responsavel: string, 
        telefone_responsavel: string, ocupacao_responsavel: string, data_nascimento_responsavel: Date, anexar: Blob, auxilio: string, outros_auxilios: string, possui_celular_com_acesso_a_internet: string, idLogin:Number) => { 
        const response = await api.post('/registernovo', { datecadastro, nome, cpfForm, cartao_sus, rg, telefone, data_nascimento, email, ocupacao, sexo, endereco, municipio, numero, tipo_atendimento,
            diagnostico, outras_formas_dm, data_diagnostico, gestante, semanas_gestacao, amamentando, tempo_pos_parto, deficiencia, tipo_deficiencia, historico_dm1, parentesco_dm1, historico_dm2, parentesco_dm2, historico_outras_formas_dm, parentesco_outras_formas_dm , metodo_insulina, 
            marca_modelo_bomba, metodo_monitoramento_glicemia, marca_modelo_glicometro_sensor, uso_app_glicemia, outros_apps, nome_responsavel, cpf_responsavel, rg_responsavel, parentesco_responsavel , 
            telefone_responsavel, ocupacao_responsavel, data_nascimento_responsavel , anexar, auxilio, outros_auxilios, possui_celular_com_acesso_a_internet, idLogin});
        return response.data;  
        },
    
    tabela: async () => {
        const response = await api.post('/tabela');
        return response.data;
        },
    
    tabelaPaciente: async (searchTerm: string, columns: string[]) => {
        const response = await api.post('/tabelaPaciente', { searchTerm, columns });
        /* console.log(response) */
        return response.data;
        },
    atualizar: async (id: number, nome: string, cpf: string, rg: string, sus: string, DataNascimento: Date, telefone: string, selectsexo: string, endereco: string, numero: string, 
        nome_responsavel: string, cpf_responsavel: string, rg_responsavel: string, parentesco_responsavel: string, telefone_responsavel: string, ocupacao_responsavel: string,
        DataNascimentoResponsavel: Date) => {
            const response = await api.post('/atualizar', {id, nome, cpf, rg, sus, DataNascimento, telefone, selectsexo, endereco, numero, 
                nome_responsavel, cpf_responsavel, rg_responsavel, parentesco_responsavel, telefone_responsavel, ocupacao_responsavel,
                DataNascimentoResponsavel});
            return response.data;
        }     
});
