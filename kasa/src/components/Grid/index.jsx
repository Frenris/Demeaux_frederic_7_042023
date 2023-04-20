import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import AppartmentsDatas from '../../datas/appartments.json'
import Error from '../../pages/404/index'
import GridInformation from '../GridInformation/index'
import GridCollapse from '../GridCollapse/index'
import Caroussel from '../Caroussel/index'

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 6rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

const Grid = () => {
  const { idGrid } = useParams()

  const logement = AppartmentsDatas.find(
    (logement) => logement.id === idGrid
  )

  if (!logement) {
    return <Error />
  }

  return (
    <GridContainer>
      <Caroussel />
      <GridInformation />
      <GridCollapse />
    </GridContainer>
  )
}

export default Grid
