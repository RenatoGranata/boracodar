import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: linear-gradient(180deg, ${props => props.theme["purple-lineargradient01"]} 0%, ${props => props.theme["purple-lineargradient02"]} 100%);

        display: flex;
        align-items: center;
        justify-content: center;

        height: 100vh;

        font-family: 'Rubik', sans-serif;
    }

`