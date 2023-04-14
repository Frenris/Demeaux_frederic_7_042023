import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/logo.png'
import Navigation from '../nav'

const HeaderLogo = styled.img`
  height: 50px;
`
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  padding: 2vw;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  width: 93vw;
`

const Header = () => {
  return (
    <NavContainer>
      <LogoWrapper>
        <HeaderLogo src={logo} alt="Logo de Kasa" />
      </LogoWrapper>
      <Navigation />
    </NavContainer>
  )
}

export default Header
