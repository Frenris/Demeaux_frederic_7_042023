import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useParams } from 'react-router-dom'
import AppartmentsDatas from '../../datas/appartments.json'
import React, { useState } from 'react'
import UpArrowImg from '../../assets/UpArrow.svg'
import DownArrowImg from '../../assets/DownArrow.svg'

const AppartmentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`
const CollapseTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 15px;
  background: ${colors.primary};
  color: ${colors.tertiary};
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`

const CollapseTextContent = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: ${colors.primary};
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`

const CollapseDesEquip = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 100%;
  }
`

const CollapseContentWrapper = styled.div`
  position: relative;
  margin-top: -10px;
  padding: 15px;
  z-index: -1;
  background: ${colors.gridBackgroundLight};
  border-radius: 10px;
  min-height: 370px;
  @media (max-width: 768px) {
    min-height: auto;
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`

const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: cover;
`

const Equipements = styled.div`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const Equipement = styled.div`
  margin-bottom: 10px;
`

const AppartmentCollapse = ({ title, children }) => {
  const [activeIndex, setActiveIndex] = useState(false)

  return (
    <div>
        <CollapseTextWrapper onClick={() => setActiveIndex(!activeIndex)}>
          {title}
          <ArrowIcon
            src={activeIndex ? UpArrowImg : DownArrowImg}
            alt="Arrow image collapse"
          />
        </CollapseTextWrapper>
        {activeIndex ? (
          <CollapseContentWrapper>{children}</CollapseContentWrapper>
        ) : null}
    </div>
  )
}

const GridCollapse = () => {
  const { idGrid } = useParams()

  const logement = AppartmentsDatas.find((product) => product.id === idGrid)

  const { description, equipments } = logement

  return (
    <AppartmentWrapper>
      {/*bascule description */}
      <CollapseDesEquip>
        <AppartmentCollapse title="Description">
          <CollapseTextContent>{description}</CollapseTextContent>
        </AppartmentCollapse>
      </CollapseDesEquip>
      {/*bascule équipements*/}
      <CollapseDesEquip>
        <AppartmentCollapse title="Equipements">
          <Equipements>
            {equipments.map((equipment, index) => (
              <Equipement key={index}>
                <CollapseTextContent>{equipment}</CollapseTextContent>
              </Equipement>
            ))}
          </Equipements>
        </AppartmentCollapse>
      </CollapseDesEquip>
    </AppartmentWrapper>
  )
}

export default GridCollapse
