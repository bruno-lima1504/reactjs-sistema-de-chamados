import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { useParams, useNavigate } from "react-router-dom";

import Header from '../../components/Header'
import Title from '../../components/Title'

import { db } from "../../services/firebaseConnection";
import { collection, getDocs, getDoc, doc, addDoc, updateDoc } from "firebase/firestore";

import * as C from './style'
import { FiPlusCircle } from "react-icons/fi";
import { toast } from "react-toastify";

const listRef = collection(db, "costumers")

export default function New(){
    const { user } = useContext(AuthContext);
    const { id } = useParams()
    const navigate = useNavigate();

    const [customers, setCustomers] = useState([]);
    const [loadCustomer, SetLoadCustomer] = useState(true);
    const [customerSelected, setCustomerSelected] = useState(0);

    const [complement, setComplement] = useState('');
    const [subject, setSubject] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [idCustomer, setIdCustomer] = useState(false)

    useEffect(()=>{
        async function loadCustomers(){
            const querySnapshot = await getDocs(listRef)
            .then((snapshot) => {   
                let list = [];

                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        fantasyName: doc.data().fantasyName
                    })
                })
                if(snapshot.docs.size === 0){
                    console.log("NENHUMA EMPRESA ENCONTRADA");
                    setCustomers([{id: 1, fantasyName: 'Freela' }]);
                    SetLoadCustomer(false);
                    return;
                }

                setCustomers(list);
                SetLoadCustomer(false)

                if(id){
                    loadId(list);
                }
            })
            .catch((error)=>{
                console.log("ERRO AO BUSCAR OS CLIENTES", error)
                SetLoadCustomer(false);
                setCustomers([{id: 1, fantasyName: 'Freela' }]);
            })
        }
        loadCustomers();
    },[id])

    async function loadId(list){
        const docRef = doc(db, "chamados", id);
        await getDoc(docRef)
        .then((snapshot) => {
            setSubject(snapshot.data().subject)
            setStatus(snapshot.data().status)
            setComplement(snapshot.data().complement)

            let index = list.findIndex(item => item.id === snapshot.data().customerId);
            setCustomerSelected(index);
            setIdCustomer(true);
        })
        .catch((error)=>{
            console.log(error);
            setIdCustomer(false);
        })
    }

    function handleOptionChange(e){
        setStatus(e.target.value)

    }

    function handleChangeSelect(e){
        setSubject(e.target.value)
    }

    function handleCustomerChange(e){
        setCustomerSelected(e.target.value)
    }

    async function handleRegister(e){
        e.preventDefault()

        if(idCustomer){
            //atualizando chamado
            const docRef = doc(db, "chamados", id)
            await updateDoc(docRef, {                
                customer: customers[customerSelected].fantasyName,
                customerId: customers[customerSelected].id,
                subject: subject,
                complement: complement,
                status: status,
                userId: user.uid,
            })
            .then(() => {
                toast.info("Chamado atualizado com sucesso")
                setCustomerSelected(0);
                setComplement('');
                navigate('/dashboard')
            })
            .catch((error) => {
                toast.error("Ops erro ao atualizar esse chamado!")
                console.log(error);
            })


            return;
        }

        //Registrar chamdo
        await addDoc(collection(db, "chamados"), {
            created: new Date(),
            customer: customers[customerSelected].fantasyName,
            customerId: customers[customerSelected].id,
            subject: subject,
            complement: complement,
            status: status,
            userId: user.uid,
        })
        .then(() => {
            toast.success("Chamado Registrado")
            setComplement('');
            setCustomerSelected(0);
        })
        .catch((error) => {
            toast.error("Ops error ao registrar!")
            console.log(error)
        })
    }

    return(
        <>
            <Header />

            <C.Content>
                <Title name={id ? "Editando Chamado" : 'Novo Chamado'}>
                    <FiPlusCircle size={25} />
                </Title>
                <C.Container>
                    <C.Form onSubmit={handleRegister}>
                        <C.Label>Clientes</C.Label>
                        {
                            loadCustomer ? (
                                <C.Input type="text" disable={true} value="Carregando" />
                            ) : (
                                <C.Select value={customerSelected} onChange={handleCustomerChange}>
                                    {
                                        customers.map((item, index) => {
                                            return(
                                                <option key={index} value={index}>
                                                    {item.fantasyName}
                                                </option>
                                            )
                                        })
                                    }
                                </C.Select>
                            )
                        }
                        <C.Label>Assunto</C.Label>
                        <C.Select value={subject} onChange={handleChangeSelect}>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Técnica">Visita Técnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </C.Select>

                        <C.Label>Status</C.Label>
                        <C.StatusConttainer>
                            <C.InputRadio 
                                type="radio"
                                name="radio"
                                value="Aberto"
                                onChange={handleOptionChange}
                                checked={ status === 'Aberto' }
                            />
                            <C.Span>Em Aberto</C.Span>

                            <C.InputRadio 
                                type="radio"
                                name="radio"
                                value="Progresso"
                                onChange={handleOptionChange}
                                checked={ status === 'Progresso' }
                            />
                            <C.Span>Progresso</C.Span>

                            <C.InputRadio 
                                type="radio"
                                name="radio"
                                value="Finalizado"
                                onChange={handleOptionChange}
                                checked={ status === 'Finalizado' }
                            />
                            <C.Span>Finalizado</C.Span>
                        </C.StatusConttainer>
                        <C.Label>Complemento</C.Label>
                        <C.TextArea 
                            type="text"
                            placeholder="Descreva seu problema (opcional)."
                            value={complement}
                            onChange={(e) => setComplement(e.target.value)}
                        />
                        <C.BtnSave>
                            Registrar
                        </C.BtnSave>
                    </C.Form>
                </C.Container>
            </C.Content>
        </>
    )
}