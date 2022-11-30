import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary2: #FF427F;
        --color-primary-negative: #59323F;

        --color-gray4: #121214;
        --color-gray3: #212529;
        --color-gray2: #343B41;
        --color-gray1: #868E96;
        --color-gray0: #F8F9FA;
        --color-white:#fff;

        --color-sucess:#3FE864;
        --color-negative:#E83F5B;

        --font-size1: 2.3rem;
        --font-size2: 1.375rem;
        --font-size3: 1.125rem;
        --font-size4: 1rem;
        --font-size5: 0.875rem;
        --font-size6: 0.75rem;
    }

body {
    margin: 0 ;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--color-gray4);
}
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
`

