import { useState, useContext } from 'react';

import * as C from './style'
import logo from '../../assets/logocortado.png'

import {AuthContext} from '../../contexts/auth'

import { Link } from 'react-router-dom';

export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    

    async function handleSignUp(e){
        e.preventDefault();

        if(email !== '' && password !== '' && name !== ''){
           await signUp(email, password, name);
        }
    }


    return(
        <C.Container>
            <C.SignUp>
                <C.SignUpArea>
                 <C.Logo src={logo} alt="Logo do sistema de chamados" />   
                </C.SignUpArea>

                <C.Form onSubmit={handleSignUp}>
                    <C.Title>Registrar</C.Title>
                    <C.Input 
                        type='text'
                        placeholder='digite seu nome'
                        onChange={ (e) => setName(e.target.value) }
                        value={name}
                    />
                    <C.Input 
                        type='text'
                        placeholder='digite seu e-mail'
                        onChange={ (e) => setEmail(e.target.value) }
                        value={email}
                    />
                    <C.Input 
                        type='password'
                        placeholder='digite sua senha'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <C.SignUpButton type='submit'>
                        {loadingAuth ? 'Carregando...' : 'Cadastrar'}
                    </C.SignUpButton>
                </C.Form>

                <Link to="/">Já possui uma conta? faça o login</Link>
            </C.SignUp>
        </C.Container>
    )
}