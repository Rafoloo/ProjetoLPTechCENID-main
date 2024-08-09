import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User, Users, NovoCadastro, AttCadastro } from "../../types/User";
import { AuthContext } from "./AuthContext";

type Time = {
    hours: number;
    minutes: number;
  };

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User | null>(null);
    const [NovoCadastro, setNovoCadastro] = useState<User | null>(null);
    const [AttCadastro, setAttCadastro] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                const data = await api.validateToken(storageData);
                if (data.user) {
                    setUser(data.user);
                }
            }
        }
        validateToken();
    }, [api]);


    const register = async (email: string, password: string, name: string, ra: string, type: string, phone: string, curso: string, cpf: string) => {
        const data = await api.register(email, password, name, ra, type, phone, curso, cpf);
        if (data.users) {
            setUsers(data.users);
            return true;
        }
        return false;
    }

    const update = async (id: Int32Array, email: string, password: string, name: string, ra: string, type: string, phone: string, curso: string, cpf: string) => {
        const data = await api.update(id,email, password, name, ra, type, phone, curso, cpf);
        if (data.users) {
            setUsers(data.users);
            return true;
        }
        return false;
    }

    const agendar = async (idpaciente: number, userid: number, dataconsulta: Date, hora: Time, espmed: string, obser: string, status_agendamento: string) => {
        const data = await api.agendar(idpaciente,userid,dataconsulta,hora,espmed,obser,status_agendamento);
        if (data.users) {
            setUsers(data.users);
            return true;
        }
        return false;
    }

    const atualizar = async (id: number, nome: string, cpf: string, rg: string, sus: string, DataNascimento: Date, telefone: string, selectsexo: string, endereco: string, numero: string, 
        nome_responsavel: string, cpf_responsavel: string, rg_responsavel: string, parentesco_responsavel: string, telefone_responsavel: string, ocupacao_responsavel: string,
        DataNascimentoResponsavel: Date) => {
            const data = await api.atualizar(id, nome, cpf, rg, sus, DataNascimento, telefone, selectsexo, endereco, numero, 
                nome_responsavel, cpf_responsavel, rg_responsavel, parentesco_responsavel, telefone_responsavel, ocupacao_responsavel,
                DataNascimentoResponsavel);
            if (data.AttCadastro) {
                setAttCadastro(data.AttCadastro);
                return true;
            }
            return false;
        }

    const registernovo = async (datecadastro: Date, nome: string, cpfForm: string, cartao_sus: string, rg: string, telefone: string, data_nascimento: Date, email: string, ocupacao: string, 
        sexo: string, endereco: string, municipio: string, numero: string, tipo_atendimento: string, diagnostico: string,
        outras_formas_dm: string, data_diagnostico: Date, gestante: string, semanas_gestacao: Number, amamentando: string, tempo_pos_parto: Number, deficiencia: string, tipo_deficiencia: string, 
        historico_dm1: string, parentesco_dm1: string, historico_dm2: string, parentesco_dm2: string, historico_outras_formas_dm: string, parentesco_outras_formas_dm: string, metodo_insulina: string, marca_modelo_bomba: string, 
        metodo_monitoramento_glicemia: string, marca_modelo_glicometro_sensor: string, uso_app_glicemia: string, outros_apps: string, nome_responsavel: string, cpf_responsavel: string, rg_responsavel: string, parentesco_responsavel: string, 
        telefone_responsavel: string, ocupacao_responsavel: string, data_nascimento_responsavel: Date, anexar: Blob, auxilio: string, outros_auxilios: string, possui_celular_com_acesso_a_internet: string, idLogin:Number) => {
        const data = await api.registernovo(datecadastro, nome, cpfForm, cartao_sus, rg, telefone, data_nascimento, email, ocupacao, sexo, endereco, municipio, numero, tipo_atendimento,
            diagnostico, outras_formas_dm, data_diagnostico, gestante, semanas_gestacao, amamentando, tempo_pos_parto, deficiencia, tipo_deficiencia, historico_dm1, parentesco_dm1, historico_dm2, parentesco_dm2, historico_outras_formas_dm, parentesco_outras_formas_dm , metodo_insulina, 
            marca_modelo_bomba, metodo_monitoramento_glicemia, marca_modelo_glicometro_sensor, uso_app_glicemia, outros_apps, nome_responsavel, cpf_responsavel, rg_responsavel, parentesco_responsavel , telefone_responsavel, ocupacao_responsavel, data_nascimento_responsavel , anexar, auxilio, outros_auxilios, possui_celular_com_acesso_a_internet, idLogin);
        if (data.NovoCadastro) {
            setNovoCadastro(data.NovoCadastro);
            return true;
        }
        return false;
    }

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            window.location.reload();
            return true;
        }
        return false;
    }

    const signout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setToken('');
        window.location.reload();
        await api.logout();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout, register, registernovo, atualizar, update, agendar }}>
            {children}
        </AuthContext.Provider>
    );
}