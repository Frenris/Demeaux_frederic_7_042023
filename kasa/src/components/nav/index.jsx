import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    padding: 0rem 0rem;
  }
`
const NavLink = styled.a`
  position: relative;
  margin-left: 30px;
  text-decoration: none;
  font-size: 24px;
  color: ${colors.primary};
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    transition: all 0.3s ease-out;
    background-color: ${colors.primary};
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
  &:hover:before,
  &:hover:after {
    width: 50%;
  }

  @media (max-width: 768px) {
    text-transform: uppercase;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-left: 25px;
  }
`

const Navigation = () => {
  return (
    <NavWrapper>
      <NavLink href="/">Accueil</NavLink>
      <NavLink href="/about">A propos</NavLink>
    </NavWrapper>
  )
}

export default Navigation
