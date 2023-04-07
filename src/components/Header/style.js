import styled from "styled-components";
import bgImg from '../../assets/cover.png'

export const SideBar = styled.div`
    margin: 0;
    padding: 0;
    background-color: #181c2e;
    position: fixed;
    height: 100%;
    width: 200px;
    overflow: auto;    

    a{
        display: block;
        padding: 16px;
        display: flex;
        color: rgba(255, 255, 255, 0.7);
        flex-direction: row;
        align-items: center;
    }

    a svg{ 
        margin-right: 10px;
    }

    a:hover{
        background-color: #121212;
        color: #FFF;
    }

    @media (max-width: 700px){
        width: 100%;
        height: auto;
        position: relative;

        a {
            float: left;
        }
    }
`

export const ImgsContainer = styled.section`    
    background: url(${bgImg});
    background-color: #181c2e;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px;

    @media (max-width: 700px){
        display: none;
    }
        
`

export const Img = styled.img `
    width: 90px;
    height: 90px;
    display: block;
    margin: auto;
    border-radius: 50%;
    object-fit: cover;
    filter: drop-shadow(2px 3px 6px #121212);
    -webkit-filter: drop-shadow(2px 3px 6px #121212);
`



export const LogoutBtn = styled.button`
    padding: 5px 20px;
    border: 1px solid #121212;
    background-color: #FA998D;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-top: 20px;
    transition: all 0.2s;

    :hover{
        color: red;
        background: #C9C9C9;
    }
`

