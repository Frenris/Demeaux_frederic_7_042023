import styled from 'styled-components'
import colors from "../../utils/style/colors"
import logo from "../../assets/logo_white.png"

const FooterLogo = styled.img`
  width: 100px;
`

const FooterContainer = styled.footer`
  background-color: ${colors.footerBackground};
    color: ${colors.tertiary};
    padding: 20px;
    text-align: center;
    min-height: 100px;
    display: grid;
    place-items: center;
    margin-top: 2rem;
`

function Footer() {
  return (
    <FooterContainer>
        <div>
            <FooterLogo src={logo} alt="logo de Kasa" />
        </div>
        <div>
        © 2020 Kasa. All rights reserved
        </div>
    </FooterContainer>
  )
}

export default Footer