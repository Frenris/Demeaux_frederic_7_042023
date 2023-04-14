import styled from 'styled-components'
import colors from '../../utils/style/colors'
import aboutData from '../../datas/aboutData'
import React, { useState } from 'react'
import UpArrowImg from '../../assets/UpArrow.svg'
import DownArrowImg from '../../assets/DownArrow.svg'

const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
`
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 24px;
  cursor: pointer;
`

const CollapseContentWrapper = styled.div`
  position: relative;
  top: -10px;
  width: 100%;
  z-index: -1;
  ${'' /* background: ${colors.xxxxx}; */}
`
const TextContent = styled.p`
  font-weight: 400;
  font-size: 24px;
  ${'' /* color:${colors.xxxxx}; */}
`
const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: cover;
`

const AboutCollapse = () => {
  const [activeIndexes, setActivesIndexes] = useState([])

  const collapseContent = (index) => {
    setActivesIndexes((activeIndexes) => {
      const indexIsOpen = activeIndexes.includes(index)
      return indexIsOpen
        ? activeIndexes.filter((i) => i !== index)
        : [...activeIndexes, index]
    })
  }

  const content = (title) => {
    switch (title) {
      case 'Fiabilité':
        return aboutData.fiabilite
      case 'Respect':
        return aboutData.respect
      case 'Service':
        return aboutData.service
      case 'Sécurité':
        return aboutData.securite
      default:
        return ''
    }
  }
  const CollapseSection = ({ title, index }) => (
    <>
      <TextWrapper onClick={() => collapseContent(index)}>
        {title}
        <ArrowIcon
          src={activeIndexes.includes(index) ? UpArrowImg : DownArrowImg}
          alt={
            activeIndexes.includes(index)
              ? 'Icône flèche du haut'
              : 'Icône flèche du bas'
          }
        />
      </TextWrapper>
      {activeIndexes.includes(index) && (
        <CollapseContentWrapper>
          <TextContent>{content(title)}</TextContent>
        </CollapseContentWrapper>
      )}
    </>
  )

  return (
    <AboutWrapper>
      <CollapseSection title="Fiabilité" index={0} />
      <CollapseSection title="Respect" index={1} />
      <CollapseSection title="Service" index={2} />
      <CollapseSection title="Sécurité" index={3} />
    </AboutWrapper>
  )
}

export default AboutCollapse
