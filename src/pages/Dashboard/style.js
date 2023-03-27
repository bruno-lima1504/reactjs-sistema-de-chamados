import styled from "styled-components";

export const Content = styled.div `
    margin-left: 200px;
    padding: 16px;

    a {
        float: right;
        margin-bottom: 1.5em;
        background-color: #83bf02;
        padding: 0.5em;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        font-weight: 600;
        color: #fff;
        transition: ease-in-out 0.2s;

        :hover{
            background-color: #5fd204;
            transform: scale(1.1);
        }

        svg{
            margin-right: 5px;
        }
    }

    @media(max-width: 700px){
        margin-left: 0;
    } 
`

export const Span = styled.span`
    background-color: red;
    padding: 3px;
    border-radius: 3px;
    background-color: ${props => props.bgColor === 'Aberto' ? '#5fd204' : '#999'};
`
export const Table = styled.table`
    border: 1px solid #ccc;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    a{
        border: 0;
        padding: 5px;
        border-radius: 4px;
        display: inline-block;
        margin-right: 5px;    
        background-color: ${props => props.bgColor};
    
    svg{
        vertical-align: middle;
    } 
    }
   

    caption{
        font-size: 1.5em;
        margin: 0.5em 0 0.75em
    }

    tr{
        background-color: #F8F8F8;
        border: 1px solid #DDD;
        padding: 0.35em;
    }

    td, th{
        padding: 0.60em;
        text-align: center;
    }

    th{
        font-size: 0.85em;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    } 

    td {
        border-bottom: 1px solid;      
    }

    @media(max-width: 600px){
        border: 0;

        caption {
            font-size: 1.3em;
        }

        thead{
        border: none;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    tr{
        border-bottom: 3px solid #DDD;
        display: block;
        margin-bottom: 0.60em;
    }

    td{
        border-bottom: 1px solid #DDD;
        display: block;
        font-size: 0.8em;
        text-align: right;

        ::before {
            content: attr(dataLabel);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }
    }

    

    } 
`
export const btnTable = styled.button`
  
`
export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 18px;
    span{
        margin: 2em 0;
        font-size: 1.2em;
        font-weight: 600;
    }
`

export const MoreBtn = styled.button`
    margin: 1.5em 0;
    padding: 0.5em 1em;
    background-color: #181c2e;
    border: 0;
    border-radius: 5px;
    font-size: 1.1em;
    color: #FFF;
`
