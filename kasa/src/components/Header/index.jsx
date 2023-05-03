import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import Navigation from '../nav'

const HeaderLogo = styled.img`
  height: 68px;

  @media (max-width: 480px) {
    height: 47px;
    width: 145px;
  }
`
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    padding: 0rem 0rem;
  }
`

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 6rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1.5rem;
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
