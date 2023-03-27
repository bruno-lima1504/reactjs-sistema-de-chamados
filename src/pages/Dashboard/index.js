import React, { useContext, useState, useEffect, cloneElement } from "react";

import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";
import {collection, getDocs, orderBy, limit, startAfter, query} from 'firebase/firestore';
import { db } from "../../services/firebaseConnection";

import Header from "../../components/Header";
import Title from "../../components/Title";

import * as C from './style'
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";
import { format } from 'date-fns' 

const listRef = collection(db, "chamados")

export default function DashBoard(){    

    const [chamados, setChamados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);    
    const [lastDocs, setLastDocs] = useState();
    const[loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        async function loadChamados(){
            const q = query(listRef, orderBy('created', 'desc'), limit(5));
            const querySnapshot = await getDocs(q);
            setChamados([]);
            await updateState(querySnapshot);
            setLoading(false);
        }

        loadChamados();


        return () => { }
    },[])

    async function updateState(querySnapshot){
        const isCollectionEmpty = querySnapshot.size === 0;

        if(!isCollectionEmpty){
            let list = [];
            querySnapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    subject: doc.data().subject,
                    customer: doc.data().customer,
                    customerId: doc.data().customerId,
                    created: doc.data().created,
                    createdFormat: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
                    status: doc.data().status,
                    complement: doc.data().complement,
                })
            })

            const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1] // pegando o último item
            setChamados( chamados => [...chamados, ...list])
            setLastDocs(lastDoc);


        }else{
            setIsEmpty(true);            
        }

        setLoadingMore(false);
    }

    async function handleMore(){
        setLoadingMore(true);

        const q = query(listRef, orderBy('created', 'desc'), startAfter(lastDocs), limit(5));

        const querySnapshot = await getDocs(q);
        await updateState(querySnapshot);
    }

    if(loading){
        return(
            <div>
                <Header />
                <C.Content>
                    <Title name="Tickets">
                        <FiMessageSquare size={25} />
                    </Title>
                    <C.Container>
                        <span>Buscando Chamados...</span>
                    </C.Container>
                </C.Content>
            </div>
        )
    }

    return(
        <>
            <Header />
            <C.Content>
                <Title name="Tickets">
                    <FiMessageSquare size={25} />
                </Title>
                <>
                { chamados.length === 0 ? (
                    <C.Container>
                        <span>Nenhum chamado encontrado...</span>
                        <Link to="/new">
                            <FiPlus color="#FFF" size={25} />
                            Novo Chamado
                        </Link>
                    </C.Container>
                ) :  (
                    <>
                        <Link to="/new">
                            <FiPlus color="#FFF" size={25} />
                            Novo Chamado
                        </Link>
                            <C.Table>
                                <thead>
                                    <tr>
                                        <th scope="col" >Cliente</th>
                                        <th scope="col" >Assunto</th>
                                        <th scope="col" >Status</th>
                                        <th scope="col" >Cadastrado em</th>
                                        <th scope="col" >#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {chamados.map((item, index)=> {
                                        return(
                                            <tr key={index}>
                                            <td dataLabel="Cliente">{item.customer}</td>
                                            <td dataLabel="Assunto">{item.subject}</td>
                                            <td dataLabel="Status">
                                                <C.Span bgColor={item.status}>
                                                    {item.status}
                                                </C.Span>
                                            </td>
                                            <td dataLabel="Cadastrado">{item.createdFormat}</td>
                                            <td dataLabel="#">
                                                <Link bgColor="#3583f6">
                                                    <FiSearch color="#FFF" size={17}/>
                                                </Link>
                                                <Link to={`/new/${item.id}`} bgColor="#F6A935">
                                                    <FiEdit2 color="#FFF" size={17}/>
                                                </Link>
                                            </td>
                                        </tr> 
                                        )
                                    })}
                                </tbody>
                            </C.Table>
                            {loadingMore && <h3>Buscando mais chamados...</h3>}
                            {!loadingMore && !isEmpty && <C.MoreBtn onClick={handleMore}>Buscar mais</C.MoreBtn>}                              
                            
                    </>
                )}
            </>
            </C.Content>           
        </>
    )
}

