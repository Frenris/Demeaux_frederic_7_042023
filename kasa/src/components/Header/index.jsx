import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import Navigation from '../nav'

const HeaderLogo = styled.img`
  height: 68px;

  @media screen and (width <= 768px) {
    height: 47px;
    }
`
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 6rem;
  position: relative;

  @media screen and (width <= 768px) {
    padding: 1.5rem 1rem;
    }
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
