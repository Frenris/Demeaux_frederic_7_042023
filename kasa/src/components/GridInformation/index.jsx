import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import AppartementsDatas from '../../datas/appartments.json'
import HostInfo from '../Host/index'
import StarInfo from '../Rating/index'
import TagInfo from '../Tag/index'
import colors from '../../utils/style/colors'

const GridWrapper = styled.div`
  display: flex;
  margin: 0px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftSection = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width:100%;
  }
`

const TitleWrapper = styled.div`
  width: 100%;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  color: ${colors.primary};
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Location = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${colors.primary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const RightSection = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row-reverse;
  }
`

const GridInfo = () => {
  const { idGrid } = useParams()
  const logement = AppartementsDatas.find((product) => product.id === idGrid)
  const { title } = logement
  const { location } = logement

  return (
    <GridWrapper>
      <LeftSection>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <Location>{location}</Location>
        <TagInfo />
      </LeftSection>

      <RightSection>
        <HostInfo />
        <StarInfo />
      </RightSection>
    </GridWrapper>
  )
}

export default GridInfo
