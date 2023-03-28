import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;    

    p{
        padding-top: 0.5em;
        white-space: pre-wrap;
        line-height: 150%;
    }
`

export const Container = styled.div `
   position: fixed;
   max-width: 600px;
   top: 15%;
   right: 0;
   left: 0;
   margin: 0 auto;
   border-radius: 10px;
   padding: 4em 2em;
   background-color: #FFF;
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
`

export const ModalTitle = styled.h2`
    margin-bottom: 1.2em;
`

export const Button = styled.button`
    background-color: #F65835;
    border-radius: 5px;
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 15px;
    color: #fff;

    svg{
        margin-right: 5px;
    }
`

export const Main = styled.main `

`
export const Row = styled.div `
    margin-bottom: 1em;
`
export const Span = styled.span `
    font-weight: bold;
    font-size: 1.1em;

    i{
        font-weight: 400;
        margin-right: 1.0em;
        padding: 2px 8px;
        margin-left: 5px;
        border-radius: 5px;
    }
`

