import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #999;
    padding: 0 12px;
`

export const SignUp = styled.div`
    background-color: #EAEAEC;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: 3px 3px 10px #000;

    a{
        margin-bottom: 1.5rem ;
        color: #000;
        cursor: pointer;
        :hover{
            color: #0296DE;
        }
    }
`

export const SignUpArea = styled.div`
    background-color: #181c2e;
    width: 100%;
    display: flex;
    justify-content: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

export const Logo = styled.img`
    width: 250px;    
    padding: 20px;
`

export const Form = styled.form`
    margin-top: 1.5rem;
    width: 90%;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 1rem;
    color: #181c2e;
`
export const Input = styled.input`
    margin-bottom: 1rem;
    height: 35px;
    border-radius: 4px;
    border: 0;
    padding: 10px;
    font-size: 15px;
    background-color: #FFF;
`

export const SignUpButton = styled.button`
    margin-bottom: 1rem;
    height: 35px;
    border-radius: 4px;
    border: 0;
    background-color: #181c2e;
    color: #FFF;
    font-size: 1.3rem;
    box-shadow: 3px 3px #000; 

    :active{
        box-shadow: 0px 0px ;
        transform: translate(5px, 5px)             
    }
`