import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'
import AppartmentsDatas from '../../datas/appartments.json'

const AppartmentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 768px) {
    margin: 20px 0px;
    height: 255px;
  }
`

const AppartmentImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(80%);
  @media (max-width: 768px) {
    width: 100%;
    height: 255px;
  }
`

const AppartmentTitle = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  margin: 0;
  font-style: normal;
  color: ${colors.gridBackgroundLight};
  font-weight: 500;
  font-size: 18px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 25px;
  gap: 50px;
  background: ${colors.gridBackgroundLight};
  @media (max-width: 768px) {
    padding: 0px;
    gap: 0px;
    background: ${colors.tertiary};
  }
`

const CardContainer = styled.div`
  flex: 0 0 340px;
  margin: 56px 20px;
  min-width: 250px;
  @media (max-width: 768px) {
  flex: 0px;
  margin: 0px;
  }
  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const Appartments = ({ logement }) => {
  return (
    <Link to={`/grid/${logement.id}`} style={{ textDecoration: 'none' }}>
      <AppartmentWrapper>
        <AppartmentImage src={logement.cover} alt="Photo vitrine" />
        <AppartmentTitle>{logement.title}</AppartmentTitle>
      </AppartmentWrapper>
    </Link>
  )
}

const Card = () => {
  return (
    <CardWrapper>
      {AppartmentsDatas.map((logement) => (
        <CardContainer key={logement.id}>
          <Appartments logement={logement} />
        </CardContainer>
      ))}
    </CardWrapper>
  )
}

export default Card
