import React from "react";
import * as C from './style'

export default function Title({ children, name }){
    return(
        <C.Container>
            { children }
            <C.Title>{name}</C.Title>
        </C.Container>
    )
}