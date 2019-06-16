import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        @import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");
        font-family: "Varela Round", sans-serif;
        font-size: 14px;
        background: #7159C1;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    html, border-style, #root {
        height: 100%;
    }
`;