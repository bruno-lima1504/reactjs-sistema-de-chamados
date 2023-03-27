import { useContext } from 'react'

import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth'

import * as C from './style'
import avatarImg from '../../assets/avatar.png'
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

export default function Header(){
    const { user } = useContext(AuthContext);

    return(
        <C.SideBar>
            <C.ImgsContainer>
                <C.Img src={user.avatarUrl === null ? avatarImg : user.avatarUrl } alt="foto do usuário"  />
            </C.ImgsContainer>

            <Link to="/dashboard">
                <FiHome color="#FFF" size={24} />
                Chamados
            </Link>
            <Link to="/costumers">
                <FiUser color="#FFF" size={24} />
                Clientes
            </Link>
            <Link to="/profile">
                <FiSettings color="#FFF" size={24} />
                Perfil
            </Link>
        </C.SideBar>
    )
}