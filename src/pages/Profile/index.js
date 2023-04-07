import { useContext, useState } from "react"

import { db, storage } from '../../services/firebaseConnection'
import { doc, updateDoc} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import Header from "../../components/Header"
import Title from "../../components/Title"
import avatar from '../../assets/avatar.png'

import { AuthContext } from '../../contexts/auth'

import * as C from './styles'
import { FiSettings, FiUpload } from 'react-icons/fi'
import { toast } from 'react-toastify'



export default function Profile(){    

    const { user, storageUsuer, setUser, logout } = useContext(AuthContext);

    const[avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null);

    const[name, setName] = useState(user && user.name);
    const[email, setEmail] = useState( user && user.email);

    function handleFile(e){
        
        if(e.target.files[0]){
            const image = e.target.files[0];

            if(image.type ==='image/jpeg' || image.type === 'image/png'){
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(image));
            }else{
                alert("evie uma imagem do tipo png ou JPEG");
                setImageAvatar(null);
                return;
            }
        }
    }

    async function handleUpload(){
        const currentUid = user.uid;

        const uploadRef = ref(storage, `images/${currentUid}/${imageAvatar.name}`);

        const uploadTask = uploadBytes(uploadRef, imageAvatar)
        .then((snapshot)=>{
            
            getDownloadURL(snapshot.ref).then( async (downloadURL) => {
                let urlFoto = downloadURL;

                const docRef = doc(db, "users", user.uid)
                await updateDoc(docRef, {
                    avatarUrl: urlFoto,
                    name: name,
                })
                .then(()=>{
                    let data = {
                        ...user,
                        name: name,
                        avatarUrl: urlFoto,
                    }
                    toast.success("Atualizado com sucesso");                     
                    setUser(data);
                    storageUsuer(data);                    
                })
            })
        })
    }

    async function handleSubmit(e){
        e.preventDefault();

        if(imageAvatar === null && name !== ''){
            //atualizar apenas o nome
            const docRef = doc(db, "users", user.uid);
            await updateDoc(docRef, {
                name: name,
            })
            .then(()=>{
                let data = {
                    ...user,
                    name: name,
                }
                toast.success("Atualizado com sucesso");
                setUser(data);
                storageUsuer(data);     
            })
        }else if(name !== '' && imageAvatar !== null){
            //atualizar nome e foto
            handleUpload();
        }
       
    }

    return(
        <>           
            <Header /> 
            <C.Content>
                <Title name="Minha Conta">
                    <FiSettings size={25} />
                </Title>

                <C.Container>
                    <C.Form onSubmit={handleSubmit} >
                        <C.LabelAvatar>
                            <C.SpanIcon>
                                <FiUpload color="#FFF" size={25}/>
                            </C.SpanIcon>                    

                            {/* para aceitar apenas imagens */}
                            <C.Input type="file" accept="image/*" onChange={handleFile} /><br /> 

                            {avatarUrl === null ? (
                            <C.AvatarImg src={avatar} alt="Foto do perfil" />
                            ) : (
                            <C.AvatarImg src={avatarUrl} alt="Foto do perfil" />
                            )}
                        </C.LabelAvatar>

                        <C.InfoLabel>Nome</C.InfoLabel>
                        <C.InfoInput type="text" value={name} onChange={(e) => setName(e.target.value)} />

                        <C.InfoLabel>Email</C.InfoLabel>
                        <C.InfoInput type="text" value={email} disabled={true} />
                        
                        <C.BtnSave type="submit">Salvar</C.BtnSave>

                    </C.Form>
                </C.Container>                
                <C.Container>
                    <C.LogoutBtn onClick={() => logout()} >Sair</C.LogoutBtn>
                </C.Container>
            </C.Content>
        </>

    )
}