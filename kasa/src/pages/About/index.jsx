import BannerAbout from '../../components/BannerAbout'
import styled from 'styled-components'
import React from 'react'
import AboutCollapse from '../../components/aboutCollapse'

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 6rem;
`

const About = () => {
  return (
    <AboutWrapper>
      <BannerAbout />
      <AboutCollapse />
    </AboutWrapper>
  )
}

export default About
