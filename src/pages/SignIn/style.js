import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    padding: 0 12px;
`

export const Login = styled.div`
    background-color: #EAEAEC;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    a{
        margin-bottom: 1.5rem ;
        color: #000;
        cursor: pointer;
    }
`

export const LoginArea = styled.div`
    background-color: #181c2e;
    width: 100%;
    display: flex;
    justify-content: center;
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

export const LoginButton = styled.button`
    margin-bottom: 1rem;
    height: 35px;
    border-radius: 4px;
    border: 0;
    background-color: #181c2e;
    color: #FFF;
    font-size: 1.3rem;
`

