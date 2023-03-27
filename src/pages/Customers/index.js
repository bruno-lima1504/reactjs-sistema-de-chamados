import React, {useState} from "react";

import Header from "../../components/Header";
import Title from '../../components/Title'

import { db } from "../../services/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";

import * as C from './style';
import { FiUser } from 'react-icons/fi';
import { toast } from "react-toastify";


export default function Customers(){
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [address, setAddress] = useState('');

    async function handleRegister(e){
        e.preventDefault()
        
        if(name !== '' && cnpj !== '' && address !== ''){
            await addDoc(collection(db, "costumers"),{
                fantasyName: name,
                cnpj: cnpj,
                address: address
            })
            .then(()=>{
                setName('');
                setCnpj('');
                setAddress('');
                toast.success("Empresa Registrada")
            })
            .catch((error) =>{
                console.log(error)
                toast.error("Cadastro Falhou")
            })
        }else{
            toast.error("Preencha todos os campos")
        }
    }

    return(
        <>
            <Header />
            <C.Content>
                <Title name="Clientes">
                    <FiUser size={25} />
                </Title>

                <C.Container>
                    <C.Form onSubmit={handleRegister}>
                        <C.Label>Nome fantasia</C.Label>
                        <C.Input 
                            type="text"
                            placeholder="Nome da empresa"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <C.Label>CNPJ</C.Label>
                        <C.Input
                            type="text"
                            placeholder="Nome da empresa"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                        />
                        <C.Label>Endereço</C.Label>
                        <C.Input 
                            type="text"
                            placeholder="Nome da empresa"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <C.BtnSave type="submit">
                            Salvar
                        </C.BtnSave>
                    </C.Form>
                </C.Container>
            </C.Content>
        </>
    )
}