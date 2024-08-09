import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth/AuthContext";

import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";

import "../styles/Login.css";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/Home');
            } else {
                alert("Email ou senha esta invalido");
            }
        }
    }


    return (
        <div className="login">
            <section>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave"></div>
                <div className="wave wave4"></div>
                <div className="login-right">
                    <h1>Login</h1>
                    <div className="login-loginInputEmail">
                        <MdEmail />
                        <input
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                        />
                    </div>
                    <div className="login-loginInputPassword">
                        <MdLock />
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                        />
                        {auth.user && navigate('/Home')}
                    </div>
                    <div className="Botão">
                        <button className="btn-1" onClick={handleLogin}>
                            Entrar
                        </button>
                    </div>
                    <a href="/">Esqueceu a senha?</a>
                    <div className="img">
                        <div className="cenid">
                            <img src="https://oficial.unimar.br/wp-content/uploads/2022/03/cenid.png" width={100} alt="LogoCenid" ></img>
                        </div>
                        <div className="unimar">
                            <img src="https://oficial.unimar.br/wp-content/uploads/2022/03/unimar.png" width={100} alt="Logo Unimar" ></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


/* export default Login */