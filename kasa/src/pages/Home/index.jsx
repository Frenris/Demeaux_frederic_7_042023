import React from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  padding: 0 6rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 2rem;
  }
`

function Home() {
  return (
    <HomeWrapper>
      <Banner />
      <Card />
    </HomeWrapper>
  )
}

export default Home
