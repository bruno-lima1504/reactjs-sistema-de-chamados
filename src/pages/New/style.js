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
export const Label = styled.label`
    margin-bottom: 10px;
    font-size: 25px;
`
export const Select = styled.select`
    margin-bottom: 20px;
    padding: 18px;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
`
export const Input = styled.input`
    margin-bottom: 20px;
    padding: 18px;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
`

export const InputRadio = styled.input`
    margin: 15px 0;
    
    :not(:first-child){
        margin-left: 15px;
    }

`
export const StatusConttainer = styled.div`
    margin-bottom: 15px;
`

export const BtnSave = styled.button`    
    height: 35px;
   border-radius: 4px;
    border: 0;
    background-color: #181c2e;
    color: #FFF;
    font-size: 25px; 
`
export const TextArea = styled.textarea`
    resize: none;
    height: 105px;
    margin-bottom: 10px;
    padding: 18px;
    border-radius: 5px;
    border: none;
`
export const Span = styled.span`
    padding-left: 0.5em;
`