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
  margin: 30px 0 0;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  @media (max-width: 480px) {
    flex-direction: column;
    margin: 15px 0 0;
  }
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 50px;
  @media (max-width: 768px) {
    margin-right: 25px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    margin: 0px;
    padding: 0px;
  }
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 45px;
  line-height: 52px;
  color: ${colors.primary};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 20px;
  }
`

const Location = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${colors.primary};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1465px) {
    align-items: center;
    margin-top: 0px;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
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
