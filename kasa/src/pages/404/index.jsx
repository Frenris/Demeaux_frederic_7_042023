import colors from '../../utils/style/colors'
import styled from 'styled-components'

const ErrorWrapper = styled.div``

const ErrorTitle = styled.h1`
  font-weight: 700;
  font-size: 288px;
  text-align: center;
  color: ${colors.primary};
  margin: 80px 0 0 0;

  @media (max-width: 480px) {
    font-size: 96px;
  }
`

const ErrorContent = styled.p`
  font-weight: 500;
  font-size: 36px;
  text-align: center;
  color: ${colors.primary};

  @media (max-width: 480px) {
    margin: 0 85px;
    font-size: 18px;
    width: 55%;
  }
`

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`

const NavLink = styled.a`
  display: inline;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 30px;
  margin: 180px 0 120px 0;
  text-decoration: none;
  font-size: 20px;
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

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorContent>Oups! La page que vous demandez n'existe pas.</ErrorContent>
      <NavContainer>
        <NavLink href="/">Retourner sur la page d’accueil</NavLink>
      </NavContainer>
    </ErrorWrapper>
  )
}

export default Error
