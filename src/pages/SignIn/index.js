import { useState, useContext } from 'react'

import * as C from './style'
import logo from '../../assets/logocortado.png'

import { AuthContext } from '../../contexts/auth'

import { Link } from 'react-router-dom';


export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleSignIn(e){
        e.preventDefault();

        if(email !== '' && password !== ''){
            signIn(email, password);
        }
    }


    return(
        <C.Container>
            <C.Login>
                <C.LoginArea>
                 <C.Logo src={logo} alt="Logo do sistema de chamados" />   
                </C.LoginArea>

                <C.Form onSubmit={handleSignIn}>
                    <C.Title>Entrar</C.Title>
                    <C.Input 
                        type='text'
                        placeholder='digite seu e-mail'
                        onChange={ (e) => setEmail(e.target.value) }
                        value={email}
                        required={true}
                    />
                    <C.Input 
                        type='password'
                        placeholder='digite sua senha'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required={true}
                    />
                    <C.LoginButton type='submit'>
                        {loadingAuth ? "Carregando..." : "Acessar"}
                    </C.LoginButton>
                </C.Form>

                <Link to="/register">Criar uma conta</Link>
            </C.Login>
        </C.Container>
    )
}