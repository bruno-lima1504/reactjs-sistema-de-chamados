import styled from "styled-components";

export const Content = styled.div `
    margin-left: 200px;
    padding: 16px;

    @media(max-width: 700px){
        margin-left: 0;
    }
`

export const Container = styled.div `
    display: flex;
    align-items: center;
    background-color: #f8f8f8;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 18px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 600px;    
    padding: 5px;
`
export const AvatarImg = styled.img`
    margin-bottom: 20px;
    border-radius: 50%;
    object-fit: cover;
    width: 250px;
    height: 250px;
`

export const LabelAvatar = styled.label`
    width: 280px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SpanIcon = styled.span`
    z-index: 2;
    position: absolute;
    opacity: 0.7;
    transition: all 0.4s;

    :hover{
        opacity: 1;
        transform: scale(1.4);
    }
`

export const Input = styled.input`
    display: none;
`

export const InfoLabel = styled.label`
    margin-bottom: 10px;
    font-size: 25px;
`

export const InfoInput = styled.input`
    margin-bottom: 20px;
    padding: 18px;
    border: 0;
    border-radius: 5px;
    max-width: 600px;

    :disabled{
        cursor: not-allowed;
    }
`

export const BtnSave = styled.button`    
    height: 35px;
   border-radius: 4px;
    border: 0;
    background-color: #181c2e;
    color: #FFF;
    font-size: 25px; 
`
export const LogoutBtn = styled.button`
    padding: 8px 20px;
    border: 1px solid #121212;
    background-color: transparent;
    border-radius: 5px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`



