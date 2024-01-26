import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: kanit;
    }
    body{
        background: linear-gradient(
            to right,
            #131616,
            #2B2D2D,
            #000000
        );
        color: white;
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle />;
}

export default GlobalStyle;