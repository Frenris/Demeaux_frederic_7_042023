import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import AppartementsDatas from '../../datas/appartments.json'
import Tag from '../Tag/index'
import Host from '../Host/index'
import Rating from '../Rating/index'

const LocationWrapper = styled.div`
 
`

const GridInformation = () => {

  const { idGrid } = useParams()
    const logement = AppartementsDatas.find((product) => product.id === idGrid)
    const { title } = logement
    const { location } = logement
  
    return (
      <GridInformation>
        <LocationWrapper>
          { title }
          { location }
        </LocationWrapper>
        <Tag />
        <Host />
        <Rating />
      </GridInformation>
    )
  }
  
  export default GridInformation