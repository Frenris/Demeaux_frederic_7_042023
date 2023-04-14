import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
    }
    body {
        padding: 0;
        margin: 0;
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle